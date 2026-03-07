const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Office = sequelize.define('Office', {
    officeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'office_id'
    },
    officeName: {
        type: DataTypes.STRING(250),
        allowNull: false,
        field: 'office_name'
    },
    instituteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'institute_id'
    },
    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'department_id'
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        validate: { isEmail: true }
    },
    phoneNo: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'phone_no'
    },
    address: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    openingDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'opening_date'
    },
    openingInwardNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        field: 'opening_inward_no'
    },
    openingOutwardNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        field: 'opening_outward_no'
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
        allowNull: true,
        defaultValue: 1,
        field: 'created_by'
    },
    updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
        field: 'updated_by'
    }
}, {
    tableName: 'offices',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Office;
