const { User } = require("../db");

const postUsers = async ({dId, password, variables}) => {
  const user = await User.create({dId:dId , password: password, variables: variables });
  return user
};

module.exports = postUsers
