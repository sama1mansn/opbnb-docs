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

### where can I find out more information about L2 gas fees?
Prominent Layer 2 mainnet gas fees resource. 

* [opBNB](https://opbnbscan.com/tx/0xa9f32fc3ef0b3338032bffc95f1c93e4d4bf6bdf6f0225b47e3b543b5421fdc0)
* [Optimism](https://l2fees.info/) 
* [Arbitrum](https://l2fees.info/)
* [Base](https://basescan.org/tx/0xd360162fb3474308acdf707f730cbff993168ef46610f5453b3a10d7d76deaa2)
* [Starknet](https://l2fees.info/) 
* [Linea](https://l2fees.info/)
* [Polygon zkEVM](https://l2fees.info/) 
* [zkSync](https://l2fees.info/) 

To also check BNB Chain’s Layer 1, BSC visit [here](https://bscscan.com/tx/0x1515e830b352a76bab8468d39c4924e1d220578ab0bf69eb09914e877c0713e5).

### Why is my opbnb transaction rejected or pending?
There are several possible reasons why your transaction of opBNB may be rejected or pending. Here are some of the most common ones:

* You have insufficient funds in your wallet to cover the transaction fee or the amount of opBNB you want to send.
* You have set a gas price or gas limit that is too low for the network congestion level, resulting in a slow or failed transaction.
* You have made a mistake in the contract interaction, such as calling a function that does not exist or sending an unsupported token type.
* You have encountered a technical issue with your wallet provider, the opBNB network, or the smart contract you are interacting with.

To troubleshoot your transaction, you can do the following:

* Check your wallet balance and make sure you have enough funds to cover the transaction fee and the amount of opBNB you want to send.
* Check the network status and adjust your gas price and gas limit accordingly. Sometimes the wallet like Trust Wallet or Metamask recommends the "max base fee" or "max priority fee" to "0". This is not accepted by the opBNB Mainnet and will result in a failed transaction. Please check your transaction details carefully before signing/confirming. If you see a "0" in the "max base fee" or "max priority fee" fields, do not proceed with the transaction. Instead, cancel it and try again until you see a normal fee recommendation. 
* Check the recipient address and make sure it is correct and valid. You can use a tool like https://opbnbscan.com/ to verify the address and see if it has any transactions history or contract code.
* Contact your wallet provider, the opBNB network, or the smart contract developer for technical support if you suspect there is an issue on their end.

:::info Don't see your question?
We're working on expanding this FAQ with more content, including questions from the community and partners, so please watch this space! However, if you don't see your question, please ask in the [BNB forum](https://forum.bnbchain.org/), so you can get the answers you need and make us aware of new FAQ items.
:::