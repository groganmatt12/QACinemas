var express = require("express");
var reactViews = require('express-react-views');
var app = express();

app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

app.use(express.static('public'));

app.get ('/', function(req,res){
	res.render('');
})

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("example running on 8081")
})