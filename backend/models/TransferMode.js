const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const TransferMode = sequelize.define('TransferMode', {
    transferModeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'transfer_mode_id'
    },
    modeName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'mode_name'
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        field: 'is_active'
    },
    displayOrder: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'display_order'
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
    tableName: 'transfer_modes',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = TransferMode;
