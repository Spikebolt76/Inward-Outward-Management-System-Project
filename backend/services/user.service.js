const { User, Institute, Department } = require("../models/associations");


const createUser  = async (data) => {
    return await User.create(data);
}

const getAllUsers = async () => {
    return await User.findAll({
        include: [
            { model: Institute, as: 'institute' },
            { model: Department, as: 'department' }
        ],
    });
}

const getUser = async (id) => {
    return await User.findByPk(id, {
        include: [
            { model: Institute, as: 'institute' },
            { model: Department, as: 'department' }
        ]
    });
}

const deleteUser = async (id) => {
    return await User.destroy({
        where: { userId: id }
    });
}

const updateUser = async (id, data) => {
    const user = await User.findByPk(id);

    if (!user) return null;

    await user.update(data);

    return await User.findByPk(id, {
        include: [
            { model: Institute, as: 'institute' },
            { model: Department, as: 'department' }
        ]
    });
};

module.exports = { createUser, getAllUsers, getUser, deleteUser, updateUser };