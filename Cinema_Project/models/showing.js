var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var showingSchema = new Schema({
	cinemaID:{
		type:String,
	},
	movieID:{
		type:String,
	},
	showingTime:{
		type:String
	}
	
});

const showingModel = mongoose.model("showing", showingSchema);
module.exports = showingModel;
