var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookingSchema = new Schema({
	bookingId:{
		type:String,
	},
	showingId:{
		type:String,
	},
	quantity:{
		type:String
	}
	
});

const bookingModel = mongoose.model("booking", bookingSchema);
module.exports = bookingModel;
