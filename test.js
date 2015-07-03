'use strict';
var assert = require('assert');
var tmpdir = require('os').tmpdir();
var tempfile = require('./');

it('should generate a random temp file path', function () {
	assert(tempfile().indexOf(tmpdir) !== -1);
});

it('should have an option to supply an extension', function () {
	assert(/png$/.test(tempfile({ext:'.png'})));
});

it('should have an option to supply an root path', function () {
	assert(/\/my\/custom\/drive\//.test(tempfile({rootpath:'/my/custom/drive'})));
});

it('should have an option to supply an prefix path', function () {
	assert(/unicorns/.test(tempfile({
		rootpath:'unicorns'}
	)));
});
