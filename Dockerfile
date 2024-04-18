FROM nginx:1.18-alpine

COPY ./html /usr/share/nginx/html

# Default WAS_IP Value
ENV WAS_IP="192.168.111.21"

RUN sed -i "s/WAS_IP = '192.168.111.21';/WAS_IP = '${WAS_IP}';/g" /usr/share/nginx/html/config/config.js

CMD ["nginx", "-g", "daemon off;"]
