
// $ node isArray.test.js
// true
// true
// false

var util = require('util');

console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));
