const { Ain2 } = require("../db");

const ctrlAin2 = async ({ value }) => {
  const ain2 = await Ain2.create({ value: value });
  return ain2;
};

module.exports = ctrlAin2;
