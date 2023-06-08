---
sidebar_position: 1
---

:::caution 
This is a living document and is susceptible to changes. 
:::

# Why opBNB
Large-scale Web3 applications like games, social networks, the metaverse, and high-frequency trading face significant challenges when built directly on Layer 1 chains. Networks like BNB Smart Chain, Ethereum, and Polygon were not designed to handle the high transaction volumes and intensive daily active users of these applications. For example, a game like Crypto Blades on BSC with 300K daily active users and 18 million transactions per day can overload the BNB Smart Chain, leading to unacceptable gas fees and network responsiveness.
The gas fees of these Layer 1 chains are still too expensive for most games and applications, which usually prefer low or no fees. A single game with 1 million daily active users could spend thousands of BNB on gas fees during peak periods. Layer 2 scaling solutions built on top of Layer 1 chains offer a solution. They can provide high throughput beyond Layer 1 constraints. The opBNB network is built on OP Stack and designed for over 4,000 TPS and gas fees under $0.005 on average for transfer transactions.
By offloading transaction processing and resource usage to Layer 2 while still securely posting data to the underlying BNB Smart Chain, applications gain major throughput benefits without sacrificing decentralisation or composability. Layer 2 solutions are suitable for applications where scale and user experience are crucial, such as games, social networks, the metaverse, and high-frequency trading. 


# opBNB - High-performance layer 2 solution 

The opBNB network is a Layer 2 scaling solution built on top of the BNB Smart Chain. It works by offloading transaction processing and resource usage from the BNB Smart Chain, while still posting data to the underlying mainnet. Users interact with the opBNB network by depositing funds from BSC and using applications and contracts on opBNB. Sequencers then aggregate transactions, compute state transitions and submit them to the rollup contract on BSC. Provers generate cryptographic proofs that prove the validity of these state transitions, and Verifiers check the proofs to verify the opBNB state is correct. At its core, opBNB allows users to deposit and withdraw funds, use smart contracts, and view network data with high throughput and low fees. By leveraging Layer 2, opBNB is able to scale beyond the constraints of the BNB Smart Chain and provide an improved experience for users.

![image-20230601121044423](../static/img/opBNB-intro.png)

## Architecture of opBNB

The opBNB is a layer 2 scaling solution built on top of BSC (a layer 1 blockchain). It processes transactions off-chain but posts transaction data on-chain, providing scalability as compressed layer 2 transaction data are posted on-chain. It has three main layers: an RPC service layer for interacting with the rollup, an operator interface layer for proposing layer 2 transactions off-chain, and an execution layer for executing transactions and providing an EVM execution environment. 

The rollup has a modular design, so the data availability interface and settlement layer can be implemented with different solutions. The data availability layer can be replaced with solutions like Greenfield, Arweave, and others, instead of relying only on BSC. Likewise, the settlement layer can be replaced with other EVM-compatible chains besides BSC, such as the Ethereum mainnet. 

The rollup is secured by its settlement chain as transaction data is posted on-chain, benefits from its consensus, and uses its data availability solutions. It is decentralized and permissionless. The rollup provides faster and cheaper transactions than BSC while still being secured.



![image-20230605092452839](../static/img/opBNB-arch.png)

