/*
//Sintaxis de desestructuración y require
//---------------------------------------
const { saludar, saludarHolaMundo } = require("./saludos.js");

//Exportar e Importar
//-------------------

//const saludos = require("./saludos.js");

//Exportar e importar
//-------------------

//console.log(saludos.saludar("freeCodeCamp"));
//console.log(saludos.saludarHolaMundo());

//Sintaxis de desestructuración y require
//---------------------------------------

console.log(saludar("freeCodeCamp"));
console.log(saludarHolaMundo());
*/

/*
//Módulo console
//--------------

console.log("¡Hola, Mundo!");
console.warn("Ocurrio un error...");
//console.error("¡Ocurrio un error!");

console.error(new Error("¡Ocurrio un error!"));
console.assert();
*/

/*
//Módulo process
//--------------

//console.log(process);

//.env(environment/ambiente)
//console.log(process.env);

//.argv(argument/argumento)
//console.log(process.argv);

//console.log(process.argv[2]);
//console.log(process.argv[3]);

// [node, app.js, 6, 7]
// [0, 1, 2, 3]
// ['C:\\Program Files\\nodejs\\node.exe', 'C:\\Users\\campi\\Documents\\Curso de NodeJS y Express\\Projects\\app.js', 6, 7]
/*
for (let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}
*/

//console.log(process.memoryUsage());

//Módulo OS(Operating System)
//---------------------------

/*
const os = require("os");

//console.log(os.type());
//console.log(os.homedir());
//console.log(os.uptime());
console.log(os.userInfo());
*/

//Módulo Timers
//-------------

//setTimeout()
/*
function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

//mostrarTema("Node.js");
setTimeout(mostrarTema, 5000, "Node.js");
*/
/*
function sumar(a, b) {
  console.log(a + b);
}

setTimeout(sumar, 10000, 5, 6);
*/

//setImmediate()
/*
function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

console.log("Antes de setImmediate()");
setImmediate(mostrarTema, "Node.js");
console.log("Después de setImmediate()"); //Luego pasa de vuelta a la línea donde está setImmediate()👆👆👆
*/

//setInterval()
/*
function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

setInterval(mostrarTema, 1500, "Node.js");
*/
/*
function sumar(a, b) {
  console.log(a + b);
}

setInterval(sumar, 1500, 3, 4);
*/

//Módulo fs
//---------

const fs = require("fs");

//Asíncrono

// Leer un archivo.
/*
console.log("Antes de leer el archivo...");

fs.readFile("index.html", "utf-8", (err, contenido) => {
  if (err) {
    //console.log(err);
    throw err; //throw(lanzar) permite que el error se detenga en la ejecución y muestre a detalle más información del error en el terminal
  } else {
    console.log(contenido);
  }
  console.log("Mensanje...");
});

console.log("Despues de leer el archivo...");

// Cambiar el nombre de un archivo.

fs.rename("index.html", "main.html", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Nombre cambiado exitosamente :)");
  }
});

console.log("Despues de cambiar el nombre...");

// Agregar contenido al final de un archivo.

fs.appendFile("index.html", "<p>Hola</p>", (err) => {
  if (err) {
    throw err;
  }
  console.log("Archivo actualizado");
});

console.log("Despues de agregar el contenido del archivo...");

// Reemplazar todo el contenido del archivo.

fs.writeFile("index.html", "Gonzalo", (err) => {
  if (err) {
    throw err;
  }
  console.log("Contenido reemplazado exitosamente");
});

console.log("Despues de reemplazar el contenido del archivo...");

// Eliminar archivos

fs.unlink("index.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("Archivo eliminado.");
});

console.log("Despues de eliminar archivos...");
*/
//Síncrono

// Leer un archivo.
/*
console.log("Antes de leer el archivo...");

const archivo = fs.readFileSync("index.html", "utf-8");

console.log(archivo);

console.log("Despues de leer el archivo...");
*/
// Cambiar el nombre de un archivo.
/*
fs.renameSync("index.html", "main.html");

console.log("Despues de cambiar el nombre...");
*/
// Agregar contenido al final de un archivo.
/*
fs.appendFileSync("index.html", "<p>Hola</p>");

console.log("Despues de agregar el contenido del archivo...");
*/
// Reemplazar todo el contenido del archivo.
/*
fs.writeFileSync("index.html", "Gonzalo");

console.log("Despues de reemplazar el contenido del archivo...");
*/
// Eliminar archivos
/*
fs.unlinkSync("index.html");

console.log("Despues de eliminar archivos...");
*/
