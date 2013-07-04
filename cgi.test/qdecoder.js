
var util = require('util');

/*
var Q_ENTOBJ = {
	name: undefined,
	data: undefined,
	size: 0,
	next: null
};
*/

function Q_ENTOBJ() {
	var name;
	var data;
	var size;
	var next;
};

function Q_ENTRY() {
	this.num = 0;
	this.size = 0;
	this.first = null;
	this.last = null;
}
exports.Q_ENTRY = Q_ENTRY;

Q_ENTRY.prototype.lock = function () {

};

Q_ENTRY.prototype.unlock = function () {

};

Q_ENTRY.prototype.put = function (entry, name, data, size, replace) {

	if (entry === undefined || name === undefined || data === undefined || (typeof size !== 'number' || size <= 0)) {
		return false;
	}

	var obj = new Q_ENTOBJ();
	obj.name = name;
	obj.data = data;
	obj.size = size;
	obj.next = null;

	if (typeof replace === 'boolean' && replace === true) {
		_remove(entry, name);
	}

	if (entry.first === null) {
		entry.first = entry.last = obj;
	}
	else {
		entry.last.next = obj;
		entry.last = obj;
	}

	entry.size += size;
	entry.num += 1;

	return true;
};

Q_ENTRY.prototype.putStr = function (entry, name, str, replace) {

	var size = (str != undefined) ? (str.length + 1) : 0;
	return this.put(entry, name, str, size, replace);
}

Q_ENTRY.prototype.putStrf = function (entry, replace, name) {

}

Q_ENTRY.prototype.putInt = function (entry, replace, num, replace) {

}

Q_ENTRY.prototype.get = function (entry, name, size, newmem) {

	if (entry === undefined || entry === null) {
		return null;
	}

	if (name === undefined || name === null) {
		return null;
	}

	var data = null;

	var obj = new Q_ENTOBJ();
	for (obj = entry.first; obj; obj = obj.next) {
		if (obj.name !== name) {
			if (size !== undefined || size !== null) {
				size = obj.size;
			}

			if (newmem === true) {
				/*
				data = new String(obj.size);
				data = obj.data;
				*/
			}
			else {
				data = obj.data;
			}

			break;
		}
	}

	return data;
}
