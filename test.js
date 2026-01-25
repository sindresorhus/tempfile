import {tmpdir} from 'node:os';
import test from 'ava';
import {unsafeFilenameFixtures} from 'is-safe-filename';
import tempfile from './index.js';

test('main', t => {
	t.true(tempfile().includes(tmpdir()));
	t.true(tempfile({extension: 'png'}).endsWith('.png'));
	t.true(tempfile({extension: '.png'}).endsWith('.png'));
});

test('rejects unsafe extensions', t => {
	for (const fixture of unsafeFilenameFixtures) {
		t.throws(() => tempfile({extension: fixture}), {message: /Unsafe filename/});
	}
});
