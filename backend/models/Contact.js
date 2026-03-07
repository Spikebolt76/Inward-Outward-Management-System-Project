const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Contact = sequelize.define('Contact', {
    contactId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'contact_id'
    },
    contactName: {
        type: DataTypes.STRING(150),
        allowNull: false,
        field: 'contact_name'
    },
    contactType: {
        type: DataTypes.ENUM('Client', 'Vendor', 'Department', 'Branch', 'Government', 'Other'),
        allowNull: false,
        defaultValue: 'Other',
        field: 'contact_type'
    },
    personName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'person_name'
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        validate: { isEmail: true }
    },
    phoneNo: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'phone_no'
    },
    address: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    state: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    pincode: {
        type: DataTypes.STRING(20),
        allowNull: true
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
        allowNull: false,
        field: 'created_by'
    },
    updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'updated_by'
    }
}, {
    tableName: 'contacts',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Contact;
