const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Institute = sequelize.define('Institute', {
    InstituteID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    InstituteName: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    Address: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    tableName: 'Institute',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'Created',
    updatedAt: false  // No Modified column
});

module.exports = Institute;