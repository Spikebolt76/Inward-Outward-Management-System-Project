const express = require("express");
const router = express.Router();

const modeController = require("../controllers/mode.controller");

router.get("/", modeController.getAllModes); 
router.get("/:id", modeController.getMode);
router.post("/", modeController.createMode);
router.put("/:id", modeController.updateMode);
router.delete("/:id", modeController.deleteMode);

module.exports = router;