const express = require('express');
const router = express.Router();

const instituteController = require('../controllers/institute.controller');

router.get("/", instituteController.getAllInstitutes); 
router.get("/:id", instituteController.getInstitute);
router.post("/", instituteController.createInstitute);
router.put("/:id", instituteController.updateInstitute);
router.delete("/:id", instituteController.deleteInstitute);

module.exports = router;