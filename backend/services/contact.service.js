const Contact = require("../models/Contact");

const getAllContacts = async () => {
    return await Contact.findAll();
}

const getContact = async (id) => {
    return await Contact.findByPk(id);
}

const createContact = async (data) => {
    return await Contact.create(data);
}

const deleteContact = async (id) => {
    return await Contact.destroy({
        where: { contactId: id }
    });
}

const updateContact = async (id, data) => {
    const contact = Contact.findByPk(id);

    if (!contact) return null;

    await contact.update(data);

    return contact; 
}

module.exports = { createContact, getAllContacts, getContact, updateContact, deleteContact };