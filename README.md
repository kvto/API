# Rest API creation with [Node.js](https://nodejs.org/es/) and [Mongo DB](https://www.mongodb.com/)

## Package.json creation and dependencies are installed

`npm init --y` to create our Package.json

`npm i express cors dotenv multer`

## Express Application Creation

Using the dependency [Express](http://expressjs.com/) and [Cors] we make the connection by assigning a variable `PORT`

## Scaffold creation (folder structure)

[models](https://github.com/kvto/API/tree/main/models): Folder corresponding to the Database.

[controllers](https://github.com/kvto/API/tree/main/controllers): Folder corresponding to the controllers.

[routers](https://github.com/kvto/API/tree/main/routes): Folder corresponding to the routes.

[config](https://github.com/kvto/API/tree/main/config): Folder corresponding to the configuration of the Database or external connections.

[utils](https://github.com/kvto/API/tree/main/utils): Folder corresponding to the functions (Helpers).

[storage](https://github.com/kvto/API/tree/main/storage): Folder corresponding to file storage.

## Installing [Mongoose](https://mongoosejs.com/) and creating the connection to our Database.

`npm i mongoose -S` to then establish the respective connection through functions (Using the respective environment variables and the parameters that Mongoose manages)

## declare the models

`models -> nosql` where our Mongo linked models will be in the [nosql.js] file(https://github.com/kvto/API/tree/main/models/nosql)

## Dynamic route creation [index](https://github.com/kvto/API/blob/main/routes/index.js)

Routes that allow us to create and obtain information from our API

## Create controllers for [track](https://github.com/kvto/API/blob/main/controllers/tracks.js) and [storage](https://github.com/kvto/API/ blob/main/controllers/storage.js)

Based on the models that we previously created, we focus on creating the different functions that will be in charge of creating, deleting, obtaining and updating all the information that we will handle; as well as file uploads (with the Multer dependency).

## Creating Validations [validators](https://github.com/kvto/API/blob/main/validators/tracks.js)

By installing `express-validator` in our console we create the different validations

## Creating the [Middleware](https://github.com/kvto/API/tree/main/middleware)

In order to handle error messages more efficiently

## Installation of our Database Manager [Robot 3t](https://robo-3t.software.informer.com/1.4/)

Which we can incorporate the Soft Delete methodology into our Api.

## Create authentication [JWT](https://jwt.io/)

We create our token that will help each user to log in to our API, in addition to signing and verifying said token

## More info about me: 
<div id="badges" >
Ing. Kevin J. Montero Zea 
</div>
<div id="badges" >
CE:004712881
</div>
<div id="badges" >
Cel: 913-695-382
</div>
<div id="badges" >
LinkedIn
</div>
<div id="badges" >
Portafolio
</div>
