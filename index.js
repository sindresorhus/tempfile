'use strict';
var path = require('path');
var uuid = require('uuid');
var tmpdir = require('./tmpdir');

module.exports = function (ext) {
	return path.join(tmpdir, uuid.v4() + (ext || ''));
};
