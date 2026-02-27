const express = require('express');
const router = express.Router();

const finYearController = require('../controllers/finYear.controller');

router.get("/", finYearController.getAllFinYears); 
router.get("/:id", finYearController.getFinYear);
router.post("/", finYearController.createFinYear);
router.put("/:id", finYearController.updateFinYear);
router.delete("/:id", finYearController.deleteFinYear);

module.exports = router;