# Stage 1: build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: serve
FROM nginx:alpine
COPY --from=builder /app/.next /usr/share/nginx/html
# NGINX by default serves from /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
