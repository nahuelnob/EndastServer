const { User } = require("../db");

const postUsers = async (password, variables) => {
  const user = await User.Create({ password: password, variables: variables });
  return user
};

module.exports = postUsers
