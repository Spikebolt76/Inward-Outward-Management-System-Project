const Department = require('../models/Department');

const createDepartment = async (data) => {
    return await Department.create(data);
}

const getAllDepartments = async () => {
    return await Department.findAll();
}

const getDepartment = async (id) => {
    return await Department.findByPk(id);
}

const deleteDepartment = async (id) => {
    return await Department.destroy({
        where: { DepartmentID : id }
    })
}

const updateDepartment = async (id, data) => {
    const department = await Department.findByPk(id);

    if (!Department) return null;

    await Department.update(data);

    return Department;
}

module.exports = { createDepartment, getAllDepartments, getDepartment, deleteDepartment, updateDepartment }