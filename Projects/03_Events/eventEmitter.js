const EventEmitter = require("events");
const emisorProductos = new EventEmitter();

//console.log(EventEmitter);
/*
emisorProductos.on("compra", () => {
  console.log("Se realizo una compra.");
});

emisorProductos.emit("compra");


*/
/*
let i = 0;

emisorProductos.on("compra", () => {
  while (i < 3) {
    console.log("Se realizo una compra.");
    i++;
  }
});
*/
/*
emisorProductos.emit("compra");

emisorProductos.on("compra", (total) => {
  console.log(`Se realizo una compra por $${total}.`);
});

emisorProductos.emit("compra", 500);
*/
/*
emisorProductos.emit("compra");

emisorProductos.on("compra", (total, numProductos) => {
  console.log(`Se realizo una compra por $${total}.`);
  console.log(`Número de productos: ${numProductos}.`);
});

emisorProductos.emit("compra", 500, 5);
*/
