'use strict';
var assert = require('assert');
var tmpdir = require('os').tmpdir();
var tempfile = require('./index');

it('should generate a random temp file path', function () {
	assert(tempfile().indexOf(tmpdir) !== -1);
});

it('should have an option to supply an extension', function () {
	assert(/png$/.test(tempfile('.png')));
});
