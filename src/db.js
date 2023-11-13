require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');

// const {
//     DB_USER, DB_PASSWORD, DB_HOST, PORT, BDD, DB_DEPLOY
//   } = process.env;
  

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`, {
//   logging: false, 
//   native: false, 
// });

module.exports = {
    conn: sequelize,
  };