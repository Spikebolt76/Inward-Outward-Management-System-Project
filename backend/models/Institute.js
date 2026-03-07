const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Institute = sequelize.define('Institute', {
	instituteId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		field: 'institute_id'
	},
	instituteName: {
		type: DataTypes.STRING(250),
		allowNull: false,
		field: 'institute_name'
	},
	shortName: {
		type: DataTypes.STRING(50),
		allowNull: true,
		field: 'short_name'
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
	tableName: 'institutes',
	timestamps: true,
	createdAt: 'created_at',
	updatedAt: 'updated_at'
});

module.exports = Institute;
