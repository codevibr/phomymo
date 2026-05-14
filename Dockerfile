# syntax=docker/dockerfile:1

FROM alpine/git:latest AS source

ARG REPO_URL=https://github.com/codevibr/phomymo.git
ARG REF=main
ARG CACHEBUST=1

RUN echo "$CACHEBUST" >/dev/null && git clone --depth 1 --branch "$REF" "$REPO_URL" /src

FROM nginx:1.27-alpine

COPY --from=source /src/src/web/ /usr/share/nginx/html/

EXPOSE 80
