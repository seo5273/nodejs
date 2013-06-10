#!/usr/bin/env node

var timeoutId1,
	timeoutId2;

timeoutId1 = setTimeout (function () {
	console.log('setTimeout callback()');
}, 1000);

if (timeoutId1) {
	//clearTimeout (timeoutId1);
}

timeoutId2 = setInterval (function () {
	console.log('setInterval callback()');
	console.log(Date.now());
}, 1000);

setImmediate (function () {
	console.log('setImmediate callback()');
});
