# Creación de API Rest con [Node.js](https://nodejs.org/es/) y [Mongo DB](https://www.mongodb.com/)

## Creación del Package.json y se instalo las dependencias

`npm init --y` para crear nuestro Package.json

`npm i express cors dotenv multer`

## Creación Aplicacion Express

Mediante la dependencia [Express](http://expressjs.com/) y [Cors] realizamos la conexion asignandole una variale `PORT`

## Creación Scaffold (Estructura de carpetas)

[models](https://github.com/kvto/API/tree/main/models): Carpeta correspondiente a la Base de datos.

[controllers](https://github.com/kvto/API/tree/main/controllers): Carpeta correspondiente a los controladores.

[routers](https://github.com/kvto/API/tree/main/routes): Carpeta correspondiente a las rutas.

[config](https://github.com/kvto/API/tree/main/config): Carpeta correspondiente a la configuracion de la Base de datos o conexiones externas.

[utils](https://github.com/kvto/API/tree/main/utils): Carpeta correspondiente a las funciones (Helpers).

[storage](https://github.com/kvto/API/tree/main/storage): Carpeta correspondiente al almacenamiento de archivos.

## Instalación de [Mongoose](https://mongoosejs.com/) y la creación de la conexion a nuestra Base de Datos.

`npm i mongoose -S` para luego establecer mediante funciones la respectiva conexión (Utilizando las respectivas variables de entorno y los parameteros que Mongoose maneja)

## Declaramos los modelos 

`models -> nosql` donde estara nuestros modelos vinculados a Mongo en el archivo [nosql.js](https://github.com/kvto/API/tree/main/models/nosql)

## Creación de rutas dinamicas [index](https://github.com/kvto/API/blob/main/routes/index.js)

Rutas que nos permiten crear y obtener informacion de nuestra API

## Creación de los controladores de [track](https://github.com/kvto/API/blob/main/controllers/tracks.js) y [storage](https://github.com/kvto/API/blob/main/controllers/storage.js)

Basandonos en los modelos que previamente creamos, nos enfocamos en crear las distintas funciones que se van a encargar de crear, eliminar, obtener y actualizar toda la informacion que manejaremos; asi como las cargas de archivos (con la dependencia Multer).

## Creación de Valdicaciones [validators](https://github.com/kvto/API/blob/main/validators/tracks.js)

Mediante la instalación de `express-validator` en nuestra consola creamos las distintas validaciones 

## Creación de los [Middleware](https://github.com/kvto/API/tree/main/middleware)


