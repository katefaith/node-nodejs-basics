import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const content = await readFile(`${__dirname}/files/fileToCalculateHashFor.txt`, { encoding: 'utf8' });
console.log('content', content);

const calculateHash = async () => {
    const hash = createHash('sha256');

    hash.on('readable', () => {
      const data = hash.read();
      if (data) {
        console.log(data.toString('hex'));
      }
    });
    
    hash.write(content);
    hash.end();
};

await calculateHash();