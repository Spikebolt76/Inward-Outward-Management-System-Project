const express = require('express');
const app = express();
const startConnection = require("./db/init");
require('dotenv').config();

// routes
const officeRoutes = require('./routes/office.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/api', officeRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server listening on PORT = ", process.env.PORT);
});

// database connection and table-sync :
startConnection();