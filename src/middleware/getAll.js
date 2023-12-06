const getUser = require("../controllers/getUser");

const get = async (req, res) => {
  try {
    const all = await getUser();
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = get;
