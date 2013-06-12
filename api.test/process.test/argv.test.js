
// 프로세스 실행 시 argv 출력
process.argv.forEach(function(val, index, array) {
	console.log(index + ': ' + val);
	console.log(array);
});
