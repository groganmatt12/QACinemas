//necessary imports
var express = require("express");
var app = express();
var mongoose = require('mongoose');
var MovieModel = require('./models/movies');
var fs = require("fs");

//setting statics
app.use(express.static('public'));

//Connect to the Database and set up mongoose stuff
var mongoDB = 'mongodb://127.0.0.1:27017/local';
mongoose.connect(mongoDB);

//initialise variables
var db = mongoose.connection;
var Movies = []; 
var MovieArray =[];


//initisalise empty json file
var myJson = '';



// And then, to read it...
var myJson = require("./MovieDetails.json");


//console.log('mongoose readyState is ' + mongoose.connection.readyState);
//app.get('/test', function(req, res){
 // res.json(myJson);
  
//});

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


//code for if the database connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//code to be run once the database connects
db.once('open', function callback () {
	
	//console info that the connection has been established
	console.log('\n \n Connected To The Mongo Database');
	
	//listing all the collections in the database
	mongoose.connection.db.listCollections().toArray(function(err, names) {
		if (err) {
			//error handling
			console.log(err);
		}
		else {
			names.forEach(function(e,i,a) {
				console.log("--->>", e.name);
			});
		}
	});
	
	//assign the movies collection to the Movies variable
	Movies = db.collection('Movies');
	
	
	//
	var mov = Movies.find({}).toArray(function(err,docs){
		//console.log(docs);
		MovieArray = docs;
		myJson = MovieArray;
		
		//check the data
		console.log(MovieArray);
		
		//writes the data from Movies to the Json file
		fs.writeFile( "MovieDetails.json", JSON.stringify( myJson ), "utf8");
		//make sure everythings there
		console.log(myJson);
		
	});
	
});
