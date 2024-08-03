# Dockerfile for Backend
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
ENTRYPOINT ["sh", "./entrypoint.sh"]
