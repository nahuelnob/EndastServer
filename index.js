const server = require("./src/server");
const HOST = "192.168.0.46";
const PORT = 3001;

//********************************************************************
//********************* Servidor + BDD *******************************
//********************************************************************
// const { conn } = require("./src/db.js");
// conn
//   .sync({ force: true })
//   .then(() => {
    server.listen(PORT, HOST, () => {
      console.log(`Server listening on ${HOST}:${PORT}`);
    });
  // })
  // .catch((error) => console.error(error));
//********************************************************************
//********************************************************************

//????????????????????????????????????????????????????????????????????????
//?????????????????????? Conexion con EMQX ???????????????????????????????
//????????????????????????????????????????????????????????????????????????
// const mqtt = require("mqtt");
// const TOPIC = "64c314be56857449102a9d4b/testid/NrFMgh03GO/sdata";

// const client = mqtt.connect(`mqtt://${HOST}/mqtt`);
// client.on("connect", () => {
//   console.log("Conectado al broker MQTT");

//   // Suscribirse a los topicos
//   client.subscribe(TOPIC, (error) => {
//     if (error) {
//       console.error(`Error al suscribirse a ${TOPIC}:`, error);
//     } else {
//       console.log(`Suscrito a ${TOPIC}`);
//     }
//   });
// });

// // Recibir mensajes
// client.on("message", (topic, message) => {
//   console.log(`Mensaje recibido en el tema ${topic}: ${message.toString()}`);
// });

// // Publicar un mensaje después de conectarse
// const mensaje = "Hola, este es un mensaje de prueba";
// client.publish(TOPIC, mensaje, (error) => {
//   if (error) {
//     console.error(`Error al publicar en ${TOPIC}:`, error);
//   } else {
//     console.log(`Mensaje publicado en ${TOPIC}: ${mensaje}`);
//   }
// });
//????????????????????????????????????????????????????????????????????????
//????????????????????????????????????????????????????????????????????????
