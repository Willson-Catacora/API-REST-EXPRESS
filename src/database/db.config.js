const { Pool } = require("pg");
const query = require('./workouts.sql')
const env = require("dotenv");
env.config();

// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: "localhost",
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASS,
  port: 5432, // Puerto por defecto de PostgreSQL
});

try {
  const result = async () => { await pool.query(query); }
  console.log(result);
  console.log('conectado a la base de datos')
} catch (error) {
  console.log(error);
}

module.exports = pool;
