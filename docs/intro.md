---
title: opBNB - High-performance layer 2 solution
icon: code
index: yes
dir:
  order: 1
---
:::caution 
This is a living document and is susceptible to changes. 
:::

# opBNB - High-performance layer 2 solution 

The opBNB network is a Layer 2 scaling solution built on top of the BNB Smart Chain. It works by offloading transaction processing and resource usage from the BNB Smart Chain, while still posting data to the underlying mainnet. Users interact with the opBNB network by depositing funds from BSC and using applications and contracts on opBNB. Sequencers then aggregate transactions, compute state transitions and submit them to the rollup contract on BSC. Provers generate cryptographic proofs that prove the validity of these state transitions, and Verifiers check the proofs to verify the opBNB state is correct. At its core, opBNB allows users to deposit and withdraw funds, use smart contracts, and view network data with high throughput and low fees. By leveraging Layer 2, opBNB is able to scale beyond the constraints of the BNB Smart Chain and provide an improved experience for users.

![image-20230601121044423](../static/img/opBNB-intro.png)


