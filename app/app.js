require("dotenv").config("../.env");
const express = require("express");
const { notFoundHandler, ErrorHandler } = require("./error");
const app = express();

// database import 
const myDb = require('../db/db');
//myDb.create('user 1', 10);
//myDb.create('user 2', 10);
//myDb.create('user 3', 10);

//const bulkTicket = myDb.bulkCraete('user 4', 10, 5);
//console.log('Bulk Tickets',bulkTicket);

//const tickets = myDb.find();
//console.log('All Tickets',tickets);

//const winners = myDb.draw(3);
//console.log('Winners',winners);

// moddileware set
app.use(require("./middleware"));
app.use(require("./routes"));

// middleware define
app.use(notFoundHandler);

//  middleware define
app.use(ErrorHandler);

module.exports = app;
