FROM mhart/alpine-node:11 AS builder
WORKDIR /app

COPY package.json /app
COPY lerna.json /app
COPY yarn.lock /app
COPY babel.config.js /app

COPY packages/landing /app/packages/landing
COPY packages/common /app/packages/common
COPY packages/reusecore /app/packages/reusecore

RUN apk --no-cache add pkgconfig autoconf automake libtool nasm build-base zlib-dev
RUN yarn && cd packages/landing && yarn build

CMD [ "yarn", "start" ]