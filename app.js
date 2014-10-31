// app.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    = process.env.PORT || 8085;

// ROUTES
// ==============================================

// get an instance of router
var router = express.Router();

// home page route (http://localhost:8080)
//router.get('/', function(req, res) {
	//res.send('im the home page!');	
//});

app.use(express.static(__dirname + '/public/app'));


// apply the routes to our application
//app.use('/', router);
// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);