var fs = require('fs');

fs.readFile('/etc/hosts', 'utf8', function (err, data) {
	  if (err) throw err;
	  console.log(data);
});
