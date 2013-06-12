
// 시작 시 시간
var time = process.hrtime();
console.log('time : ' + time);

setTimeout(function() {
	// 실행 시 얼마나 걸렸는 지 확인
	var diff = process.hrtime(time);
	console.log('diff : ' + diff);

	console.log('benchmark took %d nanoseconds', diff[0] * 1e9 + diff[1]);

}, 1000);
