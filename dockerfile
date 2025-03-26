# Etapa 1: Build del sitio
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: Servidor estático
FROM node:18
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist .
EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]
