---
title: Wallet Configuration
description: Configure your wallet to work with opBNB
icon: code
index: yes
dir:
  order: 4
---

:::caution 
This is a living document and is susceptible to changes. 
:::

# Wallet configuration

You can use any Etheruem or BSC wallet with opBNB. For instance, I will show you how to set up Metamask and Trustwallet for opBNB.

To configure your wallet to work with opBNB, you will need to add both the BNB smart chain testnet and the opBNB network. Follow these steps: 

1. Add the BNB smart chain testnet to your wallet. This is the Layer 1 blockchain that opBNB is built on top of.

   - Network Name: BSC Testnet
   - New RPC URL: [https://data-seed-prebsc-1-s1.bnbchain.org:8545](https://data-seed-prebsc-1-s3.bnbchain.org:8545/)
   - ChainID: 97
   - Symbol: tBNB
   - Explorer: [https://testnet.bscscan.com/](https://testnet.bscscan.com/)

   *[Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)*
   
   After you install the metamask in your browser, you can go to settings -> networks -> add network page. 
   
   Select add manual network and enter the network information I mentioned above.
   
   ![image-20230627171332772](../../static/img/add-bsc-metamask.png)
   
   [Trustwallet](https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph)
   
   After you install the Trustwallet in your browser, you can go to settings->network.
   
   ![img-trustwallet](../../static/img/add-bsc-trustwallet.png)
   
   Select add custom network and enter the network information I mentioned above.

2. Add the opBNB network to your wallet. This is the actual Layer 2 network you will interact with. You can follow the same steps I mentioned above with the network information below.

   - Network Name: opBNB Testnet
   - New RPC URL: [https://opbnb-testnet-rpc.bnbchain.org](https://opbnb-testnet-rpc.bnbchain.org)
   - ChainID: 5611
   - Symbol: tBNB
   - Explorer: [http://opbnbscan.com/](http://opbnbscan.com/)



:::info
Depending on your location and preference, you can choose from a variety of RPC endpoints for BSC and opBNB. For more information about the endpoints and their features, please refer to the network information document that we have prepared for you. To ensure the best performance and user experience, you can test the latency of each endpoint before you configure it with your wallet.
:::
