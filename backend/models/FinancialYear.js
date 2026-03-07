const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const FinancialYear = sequelize.define('FinancialYear', {
    finYearId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'fin_year_id'
    },
    yearName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        field: 'year_name'
        // e.g. "2024-25"
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'start_date'
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'end_date'
    },
    isCurrent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'is_current'
        // Only one record should have is_current = true at a time.
        // Enforce this in application logic when switching years.
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
    tableName: 'financial_years',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = FinancialYear;
