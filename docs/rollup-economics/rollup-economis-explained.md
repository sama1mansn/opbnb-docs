---
title: Rollup Economics Explained 
icon: code
index: yes
dir:
  order: 1
---

:::caution 
This is a living document and is susceptible to changes. 
:::


## Rollup Economics Explained 

You probably know that blockchains are not very efficient when it comes to processing transactions. They have to deal with three main costs:

- Execution: This is how much it costs to run the code of a transaction and make sure it follows the rules of the network (for example, you can't spend more tokens than you have).
- Storage/state: This is how much it costs to store the changes that a transaction makes to the network's "database" (for example, updating your balance after you send or receive tokens).
- Data availability: This is how much it costs to make sure that everyone in the network can see and verify your transaction. Without this, someone could cheat and hide some data from others (this is called a data-withholding attack).

These costs add up quickly and limit how many transactions a blockchain can handle per second. That's why we need rollups!

Rollups are a way of moving some of these costs off the main chain (layer-1) and onto a secondary chain (layer-2). Instead of having every node in the network execute and store every transaction, we can have a smaller group of nodes do this work and then post a summary of their work on the main chain.

But wait, isn't that risky? How can we trust this smaller group of nodes?

Good question!

Rollups use different types of proofs to make sure that the layer-2 chain is secure and follows the same rules as the layer-1 chain. Optimistic rollups rely on someone to catch and report any errors or frauds by the layer-2 nodes, while ZK rollups use fancy math (zero-knowledge proofs) to prove that the layer-2 nodes did everything correctly.

## Posting data to Layer-1 is the primary bottleneck for fees on rollups

Rollups are a type of layer-2 scaling solution that move execution off of the main chain, which means they can process transactions faster and cheaper than Ethereum. But there's a catch: they still need to post their data to the layer-1 chain to make sure it's available for anyone to verify.

This means that rollups have to pay for two things: execution and storage on layer-2, and data posting on layer-1. And guess what? The latter is much more expensive than the former. You can see this for yourself by looking at the "Advanced TxInfo" tab on any transaction in the block explorer. The fee is split into three parts: calldata costs for layer-1, computation costs for layer-2, and storage costs for layer-2. And in most cases, the calldata costs are the biggest chunk of the fee. Posting data to Layer-1 is the primary bottleneck for fees on rollups.


## Lower Cost for DA on BSC

Ethereum is working hard on this, with solutions like Proto-Danksharding and Danksharding, which will increase the amount of data that can fit on Ethereum. And guess what? We can benefit from these solutions too, because BSC is compatible with Ethereum. So whatever Ethereum does, we can do it too.

But we are not just following Ethereum. We are also exploring our own ideas, such as creating a dedicated storage layer with BNB Greenfield. This would be a place where we can store Layer 2 transactions, which are faster and cheaper than Layer 1 transactions. BNB Greenfield would make opBNB even more scalable and efficient.


