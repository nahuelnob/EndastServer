const { Router } = require("express");
const router = Router();

router.post("/init", async (req, res) => {
  const { dId, password, variables } = req.body;
  try {
    const response = {
      username: "5mhCCz1g9Y",
      password: password,
      clientId: "device_testid_89681",
      topic: "64c314be56857449102a9d4b/testid/",
      variables: variables
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/nahue", async (req, res) => {
  res.send("hola");
});

module.exports = router;
