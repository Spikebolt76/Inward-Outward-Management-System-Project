const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

// Role definitions:
// SuperAdmin — full system access, spans all institutes
// Admin      — manages master data within their institute
// Operator   — creates and edits inward/outward entries
// Viewer     — read-only access

const User = sequelize.define('User', {
	userId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		field: 'user_id'
	},
	fullName: {
		type: DataTypes.STRING(150),
		allowNull: false,
		field: 'full_name'
	},
	username: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true
	},
	passwordHash: {
		type: DataTypes.STRING(255),
		allowNull: false,
		field: 'password_hash'
	},
	email: {
		type: DataTypes.STRING(100),
		allowNull: true,
		unique: true,
		validate: { isEmail: true }
	},
	phoneNo: {
		type: DataTypes.STRING(20),
		allowNull: true,
		field: 'phone_no'
	},
	role: {
		type: DataTypes.ENUM('SuperAdmin', 'Admin', 'Operator', 'Viewer'),
		allowNull: false,
		defaultValue: 'Operator'
	},
	instituteId: {
		type: DataTypes.INTEGER,
		allowNull: true, // null = SuperAdmin (spans all institutes)
		references: { model: 'institutes', key: 'institute_id' },
		field: 'institute_id'
	},
	departmentId: {
		type: DataTypes.INTEGER,
		allowNull: true,
		references: { model: 'departments', key: 'department_id' },
		field: 'department_id'
	},
	isActive: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true,
		field: 'is_active'
	},
	lastLoginAt: {
		type: DataTypes.DATE,
		allowNull: true,
		field: 'last_login_at'
	},
	remarks: {
		type: DataTypes.STRING(500),
		allowNull: true
	}
}, {
	tableName: 'users',
	timestamps: true,
	createdAt: 'created_at',
	updatedAt: 'updated_at'
	// No created_by/updated_by to avoid circular self-reference.
	// First SuperAdmin is seeded directly into the DB.
});

module.exports = User;
