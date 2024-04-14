const http = require("http");

/*
const servidor = http.createServer((req, res) => {
  // Proceso
  console.log("Solicitud nueva");
  res.end("Hola, mundo");
});
*/
const servidor = http.createServer((req, res) => {
  // Crea un servidor HTTP y define una función de callback que se ejecutará cada vez que se reciba una solicitud.
  //console.log("==> req (solicitud)");
  //console.log(req); // Imprime el objeto de solicitud (req), que contiene información sobre la solicitud del cliente.
  //console.log(req.url); // Imprime la URL solicitada por el cliente.
  //console.log(req.method); // Imprime el método HTTP utilizado en la solicitud (GET, POST, etc.).
  //console.log(req.headers); // Imprime los encabezados de la solicitud HTTP enviados por el cliente.
  //console.log(res); // Imprime el objeto de respuesta (res), que se utilizará para enviar una respuesta al cliente.
  //console.log(res.statusCode); // 200 OK // Imprime el código de estado de la respuesta actual (por defecto es 200 OK).
  //res.statusCode = 404; // Establece el código de estado de la respuesta a 404 (Not Found).
  //console.log(res.statusCode); // 404 Not Found // Imprime el nuevo código de estado de la respuesta.
  //res.setHeader("content-type", "application/json"); // Establece el encabezado "content-type" de la respuesta a "application/json".
  //console.log(res.getHeaders()); // Imprime los encabezados de la respuesta actual.
  //res.end("Hola, mundo :)"); // Envía una respuesta al cliente con el contenido "Hola, mundo :)" y finaliza la conexión.
});

const PUERTO = 3000;

/*
servidor.listen(3000, () => {
  console.log("El servidor esta escuchando...");
});
*/
/*
servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
*/

/*
servidor.listen(PUERTO, () => {
  console.log(
    `El servidor esta escuchando en el puerto http://localhost:${PUERTO}...`
  );
});
*/

servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
