import {
    toMetaplexFile
} from '@metaplex-foundation/js'
import fs from 'fs';
import { createMetaplexInstance } from './01_metaplex.js'

async function main () {
    const metaplex = createMetaplexInstance();
    const buffer = fs.readFileSync("./picture.png");
    const file = toMetaplexFile(buffer, "nft-file.png");

    const imageUri = await metaplex.storage().upload(file);
    console.log(imageUri);
}

main();