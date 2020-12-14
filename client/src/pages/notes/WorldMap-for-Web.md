# フロントエンドで実装する世界地図
Javascriptで実装できる世界地図用のライブラリには、多くの種類がある。
一方で、npmに登録されていなかったり、htmlのscriptタグに直書きする必要があったりと、
モダンとは言い難いものも多い。
ここでは、世界地図用のライブラリをgithub等から探し、それぞれについての概要、使い勝手を紹介していきたい。

____

## 2D

- [WorldMap.js](https://worldmapjs.org/index.html)  
    **scriptタグに直書きする必要がある**

- [d3.js](https://github.com/d3/d3)  
    地図に限らず、jsにおけるdata visualization用ライブラリ。
    界隈だと一番有名な気がする。地図特化だとd3-geoライブラリが公開されている。
    react-simple-mapなど、wrapperも多く存在する。
    [d3のマウス操作について](https://hondou.homedns.org/pukiwiki/pukiwiki.php?HTML%20D3.js%20Geo)
- [j-vectormap](http://jvectormap.com/)
    Reactのwrapperも存在する
    公式サイトの地図がイかしてる.

- [geo-maps](https://github.com/simonepri/geo-maps)  
    gitのスター数は少ないが、npmには登録済み
    GeoJSONに対応
- [quickstart-map-js](https://github.com/Esri/quickstart-map-js)
    直書き?
    描写は美しい
- [Leaflet](https://leafletjs.com)
    言わずと知れたLeaflet。知名度は一番高いのではないでしょうか。
    
- [React-Simple-Map]()
    React用の地図描写ライブラリ。日本語の情報はナッシング


## 3D
### [Cesium.js](https://cesium.com/cesiumjs/)
    WebGLを利用した立体地理描写ライブラリ

## その他
### [mapscii](https://github.com/rastapasta/mapscii)
    console上で世界地図を表現できる。更新は終了した模様

## 参考
[10 open source projects every JavaScript geo dev should know about](https://www.esri.com/arcgis-blog/products/developers/constituent-engagement/10-open-source-projects-every-javascript-geo-dev-should-know-about/)