const sequelize = require("./connection");
const {User, Institute, Department, FinancialYear, Inward, Outward,
    InOutwardFromTo, InOutwardMode, InOutwardOffice, CourierCompany} = require("../models/associations")

async function startConnection() {
    try { 
        await sequelize.authenticate();
        console.log("Connected to MySQL database");

        await sequelize.sync();
        console.log("Tables synced");
    } catch(err) {
        console.log("Error: ", err)
    }
};

module.exports = startConnection;