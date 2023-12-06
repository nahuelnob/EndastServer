const { Ain3 } = require("../db");

const ctrlAin3 = async ({ value, porcentaje, placa }) => {
  const ain3 = await Ain3.create({ value: value, porcentaje: porcentaje , placa:placa });
  return ain3;
};

module.exports = ctrlAin3;