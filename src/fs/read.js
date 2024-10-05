import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        const contents = await readFile(`${__dirname}/files/fileToRead.txt`, { encoding: 'utf8' });
        console.log(contents);
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await read();