---
sidebar_label: Best Practices for opBNB Node Configuration
description: Guide on running an opBNB Node with best practices
---

# Best Practices for opBNB Node Configuration

This guide provides best practices for configuring and running an opBNB Node.

## Choosing the Right Mode and Storage Scheme

opBNB supports different node modes: Full, Fast, and Archive.
There are two storage schemes available: HBSS (Hash-Based Scheme Storage) and PBSS (Path-Based Scheme Storage).

The core differences between them are how they preserve history trie data.

The Merkle Patricia Trie (MPT) is a data structure used to efficiently store and retrieve key-value pairs. It combines the concepts of a Patricia trie and a Merkle tree to provide a secure and immutable way to represent data stored in the Ethereum Virtual Machine (EVM).

The MPT provides features like below
- Get history data: It's possible to get the balance of specific account at specific block height, simulate call at specific block height, debug trace at specific block height, etc.
- Proof of Inclusion and Non-Inclusion:
MPT enables proofs of both inclusion and non-inclusion of key-value pairs. This feature is crucial for verifying transactions and maintaining the integrity of the blockchain.

However, storing the entire history trie data on disk can be resource-intensive and may not be necessary for all use cases. opBNB provides different node modes and storage schemes to cater to various requirements.

The differences between the modes and storage schemes are as follows:
- Archive node mode stores the entire history trie data. Full node stores the recent trie data(128 blocks), fast node only stores the current state without trie data.
    - The requests like get blocks, transactions, receipts, logs, etc. are supported by all node modes. Since the block data is stored in the block database, it is not affected by the trie data storage scheme.
    - The requests to get history state data differs by node mode. Archive node supports all history state data, full node and fast node support the recent 128 blocks state data.
    - The requests which require trie data like eth_getProof, eth_getStorageAt, etc. Archive node supports all of them. Full node supports query of the recent 128 blocks, fast node does not support.
- PBSS stores trie nodes on disk using the encoded path and a specific key prefix as the key. This approach allows PBSS's Merkle Patricia Trie (MPT) to overwrite older data due to the shared key between the account trie and storage trie. This
feature not only enables **online pruning** but also significantly **reduces data redundancy**.
    - Archive node only supports HBSS, full node and fast node support both HBSS and PBSS.
    - Please refer to [PBSS document](./pbss-pebble.md) for more details.

### Fast Node

It's recommended to run a fast node for most use cases. Fast node only stores the current state without trie data. It's suitable for most use cases like querying the current state, sending transactions, etc.

If you want to enable the fast node, you can add `--allow-insecure-no-tries` in the `op-geth` start command.

```
 ./geth --config ./config.toml --datadir ./node --syncmode full  --allow-insecure-no-tries
```

If you want to prune the MPT state(e.g. when you switch from full node to fast node), you can also prune the node:

```
./geth snapshot insecure-prune-all --datadir ./datadir ./genesis.json
```

:::warning
Fast Node does not generate Trie Data when syncing.
Once the Fast Node is running, there is no way to switch back to Full Node.
Need to re-download snapshot data to restore it to Full Node.
:::

Please refer to [the PR](https://github.com/bnb-chain/op-geth/pull/75) for the implementation and more details.

### Full Node

You can run a full node if you need
- A higher level of security and reliability assurance. Full node executes all blocks and verifies locally.
- The ability to query with the recent 128 blocks' trie data. E.g. get the balance of specific account at specific block height, simulate call at specific block height, debug trace at specific block height, etc.

If you want to enable the full node, you can set the syncmode flag to full(`--syncmode full`) in the `geth` command.

Specifically, it's recommended to run a full node with PBSS and pebble to reduce data redundancy and have a better performance.

```
--state.scheme path --db.engine pebble
```

Please refer to [PBSS document](./pbss-pebble.md) for more details.

### Archive Node(with op-reth)

Archive node stores the entire history trie data.
It's suitable for use cases that require the entire history trie data, e.g. block explorer, analytics, etc.

The current history trie data is around 3TB (at the end of April, 2024).
The op-geth implementation will have a significant performance issue when the history trie data is large.
It's recommended to run the archive node with op-reth.

The example command to run the archive node with op-reth is as follows:

```
export L2_RPC=https://opbnb-mainnet-rpc.bnbchain.org

op-reth node \
    --datadir /server/datadir \
    --chain opbnb-mainnet \
    --rollup.sequencer-http ${L2_RPC} \
    --authrpc.addr "0.0.0.0" \
    --authrpc.port 8551 \
    --authrpc.jwtsecret /server/datadir/jwt.txt \
    --http \
    --http.addr "0.0.0.0" \
    --http.port 8545 \
    --ws \
    --ws.addr "0.0.0.0" \
    --ws.port 8545 \
    --builder.gaslimit 150000000 \
    --nat any
```

You can refer to the [op-reth github repository](https://github.com/bnb-chain/reth) for more details.

## Snapshots

You can download the latest snapshot data from the [opbnb-snapshot](https://github.com/bnb-chain/opbnb-snapshot) repository.

Using the snapshot data can significantly reduce the time required to sync the node.
