const express = require('express');
const router = express.Router();

const departmentController = require('../controllers/department.controller');

router.get("/", departmentController.getAlldepartments); 
router.get("/:id", departmentController.getdepartment);
router.post("/", departmentController.createdepartment);
router.put("/:id", departmentController.updatedepartment);
router.delete("/:id", departmentController.deletedepartment);

module.exports = router;