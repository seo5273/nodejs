var url = require('url');

var temp = '/p/a/t/h?query=string#hash';

url.parse(temp);

console.log(JSON.stringify(url.parse(temp)));
