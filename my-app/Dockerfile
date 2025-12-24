# Paso 1: Construcción (Build)
# Usamos una imagen de Node.js como base
FROM node:18-alpine AS build

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package.json package-lock.json ./

# Instalamos las dependencias (esto reemplaza el 'npm install' manual)
RUN npm install

# Copiamos el resto del código del proyecto
COPY . .

# Generamos la versión de producción de la app
RUN npm run build

# Paso 2: Servidor de Producción
# Usamos Nginx para servir el contenido estático de forma ultra rápida
FROM nginx:stable-alpine

# Copiamos los archivos compilados desde el paso anterior a la carpeta de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]