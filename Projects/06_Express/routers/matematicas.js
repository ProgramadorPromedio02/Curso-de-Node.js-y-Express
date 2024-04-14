const express = require("express");
const { matematicas } = require("../datos/cursos").infoCursos;
const routerMatematicas = express.Router();

// Middleware
routerMatematicas.use(express.json());

// Obtener todos los cursos de Matemáticas
routerMatematicas.get("/", (req, res) => {
  res.json(matematicas);
});

// Obtener cursos de un tema específico
routerMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultados = matematicas.filter(curso => curso.tema === tema);

  if (resultados.length === 0) {
    return res.status(204).send(`No se encontraron cursos de ${tema}.`);
  }

  // Ordenar por vistas si se especifica en la query
  if (req.query.ordenar === "vistas") {
    res.json(resultados.sort((a, b) => a.vistas - b.vistas));
  } else {
    res.json(resultados);
  }
});

// Obtener cursos de un tema y nivel específicos
routerMatematicas.get("/:tema/:nivel", (req, res) => {
  const tema = req.params.tema;
  const nivel = req.params.nivel;
  const resultados = matematicas.filter(
    curso => curso.tema === tema && curso.nivel === nivel
  );

  if (resultados.length === 0) {
    return res
      .status(204)
      .send(`No se encontraron cursos de ${tema} de nivel ${nivel}.`);
  }

  res.json(resultados);
});

// POST 
routerMatematicas.post("/", (req, res) => {
  let cursoNuevo = req.body;
  matematicas.push(cursoNuevo);
  res.json(matematicas);
});

// PUT 
routerMatematicas.put("/:id", (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = matematicas.findIndex(curso => curso.id == id); 
  
  if(indice >= 0) {
    matematicas[indice] = cursoActualizado;
  } else {
    return res
    .status(404)
    .send("Not Found");
  }
  res.send(matematicas);
});


// PATCH
routerMatematicas.patch("/:id", (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = matematicas.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = matematicas[indice];
    Object.assign(cursoAModificar, infoActualizada);
  } else {
    res.status(400).send("Bad request");
  }
  res.send(matematicas);
});

// DELETE
routerMatematicas.delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = matematicas.findIndex(curso => curso.id == id);
  
  if(indice >= 0) {
    matematicas.splice(indice, 1);
  } else {
    res.status(500).send("Internal Server Error");
  }
  res.send(matematicas);
});


module.exports = routerMatematicas;