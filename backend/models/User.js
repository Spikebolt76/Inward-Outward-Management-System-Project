const { DataTypes } = require('sequelize'); 
const sequelize = require('../db/connection');


const User = sequelize.define('User', {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    PasswordHash: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    FullName: {
        type: DataTypes.STRING(200),
        allowNull: true
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true 
        }
    },
    PhoneNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Role: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: 'receptionist',
        validate: {
            isIn: [['admin', 'manager', 'receptionist']]  
        }
    },
    IsActive: {
        type: DataTypes.BOOLEAN,  
        allowNull: false,
        defaultValue: true
    }
}, {
    tableName: 'User',
    freezeTableName: true, 
    timestamps: true,   
    createdAt: 'Created',   
    updatedAt: 'Modified'   
});

module.exports = User;