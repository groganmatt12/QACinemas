var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var movieSchema = new Schema({
	id:{
		type:Number,
		required:true,
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
	genre:{
		type:Array,
	},
	actors:{
		type:Array,
	},
	trailer:{
		type:String,
	},
	releaseDate:{
		type:Date,
	},
	carousel:{
		type:String,
	},
	image:{
		type:String,
	},
	description:{
		type:String,
	},
	overlayText:String
	
});

module.exports = mongoose.model('MovieModel', movieSchema);
