const contactService = require("../services/contact.service");

const createContact = async (req, res) => {
    try {
        const contact = await contactService.createContact(req.body);

        res.status(201).json({
            success: true,
            data: contact
        });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message || "Failed to create contact"
        });
    }
}

const getAllContacts = async (req, res) => {
    try {
        const contacts = await contactService.getAllContacts();

        res.status(200).json({
            success: true,
            data: contacts
        });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const getContact = async (req, res) => {
    try {
        const contact = await contactService.getContact(req.params.id);

        if(!contact) {
            return res.status(400).json({
                success: false,
                message: "Resource Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: contact
        });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const deleteContact = async (req, res) => {
    try {
        const deleted = await contactService.deleteContact(req.params.id);

        if(!deleted) {
            return res.status(400).json({
                success: false,
                message: "Resource Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: deleted
        });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const updateContact = async (req, res) => {
    try {
        const updated = await contactService.deleteContact(req.params.id);

        if(!updated) {
            return res.status(400).json({
                success: false,
                message: "Resource Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: updated
        });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports = { createContact, getAllContacts, getContact, updateContact, deleteContact };