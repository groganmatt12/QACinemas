const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const Booking = require('../models/booking');
const Showing = require('../models/showing');

//////////////////////////////
//			movies		 	//
//////////////////////////////
//get list from the database
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

