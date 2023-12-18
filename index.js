const server = require("./src/server");
// const HOST = "192.168.0.46";
const HOST = "localhost";
const PORT = 3001;
const axios = require("axios");

//********************************************************************
//********************* Servidor + BDD *******************************
//********************************************************************
const { conn } = require("./src/db.js");
conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, HOST, () => {
      console.log(`Server listening on ${HOST}:${PORT}`);
    });
  })
  .catch((error) => console.error(error));
//********************************************************************
//********************************************************************

//????????????????????????????????????????????????????????????????????????
//?????????????????????? Conexion con EMQX ???????????????????????????????
//????????????????????????????????????????????????????????????????????????
const mqtt = require("mqtt");
const TOPIC = "64c314be56857449102a9d4b/testid/aPtCeiVxcp/sdata"; //din0
// const TOPIC = "64c314be56857449102a9d4b/testid/O2RMRlSUYU/sdata" //din1;
// const TOPIC = "64c314be56857449102a9d4b/testid/DpG13PisLO/sdata" //din2;
// const TOPIC = "64c314be56857449102a9d4b/testid/9UaEQR4I36/sdata" //din3;
// const TOPIC = "64c314be56857449102a9d4b/testid/NrFMgh03GO/sdata" //ain0;
// const TOPIC = "64c314be56857449102a9d4b/testid/iSK4MVs6tO/sdata" //ain1;
// const TOPIC = "64c314be56857449102a9d4b/testid/AM8p6BX0gm/sdata" //ain2;
// const TOPIC = "64c314be56857449102a9d4b/testid/rgzxwhfl36/sdata" //ain3;
//////////////////////////////////////////////////////////////////////////////
// const TOPIC = "64c314be56857449102a9d4b/testid/nLngKM48P/sdata" //out0;
// const TOPIC = "64c314be56857449102a9d4b/testid/uX0NxQhNrr/sdata" //out1;
// const TOPIC = "64c314be56857449102a9d4b/testid/7AJDDkZVrj/sdata" //out2;
// const TOPIC = "64c314be56857449102a9d4b/testid/1QMLeg5CT4/sdata" //out3;
//////////////////////////////////////////////////////////////////////////////
// const TOPIC = "64c314be56857449102a9d4b/testid/inLngKM48P/actdata" //ACTout0;
// const TOPIC = "64c314be56857449102a9d4b/testid/uX0NxQhNrr/actdata" //ACTout1;
// const TOPIC = "64c314be56857449102a9d4b/testid/7AJDDkZVrj/actdata" //ACTout2;
// const TOPIC = "64c314be56857449102a9d4b/testid/1QMLeg5CT4/actdata" //ACTout3;

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
// const mensaje = "{value: 3974}";
// // const mensaje = "{value: true}";
// client.publish(TOPIC, mensaje, (error) => {
//   if (error) {
//     console.error(`Error al publicar en ${TOPIC}:`, error);
//   } else {
//     console.log(`Mensaje publicado en ${TOPIC}: ${mensaje}`);
//   }
// });
//????????????????????????????????????????????????????????????????????????
//????????????????????????????????????????????????????????????????????????