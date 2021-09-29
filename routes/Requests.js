//dependencies
const express = require("express");
const cors = require("cors");

//import sequelize model
const Request = require("../models/Request");

const requests = express.Router();
requests.use(cors())

//get all requests
requests.get("/all", function (req, res) {
    Request.findAll().then(data => {
        res.send(data);
    });
});

//create new request
requests.post('/create', (req, res) => {
    //data to send to db
    const today = new Date()
    const requestData = {
        //edit this to match necessary data.
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        birthdate: req.body.birthdate,
        username: req.body.username,
        password: req.body.password,
        created: today
    }
    Request.create(requestData)
        .then(request => {
            console.log(request)
            //edit this to log relevant data.
            res.json('request has been created.')
        })
        .catch(err => {
            res.send("error: " + err)
        })
})

module.exports = requests