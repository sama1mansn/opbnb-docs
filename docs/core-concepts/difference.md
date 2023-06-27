---
title: Differences between opBNB and Layer1 networks
icon: code
index: yes
dir:
  order: 2
---
:::caution 
This is a living document and is susceptible to changes. 
:::
# Differences between BSC and opBNB and Ethereum

Before I compare opBNB, BSC and Ethereum, let me give you some basic facts about each chain, so you can understand their features and differences.

opBNB is a layer 2 solution that is based on OP Stack, a framework for building scalable blockchains. opBNB has optimized the mining process and the cache data access to achieve a capacity of 100M gas per second, which is much higher than BSC. Our goal is to provide a solution for network congestion problems for highly active applications on the BSC, such as DeFi, NFTs and gaming.

|                     | **opBNB** | **BSC**                                             | **Ethereum** |
| ------------------- | --------- | --------------------------------------------------- | ------------ |
| **Gas Token**       | BNB       | BNB                                                 | ETH          |
| **VM**              | EVM       | EVM                                                 | EVM          |
| **Gas Price Model** | EIP-1559  | [Gas Price Auction](https://bscscan.com/gastracker) | EIP-1559     |
| **Block Gas Limit** | 100M      | [140M](https://www.bscscan.com/chart/gaslimit)      | 30M          |
| **Block time**      | 1s        | 3s                                                  | 12s          |

Parameter differneces:

| **Parameter**                         | **opBNB value** | **Optimism value** | **Ethereum value (for reference)** |
| ------------------------------------- | --------------- | ------------------ | ---------------------------------- |
| Block gas limit                       | 100,000,000 gas | 30,000,000 gas     | 30,000,000 gas                     |
| Block gas target                      | 50,000,000      | 5,000,000 gas      | 15,000,000 gas                     |
| EIP-1559 elasticity multiplier        | 2               | 6                  | 2                                  |
| EIP-1559 denominator                  | 8               | 50                 | 8                                  |
| Maximum base fee increase (per block) | 12.5%           | 10%                | 12.5%                              |
| Maximum base fee decrease (per block) | 12.5%           | 2%                 | 12.5%                              |



OP Stack has some minor differences, so does opBNB. I just listed the differences here for your reference, for details you can refer to the [OP Stack documents](https://stack.optimism.io/docs/releases/bedrock/differences/#opcode-differences). 

