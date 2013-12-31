'use strict';
var path = require('path');
var tmpdir = require('os').tmpdir();
var uuid = require('uuid');

module.exports = function () {
	return path.join(tmpdir, 'tempfile', uuid.v4());
};
