const postPlaca = require("../controllers/postPlaca.js");

const post = async (req, res) => {
  const { dId, password, variables } = req.body;

  try {
    const placa = await postPlaca({ dId, password, variables });

    res.status(200).json(placa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = post;
