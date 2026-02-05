const sequelize = require("./connection");
const {User, Institute, Department, FinancialYear, Inward, Outward,
    InOutwardFromTo, InOutwardMode, InOutwardOffice, CourierCompany} = require("../models/associations")

// async function initDB() {  ------> Database has been created, no need to run this code
//     try{
//         await sequelize.authenticate();
//         console.log("Connected to MySQL server");

//         await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`)
//         console.log("Database created or already exists");
//     } catch(err) {
//         console.log("Error: ", err);
//     } finally {
//         await sequelize.close();
//     }
// }   

async function startConnection() {
    try { 
        await sequelize.authenticate();
        console.log("Connected to MySQL database");

        await sequelize.sync({ alter: true });
        console.log("Tables synced");
    } catch(err) {
        console.log("Error: ", err)
    }
};

module.exports = startConnection;