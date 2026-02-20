const express = require('express');
const router = express.Router();

const instituteController = require('../controllers/institute.controller');

router.get("/", instituteController.getAllinstitutes); 
router.get("/:id", instituteController.getinstitute);
router.post("/", instituteController.createinstitute);
router.put("/:id", instituteController.updateinstitute);
router.delete("/:id", instituteController.deleteinstitute);

module.exports = router;