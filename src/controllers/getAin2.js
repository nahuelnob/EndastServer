const { Ain2 } = require("../db");

const getAin2 = async () => {
  const allAin2 = await Ain2.findAll();
  return allAin2;
};

module.exports = getAin2;
