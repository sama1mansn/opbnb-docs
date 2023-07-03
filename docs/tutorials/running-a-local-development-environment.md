# Running a local development environment

Install and start the entire opbnb system locally, including L1 (BNB Smart Chain) and L2 development nodes. Running a local development environment is a great way to test the behavior of your code and contracts.

# How to do it
1. Make sure the following software is installed: golang, node, yarn, make, python3, docker.
2. Clone opbnb monorepo and checkout release/testnet branch:
   ```
    git clone git@github.com:bnb-chain/opbnb.git
    cd opbnb
    git checkout release/testnet
   ```
3. Running `yarn` and then running `yarn build`.
4. Running `make devnet-up` and wait for the docker container to start.(The first run will be relatively slow because it needs to download the image and deploy the contract, and then it will be fast)
5. Through the `docker ps` command, you can see that 5 containers have been started: ops-bedrock_l1_1, ops-bedrock_l2_1, ops-bedrock_op-node_1, ops-bedrock_op-batcher_1, ops-bedrock_op-proposer_1

Now L1 is accessible at http://localhost:8545, and L2 is accessible at http://localhost:9545

# Stop or clean
To stop, run (in the root directory of the monorepo) `make devnet-down`.  
To clean everything, run (in the root directory of the monorepo) `make devnet-clean`.

# Additional information

L1 chain ID is 900.  
L2 chain ID is 901.

L1 test account:  
- address: 0x04d63aBCd2b9b1baa327f2Dda0f873F197ccd186
- Private key: 59ba8068eb256d520179e903f43dacf6d8d57d72bd306e1bd603fdb8c8da10e8

L2 test account:  
- Address: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
- Private key: ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
