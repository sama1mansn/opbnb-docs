---
sidebar_label: Run Mainnet Node
description: Guide to running opBNB Mainnet Node
---

# Running a Mainnet node

If you're looking to build an app on opBNB you'll need access to an opBNB node.
You can simply use the public mainnet node at <https://opbnb-mainnet-rpc.bnbchain.org> or run your own.

This guide will walk you through setting up your own Mainnet node.

## Hardware requirements

Replicas must store the transaction history of opBNB and run Geth. For optimal performance, they should be powerful machines (real or virtual) with at least 16 GB RAM and an SSD drive with 500 GB free space (for production network).

## Build op-node and op-geth

The current version of opBNB Mainnet is `v0.1.2`.

```bash
export OPBNB_MAINNET_VERSION=v0.1.2
export OPBNB_WORKSPACE=/tmp/opbnb
mkdir -p $OPBNB_WORKSPACE

cd $OPBNB_WORKSPACE
git clone git@github.com:bnb-chain/opbnb.git
cd opbnb/op-node
git checkout $OPBNB_MAINNET_VERSION
make op-node
mkdir -p $OPBNB_WORKSPACE/op-node-data
cp ./bin/op-node $OPBNB_WORKSPACE/op-node-data

cd $OPBNB_WORKSPACE
git clone git@github.com:bnb-chain/op-geth.git
cd op-geth
git checkout $OPBNB_MAINNET_VERSION
make geth
mkdir -p $OPBNB_WORKSPACE/op-geth-data
cp ./build/bin/geth $OPBNB_WORKSPACE/op-geth-data/op-geth
```

## Data Preparation

```bash
cd $OPBNB_WORKSPACE
wget -P op-geth-data https://raw.githubusercontent.com/bnb-chain/opbnb/develop/assets/mainnet/genesis.json
wget -P op-node-data https://raw.githubusercontent.com/bnb-chain/opbnb/develop/assets/mainnet/rollup.json

openssl rand -hex 32 > jwt.txt
cp jwt.txt $OPBNB_WORKSPACE/op-geth-data
cp jwt.txt $OPBNB_WORKSPACE/op-node-data

# init op-geth genesis
cd $OPBNB_WORKSPACE/op-geth-data
mkdir datadir
./op-geth --datadir ./datadir init genesis.json
```

## Start components

op-geth

```bash
#! /usr/bin/bash
cd $OPBNB_WORKSPACE/op-geth-data

export CHAIN_ID=204
export L2_RPC=https://opbnb-mainnet-rpc.bnbchain.org

./op-geth \
  --datadir="./datadir" \
  --verbosity=3 \
  --http \
  --http.corsdomain="*" \
  --http.vhosts="*" \
  --http.addr=0.0.0.0 \
  --http.port=8545 \
  --http.api=net,eth,engine \
  --ws \
  --ws.addr=0.0.0.0 \
  --ws.port=8545 \
  --ws.origins="*" \
  --ws.api=eth,engine \
  --syncmode=full \
  --maxpeers=10 \
  --networkid=$CHAIN_ID \
  --miner.gaslimit=150000000 \
  --triesInMemory=32 \
  --txpool.globalslots=10000 \
  --txpool.globalqueue=5000 \
  --txpool.accountqueue=200 \
  --txpool.accountslots=200 \
  --cache 32000 \
  --cache.preimages \
  --allow-insecure-unlock \
  --authrpc.addr="0.0.0.0" \
  --authrpc.port="8551" \
  --authrpc.vhosts="*" \
  --authrpc.jwtsecret=./jwt.txt \
  --gcmode=archive \
  --metrics \
  --metrics.port 6060 \
  --metrics.addr 0.0.0.0 \
  --rollup.sequencerhttp=$L2_RPC
```

op-node

```bash
#! /usr/bin/bash

set -ex

cd op-node-data

export L2_RPC=http://localhost:8551
# it's better to replace the L1_RPC with your own BSC Mainnet RPC Endpoint for stability
export L1_RPC=https://bsc-dataseed.bnbchain.org
# replace the p2p private key with yours
# you can generate a new one with `openssl rand -hex 32`
export P2P_PRIV_KEY=0000000000000000000000000000000000000000000000000000000000000000
export P2P_BOOTNODES="enr:-J24QGRN1ZLv--bzrqM-qRC-zUlCO4irVVg2bbWOvd3KEFjwLj8qCh54a1ziqic84uQz-2RLVSuNyNAbKEfrNr-STj-GAYoIQDCIgmlkgnY0gmlwhDaykUmHb3BzdGFja4PMAQCJc2VjcDI1NmsxoQJ-_5GZKjs7jaB4TILdgC8EwnwyL3Qip89wmjnyjvDDwoN0Y3CCIyuDdWRwgiMr"

./op-node \
  --l1.trustrpc \
  --sequencer.l1-confs=15 \
  --verifier.l1-confs=15 \
  --l1.http-poll-interval 3s \
  --l1.epoch-poll-interval 45s \
  --l1.rpc-max-batch-size 20 \
  --rollup.config=./rollup.json \
  --rpc.addr=0.0.0.0 \
  --rpc.port=8546 \
  --p2p.sync.req-resp \
  --p2p.listen.ip=0.0.0.0 \
  --p2p.listen.tcp=9003 \
  --p2p.listen.udp=9003 \
  --snapshotlog.file=./snapshot.log \
  --p2p.priv.raw=$P2P_PRIV_KEY \
  --p2p.bootnodes=$P2P_BOOTNODES \
  --metrics.enabled \
  --metrics.addr=0.0.0.0 \
  --metrics.port=7300 \
  --pprof.enabled \
  --rpc.enable-admin \
  --l1=${L1_RPC} \
  --l2=${L2_RPC} \
  --l2.jwt-secret=./jwt.txt \
  --log.level=debug
```

## Check status

Wait for the node to sync. You'll see log in `op-geth` if there's any new block.

```
INFO [06-14|01:15:02.937] Starting work on payload                 id=0x4e2b62d76dc5f1d3
INFO [06-14|01:15:02.937] Imported new potential chain segment     number=5580 hash=895199..a87b81 blocks=1 txs=1 mgas=0.047 elapsed="241.25µs"  mgasps=194.508  age=1d9h23m  dirty=0.00B
INFO [06-14|01:15:02.938] Chain head was updated                   number=5580 hash=895199..a87b81 root=79aad7..99e3bb elapsed="27.333µs"  age=1d9h23m
```

You can also check the block number with curl:

```
$ curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' http://localhost:8545
```

If the node is synced, you'll see the non-zero block number in the response:

```
{"jsonrpc":"2.0","id":1,"result":"0x1a"}
```

You can compare the block with the one requested from [public mainnet endpoint](https://opbnb-mainnet-rpc.bnbchain.org).

```bash
$ curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","id": 1, "params": ["0x1a", false]}' http://localhost:8545
$ curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","id": 1, "params": ["0x1a", false]}' https://opbnb-mainnet-rpc.bnbchain.org
```

Syncing up for the first time may be time-consuming.

The current sync mechanism is as follows:
-  Retrieve the blocks from the op-node P2P network for the latest 12 hours.
-  Retrieve all blocks prior to that from the data availability layer. For opBNB, the data availability layer is L1 (BSC). The op-node scans the L1 chain starting from the genesis height, retrieves the L2 block data from the call data to the [inbox batch address](https://bscscan.com/address/0xff00000000000000000000000000000000000204), composes the blocks, and executes them.

The speed relies on the number of blocks you need to retrieve from the data availability layer and the latency of the L1 RPC endpoint.

You can query the op-node RPC endpoint to check the syncing status:

```bash
$ curl -X POST -H "Content-Type: application/json" --data \
    '{"jsonrpc":"2.0","method":"optimism_syncStatus","params":[],"id":1}'  \
    http://localhost:8546 | jq .

{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "current_l1": {
      "hash": "0x86be56c30c6763e1b100a898e53810230d9e097ba0ae8338e6f2c40921e619da",
      "number": 30760342,
      "parentHash": "0xf118f4863d35852748b60810432c1a77e742913d3566f77f84325fbf23b653bf",
      "timestamp": 1691759689
    },
    "current_l1_finalized": {
      "hash": "0xa3bedf57d7403c07e2c72c523d16f83879fe0635e0940838b3b24db8e442b4ba",
      "number": 30968675,
      "parentHash": "0x7f5a4c5723f0d41707775ccc4805dc8cc89921c98e02c91096a82ea4a4e0e179",
      "timestamp": 1692386285
    },
    "head_l1": {
      "hash": "0xa6770b5d90005a07db7f47af3f13ca630667fad6462729d189fb7a8cf8d5d9dc",
      "number": 30968685,
      "parentHash": "0x5d834192288e73e5750d0338ed3462dadce38471e1ea8b1227853bd5dc3769ab",
      "timestamp": 1692386315
    },
    "safe_l1": {
      "hash": "0x4a1e2713393352dd7deb7334b3ee0cd413cf847f76460d193961336ff0374fea",
      "number": 30968676,
      "parentHash": "0xa3bedf57d7403c07e2c72c523d16f83879fe0635e0940838b3b24db8e442b4ba",
      "timestamp": 1692386288
    },
    "finalized_l1": {
      "hash": "0xa3bedf57d7403c07e2c72c523d16f83879fe0635e0940838b3b24db8e442b4ba",
      "number": 30968675,
      "parentHash": "0x7f5a4c5723f0d41707775ccc4805dc8cc89921c98e02c91096a82ea4a4e0e179",
      "timestamp": 1692386285
    },
    "unsafe_l2": {
      "hash": "0xe32740323c90722ea94b582da1e09fe7270525ab4dcf5bbe2824aacd02e7b0ea",
      "number": 594,
      "parentHash": "0xbe104ca7a75ff0054368ffc1218f85570fc4fb4caff83419d16b2042c667425f",
      "timestamp": 1691754317,
      "l1origin": {
        "hash": "0x76ede62c33bfe953af6b81a548facc81dd3ded554308f80d9d9aa0b91077452f",
        "number": 30758555
      },
      "sequenceNumber": 0
    },
    "safe_l2": {
      "hash": "0xe32740323c90722ea94b582da1e09fe7270525ab4dcf5bbe2824aacd02e7b0ea",
      "number": 594,
      "parentHash": "0xbe104ca7a75ff0054368ffc1218f85570fc4fb4caff83419d16b2042c667425f",
      "timestamp": 1691754317,
      "l1origin": {
        "hash": "0x76ede62c33bfe953af6b81a548facc81dd3ded554308f80d9d9aa0b91077452f",
        "number": 30758555
      },
      "sequenceNumber": 0
    },
    "finalized_l2": {
      "hash": "0x4dd61178c8b0f01670c231597e7bcb368e84545acd46d940a896d6a791dd6df4",
      "number": 0,
      "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
      "timestamp": 1691753723,
      "l1origin": {
        "hash": "0x29443b21507894febe7700f7c5cd3569cc8bf1ba535df0489276d8004af81044",
        "number": 30758357
      },
      "sequenceNumber": 0
    },
    "queued_unsafe_l2": {
      "hash": "0x60dc874310e4d0af98a496cd413178a3b2dbb53e6edee6bd96dc65ccfd62cfef",
      "number": 607114,
      "parentHash": "0xc456adf577349475921639d73ce9ee36262757ee42a0bbb157b89682a05acc74",
      "timestamp": 1692360837,
      "l1origin": {
        "hash": "0x5ed192fb4146bd47831c5177d4d7be5a6b52835db1f161e291cf0b66a1f2be98",
        "number": 30960190
      },
      "sequenceNumber": 2
    }
  }
}
```

Check the `result.current_l1.number` field and ensure it increases over time.

The genesis L1 number is 30758357, the block number of [first batch transaction](https://bscscan.com/tx/0xefe7d06cb16cbc6f5ed7e7b611125cd4cf9a81f064e73ec814e914c28545853e) is 30760322. Only when the `result.current_l1.number` passes 30760322, the L2 block number will be increased.
