const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Department = sequelize.define('Department', {
	departmentId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		field: 'department_id'
	},
	departmentName: {
		type: DataTypes.STRING(150),
		allowNull: false,
		field: 'department_name'
	},
	shortName: {
		type: DataTypes.STRING(50),
		allowNull: true,
		field: 'short_name'
	},
	instituteId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		field: 'institute_id'
	},
	headPersonName: {
		type: DataTypes.STRING(100),
		allowNull: true,
		field: 'head_person_name'
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
	tableName: 'departments',
	timestamps: true,
	createdAt: 'created_at',
	updatedAt: 'updated_at'
});

module.exports = Department;
