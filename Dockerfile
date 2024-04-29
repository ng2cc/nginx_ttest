FROM nginx:1.18-alpine

COPY ./html /usr/share/nginx/html

# Default WAS_IP Value
ENV WAS_IP="192.168.111.21"

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
