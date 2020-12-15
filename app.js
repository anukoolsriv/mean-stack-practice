var express = require('express');
var path = require('path');

var app = express();

app.set('port',3000);


app.use('/css', function(req, res, next){
	console.log(req.method, req.url);
	next();
});

// app.use('/public', express.static(path.join(__dirname, 'public'))); 
//check if the route (with public) matches in the files in public folder, if matches, will deliver the file directly to browser

app.use(express.static(path.join(__dirname, 'public'))); 

// app.get('/', function(req, res){
// 	console.log('Get the message');
// 	res
// 		 .status(404)
// 		.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

 
app.get('/json', function(req, res){
	console.log('Get the message');
	res
		.status(200)
		.json( {"jsonData" : true});
});

app.get('/file', function(req, res){
	console.log('Get the file');
	res
		.status(200)
		.sendFile(path.join(__dirname, 'app.js')); 
});


var server = app.listen(app.get('port'), function () {
	var port = server.address().port;
	console.log('Magic happens on ' + port);
});

// console.log('Magic still happens');
