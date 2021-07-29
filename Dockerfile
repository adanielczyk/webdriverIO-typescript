FROM node:14.15.1-alpine3.12

ARG APP=''

ENV NODE_ENV=test

# WORKDIR /usr/src/graphql

COPY package*.json ./
COPY server ./

RUN echo $APP
RUN echo $NODE_ENV

RUN npm ci

EXPOSE 8080

CMD ["node", "index.js"]
