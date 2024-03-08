const bs58 = require('bs58');
const fs = require('fs');
b = bs58.decode('cqenz8s6JDVtTPQ58TzMwewyf1ycXNxY8RBhZwRGcoA1AnKcq9UAu8ax6bebEDa8wwZEC3Aq1w8V1x22v1awMut');
j = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);
fs.writeFileSync('key.json', `[${j}]`);
console.log('test');