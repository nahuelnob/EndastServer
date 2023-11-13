require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const UserModel = require("./models/User");
const { DB_USER, DB_PASSWORD, DB_HOST, PORT, BDD, DB_DEPLOY } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${BDD}`,
  {
    logging: false,
    native: false,
  }
);

UserModel(sequelize);
const { User } = sequelize.models;

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
