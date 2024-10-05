import { rename as renameFile } from "fs/promises";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        await renameFile(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/properFilename.md`);
    } catch (error) {
        console.log("error", error);
        throw new Error("FS operation failed");
    }
};

await rename();
