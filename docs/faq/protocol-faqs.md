---
title: Protocol FAQs
---

### How does opBNB achieve high performance and cheap gas fees?

opBNB testnet enhances the performance of the "Execution Layer" and the "Derivation Layer" of the OP Stack as highlighted in [OP Stack landscape](https://stack.optimism.io/docs/understand/landscape/?ref=binance.ghost.io#existing-landscape).

### How do you expect the TPS of the opBNB?
The TPS of opBNB can be estimated to be around 4,761 transactions per second based on the calculations. This is significantly higher than Ethereum's current TPS and can enable more frequent daily transactions.

### What impact of opBNB can bring to web3 games? 
Performance is important for games because gamers expect a highly responsive experience. Any lag, delay or choppiness can hamper enjoyment and immersion in the game. For blockchain games, fast transaction speeds and throughput are crucial to enable a seamless user experience. Gamers expect in-game assets and currencies to be transferred instantly, so the underlying blockchain network must be high performance

### What is the difference between opBNB and other Optimism based layer 2 solution, like Base?
opBNB is the first layer 2 optimistic rollup on BSC, and BSC layer 1 cost is much lower than ETH, so the cost of layer 2 on BSC will give application developers a more affordable solution. Another difference is the opBNB will include the performance optimization techniques that has been used in BSC to have a much better performance.

### We already have the zkBNB as a scaling solution, why opBNB is needed? 
zkBNB is not EVM-comptatible, which means it is more suitable for NFT and token transactions, not for generic dApps. opBNB`s programability is to support applications that need more flexibility.

### How to allow smart contract cross chain communication between L1 and L2?
Directly interacting with smart contract functions that exists on L2(opBNB) from L1(BSC), is not possible as all smart contracts on L2 is isolated from L1.

With that said, there is a way for developers to allow arbitrary message sending by writing their own contracts to build their required business logic. More details here: https://community.optimism.io/docs/developers/bridge/messaging/#communication-basics-between-layers

:::info Don't see your question?
We're working on expanding this FAQ with more content, including questions from the community and partners, so please watch this space! However, if you don't see your question, please ask in the [BNB forum](https://forum.bnbchain.org/), so you can get the answers you need and make us aware of new FAQ items.
:::
