const InOutwardOffice = require('../models/InOutwardOffice');

const createOffice = async (data) => {
    return await InOutwardOffice.create(data);
}

const getAllOffices = async () => {
    return await InOutwardOffice.findAll();
}

const getOffice = async (id) => {
    return await InOutwardOffice.findByPk(id);
}

const deleteOffice = async (id) => {
    return await InOutwardOffice.destroy({
        where: { InOutwardOfficeID : id }
    })
}

const updateOffice = async (id, data) => {
    const office = await InOutwardOffice.findByPk(id);

    if (!office) return null;

    await office.update(data);

    return office;
}

module.exports = { createOffice, getAllOffices, getOffice, deleteOffice, updateOffice }