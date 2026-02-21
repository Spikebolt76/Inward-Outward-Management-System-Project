const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Inward = sequelize.define('Inward', {
    InwardID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    InwardNo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    InwardDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    ReceivedDate: {
        type: DataTypes.DATEONLY
    },

    OutwardID: {
        type: DataTypes.INTEGER
    },
    InOutwardModeID: {
        type: DataTypes.INTEGER
    },
    InOutwardFromToID: {
        type: DataTypes.INTEGER
    },
    InstituteID: {
        type: DataTypes.INTEGER
    },
    DepartmentID: {
        type: DataTypes.INTEGER
    },

    FromInwardOutwardOfficeID: {  
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ToInwardOutwardOfficeID: {  
        type: DataTypes.INTEGER,
        allowNull: false  
    },
    InternalOutwardID: {  
        type: DataTypes.INTEGER, 
        allowNull: true
    },
    FinYearID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    ReceiptNo: {
        type: DataTypes.STRING(100), 
    },
    ReceiptDate: {
        type: DataTypes.DATEONLY
    },

    InwardLetterNo: {
        type: DataTypes.STRING(100)
    },
    InwardLetterDate: {
        type: DataTypes.DATEONLY
    },
    LetterFromName: {
        type: DataTypes.STRING(100)
    },
    LetterFromAddress: {
        type: DataTypes.STRING(500)
    },

    FromContactDetails: {  
        type: DataTypes.STRING(250),
        allowNull: true
    },

    Subject: {
        type: DataTypes.TEXT
    },
    SubjectShort: {  
        type: DataTypes.STRING(100),
        allowNull: true
    },
    Description: {
        type: DataTypes.STRING(500)
    },

    ToPersonName: {
        type: DataTypes.STRING(100)
    },
    NoOfCompilation: {
        type: DataTypes.STRING(250)
    },
    CopyTo: {
        type: DataTypes.STRING(250)
    },

    InwardDocumentPath: {
        type: DataTypes.STRING(250)
    },
    CourierCompanyName: {  
        type: DataTypes.STRING(100)
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
    tableName: 'Inward',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'Created',
    updatedAt: 'Modified'
});

module.exports = Inward;