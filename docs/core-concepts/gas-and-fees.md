---
title: Gas and Fees 
description: Learn about the Gas and Fees structure of opBNB
icon: code
index: yes
dir:
  order: 2
---

:::caution 
This is a living document and is susceptible to changes. 
:::

## Overview

OpBNB is a Layer 2 scaling solution that aims to achieve higher throughput and lower cost for transactions on the BNB Smart Chain. The cost of opBNB transactions consists of two components: the Layer 2 gas fee and the Layer 1 gas fee. The Layer 2 gas fee reflects the computational complexity of the transaction. The Layer 1 gas fee covers the expense of submitting batches of transactions to the BSC for verification and finality.

**Gas price = base price + priority price**

**Layer 2 transaction cost = Layer 2 gas price * Layer 2 gas consumed + Layer 1 gas price * Layer 1 gas consumed.**

## Current configuration

| Name          | Floor Base Price | Minimum Priority Price(gwei) |
| ------------- | ---------------- | ---------------------------- |
| opBNB Testnet | 8 wei (dynamic)  | 0.2                          |
| opBNB Mainnet | 8 wei (dynamic)  | 0.2                          |
| BSC Testnet   | 0                | 3                            |
| BSC Mainnet   | 0                | 3                            |

## What does this means

Please note the floor base price is the minimum base price opBNB can set, and according to the usage, the base price can fluctuate. For example, according to the current configuration, if the usage of a block reaches 50% of 100M gas, the base price will increase by 12.5%.

The minimum priority price actually is configured by opBNB, and users can give any priority price that is higher than this number. Usually users will get the estimate gas price by calling the API of “estimate gas price”. It is a recommended gas price according to the current average gas price of history blocks.

BNB Chain aims to reduce the transaction cost to the level that enable the mass adoption, for opBNB, the target of the transfer transaction is lower than $0.005, therefore after analysis the Layer 1 gas price of BSC and the gas of transfer transactions, the minimum base price and priority price is calculated as:

**Target of opBNB Layer 2 native transfer transactions is $0.005.** 

**Native transfer transactions gas consumption**

L2 part gas: 21000 

L1 part gas: 3980, and the gas price of BSC is 3gwei

opBNB Transaction cost = (L1 gas price * 3980 + L2 gas price * 21000) * 0.000000001*BNB Price <= $0.005

So the L2 gas price is set to 0.2 gwei initially. The minimum priority price can be adjusted when the BNB price changes, and the configuration will be managed by BNB Chain community through governance process.