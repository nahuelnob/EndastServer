const { Ain3 } = require("../db");

const ctrlAin3 = async ({ value }) => {
  const ain3 = await Ain3.create({ value: value });
  return ain3;
};

module.exports = ctrlAin3;
