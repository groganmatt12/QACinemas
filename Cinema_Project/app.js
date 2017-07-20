//necessary imports
var express = require("express");
var app = express();
var mongoose = require('mongoose');
var MovieModel = require('./models/movies');


//setting statics
app.use(express.static('public'));

var mongoDB = 'mongodb://127.0.0.1:27017/local';
mongoose.connect(mongoDB);
var db = mongoose.connection;
var Movies = []; 
var MovieArray =[];

//console.log('mongoose readyState is ' + mongoose.connection.readyState);


app.get ('/*', function(req,res){
	res.sendFile(__dirname + "/public/index.html");
})


var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("example running on 8081");
})



db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function callback () {
	console.log('\n \n Connected To The Mongo Database');
	
	mongoose.connection.db.listCollections().toArray(function(err, names) {
		if (err) {
			console.log(err);
		}
		else {
			names.forEach(function(e,i,a) {
				
				console.log("--->>", e.name);
			});
		}
	});
	Movies = db.collection('Movies');
	//console.log("-----" + Movies);
	var mov = Movies.find({}).toArray(function(err,docs){
		MovieArray = docs;
		console.log(MovieArray);
		console.log("||||||||||||||||||||");
		console.log("||||||||||||||||||||");
		
	});
		
});

app.get("/test",(req,res)=>{
	const r = (() => {
	  return MovieArray;
  })();
  if (typeof r !== 'undefined') {
    res.json(r);
  } else {
    res.json([]);
  }
});




