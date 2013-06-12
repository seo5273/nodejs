
var util = require('util');

// heapTotal and heapUsed refer to V8's memory usage.
// $ node memoryUsage.test.js
// { rss: 12849152, heapTotal: 4083456, heapUsed: 2140776 }
console.log(util.inspect(process.memoryUsage()));
