import {tmpdir} from 'os';
import test from 'ava';
import m from '.';

test(t => {
	t.true(m().includes(tmpdir()));
	t.true(m('.png').endsWith('.png'));
});
