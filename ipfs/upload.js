import { createHelia } from 'helia';
import { json } from '@helia/json';

async function run() {
    const helia = await createHelia();
    const j = json(helia);
    
    // we added three attributes, add as many as you want!
    const metadata = {
        path: '/',
        content: JSON.stringify({
            name: "Evie's 100d NFT",
            attributes: [
            {
                "trait_type": "Cute",
                "value": "100" 
            },
            {
                "trait_type": "Beauty",
                "value": "100"
            },
            {
                "trait_type": "Smart",
                "value": "1000"
            }
            ],
            // update the IPFS CID to be your image CID
            image: "https://ipfs.io/ipfs/QmNqFGDDFHLyegi8KyucUnkmviaGDHFvjJ5XzzuoZYoksh",
            description: "Hello Evie!"
        })
    };

    const result = await j.add(metadata);
    console.log(result);

    process.exit(0);
}

run();