const express = require('express');
const router = express.Router();

//import mongoose models
const Movie = require('../models/movie');
const Booking = require('../models/booking');
const Showing = require('../models/showing');
const Post = require('../models/post');
const Comment = require('../models/comment');


//////////////////////////////
//			movies		 	//
//////////////////////////////

//get list from the database: READ
router.get('/movies', function(req,res,next){
	Movie.find({}).then(function(post){
		res.send(post);
	});
});

//add a new item:: CREATE
router.post('/movies', function(req,res,next){
	Movie.create(req.body).then(function(post){
		res.send(post);
	}).catch(next);
});

//update a item:: UPDATE
router.put('/movies/:id', function(req,res,next){
	Movie.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		Movie.findOne({_id: req.params.id}).then(function(post){
			res.send(post);
		});	
	});
	/*res.send({type: 'PUT'});*/
});

//delete a item:: DELETE
router.delete('/movies/:id', function(req,res,next){
	Movie.findByIdAndRemove({_id: req.params.id}).then(function(post){
		res.send(post);
	});
});

//////////////////////////////
//			bookings	 	//
//////////////////////////////

router.get('/bookings', function(req,res,next){
	Booking.find({}).then(function(post){
		res.send(post);
	});
});

//add a new item:: CREATE
router.post('/bookings', function(req,res,next){
	Booking.create(req.body).then(function(post){
		res.send(post);
	}).catch(next);
});

//update a item:: UPDATE
router.put('/bookings/:id', function(req,res,next){
	Booking.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		Booking.findOne({_id: req.params.id}).then(function(post){
			res.send(post);
		});	
	});
	/*res.send({type: 'PUT'});*/
});

//delete a item:: DELETE
router.delete('/bookings/:id', function(req,res,next){
	Booking.findByIdAndRemove({_id: req.params.id}).then(function(post){
		res.send(post);
	});
});

//////////////////////////////
//			showings	 	//
//////////////////////////////

router.get('/showings', function(req,res,next){
	Showing.find({}).then(function(post){
		res.send(post);
	});
});

//add a new item:: CREATE
router.post('/showings', function(req,res,next){
	Showing.create(req.body).then(function(post){
		res.send(post);
	}).catch(next);
});

//update a item:: UPDATE
router.put('/showings/:id', function(req,res,next){
	Showing.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		Showing.findOne({_id: req.params.id}).then(function(post){
			res.send(post);
		});	
	});
	/*res.send({type: 'PUT'});*/
});

//delete a item:: DELETE
router.delete('/showings/:id', function(req,res,next){
	Showing.findByIdAndRemove({_id: req.params.id}).then(function(post){
		res.send(post);
	});
});
module.exports = router;

////////
//get a list of items from db:: READ
router.get('/posts', function(req,res,next){
	Post.find({}).then(function(posts){
		res.send(posts);
	});
/*	res.send({type: 'GET'});*/
});

//add a new item:: CREATE
router.post('/posts', function(req,res,next){
	/*var post = new Post(req.body);
	post.save();*/
	//create new instance locally, and save to Post database. returns promise.
	Post.create(req.body).then(function(post){
		res.send(post);
	}).catch(next);
});

//update a item:: UPDATE
router.put('/posts/:id', function(req,res,next){
	Post.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		Post.findOne({_id: req.params.id}).then(function(post){
			res.send(post);
		});	
	});
	/*res.send({type: 'PUT'});*/
});

//delete a item:: DELETE
router.delete('/posts/:id', function(req,res,next){
	Post.findByIdAndRemove({_id: req.params.id}).then(function(post){
		res.send(post);
	});
	/*res.send({type: 'DELETE'});*/
});

//Comments
router.get('/comments', function(req,res,next){
	Comment.find({}).then(function(comments){
		res.send(comments);
	});
});

router.get('/comments/:postid', function(req,res,next){
	let reqPostID = req.params.postid.toString();
	//postid : reqPostID
	Comment.find({postid :{ $eq:reqPostID }}).then(function(commments){
		res.send(commments);
	});
});


router.post('/comments', function(req,res,next){
	Comment.create(req.body).then(function(comment){
		res.send(comment);
	});
});

//from commentid passed in via url, in fetch(), it finds the comment and removes it, then sends it back as response.
router.delete('/comments/:commentID', function(req, res, next){
	Comment.findByIdAndRemove({_id: req.params.commentID}).then(function(comment){
		res.send(comment);
	});
});


