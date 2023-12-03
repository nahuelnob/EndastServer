const { Ain3 } = require("../db");

const getAin3 = async () => {
  const allAin3 = await Ain3.findAll();
  return allAin3;
};

module.exports = getAin3;
