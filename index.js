'use strict';
var path = require('path');
var osTmpdir = require('os-tmpdir');
var uuid = require('uuid');
var TMP_DIR = osTmpdir();

module.exports = function (params) {
	if (!params) params = {};
	var ext = params.ext || ''
	var prefixpath = params.prefixpath || '';
	var rootpath = params.rootpath || TMP_DIR;
	return path.join(rootpath, prefixpath, uuid.v4() + ext);
};
