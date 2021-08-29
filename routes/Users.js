//dependencies
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//import sequelize model
const User = require("../models/User");

const users = express.Router();
users.use(cors())

//register user
users.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        username: req.body.username,
        password: req.body.password,
        created: today
    }
    User.findOne({
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
                    User.create(userData)
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
users.post('/login', (req, res) => {
    Users.findOne({
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
users.get("/all", function (req, res) {
    Users.findAll().then(user => {
        res.send(user);
    });
});

users.get("/list", function (req, res) {
    User.findAll().then(response => {
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
users.get("/:username", function (req, res) {
    User.findOne({
        where: {
            username: req.params.username
        }
    }).then(user => {
        res.json(user);
    });
});

module.exports = users