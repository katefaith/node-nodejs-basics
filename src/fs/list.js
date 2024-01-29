import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readdir } from "fs/promises";

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    
    try {
        const dirents = await readdir(`${__dirname}/files`, { withFileTypes: true });
        const files = dirents.filter(d => d.isFile()).map(d => d.name);
        console.log(files);
    } catch(error) {
        throw new Error('FS operation failed');
    }
};

await list();