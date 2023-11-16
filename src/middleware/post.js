const postUser = require("../controllers/postUser");

const post = async (req, res) => {
  const { dId, password, variables } = req.body;

  try {
    console.log("Received POST request with data:", { dId, password, variables });

    const usuario = await postUser({ dId, password, variables });

    console.log("User created in the database:", usuario);

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = post;
