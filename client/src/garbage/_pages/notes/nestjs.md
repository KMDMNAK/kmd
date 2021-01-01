# [Nestjs](https://docs.nestjs.com/)
```
npm i -g @nestjs/cli
nest new project-name
```

src
- app.controller.ts
- app.module.ts
- main.ts

``` typescript
const interface:INestApplication = NestFactory(INestApplication).create()
```

## Controller
各ルートにcontrollerを一つ割り当て、そのなかでさらにルート分岐を定義していく。
