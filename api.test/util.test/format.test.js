
var util = require('util');

// If the placeholder does not have a corresponding argument, the placeholder is not replaced.
// $ node format.test.js
// foo:%s
console.log(util.format('%s:%s', 'foo'));

// If there are more arguments than placeholders, 
// the extra arguments are converted to strings with util.inspect() 
// and these strings are concatenated, delimited by a space.
console.log(util.format('%s:%s', 'foo', 'bar', 'baz'));

console.log(util.format(1, 2, 3));
