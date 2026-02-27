const express = require('express');
const router = express.Router();

const inwardController = require("../controllers/inward.controller");

router.get("/", inwardController.getAllInwards);
router.get("/:id", inwardController.getInward);
router.post("/", inwardController.createInward);
router.put("/:id", inwardController.updateInward);
router.delete("/:id", inwardController.updateInward);

module.exports = router;