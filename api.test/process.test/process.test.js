
process.on('exit', function() {
	setTimeout(function () {
		console.log('This will not run');
	}, 0);

	console.log('About to exit.');
});

process.on('uncaughtException', function (err) {
	console.log('Caught exception: ' + err);
});

setTimeout(function() {
	console.log('This will still run.');
}, 500);

nonexitentFunc();
console.log('This will not run.');
