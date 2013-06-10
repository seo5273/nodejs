#!/usr/bin/env node

console.time('start');
for (var i = 0; i < 100; i++) {
	;
}
console.timeEnd('start');

console.trace('seo');

console.assert(true, 'false message');
