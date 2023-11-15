const { User } = require("../db");

const getAll = async () => {
  const all = await User.findAll();
  return all;
};

module.exports = getAll;
