const { Ain1 } = require("../db");

const ctrlAin1 = async ({ value }) => {
  const ain1 = await Ain1.create({ value: value });
  return ain1;
};

module.exports = ctrlAin1;
