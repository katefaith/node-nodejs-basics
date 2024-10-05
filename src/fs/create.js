import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { existsSync } from 'fs';
import { writeFile } from "fs/promises";

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const isFileExist = existsSync(`${__dirname}/files/fresh.txt`);

    try {
      if (!isFileExist) {
        const data = 'I am fresh and young';
        await writeFile(`${__dirname}/files/fresh.txt`, data, { encoding: 'utf8' });
      } else {
        throw new Error('FS operation failed');
      }
    } catch(error) {
      throw new Error('FS operation failed');
    }
};

await create();
