const express = require('express');
const app = express();
const startConnection = require("./db/init");
require('dotenv').config();

// routes
const officeRoutes = require('./routes/office.route');
const instituteRoutes = require('./routes/institute.route');
const departmentRoutes = require('./routes/department.route');
const modeRoutes = require('./routes/mode.route');
const contactRoutes = require('./routes/contact.route');
const userRoutes = require('./routes/user.route');
const courierRoutes = require('./routes/courier.route');
const inwardRoutes = require('./routes/inward.route')
const outwardRoutes = require('./routes/outward.route')
const finYearRoutes = require('./routes/finYear.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/api/offices', officeRoutes);
app.use('/api/institutes', instituteRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/modes', modeRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);
app.use('/api/couriers', courierRoutes);
app.use('/api/inwards', inwardRoutes);
app.use('/api/outwards', outwardRoutes);
app.use('/api/financialYear', finYearRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server listening on PORT = ", process.env.PORT);
});

// database connection and table-sync :
startConnection();