import test from 'ava';
import {tmpdir} from 'os';
import fn from './';

test(t => {
	t.true(fn().indexOf(tmpdir()) !== -1);
	t.regexTest(/png$/, fn('.png'));
});
