const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

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
	Post.findByIdAndRemove({_id: req.params.id}).then(function(post){
		res.send(post);
	});
});


module.exports = router;

