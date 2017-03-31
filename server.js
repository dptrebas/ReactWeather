// Node.js Server Packages

// Load in express
var express = require('express');

// Create our app
var app = express();

// Use this
app.use(express.static('public'));

// Start our web server up
app.listen(3000, function () {
        console.log('Express server is up on port 3000')
});

