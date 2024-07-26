FROM golang:1.22.4-alpine
ENV TZ /usr/share/zoneinfo/Asia/Tokyo

RUN apk add --update && apk add git

ENV ROOT=/go/src/app
WORKDIR ${ROOT}

COPY . .
EXPOSE 8080

RUN go mod download
CMD ["go", "run", "main.go"]