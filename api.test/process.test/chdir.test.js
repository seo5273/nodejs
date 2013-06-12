
// 현재 디렉토리
console.log('current working dirctory: ' + process.cwd());

try {
	// 디렉토리 변경 && 실패시 throws an exception
	process.chdir('/tmp');
	console.log('change directory: ' + process.cwd());
}
catch (err) {
	console.log('chdir: ' + err);
}
