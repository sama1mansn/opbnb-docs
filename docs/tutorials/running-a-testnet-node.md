---
sidebar_label: Run Testnet Node
description: Guide to running opBNB Testnet Node
---

# Running a Testnet Node

If you're looking to build an app on opBNB you'll need access to an opBNB node.
You can simply use the public testnet node at <https://opbnb-testnet-rpc.bnbchain.org> or run your own.

This guide will walk you through setting up your own testnet node.

## Hardware requirements

Replicas must store the transaction history of opBNB and run Geth. For optimal performance, they should be powerful machines (real or virtual) with at least 16 GB RAM and an SSD drive with 500 GB free space (for production network).

## Build op-node and op-geth

```bash
export OPBNB_WORKSPACE=/tmp/opbnb
mkdir -p $OPBNB_WORKSPACE

cd $OPBNB_WORKSPACE
git clone git@github.com:bnb-chain/opbnb.git
cd opbnb/op-node
git checkout release/testnet
make op-node
mkdir -p $OPBNB_WORKSPACE/op-node-data
cp ./bin/op-node $OPBNB_WORKSPACE/op-node-data

cd $OPBNB_WORKSPACE
git clone git@github.com:bnb-chain/op-geth.git
cd op-geth
git checkout develop
make geth
mkdir -p $OPBNB_WORKSPACE/op-geth-data
cp ./build/bin/geth $OPBNB_WORKSPACE/op-geth-data/op-geth
```

## Data Preparation

```bash
cd $OPBNB_WORKSPACE
cp $OPBNB_WORKSPACE/opbnb/assets/testnet/genesis.json $OPBNB_WORKSPACE/op-geth-data
cp $OPBNB_WORKSPACE/opbnb/assets/testnet/rollup.json $OPBNB_WORKSPACE/op-node-data

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

export CHAIN_ID=5611
export L2_RPC=https://opbnb-testnet-rpc.bnbchain.org

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
# it's better to replace the L1_RPC with your own BSC Testnet RPC Endpoint for stability
export L1_RPC=https://data-seed-prebsc-1-s1.binance.org:8545
export P2P_BOOTNODES="enr:-J24QGQBeMsXOaCCaLWtNFSfb2Gv50DjGOKToH2HUTAIn9yXImowlRoMDNuPNhSBZNQGCCE8eAl5O3dsONuuQp5Qix2GAYjB7KHSgmlkgnY0gmlwhDREiqaHb3BzdGFja4PrKwCJc2VjcDI1NmsxoQL4I9wpEVDcUb8bLWu6V8iPoN5w8E8q-GrS5WUCygYUQ4N0Y3CCIyuDdWRwgiMr"

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

You can compare the block with the one requested from [public testnet endpoint](https://opbnb-testnet-rpc.bnbchain.org).

```bash
$ curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","id": 1, "params": ["0x1a", false]}' http://localhost:8545
$ curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","id": 1, "params": ["0x1a", false]}' https://opbnb-testnet-rpc.bnbchain.org
```
