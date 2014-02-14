'use strict';
var path = require('path');
var os = require('os');
var uuid = require('uuid');

module.exports = function (ext) {
	return path.join(os.tmpdir ? os.tmpdir() : os.tmpDir(), uuid.v4() + (ext || ''));
};
