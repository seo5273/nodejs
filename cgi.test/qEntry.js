
var util = require('util');
var fs = require('fs');

function Q_ENTOBJ() {
	var name;						// object name
	var data;						// data object
	var size;						// object size
	var next;						// link pointer
}
exports.Q_ENTOBJ = Q_ENTOBJ;

function Q_ENTRY() {
	this.num = 0;
	this.size = 0;
	this.first = null;
	this.last = null;
}
exports.Q_ENTRY = Q_ENTRY;
exports.qEntry = Q_ENTRY;

/**
 * ...
 *
 * @param {String} key
 * @return {Boolean}
 * @api public
 */
Q_ENTRY.prototype.lock = function () {

};

Q_ENTRY.prototype.unlock = function () {

};

/**
 *
 *
 * @param {Q_ENTRY} entry
 * @param {String} name
 * @param {String} data
 * @param {Number} size
 * @param {Boolean} replace
 * @return {Boolean}
 * @api public
 **/
 // 사실 linked list 안하고 그냥 객체에다 넣고 빼고 하면 된다. 그냥 연습삼아..
Q_ENTRY.prototype.put = function (entry, name, data, size, replace) {

	if (entry === undefined 	|| 
		name === undefined 		|| 
		data === undefined 		|| 
		(size === undefined || typeof size !== 'number' || size <= 0)) {
		return false;
	}

	var obj = new Q_ENTOBJ();
	obj.name = name;
	obj.data = data;
	obj.size = size;
	obj.next = null;

	if (replace === true) {
		this.remove(entry, name);
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

/**
 * @return {Boolean}
 **/
Q_ENTRY.prototype.putStr = function (entry, name, str, replace) {
	var size = (str !== undefined || str !== null ) ? str.length : 0;
	return this.put (entry, name, str, size, replace);
};

/**
 * @return {Boolean}
 **/
Q_ENTRY.prototype.putStrf = function (entry, replace, name, format) {

};

/**
 * @return {Boolean}
 **/
Q_ENTRY.prototype.putInt = function (entry, name, num, replace) {

};

/**
 * @
 **/
Q_ENTRY.prototype.get = function (entry, name, callback) {

	if (entry === undefined	|| name === undefined ) {
		return null;
	}	

	var array = [];
	var data = null;
	var obj = null;

	for (obj = entry.first; obj; obj = obj.next) {
		if (obj.name === name) {
			data = obj.data;

			if (typeof callback === 'function') {
				array.push(obj.data);
				array.push(obj.size);
				callback.apply(null, array);
			}

			break;
		}
	}

	return data;
};

/**
 * @
 **/
Q_ENTRY.prototype.getCase = function (entry, name, size, newmem) {

};

/**
 * @
 **/
Q_ENTRY.prototype.getLast = function (entry, name, size, newmem) {

};

/**
 * @return {String}
 **/
Q_ENTRY.prototype.getStr = function (entry, name, callback) {
	return this.get(entry, name, callback);
};

/**
 * @return {String}
 **/
Q_ENTRY.prototype.getStrf = function (entry, name, namfmt) {

};

/**
 * @return {String}
 **/
Q_ENTRY.prototype.getStrCase = function (entry, name, newmem) {

};

/**
 * @return {String}
 **/
Q_ENTRY.prototype.getStrLast = function (entry, name, newmem) {

};

Q_ENTRY.prototype.getInt = function (entry, name) {

};

Q_ENTRY.prototype.getIntCase = function (entry, name) {

};

Q_ENTRY.prototype.getIntLast = function (entry, name) {

};

Q_ENTRY.prototype.getNext = function (entry, obj, name, newmem) {

};

Q_ENTRY.prototype.remove = function (entry, name) {

};

Q_ENTRY.prototype.getNum = function (entry) {

	if (entry === undefined || entry === null) {
		return 0;
	}

	return entry.num;
};

Q_ENTRY.prototype.truncate = function (entry) {

	if (entry === undefined || entry === null) {
		return false;
	}

	entry.num = 0;
	entry.size = 0;
	entry.first = null;
	entry.last = null;

	return true;
};

Q_ENTRY.prototype.save = function (entry) {

	if (entry === undefined || entry === null) {
		return false;
	}
};

Q_ENTRY.prototype.load = function (entry, filepath) {

};

Q_ENTRY.prototype.reverse = function (entry) {

	if (entry === undefined || entry === null) {
		return false;
	}

	var prev;
	var obj;

	for (prev = null, obj = entry.first; obj; ) {
		var next = obj.next;
		obj.next = prev;
		prev = obj;
		obj = next;
	}

	entry.last = entry.first;
	entry.first = prev;

	return true;
};

Q_ENTRY.prototype.print = function (entry, out, print_data) {

	if (entry === undefined || entry === null) {
		return false;
	}
	
};

Q_ENTRY.prototype.free = function (entry) {

	if (entry === undefined || entry === null) {
		return false;
	}

	this.truncate(entry);

	return true;
};

