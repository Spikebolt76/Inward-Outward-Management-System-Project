const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');


const InOutwardMode = sequelize.define('InOutwardMode', {
    InOutwardID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    InOutwardName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    },
    Sequence: {
        type: DataTypes.DECIMAL(18,2)
    },
    Remarks: {
        type: DataTypes.STRING(500)
    },
    
    CreatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UpdatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'InOutwardMode',
    freezeTableName: true, 
    timestamps: true,
    createdAt: 'Created',
    updatedAt: 'Modified'
});

module.exports = InOutwardMode;