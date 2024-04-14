const estatusPedido = () => {
  const estatus = Math.random() < 0.8;
  console.log(estatus);
  return estatus;
};
/*
for (let i = 0; i < 10; i++) {
  console.log(estatusPedido());
}
*/

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("¡Pedido exitoso! Su pizza esta en camino.");
    } else {
      reject("Ocurrio un error. Por favor intente nuevamente.");
    }
  }, 3000);
});

/*
const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido, rechazarPedido);
*/
/*
miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  .catch((mensajeDeError) => {
    console.log(mensajeDeError);
  });
*/

const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido).catch(rechazarPedido);
