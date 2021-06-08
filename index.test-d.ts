import {expectType} from 'tsd';
import tempfile from './index.js';

expectType<string>(tempfile());
expectType<string>(tempfile('.png'));
