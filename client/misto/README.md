# misto

misto is the framework for creating dynamic articles by nextjs

```
misto --config misto.config.js
```

folderにある基準を満たすファイル(tsx等)のinfoを指定のendpointに飛ばす.

## 仕様(とりあえず)
単一エンドポイントとする。（細かい振り分けをさせたい場合はサーバーにやらせるべし）


misto.config.js
    - entry
      - folder_path
      - exclude
    - output
      - info_format
      - endpoint

