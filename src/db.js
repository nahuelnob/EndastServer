require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const UserModel = require("./models/User");
const Ain0Model = require("./models/Ain0");
const Ain1Model = require("./models/Ain1");
const Ain2Model = require("./models/Ain2");
const Ain3Model = require("./models/Ain3");
const { DB_USER, DB_PASSWORD, DB_HOST, PORT, BDD, DB_DEPLOY } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${BDD}`,
  {
    logging: false,
    native: false,
  }
);

UserModel(sequelize);
Ain0Model(sequelize);
Ain1Model(sequelize);
Ain2Model(sequelize);
Ain3Model(sequelize);

const { User } = sequelize.models;
const { Ain0 } = sequelize.models;
const { Ain1 } = sequelize.models;
const { Ain2 } = sequelize.models;
const { Ain3 } = sequelize.models;

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
