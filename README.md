# MSA Gateway RPC

내부 서비스 간의 효율적인 통신을 위함

- 낮은 오버헤드
- ~~URL 관리 불필요~~ (내부 테스트 용으로 관리 필요)

gateway -> rpc -> hello

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
$ nest build gateway

$ nest build hello

$ pm2 start ecosystem.config.js
```
