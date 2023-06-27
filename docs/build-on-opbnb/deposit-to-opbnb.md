---
title: Deposit Tokens to opBNB
icon: code
index: yes
dir:
  order: 2
---

:::caution 
This is a living document and is susceptible to changes. 
:::

# Claim tBNB from Discord Faucet

To get some tBNB for testing opBNB, you can join the [BNB discord](http://discord.gg/bnbchain) and go to the test-faucet channel under the faucet section. There you can claim your tBNB for free.

1. Type the command */faucet ${your-wallet-address}*.

![image-20230627160144777](../../static/img/faucet-tbnb.png)

2. Switch to the BNB smart chain testnet in your wallet and check your balance. 

:::information_desk_person:
Please note if your wallet balance is larger than 1 tBNB, you can not get new tBNB from the faucet.
:::

# Deposit tokens to opBNB

Before building or deploying any applications on the opBNB network, you must first deposit tokens from BNB Smart Chain to opBNB. You can do this using the [opBNB bridge dApp](https://opbnb-testnet-bridge.bnbchain.org/). 

Follow these steps to deposit tokens from BNB Smart Chain to opBNB: 

1. Make sure you have BNB tokens in your Metamask wallet on the BNB Smart Chain testnet. You can get testnet BNB from a faucet.
2. In Metamask, switch your network to BNB Smart Chain Testnet. This is the Layer 1 network where your tokens currently are.
3. Enter the amount of BNB you want to deposit to the opBNB network. For testnet, you can do a small amount like 0.1 BNB.
4. Click "Deposit" to begin the transfer.
5. Metamask will prompt you to confirm the transaction. Click "Confirm" to sign it and pay the required gas fee.
6. Once the transaction is processed, switch your network in Metamask to opBNB Testnet. The BNB amount you deposited will appear in your wallet.
7. You can now build, deploy, and interact with dApps on the opBNB network using the BNB you deposited. To withdraw tokens from opBNB back to BNB Smart Chain, simply go to the bridge, enter the amount to withdraw, and confirm the transaction in Metamask. The bridge will transfer your tokens from the opBNB network back to the BNB Smart Chain testnet.

![image-20230605151226852](../../static/img/opBNB-bridge.png)

