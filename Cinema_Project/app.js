//necessary imports
var express = require("express");
var app = express();
var mongoose = require('mongoose');

const bodyParser = require('body-parser');
const routes = require('./routes/api');


//Connect to the Database and set up mongoose stuff
var mongoDB = 'mongodb://127.0.0.1:27017/MovieDB';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;


//setting statics
app.use(express.static('public'));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api', routes);


app.use(function(err, req, res, next){
	res.status(422).send({error: err.message});
})


//Pathing for the main pages 
app.get ('/*', function(req,res){
	res.sendFile(__dirname + "/public/index.html");
})


//initialise the server
var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("server running on 8081");
})

