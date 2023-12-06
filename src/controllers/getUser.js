const { Placa } = require("../db");

const getAll = async () => {
  const all = await Placa.findAll();
  return all;
};

module.exports = getAll;
