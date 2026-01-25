import path from 'node:path';
import {randomUUID} from 'node:crypto';
import temporaryDirectory from 'temp-dir';
import {assertSafeFilename} from 'is-safe-filename';

export default function tempfile(options = {}) {
	let {extension} = options;

	if (extension !== undefined && extension !== null) {
		assertSafeFilename(extension);
		extension = extension.startsWith('.') ? extension : `.${extension}`;
	}

	return path.join(temporaryDirectory, randomUUID() + (extension ?? ''));
}
