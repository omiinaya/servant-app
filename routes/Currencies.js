//dependencies
const express = require("express");
const cors = require("cors");

//import sequelize model
const Currency = require("../models/Request");

const currencies = express.Router();
currencies.use(cors())

//get all requests
currencies.get("/all", function (req, res) {
    Currency.findAll().then(data => {
        res.send(data);
    });
});

module.exports = currencies