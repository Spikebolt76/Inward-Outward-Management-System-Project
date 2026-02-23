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

User.belongsTo(Institute, { as: 'institute', foreignKey: 'institute_id' });
User.belongsTo(Department, { as: 'department', foreignKey: 'department_id' });
Institute.hasMany(User, { as: 'users', foreignKey: 'institute_id' });
Department.hasMany(User, { as: 'users', foreignKey: 'department_id' });

// ─── Institute → Department ───────────────────────────────────────────────────

Institute.hasMany(Department, { as: 'departments', foreignKey: 'institute_id' });
Department.belongsTo(Institute, { as: 'institute', foreignKey: 'institute_id' });

// ─── Institute → Office ───────────────────────────────────────────────────────

Institute.hasMany(Office, { as: 'offices', foreignKey: 'institute_id' });
Office.belongsTo(Institute, { as: 'institute', foreignKey: 'institute_id' });

// ─── Department → Office ─────────────────────────────────────────────────────

Department.hasMany(Office, { as: 'offices', foreignKey: 'department_id' });
Office.belongsTo(Department, { as: 'department', foreignKey: 'department_id' });

// ─── FinancialYear → Inward / Outward ────────────────────────────────────────

FinancialYear.hasMany(Inward,  { as: 'inwards',  foreignKey: 'fin_year_id' });
FinancialYear.hasMany(Outward, { as: 'outwards', foreignKey: 'fin_year_id' });
Inward.belongsTo(FinancialYear,  { as: 'financialYear', foreignKey: 'fin_year_id' });
Outward.belongsTo(FinancialYear, { as: 'financialYear', foreignKey: 'fin_year_id' });

// ─── Institute → Inward / Outward ────────────────────────────────────────────

Institute.hasMany(Inward,  { as: 'inwards',  foreignKey: 'institute_id' });
Institute.hasMany(Outward, { as: 'outwards', foreignKey: 'institute_id' });
Inward.belongsTo(Institute,  { as: 'institute', foreignKey: 'institute_id' });
Outward.belongsTo(Institute, { as: 'institute', foreignKey: 'institute_id' });

// ─── Department → Inward / Outward ───────────────────────────────────────────

Department.hasMany(Inward,  { as: 'inwardsToThisDept', foreignKey: 'to_department_id' });
Department.hasMany(Outward, { as: 'outwardsFromThisDept', foreignKey: 'department_id' });
Inward.belongsTo(Department,  { as: 'toDepartment', foreignKey: 'to_department_id' });
Outward.belongsTo(Department, { as: 'department',   foreignKey: 'department_id' });

// ─── Office → Inward / Outward ───────────────────────────────────────────────

Office.hasMany(Inward,  { as: 'inwardsReceived', foreignKey: 'to_office_id' });
Office.hasMany(Inward,  { as: 'inwardsSentFrom', foreignKey: 'from_office_id' });
Office.hasMany(Outward, { as: 'outwardsSent',    foreignKey: 'from_office_id' });
Office.hasMany(Outward, { as: 'outwardsReceived',foreignKey: 'to_office_id' });
Inward.belongsTo(Office,  { as: 'fromOffice', foreignKey: 'from_office_id' });
Inward.belongsTo(Office,  { as: 'toOffice',   foreignKey: 'to_office_id' });
Outward.belongsTo(Office, { as: 'fromOffice', foreignKey: 'from_office_id' });
Outward.belongsTo(Office, { as: 'toOffice',   foreignKey: 'to_office_id' });

// ─── Contact → Inward / Outward ──────────────────────────────────────────────

Contact.hasMany(Inward,  { as: 'inwardsFrom', foreignKey: 'from_contact_id' });
Contact.hasMany(Outward, { as: 'outwardsTo',  foreignKey: 'to_contact_id' });
Inward.belongsTo(Contact,  { as: 'fromContact', foreignKey: 'from_contact_id' });
Outward.belongsTo(Contact, { as: 'toContact',   foreignKey: 'to_contact_id' });

// ─── TransferMode → Inward / Outward ─────────────────────────────────────────

TransferMode.hasMany(Inward,  { as: 'inwards',  foreignKey: 'transfer_mode_id' });
TransferMode.hasMany(Outward, { as: 'outwards', foreignKey: 'transfer_mode_id' });
Inward.belongsTo(TransferMode,  { as: 'transferMode', foreignKey: 'transfer_mode_id' });
Outward.belongsTo(TransferMode, { as: 'transferMode', foreignKey: 'transfer_mode_id' });

// ─── CourierCompany → Inward / Outward ───────────────────────────────────────

CourierCompany.hasMany(Inward,  { as: 'inwards',  foreignKey: 'courier_company_id' });
CourierCompany.hasMany(Outward, { as: 'outwards', foreignKey: 'courier_company_id' });
Inward.belongsTo(CourierCompany,  { as: 'courierCompany', foreignKey: 'courier_company_id' });
Outward.belongsTo(CourierCompany, { as: 'courierCompany', foreignKey: 'courier_company_id' });

// ─── Inward ↔ Outward (linked correspondence) ────────────────────────────────

Inward.belongsTo(Outward, { as: 'linkedOutward', foreignKey: 'linked_outward_id' });
Outward.belongsTo(Inward, { as: 'linkedInward',  foreignKey: 'linked_inward_id' });

// ─── User audit trail (created_by / updated_by) ──────────────────────────────
// Every table except User itself tracks who created/updated each record.

const auditedModels = [Institute, Department, FinancialYear, Office, TransferMode, Contact, CourierCompany, Inward, Outward, InwardOutwardCounter];

auditedModels.forEach(Model => {
  Model.belongsTo(User, { as: 'createdByUser', foreignKey: 'created_by' });
  Model.belongsTo(User, { as: 'updatedByUser', foreignKey: 'updated_by' });
  User.hasMany(Model, { as: `${Model.name}CreatedBy`, foreignKey: 'created_by' });
  User.hasMany(Model, { as: `${Model.name}UpdatedBy`, foreignKey: 'updated_by' });
});

// ─── InwardOutwardCounter ────────────────────────────────────────────────────

Office.hasMany(InwardOutwardCounter, { as: 'counters', foreignKey: 'office_id' });
InwardOutwardCounter.belongsTo(Office, { as: 'office', foreignKey: 'office_id' });

FinancialYear.hasMany(InwardOutwardCounter, { as: 'counters', foreignKey: 'fin_year_id' });
InwardOutwardCounter.belongsTo(FinancialYear, { as: 'financialYear', foreignKey: 'fin_year_id' });

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