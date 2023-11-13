const server = require("./src/server");
const PORT = 1883
const HOST = "localhost"
// const HOSTIP = "192.168.0.46"

server.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});

//* conexion a la base de datos
// const { conn } = require("./src/db.js");
// conn
//   .sync({ alter: true })
//   .then(() => {
//     server.listen(PORT, () => {
//       console.log(`Server listenin on port ${PORT}`);
//     });
//   })
//   .catch((error) => console.error(error));
