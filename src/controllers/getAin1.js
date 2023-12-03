const { Ain1 } = require("../db");

const getAin1 = async () => {
  const allAin1 = await Ain1.findAll();
  return allAin1;
};

module.exports = getAin1;
