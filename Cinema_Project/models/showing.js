var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var showingSchema = new Schema({
	cinemaId:{
		type:String,
	},
	movieId:{
		type:String,
	},
	showingId:{
		type:String,
	},
	showingTime:{
		type:String
	}
	
});

const showingModel = mongoose.model("showing", showingSchema);
module.exports = showingModel;
