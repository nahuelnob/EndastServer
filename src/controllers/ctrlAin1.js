const { Ain1 } = require("../db");

const ctrlAin1 = async ({ value, porcentaje, placa }) => {
  const ain1 = await Ain1.create({ value: value, porcentaje: porcentaje , placa:placa });
  return ain1;
};

module.exports = ctrlAin1;
