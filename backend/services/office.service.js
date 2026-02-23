const Office = require('../models/Office');
const Institute = require('../models/Institute');
const Department = require('../models/Department');

const createOffice = async (data) => {
    return await Office.create(data);
}

const getAllOffices = async () => {
    return await Office.findAll({
        include: [
            { model: Institute, as: 'Institute' },
            { model: Department, as: 'Department' }
        ]
    });
}

const getOffice = async (id) => {
    return await Office.findByPk(id, {
        include: [
            { model: Institute, as: 'Institute' },
            { model: Department, as: 'Department' }
        ]
    });
}

const deleteOffice = async (id) => {
    return await Office.destroy({
        where: { officeId : id }
    })
}

const updateOffice = async (id, data) => {
    const office = await Office.findByPk(id);

    if (!office) return null;

    await office.update(data);

    return office;
}

module.exports = { createOffice, getAllOffices, getOffice, deleteOffice, updateOffice }