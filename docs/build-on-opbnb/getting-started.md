---
sidebar_label: Overview
description: Overview of getting started on opBNB
---

# Getting Started

Developing on opBNB, an optimistic rollup Layer 2 scaling solution for BNB Smart Chain, is nearly the same as building directly on BNB Smart Chain. opBNB uses an EVM execution engine, meaning decentralized applications can be migrated from Ethereum, BNB Smart Chain, Polygon, and other EVM-compatible chains without changing much code. Some key points to highlight:

1. opBNB is an optimistic rollup - it scales BNB Smart Chain by bundling transactions off-chain and using fraud proofs to ensure validity. This allows for much higher throughput than the underlying BNB Smart Chain.
2. opBNB uses the EVM, the same virtual machine used by Ethereum and BNB Smart Chain. This means any dApp, smart contract, or other application that runs on the EVM can operate on opBNB with little to no code changes. Developers can simply deploy the same application on opBNB to get the benefits of Layer 2 scaling.
3. dApps and smart contracts can migrate to opBNB from any other EVM chain like Ethereum, BNB Smart Chain, or Polygon. Again, since opBNB is EVM-compatible, the applications will run as-is on the new network.
4. Building on opBNB provides the scalability and low costs of a rollup, while still leveraging the security of BNB Smart Chain. dApps get the best of both Layer 1 and Layer 2.

## How to use opBNB?

To use opBNB, you need to have an Ethereum wallet like Metamask or Trustwallet. You also need to have some tBNB in your wallet to pay for gas fees.

Step 1: Connect your wallet to opBNB
Connect your wallet to the BSC testnet and opBNB testnet. Both BSC and opBNB support EVM wallets like Metamask and Trustwallet. Follow the steps of [Wallet Configuration](./wallet-configuration.md).

Step 2: Deposit your tBNB token to opBNB
Follow the steps of [Deposit Tokens to opBNB](./deposit-to-opbnb.md).

Step 3: Start building by deploying smart contract to opBNB. 

## opBNB SDKs

Following is the list of SDKs for opBNB

- **[OP Stack Client SDK](https://sdk.optimism.io/):** the SDK provides set of tools for interacting with opBNB and also for Interlayer communication. (_[OP Stack Client SDK](https://stack.optimism.io/docs/build/sdk/) is maintained by OP Stack_)
