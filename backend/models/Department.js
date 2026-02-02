const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Department = sequelize.define('Department', {
    DepartmentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    DepartmentName: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    InstituteID: {
        type: DataTypes.INTEGER,
        allowNull: true  // Can be NULL due to ON DELETE SET NULL
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    tableName: 'Department',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'Created',
    updatedAt: false  // No Modified column
});

module.exports = Department;