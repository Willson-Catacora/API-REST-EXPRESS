const express = require('express')
const bodyPaser = require('body-parser')
const v1Router = require('./routers/v1/workouts.router')
const env = require('dotenv')
env.config()
// PUERTO
const port = process.env.PORT || 3000 
const app = express()
app.use(bodyPaser.json())

app.get('/', (req, res) => {res.send('API REST con CRUD.')})

app.use('/api/v1/workouts', v1Router)

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto : ${port}`)
})