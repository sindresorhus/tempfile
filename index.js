import path from 'node:path';
import {randomUUID} from 'node:crypto';
import tempDirectory from 'temp-dir';

export default function tempfile(extension = '') {
	return path.join(tempDirectory, randomUUID() + extension);
}
