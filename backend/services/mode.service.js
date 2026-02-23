const TransferMode = require("../models/TransferMode");

const createMode = async (data) => {
    return await TransferMode.create(data);
}

const getAllModes = async () => {
    return await TransferMode.findAll();
}

const getMode = async (id) => {
    return await TransferMode.findByPk(id)
}

const deleteMode = async (id) => {
    return await TransferMode.destroy({
        where: { transferModeId : id }
    })
}

const updateMode = async (id, data) => {
    const mode = await TransferMode.findByPk(id)

    if (!mode) return null;

    await mode.update(data);

    return mode;
}

module.exports = { createMode, getAllModes, getMode, deleteMode, updateMode }