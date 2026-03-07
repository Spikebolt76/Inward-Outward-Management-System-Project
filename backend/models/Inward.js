const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Inward = sequelize.define('Inward', {
    inwardId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'inward_id'
    },
    inwardNo: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'inward_no'
        // Not globally unique — resets per financial year per institute.
        // Composite unique enforced via index: (inward_no, fin_year_id, institute_id)
    },
    inwardDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'inward_date'
    },
    receivedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'received_at'
    },

    // --- Scope ---
    instituteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'institute_id'
    },
    finYearId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'fin_year_id'
    },

    // --- Office routing ---
    fromOfficeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'from_office_id'
    },
    toOfficeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'to_office_id'
    },

    // --- Sender (FK preferred; fallback plain text for one-time senders) ---
    fromContactId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'from_contact_id'
    },
    fromName: {
        type: DataTypes.STRING(150),
        allowNull: true,
        field: 'from_name'
    },
    fromAddress: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'from_address'
    },
    fromPhone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'from_phone'
    },

    // --- Internal recipient ---
    toPersonName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'to_person_name'
    },
    toDepartmentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'to_department_id'
    },

    // --- Transfer mode ---
    transferModeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'transfer_mode_id'
    },

    // --- Courier (only when mode = Courier) ---
    courierCompanyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'courier_company_id'
    },
    trackingNo: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'tracking_no'
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
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    // --- Receipt ---
    receiptNo: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'receipt_no'
    },
    receiptDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'receipt_date'
    },

    // --- Attachment ---
    documentPath: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'document_path'
    },

    // --- Linked outward (reply/forward dispatched in response to this inward) ---
    linkedOutwardId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'linked_outward_id'
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
    remarks: {
        type: DataTypes.STRING(500),
        allowNull: true
    },

    // --- Audit ---
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
    tableName: 'inwards',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            unique: true,
            fields: ['inward_no', 'fin_year_id', 'institute_id'],
            name: 'uq_inward_no_year_institute'
        }
    ]
});

module.exports = Inward;
