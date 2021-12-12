const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// moddileware set
const middleware = [morgan("dev"), cors(), express.json()];

module.exports = middleware;