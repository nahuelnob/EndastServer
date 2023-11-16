const { Router } = require("express");
const router = Router();

const post = require("../middleware/post")
const getAll = require("../middleware/getAll")

router.post("/api/getdevicecredentials", post);
router.get("/nahue", getAll);

module.exports = router;
