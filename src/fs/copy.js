import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { existsSync } from 'fs';
import { cp } from "fs/promises";

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const isFilesFolderExist = existsSync(`${__dirname}/files`);
    const isFilesCopyFolderExist = existsSync(`${__dirname}/files_copy`);

    if (!isFilesFolderExist || isFilesCopyFolderExist) {
        throw new Error('FS operation failed');
    }

    try {
        await cp(`${__dirname}/files`, `${__dirname}/files_copy`, { recursive: true })
    } catch (error) {
        console.log(error);
    }
};

await copy();
