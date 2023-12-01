const ctrlAin2 = require('../controllers/ctrlAin2')

const postAin2 = async (req, res) => {
  const { value } = req.body;
  try {
    const valor = await ctrlAin2({ value });
    res.status(200).json(valor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postAin2;
