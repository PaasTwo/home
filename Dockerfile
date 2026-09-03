# syntax=docker/dockerfile:1

FROM node:22-bookworm-slim AS build
WORKDIR /src

ARG HUGO_VERSION=0.159.0
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
       ca-certificates=20230311+deb12u1 \
       wget=1.21.3-1+deb12u1 \
  && wget -qO /tmp/hugo.deb "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb" \
  && dpkg -i /tmp/hugo.deb \
  && rm /tmp/hugo.deb \
  && apt-get purge -y wget \
  && apt-get autoremove -y \
  && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci

COPY hugo.toml tailwind.config.js ./
COPY archetypes ./archetypes
COPY assets ./assets
COPY content ./content
COPY static ./static
COPY themes ./themes

RUN npm run build:css && hugo --gc --minify

FROM nginx:1.27-alpine
COPY nginx /etc/nginx
COPY --from=build /src/public /usr/share/nginx/html
EXPOSE 6180
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD wget -qO- http://127.0.0.1:6180/ || exit 1
