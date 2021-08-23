FROM golang:1.15.6-alpine AS build
RUN apk update && apk add git
WORKDIR /app
COPY go.* ./
RUN go mod download
COPY . .
RUN go build -o bin/api diplomacy-api/cmd

FROM alpine:latest
COPY --from=build /app/bin/ .
EXPOSE 8080
ENTRYPOINT [ "./api" ]
