
process.on('SIGHUP', function() {
	console.log('Got SIGHUP signal.');
});

// SIGHUP 이벤트가 발생 & 수신 되는 지 잠깐 대기 해 본다.
setTimeout(function() {
	console.log('Exiting.');
	process.exit(0);
}, 100);

process.kill(process.pid, 'SIGHUP');
