const { Office, Institute, Department } = require("../models/associations");

const createOffice = async (data) => {
    return await Office.create(data);
}

const getAllOffices = async () => {
    return await Office.findAll({
        include: [
            { model: Institute, as: 'institute', attributes: ['instituteId', 'instituteName']},
            { model: Department, as: 'department', attributes: ['departmentId', 'departmentName'] }
        ]
    });
}

const getOffice = async (id) => {
    return await Office.findByPk(id, {
        include: [
            { model: Institute, as: 'institute', attributes: ['instituteId', 'instituteName'] },
            { model: Department, as: 'department', attributes: ['departmentId', 'departmentName'] }
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

    return await Office.findByPk(id);
}

module.exports = { createOffice, getAllOffices, getOffice, deleteOffice, updateOffice }