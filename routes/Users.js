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
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
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
    User.findOne({
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
                console.log('User does not exist')
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
            console.log(err)
        })
})

//find all users
users.get("/all", function (req, res) {
    User.findAll().then(user => {
        res.send(user);
    });
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