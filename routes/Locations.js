//dependencies
const express = require("express");
const cors = require("cors");

//import sequelize model
const Location = require("../models/Location");

const locations = express.Router();
locations.use(cors())

//get all requests
locations.get("/all", function (req, res) {
    Location.findAll().then(data => {
        res.send(data);
    });
});

module.exports = locations