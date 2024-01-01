# pai-gon

🧼🧼🧼 外接する多角形と内接する多角形の長さから、円周率(π)を求めるプログラムです！  

[![ci](https://github.com/osawa-koki/pai-gon/actions/workflows/ci.yml/badge.svg)](https://github.com/osawa-koki/pai-gon/actions/workflows/ci.yml)
[![cd](https://github.com/osawa-koki/pai-gon/actions/workflows/cd.yml/badge.svg)](https://github.com/osawa-koki/pai-gon/actions/workflows/cd.yml)

## 実行方法

DevContainerに入り、以下のコマンドを実行します！  

```shell
yarn dev
```

Dockerで直接実行する場合は、以下のコマンドを実行します！  

```shell
docker build -t pai-gon .
docker run --rm -p 80:80 -d --name pai-gon pai-gon
```
