const { Ain0 } = require("../db");

const ctrlAin0 = async ({ value, porcentaje, placa }) => {
  const ain0 = await Ain0.create({ value: value, porcentaje: porcentaje , placa:placa });
  return ain0;
};

module.exports = ctrlAin0;
