const { Ain0 } = require("../db");

const ctrlAin0 = async ({ value }) => {
  const ain0 = await Ain0.create({ value: value });
  return ain0;
};

module.exports = ctrlAin0;
