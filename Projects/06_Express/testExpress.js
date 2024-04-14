const express = require("express");
const app = express();
const { infoCursos } = require("./datos/cursos.js");

// Routers
const routerProgramacion = require("./routers/programacion.js");
const routerMatematicas = require("./routers/matematicas.js");

// Middleware
app.use(express.json());

// Rutas
// Página principal
app.get("/", (req, res) => {
  res.send("Mi primer servidor con Express. Cursos 💻.");
});

// API de cursos
app.get("/api/cursos", (req, res) => {
  res.json(infoCursos);
});

// Rutas de Programación
app.use("/api/cursos/programacion", routerProgramacion);

// Rutas de Matemáticas
app.use("/api/cursos/matematicas", routerMatematicas);

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});
