import {tmpdir} from 'os';
import test from 'ava';
import tempfile from '.';

test('main', t => {
	t.true(tempfile().includes(tmpdir()));
	t.true(tempfile('.png').endsWith('.png'));
});
