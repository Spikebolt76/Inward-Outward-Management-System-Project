const User = require('./User');
const FinancialYear = require('./FinancialYear');
const Institute = require('./Institute');
const Department = require('./Department');
const InOutwardOffice = require('./InOutwardOffice');
const InOutwardMode = require('./InOutwardMode');
const InOutwardFromTo = require('./InOutwardFromTo');
const CourierCompany = require('./CourierCompany');
const Inward = require('./Inward');
const Outward = require('./Outward');

// Supporting tables: ------------------------------------------------------

Department.belongsTo(Institute, {
    foreignKey: 'InstituteID',
    as: 'Institute'
});

Institute.hasMany(Department, {
    foreignKey: 'InstituteID',
    as: 'Departments'
});


// User relations (who created/modified): -----------------------------------

const userModels = [
    {model: InOutwardMode, as: 'Modes'},
    {model: InOutwardFromTo, as: 'FromTos'}, 
    {model: InOutwardOffice, as: 'Offices'}, 
    {model: CourierCompany, as: 'CourierCompanies'}, 
    {model: Inward , as: 'Inwards'}, 
    {model: Outward, as: 'Outwards'}
];

userModels.forEach(({ model }) => {
    model.belongsTo(User, {
        foreignKey: 'CreatedBy',
        as: 'Creator'
    });
});

userModels.forEach(({ model }) => {
    model.belongsTo(User, {
        foreignKey: 'UpdatedBy',
        as: 'Updator'
    });
});

userModels.forEach(({ model, as }) => {
    User.hasMany(model, {
        foreignKey: 'CreatedBy',
        as: `Created${as}`
    });
});

userModels.forEach(({ model, as }) => {
    User.hasMany(model, {
        foreignKey: 'UpdatedBy',
        as: `Updated${as}`
    });
});

module.exports = {User, Institute, Department, FinancialYear, Inward, Outward, InOutwardFromTo, InOutwardMode, InOutwardOffice, CourierCompany};

// Transaction table relations : 

Inward.belongsTo(FinancialYear, {
    foreignKey :'FinYearID',
    as: 'FinYear'
});

FinancialYear.hasMany(Inward, {
    foreignKey :'FinYearID',
    as: 'Inwards'
});

Outward.belongsTo(FinancialYear, {
    foreignKey :'FinYearID',
    as: 'FinYear'
});

FinancialYear.hasMany(Outward, {
    foreignKey :'FinYearID',
    as: 'Outwards'
});