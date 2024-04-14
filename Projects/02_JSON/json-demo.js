//Pasando un paquete JSON a un código de JavaScript

/*
const curso = require("./curso.json");

//console.log(curso);

//console.log(typeof curso);

//console.log(curso.titulo);

console.log(curso.temas);
*/

//Pasando código de JavaScript a un paquete JSON
/*
let infoCurso = {
  titulo: "Aprende Node.js",
  numVistas: 45642,
  numLikes: 21123,
  temas: ["JavaScript", "Node.js"],
  esPublico: true,
};
*/
//console.log(infoCurso);
//console.log(typeof infoCurso);
//console.log(infoCurso.temas);

// Objeto -> Cadena de Caracteres
// Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);
/*
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);
console.log(infoCursoJSON.titulo);
*/
// Cadena de Caracteres -> Objeto
/*
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto.titulo);
*/
