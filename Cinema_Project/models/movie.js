var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var movieSchema = new Schema({
	id:{
		type:String,
	},
	name: {
		type: String,
	},
	classification:{
		type:String,
	},
	genre:{
		type:[String],
	},
	actors:{
		type:[String],
	},
	director:{
		type:String,
	},
	trailer:{
		type:String,
	},
	releaseDate:{
		type:String,
	},
	carousel:{
		type:String,
	},
	img:{
		type:String,
	},
	description:{
		type:String,
	},
	overlayText:String
	
});

const movieModel = mongoose.model("movie", movieSchema);
module.exports = movieModel;
