# 発端
筆者はよく行きつけのカフェでイキりながらWEB開発をしております。

ところが困ったことに、カフェなどで設置されている公共Wifiでは、ルーターの設定で他機の存在が秘匿にされている場合が多いです。（当然pingも打てない）

セキュリティの観点から妥当な処置ではあるのですが、開発しているWEBサイトをスマホで確認する･･･といったことはできません。

対処法として、パソコン自体をルーターにして独自のLANを構築し、端末と通信することがあげられます。

パッと見では難しそうですが、Windowsでは7から**SoftAP**という機能が標準で用意されており、Microsoftが提供している仮想ネットワークアダプタを利用して、パソコンをルーターとして扱うことができるようになります。

そこで今回は、SoftAPを利用してパソコン単体でLANを構築し、Nodeでサーバーを起動、手持ちの端末でLANに接続して、サーバーからレスポンスを受け取ることを目標にします。

# LANの構築
1 . コマンドプロンプトを管理者権限で起動

2 . 以下のコマンドを実行

``` cmd
C: > netsh
netsh > wlan
netsh wlan > set hostednetwork mode=allow ssid=your_ssid key=your_password
```

3 . hostednetworkを起動

```
netsh wlan> start hostednetwork
```

これでうまくいった人はついてます。
筆者の場合は下記のログが出てLANが構築できませんでした。

```
netsh wlan> start hostednetwork
ホストされたネットワークを開始できませんでした。
グループまたはリソースは要求した操作の実行に適切な状態ではありません。
```
主にMicrosoft Hosted Network Virtual Adapterが有効になっていない場合が想定されます。対処法は後ろに載せます。参考に他の記事も載せておくのでそちらもどうぞ。



起動に成功した場合は、LAN内のipアドレスを確認します。

```
> ipconfing
~~
IPv4 アドレス . . . . . . . . . . . .: 192.168.0.1
~~

```

# サーバーの起動
Nodeでサーバーを起動します。

``` js:server.js

const express=require("express");
const app=express()
app.get('/',(req,res)=>{
    res.send(`Hello World!`);
});
app.listen(3000);
```

# 実機で接続

1 . 端末から、上で設定したSSIDにWifiで接続

2 . ブラウザで IPアドレス + ポート にアクセス
(上の例だと192.168.0.1:3000)

うまくHello Worldできてれば成功 !!

これでパソコンで起動したサーバーと端末を、ネット環境に依存せずに接続させることができました。

LANを構築しているパソコンがネットに接続できている場合は、端末がネット上のリソースを要求してもきちっと返してくれます。(というかまんまプロキシなので）

当然ネット環境がないとインターネット上のリソースが必要になるような処理は無理です。

しかし序盤で言ったように、他機の存在が秘匿されているようなLANでは、パソコンがプロキシとなって端末と接続できるようになる、という意味で有用な場面もあるのではないでしょうか。

# (追記)Microsoft Hosted Network Virtual Adapterのインストール
SoftAPではMicrosoftが提供しているMicrosoft Hosted Network Virtual Adapterというネットワークアダプタを利用しています。こちらを用意してあげる必要があります。

1 . 下のコマンドを実行し、ドライバー名を確認する。

```
netsh wlan> show drivers
```
2 . **デバイスマネージャー**を起動し、ネットワークアダプターの欄の中にある、1で確認したドライバー名を右クリック

3 . ドライバーの更新を選択し、コンピューターを参照してドライバーソフトウェアを検索を選択。

4 . コンピューター上の利用可能なドライバーの一覧から選択しますを選択。

5 . **Microsoftのモデルを選択して**※次へ、ドライバーをインストールする。
※筆者の場合は同名のモデルがいくつもでて、順に更新していったら成功しました。

6 . デバイスマネージャーのメニューバーにある表示タブで、非表示のデバイスの表示を選択。ネットワークアダプターの欄にあるであろうMicrosoft Hosted Network Virtual Adapterを有効にする。

これでhostednetworkが起動できるはずです。

# 参考
- [Create Ad Hoc WiFi Hotspot In Windows 10, Here’s How](https://www.redmondpie.com/create-ad-hoc-wifi-hotspot-in-windows-10-heres-how/)

- [Windows 10 PC経由でスマホを無線Wi-Fiでネット接続できない：ホストされたネットワークを開始できませんでした。~SoftAP機能のエラー対策](https://www.billionwallet.com/windows10/softap.html)

- [how to install microsoft hosted network virtual adapter](https://answers.microsoft.com/en-us/windows/forum/all/how-to-install-microsoft-hosted-network-virtual/638f91b9-e546-466d-b491-6db857cf9f3f)