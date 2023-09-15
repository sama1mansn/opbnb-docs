---
title: opBNB Bridge FAQs
---

### What is the status of the integration between opBNB and Optimism's Superchain?

opBNB is a project that aims to bring the benefits of L2 scaling and user-friendly UX to the BNB ecosystem. It will enable fast and cheap transactions on BNB L2, as well as smooth interoperability with Greenfield, a decentralized platform for building and running applications. 
Superchain is an innovative solution that leverages OP Stack to provide L2/L3 scaling and security for Ethereum. It allows users to access various L2 protocols with a single wallet and enjoy low fees and high throughput. opBNB is interested in collaborating with Superchain and integrating OP Stack into BNBChain. 

### What is the reason for the discrepancy in the estimated cost of withdraw/deposit transactions between the opBNB bridge page and my wallet?

When you use the bridge to deposit or withdraw assets from opBNB, the bridge will estimate the gas cost for your transaction. This is done by simulating the execution of the transaction on the blockchain, without actually sending it or changing the state of the network. The simulation returns a number that indicates how much gas units the transaction would use if it was executed in the current network state.

To get this number, the bridge uses a function called estimateGas, which implements a binary search algorithm between a lower and an upper bound of gas units. The lower bound is usually 21,000, which is the minimum gas required for a simple ether transfer. The upper bound is either specified by the user or derived from the block gas limit of the pending block. The function tries to execute the transaction with different gas values within this range until it finds the smallest gas value that does not cause an out-of-gas exception. This is the estimated gas usage of the transaction.

For example:
In this example, the bridge estimate of gas is around 0.0008 BNB, which is around $0.17. 
<img
  src={require('../../static/img/faqs/bridge-estimate.png').default}
  alt="opBNB-bridge"
  style={{zoom:"30%"}}
/>

However, the wallet that you use to interact with the bridge may use a different method to calculate the estimated transaction cost. It may use the gas limit, which is the maximum amount of gas that you are willing to spend on the transaction. This is usually higher than the estimate given by the bridge.

For example:
The wallet estimate of the transaction is around 0.002 BNB, which is around $0.47.
<img
  src={require('../../static/img/faqs/wallet-estimate.png').default}
  alt="opBNB-bridge"
  style={{zoom:"30%"}}
/>

Once the transaction is executed on the chain, you can see the actual cost of the transaction in the opBNB explorer, which usually is similar to the estimate given by the bridge.

:::info Don't see your question?
We're working on expanding this FAQ with more content, including questions from the community and partners, so please watch this space! However, if you don't see your question, please ask in the [BNB forum](https://forum.bnbchain.org/), so you can get the answers you need and make us aware of new FAQ items.
:::
