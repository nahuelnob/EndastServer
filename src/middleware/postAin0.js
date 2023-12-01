const ctrlAin0 = require('../controllers/ctrlAin0')

const postAin0 = async (req, res) => {
  const { value } = req.body;
  try {
    const valor = await ctrlAin0({ value });
    res.status(200).json(valor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postAin0;
