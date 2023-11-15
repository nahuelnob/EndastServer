const server = require("./src/server");
const PORT = 1883
// const HOST = "localhost"
const HOST = "192.168.0.46"


const { conn } = require("./src/db.js");
conn
.sync({ force: true })
.then(() => {
  server.listen(PORT, HOST, () => {
      console.log(`Server listening on ${HOST}:${PORT}`);
    });
  })
  .catch((error) => console.error(error));

const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://192.168.0.46/mqtt'); // Reemplaza 'broker-url' con la URL de tu broker MQTT
console.log(client);
// client.on('connect', () => {
//   console.log('Conectado al broker MQTT');

//   // Suscribirse a los temas MQTT aquí
//   client.subscribe('topico', (error) => {
//     if (error) {
//       console.error('Error al suscribirse a todos los temas:', error);
//     } else {
//       console.log('Suscrito');
//     }
//   });
// });

// client.on('message', (topic, message) => {
//   console.log(`Mensaje recibido en el tema ${topic}: ${message.toString()}`);
//   // Aquí puedes manejar los mensajes MQTT según tus necesidades
// });