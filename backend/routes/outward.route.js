const express = require('express');
const router = express.Router();

const outwardController = require("../controllers/outward.controller");

router.get("/", outwardController.getAllOutwards);
router.get("/:id", outwardController.getOutward);
router.post("/", outwardController.createOutward);
router.put("/:id", outwardController.updateOutward);
router.delete("/:id", outwardController.updateOutward);

module.exports = router;