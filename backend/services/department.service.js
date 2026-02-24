const { Department, Institute } = require('../models/associations');

const createDepartment = async (data) => {
    return await Department.create(data);
}

const getAllDepartments = async () => {
    return await Department.findAll({
        include: { model: Institute, as: 'institute' }
    });
}

const getDepartment = async (id) => {
    return await Department.findByPk(id, {
        include: { model: Institute, as: 'institute' }
    });
}

const deleteDepartment = async (id) => {
    return await Department.destroy({
        where: { departmentId : id }
    })
}

const updateDepartment = async (id, data) => {
    const department = await Department.findByPk(id);

    if (!department) return null;

    await department.update(data);

    return await Department.findByPk(id, {
        include: { model: Institute, as: 'institute' }
    });
}

module.exports = { createDepartment, getAllDepartments, getDepartment, deleteDepartment, updateDepartment }