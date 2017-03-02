FROM node:6

MAINTAINER James Yang <James@cloud-interactive.com>

# Copy application files
VOLUME ["/usr/src/app"]
EXPOSE  3000
WORKDIR /usr/src/app

RUN npm install

CMD ["node","server.js"]
