//initialize environment variables.
require("dotenv").config()

//requiring necessary packages.
var express = require("express")
var cors = require("cors")
var path = require("path");
var keepAwake = require("./client/src/assets/addons/wakeUpDyno");

//initializing express web server.
var app = express()

//defining port for the web server.
var port = process.env.PORT || 5000

//enabling cors on the web server.
app.use(cors())

//importing user model.
var Users = require('./routes/Users');

//importing user routes.
app.use('/api/users/', Users);

//exposing the public folder to the public.
app.use(express.static('public'));

//serving production build to the public.
app.use(express.static('client/build'));

//serving a page in case a route does not exist.
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

//initialize express listener.
app.listen(port, () => {
    console.log("Server is running on port: " + port + "!")
    keepAwake("https://servantapp.herokuapp.com/");
})