var mongoose = require('mongoose');


//create the schema
var MovieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});

//export model schema
module.exports = MovieSchema;