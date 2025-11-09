// Archivo: senderlink_api/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Cargar variables de entorno (.env)
dotenv.config();

// Crear la app de Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send(" SenderLink API funcionando correctamente");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(` Servidor iniciado en http://localhost:${PORT}`);
});
