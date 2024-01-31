const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  if(process.argv.length != 3){
    console.log("Required Argument Format: <ADDRESS>");
    process.exit(1);
  };
  const [address] = process.argv.slice(2);
  
  //Generate The Merkle Proof
  const tree  = new MerkleTree(niceList);
  const index = niceList.findIndex(n => n === address);
  const proof = tree.getProof(index);
  
  //Send the data to the HTTP Server
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {proof, address});

  console.log(`Requesting gift for address: ${address}!`);
  console.log(gift);
}

main();