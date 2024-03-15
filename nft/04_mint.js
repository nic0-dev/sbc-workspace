import { createMetaplexInstance } from "./01_metaplex.js";

async function main() {
    const metaplex = createMetaplexInstance();
    const { nft } = await metaplex.nfts().create({
        uri: 'https://arweave.net/D_Yyp_zDyevRlZGlCEeH6CM59IbGYCyY7zjBB0VAlyA',
        name: 'NFT Pic01',
        sellerFeeBasisPoints: 250,
    });
    console.log('nft', nft);
}

main();