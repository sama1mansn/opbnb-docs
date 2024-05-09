---
sidebar_label: Creating Your Own opBNB Testnet
description: Guide to creating your own opBNB Testnet
---

# Creating Your Own opBNB Testnet

This tutorial is designed for developers who want to learn about the opBNB by creating opBNB testnet chain. You'll walk through the full deployment process and teach you all of the components that make up the opBNB, and you'll end up with your own opBNB testnet.

You can use this testnet to experiment and perform tests, or you can choose to modify the chain to adapt it to your own needs.

# What You're Going to Deploy

When deploying an opBNB chain, you'll be setting up four different components. It's useful to understand what each of these components does before you start deploying your chain.

## Smart Contracts

The opBNB gives you the ability to deploy your own opBNB that use a Layer 1 blockchain to host and order transaction data. OpBNB use several smart contracts on the L1 blockchain to manage aspects of the Rollup. You'll be using the L1 smart contracts found in the [contracts-bedrock package](https://github.com/bnb-chain/opbnb/tree/develop/packages/contracts-bedrock) within the [opbnb](https://github.com/bnb-chain/opbnb).

## Sequencer Node

OpBNB uses Sequencer node to gather proposed transactions from users and publish them to the L1 blockchain.

### Consensus Client

OpBNB has a consensus client. The consensus client is responsible for determining the list and ordering of blocks and transactions that are part of your blockchain. In this tutorial you'll be using the [op-node](https://github.com/bnb-chain/opbnb/tree/develop/op-node) found within the [opbnb](https://github.com/bnb-chain/opbnb).

### Execution Client

OpBNB has an execution client. The execution client is responsible for executing transactions and storing/updating the state of the blockchain. In this tutorial you'll be using the [op-geth](https://github.com/bnb-chain/op-geth) found within the [op-geth](https://github.com/bnb-chain/op-geth) repository.

## Batcher

The Batcher is a service that publishes transactions from the Sequencer to the L1 blockchain. The Batcher runs continuously alongside the Sequencer and publishes transactions in batches (hence the name) on a regular basis. You'll be using the [op-batcher](https://github.com/bnb-chain/opbnb/tree/develop/op-batcher) of the Batcher component found within the [opbnb](https://github.com/bnb-chain/opbnb).

## Proposer

The Proposer is a service responsible for publishing transactions results (in the form of L2 state roots) to the L1 blockchain. This allows smart contracts on L1 to read the state of the L2, which is necessary for cross-chain communication and reconciliation between state changes. You'll be using the [op-proposer](https://github.com/bnb-chain/opbnb/tree/develop/op-proposer) of the Proposer component found within the [opbnb](https://github.com/bnb-chain/opbnb).

# Software Dependencies

| Dependency | Version | Version Check Command |
|:----------:|:-------:|:---------------------:|
|    git     |   ^2    |     git --version     |
|     go     |  ^1.21  |      go version       |
|    node     |   ^20   |    node --version     |
|    pnpm     |   ^8    |    pnpm --version     |
|    foundry     | ^0.2.0  |    forge --version    |
|    make     |   ^3    |    make --version     |
|    jq     |  ^1.6   |     jq --version      |
|    direnv     |   ^2    |   direnv --version    |
|    gcc     |   ^13   |     gcc --version     |
|    libc-dev     |    ^2.35    |         ldd --version         |


## Notes on Specific Dependencies

`node`

We recommend using the latest LTS version of Node.js (currently v20). [nvm](https://github.com/nvm-sh/nvm) is a useful tool that can help you manage multiple versions of Node.js on your machine. You may experience unexpected errors on older versions of Node.js.

`foundry`

It's recommended to use the scripts in the opbnb's package.json for managing foundry to ensure you're always working with the correct version. This approach simplifies the installation, update, and version checking process. Make sure to clone the opbnb locally before proceeding.

`direnv`

Parts of this tutorial use [direnv](https://direnv.net/) as a way of loading environment variables from `.envrc` files into your shell. This means you won't have to manually export environment variables every time you want to use them. `direnv` only ever has access to files that you explicitly allow it to see.

After [installing direnv](https://direnv.net/docs/installation.html), you will need to make sure that `direnv` is [hooked into your shell](https://direnv.net/docs/hook.html). Make sure you've followed [the guide on the `direnv` website](https://direnv.net/docs/hook.html), then close your terminal and reopen it so that the changes take effect (or source your config file if you know how to do that).

# Get Access to a BSC testnet Node

You'll be deploying a opBNB that uses a Layer 1 blockchain to host and order transaction data.

This guide uses the BSC testnet as an L1 chain. You can also use other EVM-compatible blockchains, but you may run into unexpected errors. If you want to use an alternative network, make sure to carefully review each command and replace any BSC testnet values with the values for your network.

Since you're deploying your opBNB to BSC testnet, you'll need to have access to a BSC testnet node.

# Build the Source Code

You're going to be creating your own opBNB directly from source code instead of using a container system like [Docker](https://www.docker.com/). Although this adds a few extra steps, it means you'll have an easier time modifying the behavior of the opBNB if you'd like to do so. If you want a summary of the various components you'll be using, take another look at the [What You're Going to Deploy](#what-youre-going-to-deploy) section above.

## Build the opbnb

### Clone the opbnb
```
cd ~
git clone https://github.com/bnb-chain/opbnb.git
```

### Enter the opbnb
```
cd opbnb
```

### Check out the correct branch

You can choose the appropriate version according to your needs. The develop branch has the latest features.
```
git checkout develop
```

### Check your dependencies

Run the following script and double check that you have all of the required versions installed. If you don't have the correct versions installed, you may run into unexpected errors.

```
./packages/contracts-bedrock/scripts/getting-started/versions.sh
```

### Install dependencies

```
pnpm install
```

### Build the various packages inside of the opbnb
```
make op-node op-batcher op-proposer
pnpm build
```

## Build `op-geth`

### Clone op-geth
```
cd ~
git clone https://github.com/bnb-chain/op-geth.git
```

### Enter op-geth
```
cd op-geth
```

### Build op-geth
```
make geth
```

# Fill Out Environment Variables

You'll need to fill out a few environment variables before you can start deploying your chain.

### Enter the opbnb
```
cd ~/opbnb
```

### Duplicate the sample environment variable file
```
cp .envrc.example .envrc
```

### Fill out the environment variable file
Open up the environment variable file and fill out the following variables:

| Variable Name |                                                 Description                                                  |
|:----------:|:------------------------------------------------------------------------------------------------------------:|
|    L1_RPC_URL    |                                             URL for your L1 node                                             |
|     L1_RPC_KIND     | Kind of L1 RPC you're connecting to, used to inform optimal transactions receipts fetching. Recommend using `l1.rpckind=bsc_fullnode` |

# Generate Addresses
You'll need four addresses and their private keys when setting up the chain:

* The Admin address has the ability to upgrade contracts.
* The Batcher address publishes Sequencer transaction data to L1.
* The Proposer address publishes L2 transaction results (state roots) to L1.
* The Sequencer address signs blocks on the p2p network.

## Enter the opbnb
```
cd ~/opbnb
```

## Generate new addresses
```
./packages/contracts-bedrock/scripts/getting-started/wallets.sh
```

## Check the output
Make sure that you see output that looks something like the following:
```
Copy the following into your .envrc file:
  
# Admin address
export GS_ADMIN_ADDRESS=0x9625B9aF7C42b4Ab7f2C437dbc4ee749d52E19FC
export GS_ADMIN_PRIVATE_KEY=0xbb93a75f64c57c6f464fd259ea37c2d4694110df57b2e293db8226a502b30a34
# Batcher address
export GS_BATCHER_ADDRESS=0xa1AEF4C07AB21E39c37F05466b872094edcf9cB1
export GS_BATCHER_PRIVATE_KEY=0xe4d9cd91a3e53853b7ea0dad275efdb5173666720b1100866fb2d89757ca9c5a
  
# Proposer address
export GS_PROPOSER_ADDRESS=0x40E805e252D0Ee3D587b68736544dEfB419F351b
export GS_PROPOSER_PRIVATE_KEY=0x2d1f265683ebe37d960c67df03a378f79a7859038c6d634a61e40776d561f8a2
  
# Sequencer address
export GS_SEQUENCER_ADDRESS=0xC06566E8Ec6cF81B4B26376880dB620d83d50Dfb
export GS_SEQUENCER_PRIVATE_KEY=0x2a0290473f3838dbd083a5e17783e3cc33c905539c0121f9c76614dda8a38dca
```

## Save the addresses
Copy the output from the previous step and paste it into your `.envrc` file as directed.

## Fund the addresses
You will need to send BNB to the Admin, Proposer, and Batcher addresses. The exact amount of BNB required depends on the L1 network being used. You do not need to send any BNB to the Sequencer address as it does not send transactions.

It's recommended to fund the addresses with the following amounts when using Sepolia:

* Admin — 1 BNB
* Proposer — 0.5 BNB
* Batcher — 2 BNB

# Load Environment variables

Now that you've filled out the environment variable file, you need to load those variables into your terminal.

## Enter the opbnb
```
cd ~/opbnb
```

## Load the variables with direnv
You're about to use `direnv` to load environment variables from the `.envrc` file into your terminal. Make sure that you've [installed `direnv`](https://direnv.net/docs/installation.html) and that you've properly hooked `direnv` into your shell.
Next you'll need to allow `direnv` to read this file and load the variables into your terminal using the following command.
```
direnv allow
```
`direnv` will unload itself whenever your `.envrc` file changes. You must rerun the following command every time you change the `.envrc` file.

## Confirm that the variables were loaded
After running `direnv allow` you should see output that looks something like the following (the exact output will vary depending on the variables you've set, don't worry if it doesn't look exactly like this):
```
direnv: loading ~/optimism/.envrc                                                            
direnv: export +DEPLOYMENT_CONTEXT +ETHERSCAN_API_KEY +GS_ADMIN_ADDRESS +GS_ADMIN_PRIVATE_KEY +GS_BATCHER_ADDRESS +GS_BATCHER_PRIVATE_KEY +GS_PROPOSER_ADDRESS +GS_PROPOSER_PRIVATE_KEY +GS_SEQUENCER_ADDRESS +GS_SEQUENCER_PRIVATE_KEY +IMPL_SALT +L1_RPC_KIND +L1_RPC_URL +PRIVATE_KEY +TENDERLY_PROJECT +TENDERLY_USERNAME
```
If you don't see this output, you likely haven't properly configured `direnv`. Make sure you've configured `direnv` properly and run `direnv allow` again so that you see the desired output.

If you don't want to use `direnv`, you can also set variables manually.

# Configure your network

Once you've built both repositories, you'll need to head back to the opbnb to set up the configuration file for your chain. Currently, chain configuration lives inside of the [contracts-bedrock package](https://github.com/bnb-chain/opbnb/tree/develop/packages/contracts-bedrock) in the form of a JSON file.

## Enter the opbnb
```
cd ~/opbnb
```

## Move into the contracts-bedrock package
```
cd packages/contracts-bedrock
```

## Generate the configuration file
Run the following script to generate the `getting-started.json` configuration file inside of the `deploy-config` directory.
```
./scripts/getting-started/config.sh
```

## Review the configuration file (Optional)
If you'd like, you can review the configuration file that was just generated by opening up `deploy-config/getting-started.json` in your favorite text editor. It's recommended to keep this file as-is for now so you don't run into any unexpected errors.

# Deploy the Create2 Factory (Optional)
If you're deploying opBNB to a network other than BSC testnet, you may need to deploy a Create2 factory contract to the L1 chain. This factory contract is used to deploy opBNB smart contracts in a deterministic fashion.

## Check if the factory exists

The Create2 factory contract will be deployed at the address `0x4e59b44847b379578588920cA78FbF26c0B4956C`. You can check if this contract has already been deployed to your L1 network with a block explorer or by running the following command:
```
cast codesize 0x4e59b44847b379578588920cA78FbF26c0B4956C --rpc-url $L1_RPC_URL
```
If the command returns 0 then the contract has not been deployed yet. If the command returns 69 then the contract has been deployed and you can safely skip this section.

## Fund the factory deployer

You will need to send some BNB to the address that will be used to deploy the factory contract, `0x3fAB184622Dc19b6109349B94811493BF2a45362`. This address can only be used to deploy the factory contract and will not be used for anything else. Send at least 1 BNB to this address on your L1 chain.

## Deploy the factory
Using `cast`, deploy the factory contract to your L1 chain:
```
cast publish --rpc-url $L1_RPC_URL 0xf8a58085174876e800830186a08080b853604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf31ba02222222222222222222222222222222222222222222222222222222222222222a02222222222222222222222222222222222222222222222222222222222222222 
```

## Wait for the transaction to be mined
Make sure that the transaction is included in a block on your L1 chain before continuing.


## Verify that the factory was deployed
Run the code size check again to make sure that the factory was properly deployed:
```
cast codesize 0x4e59b44847b379578588920cA78FbF26c0B4956C --rpc-url $L1_RPC_URL
```

# Deploy the L1 contracts
Once you've configured your network, it's time to deploy the L1 contracts necessary for the functionality of the chain.

## Deploy the L1 contracts
```
forge script scripts/Deploy.s.sol:Deploy --private-key $GS_ADMIN_PRIVATE_KEY --broadcast --rpc-url $L1_RPC_URL --slow
```
If you see a nondescript error that includes `EvmError: Revert` and `Script failed` then you likely need to change the `IMPL_SALT` environment variable. This variable determines the addresses of various smart contracts that are deployed via [CREATE2](https://eips.ethereum.org/EIPS/eip-1014). If the same `IMPL_SALT` is used to deploy the same contracts twice, the second deployment will fail. You can generate a new `IMPL_SALT` by running `direnv` allow anywhere in the opbnb.

## Generate contract artifacts
``` 
forge script scripts/Deploy.s.sol:Deploy --sig 'sync()' --rpc-url $L1_RPC_URL
```

## Generate the L2 config files

Now that you've set up the L1 smart contracts you can automatically generate several configuration files that are used within the Consensus Client and the Execution Client.

You need to generate three important files:

1. `genesis.json` includes the genesis state of the chain for the Execution Client.
2. `rollup.json` includes configuration information for the Consensus Client.
3. `jwt.txt` is a [JSON Web Token](https://jwt.io/introduction) that allows the Consensus Client and the Execution Client to communicate securely (the same mechanism is used in Ethereum clients).

## Navigate to the op-node package
```
cd ~/opbnb/op-node
```

## Create genesis files
Now you'll generate the `genesis.json` and `rollup.json` files within the op-node folder:
```
go run cmd/main.go genesis l2 \
  --deploy-config ../packages/contracts-bedrock/deploy-config/getting-started.json \
  --deployment-dir ../packages/contracts-bedrock/deployments/getting-started/ \
  --outfile.l2 genesis.json \
  --outfile.rollup rollup.json \
  --l1-rpc $L1_RPC_URL
```

## Create an authentication key
Next you'll create a [JSON Web Token](https://jwt.io/introduction) that will be used to authenticate the Consensus Client and the Execution Client. This token is used to ensure that only the Consensus Client and the Execution Client can communicate with each other. You can generate a JWT with the following command:
```
openssl rand -hex 32 > jwt.txt
```

## Copy genesis files into the op-geth directory
Finally, you'll need to copy the `genesis.json` file and `jwt.txt` file into `op-geth` so you can use it to initialize and run `op-geth`:
```
cp genesis.json ~/op-geth
cp jwt.txt ~/op-geth
```

# Initialize `op-geth`
You're almost ready to run your chain! Now you just need to run a few commands to initialize `op-geth`. You're going to be running a Sequencer node, so you'll need to import the `Sequencer` private key that you generated earlier. This private key is what your Sequencer will use to sign new blocks.

## Navigate to the op-geth directory
```
cd ~/op-geth
```

## Create a data directory folder
```
mkdir datadir
```

## Initialize op-geth
```
build/bin/geth init --datadir=datadir genesis.json
```

# Start `op-geth`
Now you'll start `op-geth`, your Execution Client. Note that you won't start seeing any transactions until you start the Consensus Client in the next step.

## Open up a new terminal
You'll need a terminal window to run `op-geth` in.

## Navigate to the op-geth directory
```
cd ~/op-geth
```

## Run op-geth
You're using `--gcmode=archive` to run `op-geth` here because this node will act as your Sequencer. It's useful to run the Sequencer in archive mode because the `op-proposer` requires access to the full state. Feel free to run other (non-Sequencer) nodes in full mode if you'd like to save disk space.
It's important that you've already initialized the geth node at this point as per the previous section. Failure to do this will cause startup issues between `op-geth` and `op-node`.
```
 ./build/bin/geth \
  --datadir ./datadir \
  --http \
  --http.corsdomain="*" \
  --http.vhosts="*" \
  --http.addr=0.0.0.0 \
  --http.api=web3,debug,eth,txpool,net,engine \
  --ws \
  --ws.addr=0.0.0.0 \
  --ws.port=8546 \
  --ws.origins="*" \
  --ws.api=debug,eth,txpool,net,engine \
  --syncmode=full \
  --gcmode=archive \
  --nodiscover \
  --maxpeers=0 \
  --networkid=42069 \
  --authrpc.vhosts="*" \
  --authrpc.addr=0.0.0.0 \
  --authrpc.port=8551 \
  --authrpc.jwtsecret=./jwt.txt \
  --rollup.disabletxpoolgossip=true
```

# Start `op-node`
Once you've got `op-geth` running you'll need to run `op-node`. Like Ethereum, the opBNB has a Consensus Client (`op-node`) and an Execution Client (`op-geth`). The Consensus Client "drives" the Execution Client over the Engine API.

## Open up a new terminal
You'll need a terminal window to run `op-node` in.

## Navigate to the op-node directory
```
cd ~/opbnb/op-node
```

## Run op-node
```
./bin/op-node \
  --l2=http://localhost:8551 \
  --l2.jwt-secret=./jwt.txt \
  --sequencer.enabled \
  --sequencer.l1-confs=15 \
  --verifier.l1-confs=15 \
  --l1.http-poll-interval=3s \
  --l1.epoch-poll-interval=3s \
  --l1.rpc-max-batch-size=20 \
  --rollup.config=./rollup.json \
  --rpc.addr=0.0.0.0 \
  --rpc.port=8547 \
  --p2p.disable \
  --rpc.enable-admin \
  --p2p.sequencer.key=$GS_SEQUENCER_PRIVATE_KEY \
  --l1=$L1_RPC_URL \
  --l1.rpckind=$L1_RPC_KIND
```
Once you run this command, you should start seeing the `op-node` begin to sync L2 blocks from the L1 chain. Once the `op-node` has caught up to the tip of the L1 chain, it'll begin to send blocks to `op-geth` for execution. At that point, you'll start to see blocks being created inside of `op-geth`.
By default, your `op-node` will try to use a peer-to-peer to speed up the synchronization process. If you're using a chain ID that is also being used by others, like the default chain ID for this tutorial (42069), your `op-node` will receive blocks signed by other sequencers. These requests will fail and waste time and network resources. To avoid this, this tutorial starts with peer-to-peer synchronization disabled (`--p2p.disable`).

Once you have multiple nodes, you may want to enable peer-to-peer synchronization. You can add the following options to the `op-node` command to enable peer-to-peer synchronization with specific nodes:
```
--p2p.static=<nodes> \
--p2p.listen.ip=0.0.0.0 \
--p2p.listen.tcp=9003 \
--p2p.listen.udp=9003 \
```

You can alternatively also remove the `--p2p.static` option, but you may see failed requests from other chains using the same chain ID.

# Start `op-batcher`
The `op-batcher` takes transactions from the Sequencer and publishes those transactions to L1. Once these Sequencer transactions are included in a finalized L1 block, they're officially part of the canonical chain. The `op-batcher` is critical!

It's best to give the `Batcher` address at least 2 BNB to ensure that it can continue operating without running out of BNB for gas. Keep an eye on the balance of the `Batcher` address because it can expend BNB quickly if there are a lot of transactions to publish.

## Open up a new terminal
You'll need a terminal window to run `op-batcher` in.

## Navigate to the op-batcher directory
```
cd ~/opbnb/op-batcher
```

## Run op-batcher

```
./bin/op-batcher \
  --l2-eth-rpc=http://localhost:8545 \
  --rollup-rpc=http://localhost:8547 \
  --poll-interval=5s \
  --sub-safety-margin=30 \
  --num-confirmations=4 \
  --safe-abort-nonce-too-low-count=3 \
  --resubmission-timeout=30s \
  --rpc.addr=0.0.0.0 \
  --rpc.port=8548 \
  --rpc.enable-admin \
  --max-channel-duration=20 \
  --l1-eth-rpc=$L1_RPC_URL \
  --private-key=$GS_BATCHER_PRIVATE_KEY
```
The `--max-channel-duration=n` setting tells the `batcher` to write all the data to L1 every n L1 blocks. When it is low, transactions are written to L1 frequently and other nodes can synchronize from L1 quickly. When it is high, transactions are written to L1 less frequently and the `batcher` spends less BNB. If you want to reduce costs, either set this value to 0 to disable it or increase it to a higher value.

# Start `op-proposer`

## Open up a new terminal
You'll need a terminal window to run `op-proposer` in.

## Navigate to the op-proposer directory
```
cd ~/opbnb/op-proposer
```

## Run op-proposer
```
./bin/op-proposer \
  --poll-interval=1s \
  --rpc.port=8560 \
  --rollup-rpc=http://localhost:8547 \
  --l2oo-address=$(cat ../packages/contracts-bedrock/deployments/getting-started/L2OutputOracleProxy.json | jq -r .address) \
  --private-key=$GS_PROPOSER_PRIVATE_KEY \
  --l1-eth-rpc=$L1_RPC_URL
```

# Connect Your Wallet to Your Chain

You now have a fully functioning opBNB with a Sequencer node running on http://localhost:8545. You can connect your wallet to this chain the same way you'd connect your wallet to any other EVM chain.

# Get ETH On Your Chain

Once you've connected your wallet, you'll probably notice that you don't have any BNB to pay for gas on your chain. The easiest way to deposit BNB into your chain is to send BNB directly to the `L1StandardBridge` contract.

## Navigate to the contracts-bedrock directory
```
cd ~/opbnb/packages/contracts-bedrock
```

## Get the address of the L1StandardBridgeProxy contract
```
cat deployments/getting-started/L1StandardBridgeProxy.json | jq -r .address
```

## Send some BNB to the L1StandardBridgeProxy contract
Grab the L1 bridge proxy contract address and, using the wallet that you want to have BNB on your opBNB, send that address a small amount of BNB on L1. This will trigger a deposit that will mint BNB into your wallet on L2. It may take up to some minutes for that BNB to appear in your wallet on L2.

# See Your opBNB in Action
You can interact with your opBNB the same way you'd interact with any other EVM chain. Send some transactions, deploy some contracts, and see what happens!


