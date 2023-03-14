import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';

export class FileWriter {
	static directory = 'dist';
	static filename = 'logo.svg';

	static write(fileContent) {
		const finalDirectory = resolve(process.cwd(), this.directory);
		// Next line creates target directory if it does not exist
		if (!existsSync(finalDirectory)) mkdirSync(finalDirectory);
		writeFileSync(resolve(finalDirectory, this.filename), fileContent);
	}
}
