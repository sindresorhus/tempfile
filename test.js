import test from 'ava';
import {tmpdir} from 'os';
import m from './';

test(t => {
	t.true(m().indexOf(tmpdir()) !== -1);
	t.regex(m('.png'), /png$/);
});
