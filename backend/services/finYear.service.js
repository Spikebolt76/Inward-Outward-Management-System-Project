const FinancialYear = require('../models/FinancialYear');

const createFinYear = async (data) => {
    return await FinancialYear.create(data);
}

const getAllFinYears = async () => {
    return await FinancialYear.findAll();
}

const getFinYear = async (id) => {
    return await FinancialYear.findByPk(id);
}

const deleteFinYear = async (id) => {
    return await FinancialYear.destroy({
        where: { finYearId : id }
    })
}

const updateFinYear = async (id, data) => {
    const finYear = await FinancialYear.findByPk(id);

    if (!finYear) return null;

    await finYear.update(data);

    return finYear;
}

module.exports = { createFinYear, getAllFinYears, getFinYear, deleteFinYear, updateFinYear }