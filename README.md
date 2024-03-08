# API - REST con JavaScript, Node.js, Express.js y Postgres 
Este repositorio tiene una API-REST realizada con Node.js y PostgreSQL la cual nos sirve para hacer un CRUD (Create, Read, Update, Delete), el cual es un ejemplo de FreeCodeCamp [Link](https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/) pero en este repositorio implementamos la base de datos en postgresql.

### Ejecucion del proyecto

1. Clonar el repositorio:
`$ git clone https://github.com/Willson-Catacora/API-REST-EXPRESS.git `
2. Abrir el proyecto en su editor preferido
3. Instalar los paquetes y modulos requeridos con: 
`$npm install`
esto en una terminal en la ruta del proyecto.
4. Iniciar Docker Desktop
5. Agrega las variables de entorno que correspondan usando como plantilla `.env.example`
6. Iniciar el docker-compose con:
`$ docker-compose up -d`
7. Levantar el servidor con:
`$ npm run dev`

### Requiere:
- Node.js version 20.11.1 
- Docker Desktop
- Git

## METHODS
#### GET ALL
http://localhost:3000/api/v1/workouts
#### POST
http://localhost:3000/api/v1/workouts
#### GET PUT DELETE BY ID
http://localhost:3000/api/v1/workouts/:id

###End