# 指令說明 https://philipzheng.gitbooks.io/docker_practice/content/dockerfile/instructions.html

# 第一條指令必須為 FROM 指令。並且，如果在同一個Dockerfile中建立多個映像檔時，
# 可以使用多個 FROM 指令
FROM mhart/alpine-node:7

# 指定維護者訊息
MAINTAINER James Yang

RUN apk add --no-cache make gcc g++ python
RUN apk add --update bash && rm -rf /var/cache/apk/*
RUN mkdir /www

WORKDIR /www
RUN mkdir /app

# 格式為 RUN <command> 或 RUN ["executable", "param1", "param2"]。
# 前者將在 shell 終端中運行命令, 後者則使用 exec 執行
# 每條 RUN 指令將在當前映像檔基底上執行指定命令，並產生新的映像檔。
# 當命令較長時可以使用 \ 來換行。

# # Install app dependencies
# COPY package.json /src/package.json

COPY ./package.json ./package.json
COPY ./ecosystem.config.js ./ecosystem.config.js

RUN npm install pm2 -g
RUN npm install

# WORKDIR /app
VOLUME ["/www/app"]

# EXPOSE 格式為 EXPOSE <port> [<port>...]
# 設定 Docker 伺服器容器對外的埠號，供外界使用
# 在啟動容器時需要透過 -P，Docker 會自動分配一個埠號轉發到指定的埠號
EXPOSE  3001

# CMD 支援三種格式
# CMD ["executable","param1","param2"] 使用 exec 執行，推薦使用；
# CMD command param1 param2 在 /bin/sh 中執行，使用在給需要互動的指令；
# CMD ["param1","param2"] 提供給 ENTRYPOINT 的預設參數；
# 指定啟動容器時執行的命令，
# 每個 Dockerfile 只能有一條 CMD 命令。
# 如果指定了多條命令，只有最後一條會被執行。

CMD ["pm2-docker","start","ecosystem.config.js"]

# 啟動位置

# pm2 指令說明
# http://robin-front.github.io/2016/05/04/pm2%E4%B8%80%E4%B8%AA%E5%B8%A6%E6%9C%89%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%8A%9F%E8%83%BD%E7%9A%84Node%E5%BA%94%E7%94%A8%E7%9A%84%E8%BF%9B%E7%A8%8B%E7%AE%A1%E7%90%86%E5%99%A8/

# docker run -it -p 80:80 -p 443:443 -p 43554:43554 --name nodeServer james/pm2
