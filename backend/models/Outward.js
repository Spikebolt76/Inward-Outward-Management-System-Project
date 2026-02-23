const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Outward = sequelize.define('Outward', {
    outwardId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'outward_id'
    },
    outwardNo: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'outward_no'
        // Not globally unique — resets per financial year per institute.
        // Composite unique enforced via index: (outward_no, fin_year_id, institute_id)
    },
    outwardDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'outward_date'
    },

    // --- Scope ---
    instituteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'institutes', key: 'institute_id' },
        field: 'institute_id'
    },
    finYearId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'financial_years', key: 'fin_year_id' },
        field: 'fin_year_id'
    },

    // --- Office routing ---
    fromOfficeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'offices', key: 'office_id' },
        field: 'from_office_id'
    },
    toOfficeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'offices', key: 'office_id' },
        field: 'to_office_id'
    },

    // --- Recipient (FK preferred; fallback plain text for one-time recipients) ---
    toContactId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'contacts', key: 'contact_id' },
        field: 'to_contact_id'
    },
    toName: {
        type: DataTypes.STRING(150),
        allowNull: true,
        field: 'to_name'
    },
    toAddress: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'to_address'
    },
    toPhone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'to_phone'
    },
    toEmail: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'to_email'
    },

    // --- Dispatched by ---
    dispatchedByName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'dispatched_by_name'
    },
    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'departments', key: 'department_id' },
        field: 'department_id'
    },

    // --- Transfer mode ---
    transferModeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'transfer_modes', key: 'transfer_mode_id' },
        field: 'transfer_mode_id'
    },

    // --- Courier details (only when mode = Courier) ---
    courierCompanyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'courier_companies', key: 'courier_company_id' },
        field: 'courier_company_id'
    },
    trackingNo: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'tracking_no'
    },
    courierReceiptNo: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'courier_receipt_no'
    },
    courierReceiptDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'courier_receipt_date'
    },
    courierCharges: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        field: 'courier_charges'
    },
    chargesPaidBy: {
        type: DataTypes.ENUM('Cash', 'Account', 'ToPay', 'Prepaid'),
        allowNull: true,
        field: 'charges_paid_by'
    },
    deliveryStatus: {
        type: DataTypes.ENUM('Pending', 'InTransit', 'Delivered', 'Returned', 'Failed'),
        allowNull: false,
        defaultValue: 'Pending',
        field: 'delivery_status'
    },

    // --- Letter/document details ---
    letterNo: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'letter_no'
    },
    letterDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'letter_date'
    },
    subject: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    subjectShort: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'subject_short'
    },
    fileNo: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'file_no'
    },

    // --- Attachments ---
    documentPath: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'document_path'
    },
    receiptPath: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'receipt_path'
    },
    acknowledgePath: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'acknowledge_path'
    },

    // --- Return handling ---
    isReturned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'is_returned'
    },
    returnDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'return_date'
    },
    returnReason: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'return_reason'
    },
    returnAction: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'return_action'
    },

    // --- Linked inward (the original inward this outward replies to) ---
    linkedInwardId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'inwards', key: 'inward_id' },
        field: 'linked_inward_id'
    },

    // --- Misc ---
    copyTo: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'copy_to'
    },
    noOfEnclosures: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'no_of_enclosures'
    },
    smsTo: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'sms_to'
    },
    emailTo: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'email_to'
    },
    remarks: {
        type: DataTypes.STRING(500),
        allowNull: true
    },

    // --- Audit ---
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'user_id' },
        field: 'created_by'
    },
    updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'user_id' },
        field: 'updated_by'
    }
}, {
    tableName: 'outwards',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            unique: true,
            fields: ['outward_no', 'fin_year_id', 'institute_id'],
            name: 'uq_outward_no_year_institute'
        }
    ]
});

module.exports = Outward;
