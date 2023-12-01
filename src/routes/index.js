const { Router } = require("express");
const router = Router();

// Middleware de User
const post = require("../middleware/post")
const getAll = require("../middleware/getAll")

// Middleware de Ain0
const postAin0 = require("../middleware/postAin0")
const getAllAin0 = require("../middleware/getAllAin0")
const postAin1 = require("../middleware/postAin1")
const getAllAin1 = require("../middleware/getAllAin1")
const postAin2 = require("../middleware/postAin2")
const getAllAin2 = require("../middleware/getAllAin2")
const postAin3 = require("../middleware/postAin3")
const getAllAin3 = require("../middleware/getAllAin3")

// Rutas para Placa
router.post("/api/getdevicecredentials", post);
router.get("/api/getdevicecredentials", getAll);

// Rutas para Ain
router.post("/api/ain0", postAin0);
router.get("/api/ain0", getAllAin0);
router.post("/api/ain1", postAin1);
router.get("/api/ain1", getAllAin1);
router.post("/api/ain2", postAin2);
router.get("/api/ain2", getAllAin2);
router.post("/api/ain3", postAin3);
router.get("/api/ain3", getAllAin3);

module.exports = router;
