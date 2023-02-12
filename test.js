import {tmpdir} from 'node:os';
import test from 'ava';
import tempfile from './index.js';

test('main', t => {
	t.true(tempfile().includes(tmpdir()));
	t.true(tempfile({extension: 'png'}).endsWith('.png'));
	t.true(tempfile({extension: '.png'}).endsWith('.png'));
});
