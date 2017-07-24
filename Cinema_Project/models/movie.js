var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var movieSchema = new Schema({
	movID:{
		type:String,
	},
	name: {
		type: String,
	},
	classification:{
		type:String,
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
