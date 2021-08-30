//dependencies
const express = require("express");
const cors = require("cors");

//import sequelize model
const Request = require("../models/Review");

const requests = express.Router();
requests.use(cors())

//get all requests
requests.get("/all", function (req, res) {
    Request.findAll().then(data => {
        res.send(data);
    });
});

module.exports = requests