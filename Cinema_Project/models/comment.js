//comment.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	postid: {
		type: String,
		require: true
	},
   	name: {
        type: String,
        require: true
   	},
   	comment: {
        type: String,
        require: true
   	}
});

//Export mongoose model
const CommentModel = mongoose.model("comment", commentSchema);
module.exports = CommentModel;
