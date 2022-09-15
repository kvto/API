# Creación de API Rest con [Node.js](https://nodejs.org/es/) y [Mongo DB](https://www.mongodb.com/)

## Creación del Package.json y se instalo las dependencias

`npm init --y` para crear nuestro Package.json

`npm i express cors dotenv multer`

## Creación Aplicacion Express

Mediante la dependencia [Express](http://expressjs.com/) y [Cors] realizamos la conexion asignandole una variale `PORT`

## Creación Scaffold (Estructura de carpetas)

`models`: Carpeta correspondiente a la Base de datos.

`controllers`: Carpeta correspondiente a los controladores.

`routers`: Carpeta correspondiente a las rutas.

`config`: Carpeta correspondiente a la configuracion de la Base de datos o conexiones externas.

`utils`: Carpeta correspondiente a las funciones (Helpers).

`storage`: Carpeta correspondiente al almacenamiento de archivos.

## Creación de la conexion a nuestra Base de Datos.

