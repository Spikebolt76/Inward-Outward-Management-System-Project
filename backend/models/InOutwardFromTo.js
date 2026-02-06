const { DataTypes } = require('sequelize'); 
const sequelize = require('../db/connection');

const InOutwardFromTo = sequelize.define('InOutwardFromTo', {
    InOutwardFromToID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    InOutwardFromToName: {
        type: DataTypes.STRING(100)
    },
    PersonName: {
        type: DataTypes.STRING(100)
    },
    Address: { 
        type: DataTypes.STRING(500)
    },
    Place: {
        type: DataTypes.STRING(100)
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
    tableName: 'InOutwardFromTo',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'Created',
    updatedAt: 'Modified'
});

module.exports = InOutwardFromTo;