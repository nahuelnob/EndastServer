const postUser = require("../controllers/postUser");

const post = async (req, res) => {
  const { dId, password, variables } = req.body;
  try {
    const response = {
      username: "5mhCCz1g9Y",
      password: password,
      clientId: "device_testid_89681",
      topic: "64c314be56857449102a9d4b/testid/",
      variables: variables,
    };
    const usuario = await postUser(response);

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = post
