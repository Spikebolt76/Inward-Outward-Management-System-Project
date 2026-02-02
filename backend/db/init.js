const sequelize = require("./connection");

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

        await sequelize.sync();
        console.log("Tables synced");
    } catch(err) {
        console.log("Error: ", err)
    }
};

module.exports = startConnection;