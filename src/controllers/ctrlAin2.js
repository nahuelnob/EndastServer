const { Ain2 } = require("../db");

const ctrlAin2 = async ({ value, porcentaje, placa }) => {
  const ain2 = await Ain2.create({ value: value, porcentaje: porcentaje , placa:placa });
  return ain2;
};

module.exports = ctrlAin2;