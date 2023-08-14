---
title: Set Gas Price 
description: How to set the base price and priority price for opBNB transactions
icon: code
index: yes
dir:
  order: 2
---

:::caution 
This is a living document and is susceptible to changes. 
:::

This document shows you how to set the priority price and base price for opBNB transactions in wallet. These prices determine how much you are willing to pay for your transaction to be included in the next block(Prioirty Gas Price) and how much you are willing to pay for the gas used by your transaction. Setting these prices correctly can help you save money and avoid delays.

To set the priority price and base price, follow these steps:

Metamask:

1. Open your metamask wallet and click on the opBNB network at the top right corner.

2. Click on the send button and enter the recipient address and the amount of opBNB you want to send.

3. Before you confirm your transaction, click on the **advanced->edit** button next to the gas fee section.

   <img
     src={require('../../static/img/gas-price-setting.png').default}
     alt="opBNB-bridge"
     style={{zoom:"48%"}}
   />

   

4. You will see two sliders: one for the **Max base fee(Gwei)** price and one for the **Priority Fee(Gwei)**. The priority price is the amount of opBNB you are willing to pay per unit of gas for your transaction to be included in the next block. The base price is the amount of opBNB you are willing to pay per unit of gas for the gas used by your transaction. The total gas fee is the sum of these two prices multiplied by the gas limit, which is an estimate of how much gas your transaction will use. opBNB minimum priority fee is 0.2 Gwei, and you can set any number that is higher than 0.2 Gwei.

   <img
     src={require('../../static/img/advanced-setting.png').default}
     alt="opBNB-bridge"
     style={{zoom:"48%"}}
   />

   

5. You can adjust the sliders according to your preferences. The higher the priority price, the faster your transaction will be confirmed, but the more expensive it will be. The lower the base price, the cheaper your transaction will be, but the more likely it will fail if the gas limit is too low.

6. Once you are satisfied with your settings, click on save and then confirm your transaction.

