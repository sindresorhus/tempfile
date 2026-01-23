import path from 'node:path';
import {randomUUID} from 'node:crypto';
import temporaryDirectory from 'temp-dir';

export default function tempfile(options = {}) {
	let {extension} = options;

	if (typeof extension === 'string') {
		extension = path.basename(extension);
		extension = extension.startsWith('.') ? extension : `.${extension}`;
	}

	return path.join(temporaryDirectory, randomUUID() + (extension ?? ''));
}
