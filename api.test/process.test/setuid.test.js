
console.log(process.getuid);

if (process.getuid && process.setuid) {
	console.log('Current uid: ' + process.getuid());
	try {
		// this method blocks while resolving it to a numerical ID.
		//process.setuid(501);
		console.log('New uid: ' + process.getuid());
	}
	catch (err) {
		console.log('Failed to set uid: ' + err);
	}
}
