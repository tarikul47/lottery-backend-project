require("dotenv").config("../.env");
const express = require("express");
const app = express();
const { notFoundHandler, ErrorHandler } = require("./error");

// moddileware set
app.use(require("./middleware"));
app.use(require("./routes"));

// middleware define
app.use(notFoundHandler);

//  middleware define
app.use(ErrorHandler);

module.exports = app;
