import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { rm } from "fs/promises";

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        await rm(`${__dirname}/files/fileToRemove.txt`);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();