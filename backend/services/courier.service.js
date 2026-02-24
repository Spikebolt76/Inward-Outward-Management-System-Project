const CourierCompany = require('../models/CourierCompany');

const createCourier = async (data) => {
    return await CourierCompany.create(data);
}

const getAllCouriers = async () => {
    return await CourierCompany.findAll();
}

const getCourier = async (id) => {
    return await CourierCompany.findByPk(id);
}

const deleteCourier = async (id) => {
    return await CourierCompany.destroy({
        where: { courierCompanyId : id }
    })
}

const updateCourier = async (id, data) => {
    const courier = await CourierCompany.findByPk(id);

    if (!courier) return null;

    await courier.update(data);

    return courier;
}

module.exports = { createCourier, getAllCouriers, getCourier, deleteCourier, updateCourier }