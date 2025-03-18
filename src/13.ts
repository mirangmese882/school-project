import { readFileSync } from 'fs';

const fileName = process.argv[2];
const fileContent = readFileSync(fileName, 'utf8');
console.log(fileContent);