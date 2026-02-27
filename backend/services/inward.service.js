const { 
  Inward, Outward, Office, Contact, TransferMode, 
  CourierCompany, Institute, Department, FinancialYear, User 
} = require('../models/associations');

const inwardIncludes = [
  { association: 'financialYear' },
  { association: 'institute' },
  { association: 'toDepartment' },
  { association: 'fromOffice' },   // nullable — inter-office only
  { association: 'toOffice' },
  { association: 'fromContact' },  // nullable — external sender
  { association: 'transferMode' },
  { association: 'courierCompany' },
  { association: 'linkedOutward' }, // if this inward is a reply to an outward
  { association: 'createdByUser', attributes: ['user_id', 'name', 'email'] },
  { association: 'updatedByUser', attributes: ['user_id', 'name', 'email'] },
];

const createInward = async (data) => {
    return await Inward.create(data);
}

const getAllInwards = async () => {
    return await Inward.findAll({
        include: inwardIncludes
    });
}

const getInward = async (id) => {
    return await Inward.findByPk(id, {
        include: inwardIncludes
    });
}

const deleteInward = async (id) => {
    return await Inward.destroy({ 
        where: { inwardId : id }
    });
}

const updateInward = async (id, data) => {
    const inward = Inward.findByPk(id);

    if (!inward) return null;
    
    await inward.update(data);

    return await Inward.findByPk(id, {
        include: inwardIncludes
    });
}

module.exports = { createInward, getAllInwards, getInward, deleteInward, updateInward }



