const InOutwardMode = require("../models/InOutwardMode");

const createMode = async (data) => {
    return await InOutwardMode.create(data);
}

const getAllModes = async () => {
    return await InOutwardMode.findAll();
}

const getMode = async (id) => {
    return await InOutwardMode.findByPk(id)
}

const deleteMode = async (id) => {
    return await InOutwardMode.destroy({
        where: { InOutwardModeID : id }
    })
}

const updateMode = async (id, data) => {
    const mode = await InOutwardMode.findByPk(id)

    if (!mode) return null;

    await mode.update(data);

    return mode;
}

module.exports = { createMode, getAllModes, getMode, deleteMode, updateMode }