var url = require('url');

var requestParse = function (request, method) {

	if (request === undefined) {
		request = 
	}

};

var requestGetQuery = function (method) {

	if (typeof method !== 'number') {
		return -1;
	}

	// GET
	if (method === 1) {
		var request_method = process.env.REQUEST_METHOD;
		if (request_method && request_method !== 'GET') {
			return null;
		}

		var query_string = process.env.QUERY_STRING;
		if (query_string === undefined) {
			return null;
		}

		var req_uri = process.env.REQUEST_URI;
		var query = null;

		if (query_string === undefined && (req_uri && req_uri !== undefined)) {
			query = url.parse(req_uri).query;
		}
		else {
			query = query_string;
		}

		return query;
	}
	// POST
	else if (method === 2) {

	}
	// COOKIE
	else if (method === 3) {

	}

	return null;
};
