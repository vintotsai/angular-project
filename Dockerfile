# Angular build image
FROM node:16 as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


# Nginx image
FROM nginx:latest

COPY --from=builder /app/dist/angular-antd /usr/share/nginx/html/

EXPOSE 8081
