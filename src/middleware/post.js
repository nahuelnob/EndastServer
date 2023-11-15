const postUser = require("../controllers/postUser");

const post = async (req, res) => {
  const { dId, password, variables } = req.body;

  try {
    const usuario = await postUser({ dId, password, variables });

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = post;
