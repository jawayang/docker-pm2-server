FROM node:6.9.5-alpine

MAINTAINER James Yang <James@cloud-interactive.com>

# Copy application files
VOLUME ["/usr/src/app"]

WORKDIR /usr/src/app

# Install Yarn and Node.js dependencies
RUN npm install yarn --global --no-progress --silent --depth 0 && \
    yarn install --production --no-progress

CMD ["node","server.js"]
