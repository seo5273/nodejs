
if (process.getgid && process.setgid) {
	console.log('Current gid: ' + process.getgid());
	try {
		// this method blocks while resolving it to a numerical ID.
		process.setgid(501);
		console.log('New gid: ' + process.getgid());
	}
	catch (err) {
		console.log('Failed to set gid: ' + err);
	}
}
