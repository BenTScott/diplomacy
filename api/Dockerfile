FROM golang:1.15.6-alpine AS build
RUN apk update && apk add git
WORKDIR /app
COPY go.* ./
RUN go mod download
COPY . .
ARG endpoint
RUN go build -o bin/main diplomacy-api/cmd/$endpoint

FROM alpine:latest
COPY --from=build /app/bin/ .
EXPOSE 8080
ENTRYPOINT [ "./main" ]
