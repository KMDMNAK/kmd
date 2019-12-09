## 導入したライブラリ
- react
- react-dom
- next
- grahql
- apollo-boost
- @apollo/react-hooks

- isomorphic-unfetch
- 
## 入れてはないけど

- graphql-tag
  graphqlの操作(結合等)をラップする

## Next.jsとfetch
nextjs環境下ではfetch libraryとして"isomorphic-unfetch"が利用されることが多い。"axios"等でも代用可能だが、より軽量なunfetchが好まれる.

# 仕様

## upload(update) article|
権利者が記事のjsファイルをpagesに配置。
build
update_article mutationを実行
Apollo serverが、投稿された記事を、rental serverに送信する。（データの加工についてはrental serverに行わせる)

rental serverがdatabaseの更新を行う。
たとえば、記事に含まれる画像や音声データを格納したり、文字データをrenta