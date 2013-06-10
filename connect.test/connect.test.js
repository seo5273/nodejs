var connect = require ('connect');

var server = connect.createServer ();

server.use (connect.logger());
server.use (connect.query());
server.use (function (request, response) {
	response.writeHead (200, { 'Content-Type': 'text/html' });
	response.write ('<h1>' + JSON.stringify (request.query) + '</h1>');
	response.end ('<h1>Hello Connect Module .. !</h1>');
});
server.use (connect.errorHandler ({
	stack: true,
	message: true,
	dump: true
}));
server.listen (5273, function() {
	console.log ('server running...');
});
