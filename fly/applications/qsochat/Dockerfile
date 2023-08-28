FROM alpine:3.18.3

COPY ChatServer /ChatServer
WORKDIR /ChatServer

RUN apk update \
    && apk add nodejs npm \
    && npm install

CMD npm start