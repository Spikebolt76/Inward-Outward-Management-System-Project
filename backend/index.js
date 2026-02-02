const express = require('express');
const app = express();
const startConnection = require("./db/init");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 



// database connection and table-sync :
startConnection();