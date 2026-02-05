const { DataTypes } = require('sequelize'); 
const sequelize = require('../db/connection');

const InOutwardOffice = sequelize.define('InOutwardOffice', {
    InOutwardOfficeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    OfficeName: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    InstituteID: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    DepartmentID: {
        type: DataTypes.INTEGER,
        //allowNull: false
    },
    OpeningDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    OpeningInwardNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    OpeningOutwardNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
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
    tableName: 'InOutwardOffice',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'Created',
    updatedAt: 'Modified'
});

module.exports = InOutwardOffice;