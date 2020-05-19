
webpackでbundleした際に、下記のエラーが発生した。
```
ERROR in ./node_modules/graphql/index.mjs
```
webpack.config.jsにおけるresolve.extensionsにおいて、.mjsを.jsより先に記載すると解消した。
[参考](https://github.com/graphql/graphql-js/issues/1272)