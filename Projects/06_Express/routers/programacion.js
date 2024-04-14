const express = require("express");
const { programacion } = require("../datos/cursos").infoCursos;
const routerProgramacion = express.Router();

// Middleware
// Convertir el cuerpo de la solicitud a JSON
routerProgramacion.use(express.json());

routerProgramacion.get("/", (req, res) => {
  res.json(programacion);
});

// GET lenguaje
routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );

  if (resultados.length === 0) {
    return res.status(204).send(`No se encontraron cursos de ${lenguaje}.`);
    //return res.status(404).end();
  }
  
  //Query vistas:
  //🟥🟥🟥🟥🟥
  //http://localhost:3000/api/cursos/programacion/python?ordenar=vistas
  if(req.query.ordenar === "vistas") {
    res.send(resultados.sort((a, b) => a.vistas - b.vistas)); // Permite ordenar una lista en base a un criterio.
    //Ascendente(a.vistas - b.vistas)
    //Descendente(b.vistas - a.vistas)
  } else {
    res.send(resultados)
  }
  
  res.send(resultados);
});

// GET lenguaje y nivel
routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );
  
  if (resultados.length === 0) {
    return res.status(204).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}.`);
    //return res.status(404).end();
  }
  
  res.end(resultados);
});

// POST
routerProgramacion.post("/", (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(programacion);
});

// PUT
routerProgramacion.put("/:id", (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id); 
  
  if(indice >= 0) {
    programacion[indice] = cursoActualizado;
  } else {
    return res
    .status(404)
    .send("Not Found");
  }
  res.send(programacion);
});

// PATCH
routerProgramacion.patch("/:id", (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoActualizada);
  } else {
    res.status(400).send("Bad request");
  }
  res.send(programacion);
});

// DELETE
routerProgramacion.delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);
  
  if(indice >= 0) {
    programacion.splice(indice, 1);
  } else {
    res.status(500).send("Internal Server Error");
  }
  res.send(programacion);
});

module.exports = routerProgramacion