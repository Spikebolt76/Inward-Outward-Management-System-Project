const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

// Tracks the current inward and outward sequence numbers
// per office per financial year. One row per (office_id, fin_year_id) combination.
// When a new inward/outward entry is created, this counter is incremented
// atomically BEFORE the entry is saved, and the resulting number becomes the entry's no.

const InwardOutwardCounter = sequelize.define('InwardOutwardCounter', {
    counterId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'counter_id'
    },
    officeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'office_id'
    },
    finYearId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'fin_year_id'
    },
    currentInwardNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        field: 'current_inward_no'
        // Starts at Office.openingInwardNo when first created for a fin year.
        // Incremented by 1 each time a new inward entry is saved.
    },
    currentOutwardNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        field: 'current_outward_no'
        // Same logic as currentInwardNo but for outward entries.
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
    tableName: 'inward_outward_counters',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            unique: true,
            fields: ['office_id', 'fin_year_id'],
            name: 'uq_counter_office_finyear'
        }
    ]
});

module.exports = InwardOutwardCounter;