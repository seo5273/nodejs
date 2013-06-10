var connect = require ('connect');

var app = connect();
app.use (connect.logger('dev'));
app.use (connect.static('public'));
app.use (connect.query());
app.use (getRequest);

function getRequest (req, res) {
	res.end('hello world\n');
}

app.listen(3000, function () {
	console.log ('seokeun');
	app.request();
});
