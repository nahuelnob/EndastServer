const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Placa",
    {
      dId: {
        type: DataTypes.STRING,
        primaryKey: true,
        // autoIncrement: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      variables: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
