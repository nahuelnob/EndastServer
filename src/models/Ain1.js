const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ain1",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
          min: 0,
          max: 4095,
        },
      },
      porcentaje: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
          min: 0,
          max: 100,
        },
      },
      placa: {
        type: DataTypes.STRING,
        allowNull:false,
      }
    },
  );
};