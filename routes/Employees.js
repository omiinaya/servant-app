//dependencies
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//import sequelize model
const Employee = require("../models/Employee");

const employees = express.Router();
employees.use(cors())

//register user
employees.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        username: req.body.username,
        password: req.body.password,
        created: today
    }
    Employee.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (user) {
                res.json({
                    error: "User already exists"
                })
            } else {
                console.log("success!")
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    Employee.create(userData)
                        .then(user => {
                            res.json({ status: user.username + ' registered' })
                        })
                        .catch(err => {
                            res.send("error: " + err)
                        })
                })
            }
        })
        .catch(err => {
            res.send("error: " + err)
        })
})

//login user
employees.post('/login', (req, res) => {
    Employee.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (user) {
                var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
                if (passwordIsValid) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: "User does not exist" })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

//find all users
employees.get("/all", function (req, res) {
    Employee.findAll().then(user => {
        res.send(user);
    });
});

employees.get("/list", function (req, res) {
    Employee.findAll().then(response => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var test = [];
        for (var i = 0; i < response.length; i++) {
            test.push({
                id: response[i].id,
                text: response[i].FULL_NAME
            });
        }
        test.sort((a, b) => (a.text > b.text) ? 1 : -1)
        var data = {
            'status': 'success',
            'records': test
        };
        var json = JSON.stringify(data);
        res.write(json);
        res.end();
    })
});

//find user by username
employees.get("/:username", function (req, res) {
    Employee.findOne({
        where: {
            username: req.params.username
        }
    }).then(user => {
        res.json(user);
    });
});

module.exports = employees