# Gift List

This project implements a `Merkle Tree` of Users Addresses to create a Server that verifies wheteher a User Address is allowed to reveive a gift. The implementation of the Merkle Tree could make the server run the verification task even if it only stores a 32-byte value `Merkle Root`.

To get started with the repository, clone it and then run `npm install` in the top-level directory to install the depedencies.

There are three folders in this repository:

## Server

You can run the server from the top-level directory with `node server/index`. This file is an express server which will be hosted on port 1225 and respond to the client's request.

The server will verify the given `address` to check whether the transaction is inside the `MERKLE_ROOT`. If it is valid, then the server will give the approval to send the gift.

## Client

You can run the client from the top-level directory with `node client/index <ADDRESS>`. This file is a script which will send an HTTP request to the server.

The Client Side will generate the `Merkle Proof` of the user's `address`, and send the HTTP request to the server to verify whether the Merkle Proof is valid or not.  

## Utils

There are a few files in utils:

- `niceList.json` contains all the addresses that are eligile to receive a gift.
- `MerkleTree.js` contains the `MerkleTree` class to manage a Merkle Tree, such as generating a `Merkle Root` and a `Merkle Proof`.
- `verifyProof.js` contains the function to verify whether a `Merkle Proof` is valid or not. 
