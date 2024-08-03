# Dockerfile for Frontend
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT ["sh", "./entrypoint.sh"]
