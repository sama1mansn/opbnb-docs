---
title: Gas and Fees FAQs
---

### What is the cost of transfer transaction on opBNB and why opBNB hold capacity to enable the mass adoption of daily small amount transactions?

opBNB can make small daily transactions possible because the transaction fees are very low, around **$0.005** per transaction. This is much lower than traditional payment methods like credit cards which charge around **1-3%** per transaction. The low fees on opBNB make it economical for small purchases and daily transactions.

### What is the link to the canonical bridge for gas/stables?

**For Testnet:** <https://opbnb-testnet-bridge.bnbchain.org>
**For Mainnet:** <https://opbnb-bridge.bnbchain.org>

### Where can we get the token pricing for the BNB token on opBNB?

You can get the token pricing for BNB on opBNB from
[Coinmarketcap](https://coinmarketcap.com/currencies/bnb/)

### What is the block gas limit on opBNB?

The block gas limit on opBNB is **100M/block**, and the block time of opBNB is **1 second**.

### How are transaction fees calculated on opBNB?

You can details about the transaction fee calculation from [opBNB official
docs](https://docs.bnbchain.org/opbnb-docs/docs/core-concepts/gas-and-fees)

### Are there any overheads to include in the gas calculation?

Yes, there is a _fixed overhead_ for L1 data fee is **2100**, and _dynamic_overhead(L1 Fee Scala)_ is **1**.

### How are data storage fees for rollups calculated?

The data storage fees for rollups is calculated using the following formula.

```math
l1_data_fee = l1_gas_price * (tx_data_gas + fixed_overhead) * dynamic_overhead

fixed_overhead = 2100

dynamic_overhead = 1

tx_data_gas = count_zero_bytes(tx_data) * 4 + count_non_zero_bytes(tx_data) * 16
```

### What gas fees are associated with withdrawing opBNB assets from the main chain back to the layer 2 network?

Gas fees associated with withdrawing assets from the main chain back to the layer 2 network depend on the BNB chain's gas price at the time of withdrawal. These fees cover the cost of anchoring data on-chain and updating the network state.

:::info Don't see your question?
We're working on expanding this FAQ with more content, including questions from the community and partners, so please watch this space! However, if you don't see your question, please ask in the [BNB forum](https://forum.bnbchain.org/), so you can get the answers you need and make us aware of new FAQ items.
:::