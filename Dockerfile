FROM node:alpine

RUN ["apk", "add", "util-linux"]

WORKDIR /node/src/app

COPY package-lock.json package.json ./
RUN ["npm", "ci"]

COPY . .
RUN ["npm", "run", "now-build"]