
/*
process.nextTick(function() {
	console.log('nextTick callback');
});
*/

/*
function MyThing(options) {
	this.setupOptions(options);

	process.nextTick(function() {
		this.startDoingStuff();
	}.bind(this));
}

var thing = new MyThing();
thing.getReadyForStuff();
*/

// process.maxTickDepth
// Number Default = 1000
/*
process.nextTick(function foo() {
	process.nextTick(foo);
});
*/

console.log('process.maxTickDepth :' + process.maxTickDepth);
