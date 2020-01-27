FROM nginx:1.17.8

RUN mkdir -p /usr/share/nginx/public

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
