import {expectType} from 'tsd';
import tempfile = require('.');

expectType<string>(tempfile());
expectType<string>(tempfile('.png'));
