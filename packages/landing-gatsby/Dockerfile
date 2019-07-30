FROM mhart/alpine-node:11 AS builder

WORKDIR /app
COPY packages/landing-gatsby /app

FROM nginx:alpine

COPY nginx /etc/nginx/
COPY --from=builder --chown=nginx:nginx /app/public /usr/share/nginx/html
RUN touch /var/run/nginx.pid && chown nginx:nginx /var/run/nginx.pid

EXPOSE 8000
HEALTHCHECK CMD [ "wget", "-q", "localhost:8000" ]
