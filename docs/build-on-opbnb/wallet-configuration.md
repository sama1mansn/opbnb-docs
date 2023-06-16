---
title: Wallet Configuration
icon: code
index: yes
dir:
  order: 4
---

:::caution 
This is a living document and is susceptible to changes. 
:::

# Wallet configuration

To configure your Metamask wallet to work with opBNB, you will need to add both the BNB Smart Chain testnet and the opBNB network. Follow these steps: 

1. Add the BNB Smart Chain testnet to your Metamask wallet. This is the Layer 1 blockchain that opBNB is built on top of.

   - Network Name: BSC Testnet
   - New RPC URL: [https://data-seed-prebsc-1-s1.binance.org:8545](https://data-seed-prebsc-1-s3.binance.org:8545/)
   - ChainID: 97
   - Symbol: tBNB
   - Explorer: [https://testnet.bscscan.com/](https://testnet.bscscan.com/)

   ![image-20230615151355713](../../static/img/bsc-testnet-config.png)



2. Add the opBNB network to your Metamask wallet. This is the actual Layer 2 network you will interact with.
   - Network Name: opBNB Testnet
   - New RPC URL: [https://opbnb-testnet-rpc.bnbchain.org](https://opbnb-testnet-rpc.bnbchain.org)
   - ChainID: 5611
   - Symbol: tBNB
   - Explorer: [http://opbnbscan.com/](http://opbnbscan.com/)



![image-20230615151623365](../../static/img/opBNB-testnet-config.png)

