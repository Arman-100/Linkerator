const express = require("express");
const server = express();
const morgan = require("morgan");
server.use(morgan("dev"));
const bodyParser = require("body-parser");
server.use(bodyParser.json());
