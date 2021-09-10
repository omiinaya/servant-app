//dependencies
const express = require("express");
const cors = require("cors");

//import sequelize model
const Service = require("../models/Service");

const services = express.Router();
services.use(cors())

//get all services
services.get("/all", function (req, res) {
    Service.findAll().then(data => {
        res.send(data);
    });
});

module.exports = services