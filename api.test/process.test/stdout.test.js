
// stdin 입력 대기
process.stdin.resume();
process.stdin.setEncoding('utf8');

// enter 입력 일 경우 data 이벤트 발생
process.stdin.on('data', function (chunk) {
	process.stdout.write('data: ' + chunk);
});

// ctrl+D 일 경우end 이벤트 발생
process.stdin.on('end', function () {
	process.stdout.write('end');
});
