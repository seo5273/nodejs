
// $ node isRegExp.test.js
// true
// true
// false

var util = require('util');

console.log(util.isRegExp(/some regexp/));

console.log(util.isRegExp(new RegExp('another regexp')));

console.log(util.isRegExp({}));
