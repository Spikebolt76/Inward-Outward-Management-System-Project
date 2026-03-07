const User = require('./User');
const InwardOutwardCounter = require('./InwardOutwardCounter');
const Institute = require('./Institute');
const Department = require('./Department');
const FinancialYear = require('./FinancialYear');
const Office = require('./Office');
const TransferMode = require('./TransferMode');
const Contact = require('./Contact');
const CourierCompany = require('./CourierCompany');
const Inward = require('./Inward');
const Outward = require('./Outward');

// ─── User → Institute / Department ───────────────────────────────────────────

User.belongsTo(Institute, { as: 'institute', foreignKey: 'instituteId' });
User.belongsTo(Department, { as: 'department', foreignKey: 'departmentId' });
Institute.hasMany(User, { as: 'users', foreignKey: 'instituteId' });
Department.hasMany(User, { as: 'users', foreignKey: 'departmentId' });

// ─── Institute → Department ───────────────────────────────────────────────────

Institute.hasMany(Department, { as: 'departments', foreignKey: 'instituteId' });
Department.belongsTo(Institute, { as: 'institute', foreignKey: 'instituteId' });

// ─── Institute → Office ───────────────────────────────────────────────────────

Institute.hasMany(Office, { as: 'offices', foreignKey: 'instituteId' });
Office.belongsTo(Institute, { as: 'institute', foreignKey: 'instituteId' });

// ─── Department → Office ─────────────────────────────────────────────────────

Department.hasMany(Office, { as: 'offices', foreignKey: 'departmentId' });
Office.belongsTo(Department, { as: 'department', foreignKey: 'departmentId' });

// ─── FinancialYear → Inward / Outward ────────────────────────────────────────

FinancialYear.hasMany(Inward,  { as: 'inwards',  foreignKey: 'finYearId' });
FinancialYear.hasMany(Outward, { as: 'outwards', foreignKey: 'finYearId' });
Inward.belongsTo(FinancialYear,  { as: 'financialYear', foreignKey: 'finYearId' });
Outward.belongsTo(FinancialYear, { as: 'financialYear', foreignKey: 'finYearId' });

// ─── Institute → Inward / Outward ────────────────────────────────────────────

Institute.hasMany(Inward,  { as: 'inwards',  foreignKey: 'instituteId' });
Institute.hasMany(Outward, { as: 'outwards', foreignKey: 'instituteId' });
Inward.belongsTo(Institute,  { as: 'institute', foreignKey: 'instituteId' });
Outward.belongsTo(Institute, { as: 'institute', foreignKey: 'instituteId' });

// ─── Department → Inward / Outward ───────────────────────────────────────────

Department.hasMany(Inward,  { as: 'inwardsToThisDept', foreignKey: 'toDepartmentId' });
Department.hasMany(Outward, { as: 'outwardsFromThisDept', foreignKey: 'departmentId' });
Inward.belongsTo(Department,  { as: 'toDepartment', foreignKey: 'toDepartmentId' });
Outward.belongsTo(Department, { as: 'department',   foreignKey: 'departmentId' });

// ─── Office → Inward / Outward ───────────────────────────────────────────────

Office.hasMany(Inward,  { as: 'inwardsReceived', foreignKey: 'toOfficeId' });
Office.hasMany(Inward,  { as: 'inwardsSentFrom', foreignKey: 'fromOfficeId' });
Office.hasMany(Outward, { as: 'outwardsSent',    foreignKey: 'fromOfficeId' });
Office.hasMany(Outward, { as: 'outwardsReceived',foreignKey: 'toOfficeId' });
Inward.belongsTo(Office,  { as: 'fromOffice', foreignKey: 'fromOfficeId' });
Inward.belongsTo(Office,  { as: 'toOffice',   foreignKey: 'toOfficeId' });
Outward.belongsTo(Office, { as: 'fromOffice', foreignKey: 'fromOfficeId' });
Outward.belongsTo(Office, { as: 'toOffice',   foreignKey: 'toOfficeId' });

// ─── Contact → Inward / Outward ──────────────────────────────────────────────

Contact.hasMany(Inward,  { as: 'inwardsFrom', foreignKey: 'fromContactId' });
Contact.hasMany(Outward, { as: 'outwardsTo',  foreignKey: 'toContactId' });
Inward.belongsTo(Contact,  { as: 'fromContact', foreignKey: 'fromContactId' });
Outward.belongsTo(Contact, { as: 'toContact',   foreignKey: 'toContactId' });

// ─── TransferMode → Inward / Outward ─────────────────────────────────────────

TransferMode.hasMany(Inward,  { as: 'inwards',  foreignKey: 'transferModeId' });
TransferMode.hasMany(Outward, { as: 'outwards', foreignKey: 'transferModeId' });
Inward.belongsTo(TransferMode,  { as: 'transferMode', foreignKey: 'transferModeId' });
Outward.belongsTo(TransferMode, { as: 'transferMode', foreignKey: 'transferModeId' });

// ─── CourierCompany → Inward / Outward ───────────────────────────────────────

CourierCompany.hasMany(Inward,  { as: 'inwards',  foreignKey: 'courierCompanyId' });
CourierCompany.hasMany(Outward, { as: 'outwards', foreignKey: 'courierCompanyId' });
Inward.belongsTo(CourierCompany,  { as: 'courierCompany', foreignKey: 'courierCompanyId' });
Outward.belongsTo(CourierCompany, { as: 'courierCompany', foreignKey: 'courierCompanyId' });

// ─── Inward ↔ Outward (linked correspondence) ────────────────────────────────

Inward.belongsTo(Outward, { as: 'linkedOutward', foreignKey: 'linkedOutwardId' });
Outward.belongsTo(Inward, { as: 'linkedInward',  foreignKey: 'linkedOnwardId' });

// ─── User audit trail (created_by / updated_by) ──────────────────────────────
// Every table except User itself tracks who created/updated each record.

const auditedModels = [Institute, Department, FinancialYear, Office, TransferMode, Contact, CourierCompany, Inward, Outward, InwardOutwardCounter];

auditedModels.forEach(Model => {
  Model.belongsTo(User, { as: 'createdByUser', foreignKey: 'createdBy' });
  Model.belongsTo(User, { as: 'updatedByUser', foreignKey: 'updatedBy' });
  User.hasMany(Model, { as: `${Model.name}CreatedBy`, foreignKey: 'createdBy' });
  User.hasMany(Model, { as: `${Model.name}UpdatedBy`, foreignKey: 'updatedBy' });
});

// ─── InwardOutwardCounter ────────────────────────────────────────────────────

Office.hasMany(InwardOutwardCounter, { as: 'counters', foreignKey: 'officeId' });
InwardOutwardCounter.belongsTo(Office, { as: 'office', foreignKey: 'officeId' });

FinancialYear.hasMany(InwardOutwardCounter, { as: 'counters', foreignKey: 'finYearId' });
InwardOutwardCounter.belongsTo(FinancialYear, { as: 'financialYear', foreignKey: 'finYearId' });

// ─── Exports ──────────────────────────────────────────────────────────────────

module.exports = {
  User,
  Institute,
  Department,
  FinancialYear,
  Office,
  TransferMode,
  Contact,
  CourierCompany,
  Inward,
  Outward,
  InwardOutwardCounter
};