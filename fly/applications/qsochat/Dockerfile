FROM alpine:3.18.3

COPY ChatServer /ChatServer
WORKDIR /ChatServer

RUN apk update \
    && apk add nodejs npm \
    && npm install

# RUN --mount=type=secret,id=HAMQTH_CALL \
#     HAMQTH_CALL=$(cat /run/secrets/HAMQTH_CALL)

# RUN --mount=type=secret,id=HAMQTH_PASSWORD \
#     HAMQTH_PASSWORD=$(cat /run/secrets/HAMQTH_PASSWORD)

CMD npm start
