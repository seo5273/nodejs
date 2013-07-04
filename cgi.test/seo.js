
var querystring = require('querystring');
var util = require('util');

var qEntry = require('./qEntry');


/*
var q_entry = new qdecoder.Q_ENTRY();

console.log(q_entry.first);

q_entry.put(q_entry, 'seo', 'seok', 4, false);

console.log(typeof q_entry.first);
console.log(q_entry.num);
console.log(q_entry.size);
console.log(q_entry.first.name);
console.log(q_entry.first.data);

console.log('get :' + q_entry.get(q_entry, 'seo', 4, false));
*/

/*
var query_string = process.env.QUERY_STRING;
console.log(query_string);
*/

var Q_CGI_ALL = 0;
var Q_CGI_COOKIE = 1;
var Q_CGI_GET = 2;
var Q_CGI_POST = 3;

var qCgiRequestParse = function (request, method) {

	if (request === null) {
		console.log('test1');
		request = new qEntry.Q_ENTRY();
	}

	if (method === Q_CGI_ALL || method === Q_CGI_GET) {
		var query = qCgiRequestGetQuery(Q_CGI_GET);
		if (query !== null) {
			request = _parse_query(request, query, '=', '&', null);
		}
	}

	return request;
};

var qCgiRequestGetQuery = function (method) {

	return 'seo=1&seok=2&eun=3&temp=1235';
};

var _parse_query = function (request, query, equalchar, sepchar, count) {

	var cnt;			// need modify
	var qs = querystring.parse(query, sepchar, equalchar);
	console.log('query_string: ' + JSON.stringify(qs));

	var name;
	for (name in qs) {
		if (request.putStr(request, name, qs[name], false) === true) cnt++;
	}

	return request;
};

// no used
var _qdecoder_makeword = function (str, stop) {
	var word;
	var len, i;
	return word;
};

var req = qCgiRequestParse(null, 0);
console.log('num: ' + req.num);
console.log('size: ' + req.size);
console.log(req.first);
console.log(req.last);


console.log('---->' + req.getStr(req, 'temp1', function (data, size) {
	console.log('size =======> ' + data + ":" + size);
}));

console.log('---->' + req.getStr(req, 'temp'));

//req.truncate(req);
/*
req.reverse(req);
console.log('num: ' + req.num);
console.log('size: ' + req.size);
console.log(req.first);
console.log(req.last);
*/
