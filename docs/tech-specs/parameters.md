---
title: Core Parameters you may want to know
icon: code
index: yes
dir:
  order: 2
---

:::caution 
This is a living document and is susceptible to changes. 
:::

## Core parameters you may want to know

OpBNB is a layer 2 scaling solution for BNB Chain that leverages the Optimism opstack. It aims to provide faster, cheaper and more secure transactions for BNB Chain users and developers. OpBNB is compatible with BNB Chain's smart contract functionality.

However, as BNB Chain has some differences from Ethereum, we need to make some compatibility changes accordingly. For example, BNB Chain's block time is 3 seconds, whereas Ethereum's is 12 seconds. BNB Chain's block gas limit is also different from Ethereum's. These differences affect how we configure our opBNB deployment and how we handle reorgs and fraud proofs.

I will explain the parameters we have changed for opBNB and why we changed them. We will also share some of the challenges and opportunities we faced while developing opBNB and how we plan to overcome them.

## Parameters We Changed for opBNB

To deploy opBNB on BNB Chain, we had to adjust some parameters. Here are some of the most important ones:

- Block time: The block time of opBNB is set to match the block time of BNB Chain, which is 1 seconds. This means that opBNB can process transactions faster than Optimism on Ethereum, which has a block time of 2 seconds. 

- Block gas limit: One of the changes that OpBNB has made is to increase the block gas limit to 100 million gas units, which is higher than the block gas limit of Optimism on Ethereum, which is 30 million gas units. This is to accommodate the higher block gas limit of BNB Chain and to allow more applications to migrate from BSC to OpBNB.

- EIP-1559 Gas Settings: TBD

- Miscellaneous: As we have changed the block time, the corresponding configurations that are related with the block time need to be changed as well. For example the SequencerWindowSize, we changed from 3600 to 14400 because of the block time change and we want to keep the window size time unchanged. For more details, you can refer to the [optimism configuration doc](https://stack.optimism.io/docs/build/conf/#).  

## Why We Changed These Parameters

We changed these parameters for opBNB to make it more compatible with BNB Chain and to optimize its performance and security. By aligning the block time and block gas limit of opBNB with those of BNB Chain, we can achieve faster transaction throughput and lower transaction costs for opBNB users and developers.
