const { Router } = require("express");
const router = Router();

const post = require("../middleware/post")

router.post("/init", post);
router.get("/nahue", async (req, res) => {
  res.send("hola");
});

module.exports = router;
