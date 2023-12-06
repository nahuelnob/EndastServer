const ctrlAin1 = require('../controllers/ctrlAin1')

const postAin1 = async (req, res) => {
  const { value, porcentaje, placa } = req.body;
  try {
    const valor = await ctrlAin1({ value, porcentaje, placa });
    res.status(200).json(valor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postAin1;
