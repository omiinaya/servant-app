//dependencies
const express = require("express");
const cors = require("cors");

//import sequelize model
const Review = require("../models/Review");

const reviews = express.Router();
reviews.use(cors())

//get all reviews
reviews.get("/all", function (req, res) {
    Review.findAll().then(data => {
        res.send(data);
    });
});

module.exports = reviews