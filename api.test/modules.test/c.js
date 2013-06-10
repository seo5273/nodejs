
var EventEmitter = require('events').EventEmitter;

module.exports = new EventEmitter();

console.log('module.id = ' + module.id);
console.log('module.filename = ' + module.filename);
console.log('module.loaded = ' + module.loaded);
console.log('module.parent = ' + module.parent);

setTimeout(function () {
	'use strict';

	module.exports.emit('ready');
}, 1000);
