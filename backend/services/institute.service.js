const Institute = require('../models/Institute');

const createInstitute = async (data) => {
    return await Institute.create(data);
}

const getAllInstitutes = async () => {
    return await Institute.findAll();
}

const getInstitute = async (id) => {
    return await Institute.findByPk(id);
}

const deleteInstitute = async (id) => {
    return await Institute.destroy({
        where: { InstituteID : id }
    })
}

const updateInstitute = async (id, data) => {
    const institute = await Institute.findByPk(id);

    if (!Institute) return null;

    await Institute.update(data);

    return Institute;
}

module.exports = { createInstitute, getAllInstitutes, getInstitute, deleteInstitute, updateInstitute }