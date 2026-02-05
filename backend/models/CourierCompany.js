const { DataTypes } = require('sequelize'); 
const sequelize = require('../db/connection');

const CourierCompany = sequelize.define('CourierCompany', {
    CourierCompanyID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CourierCompanyName: { 
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ContactPersonName: {
        type: DataTypes.STRING(100)
    },
    PhoneNo: {
        type: DataTypes.STRING(50)
    },
    Email: {
        type: DataTypes.STRING(100),
        validate: {
            isEmail: true
        }
    },
    Website: {                      
        type: DataTypes.STRING(100),
        allowNull: true
    },
    Address: {
        type: DataTypes.STRING(500)
    },
    DefaultRate: {                   
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
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
    tableName: 'CourierCompany',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'Created',
    updatedAt: 'Modified'
});

module.exports = CourierCompany;