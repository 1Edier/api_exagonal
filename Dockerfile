# Usa una imagen de node.js como base
FROM node:20.12.1

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY ./api_exagonal ./

# Instala las dependencias
RUN npm install

EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start:dev"]