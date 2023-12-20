const server = require("./src/server");
const HOST = "192.168.0.46";
// const HOST = "localhost";
const PORT = 3001;

//********************************************************************
//********************* Servidor + BDD *******************************
//********************************************************************
const { conn } = require("./src/db.js");
conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, HOST, () => {
      console.log(`Server listening on ${HOST}:${PORT}`);
    });
  })
  .catch((error) => console.error(error));
//********************************************************************
//********************************************************************