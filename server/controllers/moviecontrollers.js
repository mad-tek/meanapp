var restful = require('node-restful'); //read up on node-restful

module.exports = function(app, route){

	//setup the controller for REST.
	var rest = restful.model(
		'movie',
		app.models.movie
		).methods(['get', 'put', 'post', 'delete']);

	//register this endpoint with the application
	rest.register(app, route);

	//return the middleware
	return function(req, res, next){
		
	console.log('hello from moviecontroller');
		next();
	};
};