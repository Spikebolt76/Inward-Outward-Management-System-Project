const express = require('express');
const router = express.Router();

const courierController = require('../controllers/courier.controller');

router.get("/", courierController.getAllCouriers); 
router.get("/:id", courierController.getCourier);
router.post("/", courierController.createCourier);
router.put("/:id", courierController.updateCourier);
router.delete("/:id", courierController.deleteCourier);

module.exports = router;