const { Ain0 } = require("../db");

const getAin0 = async () => {
  const allAin0 = await Ain0.findAll();
  return allAin0;
};

module.exports = getAin0;
