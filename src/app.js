const express = require("express");
const bodyPaser = require("body-parser");
const apicache = require("apicache");
const v1Router = require("./routers/v1/workouts.router");
const { swaggerDocs: V1SwaggerDocs } = require("./routers/swagger");

const env = require("dotenv");
env.config();
// PUERTO
const port = process.env.PORT || 3000;
const app = express();
const cache = apicache.middleware;

app.get("/", (req, res) => {
  res.send("API REST con CRUD.");
});

app.use(bodyPaser.json());
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1Router);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto : ${port}`);
  V1SwaggerDocs(app, port);
});
