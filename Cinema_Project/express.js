//necessary imports
var express = require("express");
var app = express();



//setting statics
app.use(express.static('public'));




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