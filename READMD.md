# 學習Docker

從 dockerfile 建立 image
```
# 語法： docker build -t <名字> .
$ docker build -t james/pm2server .
```

重新
```
$ docker build --rm -t james/pm2 .       
```

```
$ docker run -it james/pm2
```

```
$ docker run -p 80:3000 -v `pwd`/example_app:/app keymetrics/pm2-docker-alpine
```
