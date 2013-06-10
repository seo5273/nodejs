/*
client.query ('USE study');
client.query ('SELECT * FROM users', function (error, result, fields) {
	if ( error) {
		console.log ('error');
	}
	else {
		console.log (result);
	}
});
*/

var connect = require ('connect');
var mysql = require ('mysql');
var ejs = require ('ejs');
var fs = require ('fs');

var client = mysql.createConnection ({
	host: 'localhost',
	user: 'test',
	password: '1111'
});

var app = connect();
app.use (connect.logger ('dev'));
app.use (connect.bodyParser ());
app.use (function (req, res, next) {
	if ( req.checkContinue) {
		res.writeContinue ();
	}
	res.end ('hello');
});
var server = app.listen (3000);

server.on ('checkContinue', function (req, res) {
	req.checkContinue = true;
	app (req, res);
});

