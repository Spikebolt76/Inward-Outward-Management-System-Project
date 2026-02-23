const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contact.controller");

router.get("/", contactController.getAllContacts);
router.get("/:id", contactController.getContact);
router.post("/", contactController.createContact);
router.delete("/:id", contactController.deleteContact);
router.put("/:id", contactController.updateContact);

module.exports = router;