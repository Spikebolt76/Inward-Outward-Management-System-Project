const express = require('express');
const router = express.Router();

const officeController = require('../controllers/office.controller');

router.get("/", officeController.getAllOffices); 
router.get("/:id", officeController.getOffice);
router.post("/", officeController.createOffice);
router.put("/:id", officeController.updateOffice);
router.delete("/:id", officeController.deleteOffice);

module.exports = router;