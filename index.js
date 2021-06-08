import path from 'node:path';
import {v4 as uuidv4} from 'uuid';
import tempDirectory from 'temp-dir';

export default function tempfile(extension = '') {
	return path.join(tempDirectory, uuidv4() + extension);
}
