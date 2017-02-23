# 學習Docker

從 dockerfile 建立 image
```
# 語法： docker build -t <名字> .
$ docker build -t james/pm2server .
```

重新build
```
$ docker build --rm -t james/pm2 .       
```

直接執行 image
```
$ docker run -it james/pm2
```

# 使用 docker-compose
## build image
由於我們把設定都放在 docker-compose.yml 中，所以不需要額外的設定。
```
$ docker-compose build
```

執行 docker container
```
$ docker-compose up
```
 進入 container bash
```
$ docker exec -it PDFServer /bin/bash
```
