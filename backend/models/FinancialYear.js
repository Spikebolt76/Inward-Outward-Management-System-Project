const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const FinancialYear = sequelize.define('FinancialYear', {
    FinYearID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    YearName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    StartDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    EndDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    tableName: 'FinancialYear',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'Created',
    updatedAt: false  // No Modified column
});

module.exports = FinancialYear;