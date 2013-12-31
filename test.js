'use strict';
var assert = require('assert');
var tempfile = require('./index');

it('should generate a random temp file path', function () {
	assert(/tempfile/.test(tempfile()));
});
