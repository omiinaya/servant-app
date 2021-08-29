require("dotenv").config()

//requirements
var express = require("express")
var keepAwake = require("./client/src/assets/addons/wakeUpDyno");
var cors = require("cors")
var path = require("path");
var bodyParser = require("body-parser")

var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

//importing employee model.
var Employees = require('./routes/Employees');

//importing employee routes.
app.use('/api/employees/', Employees);

app.use(express.static('public'));

//serve latest build using express.
app.use(express.static('client/build'));

//page that will be served if route does not exist. 
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
    console.log("Server is running on port: " + port + "!")
    keepAwake("https://servantapp.herokuapp.com/");
})