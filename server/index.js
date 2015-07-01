var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//creat application
app = express();

//add middleware for rest api's
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS support //read up on CORS concept
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use('/hello', function(req, res, next){
	res.send('Hello World!');
	next();
});

//connect to mongodb
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function(){

	// load the models
	app.models = require('./models/index');

	//load all routes
	var routes = require('./routes');
	//assigns the controller and its key
	_.each(routes, function(controller, route){
		app.use(route, controller(app, route));
	});

	console.log('Listening on port 3000');
	app.listen(3000);
});

