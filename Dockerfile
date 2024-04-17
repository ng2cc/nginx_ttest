FROM nginx:1.18-alpine

COPY ./html /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
