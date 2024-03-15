import { createMetaplexInstance } from "./01_metaplex.js";

async function main() {
    const metaplex = createMetaplexInstance()
    const metadata = {
        name: "NFT Pic01",
        symbol: "PIC",
        image: "https://arweave.net/OcN71BUnnC2YZwIsBeOACJ4_Q5RKnJq8YBn0GT8koXg",
        attributes: [
            {
                trait_type: 'picture',
                value: 'person',
            }
        ]
    }
    const result = await metaplex.nfts().uploadMetadata(metadata);
    console.log(result);
}

main();