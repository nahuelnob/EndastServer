const ctrlAin3 = require('../controllers/ctrlAin3')

const postAin3 = async (req, res) => {
  const { value } = req.body;
  try {
    const valor = await ctrlAin3({ value });
    res.status(200).json(valor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postAin3;
