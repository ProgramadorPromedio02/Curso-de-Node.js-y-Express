function ordernarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de freeCodeCamp.`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Ordenando una taza con el logo de freeCodeCamp...");
      } else {
        reject("Este producto no está disponible actualmente.");
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve) => {
    console.log("Procesando respuesta...");
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve("Gracias por tu compra. Disfruta tu producto de freeCodeCamp.");
    }, 4000);
  });
}

/*
ordernarProducto("lapiz")
  .then((respuesta) => {
    console.log("Respuesta recibida");
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then((respuestaProcesada) => {
    console.log(respuestaProcesada);
  })
  .catch((err) => {
    console.error(err);
  });
*/

// async y await

//async sin el await
/*
async function realizarPedido(producto) {
  try {
    const respuesta = ordernarProducto(producto);
    console.log("Respuesta recibida");
    const respuestaProcesada = procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (err) {
    console.error(err);
  }
}
*/
//async con el await

async function realizarPedido(producto) {
  try {
    const respuesta = await ordernarProducto(producto);
    console.log("Respuesta recibida");
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (err) {
    console.error(err);
  }
}

realizarPedido("lapiz"); // Entra al bloque catch
