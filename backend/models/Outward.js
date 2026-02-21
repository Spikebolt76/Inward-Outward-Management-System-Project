const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Outward = sequelize.define('Outward', {
    OutwardID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    OutwardNo: {
        type: DataTypes.STRING(50),  
        allowNull: false
    },
    OutwardDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    InwardID: {
        type: DataTypes.INTEGER
    },
    InstituteID: {
        type: DataTypes.INTEGER
    },
    DepartmentID: {
        type: DataTypes.INTEGER
    },
    OutwardByPerson: {
        type: DataTypes.STRING(100)
    },
    InOutwardFromToID: {
        type: DataTypes.INTEGER
    },
    LetterForwardedToName: {
        type: DataTypes.STRING(500)
    },
    LetterForwardedToAddress: {
        type: DataTypes.STRING(250)
    },
    LetterForwardedToPlace: {
        type: DataTypes.STRING(100)
    },
    ToContactDetails: {
        type: DataTypes.STRING(250)
    },
    InOutwardModeID: {
        type: DataTypes.INTEGER
    },

    LetterNo: {
        type: DataTypes.STRING(100)
    },
    LetterDate: {
        type: DataTypes.DATEONLY
    },
    Subject: {
        type: DataTypes.TEXT
    },
    SubjectShort: {
        type: DataTypes.STRING(100)
    },
    FileNo: {
        type: DataTypes.STRING(50)
    },
    CourierCompanyID: {
        type: DataTypes.INTEGER
    },
    
    CourierReceiptNo: {
        type: DataTypes.STRING(100)
    },
    CourierReceiptDate: {
        type: DataTypes.DATEONLY
    },
    TrackingID: {
        type: DataTypes.STRING(50)
    },
    DeliveryStatus: {
        type: DataTypes.STRING(50)
    },
    Amount: {
        type: DataTypes.DECIMAL(10, 2)
    },
    Charges: {
        type: DataTypes.DECIMAL(10, 2)
    },
    AmountPaidType: {
        type: DataTypes.STRING(10)
    },
    NoOfCompilation: {
        type: DataTypes.STRING(250)
    },
    CopyTo: {
        type: DataTypes.STRING(250)
    },
    SMSToCSV: {
        type: DataTypes.STRING(250)
    },
    EmailToCSV: {
        type: DataTypes.STRING(250)
    },
    CourierReceiptPath: {
        type: DataTypes.STRING(250)
    },
    CourierAcknowledgePath: {
        type: DataTypes.STRING(250)
    },
    OutwardDocumentPath: {
        type: DataTypes.STRING(250)
    },
    IsReturned: {
        type: DataTypes.BOOLEAN,  
        allowNull: false,
        defaultValue: false
    },
    ReturnDate: {
        type: DataTypes.DATEONLY
    },
    ReturnReason: {
        type: DataTypes.STRING(500)
    },
    ReturnAction: {
        type: DataTypes.STRING(500)
    },
    FromInwardOutwardOfficeID: {
        type: DataTypes.INTEGER,  
        allowNull: false
    },
    ToInwardOutwardOfficeID: {
        type: DataTypes.INTEGER
    },
    FinYearID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    OtherInstitute: {
        type: DataTypes.STRING(150)
    },
    Remarks: {
        type: DataTypes.STRING(500),
        allowNull: true 
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
    tableName: 'Outward',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'Created',
    updatedAt: 'Modified'
});

module.exports = Outward; 