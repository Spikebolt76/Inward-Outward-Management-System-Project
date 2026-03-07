const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const CourierCompany = sequelize.define('CourierCompany', {
    courierCompanyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'courier_company_id'
    },
    companyName: {
        type: DataTypes.STRING(150),
        allowNull: false,
        field: 'company_name'
    },
    contactPersonName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'contact_person_name'
    },
    phoneNo: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'phone_no'
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        validate: { isEmail: true }
    },
    website: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    address: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    defaultRate: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        field: 'default_rate'
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        field: 'is_active'
    },
    remarks: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'created_by'
    },
    updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'updated_by'
    }
}, {
    tableName: 'courier_companies',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = CourierCompany;
