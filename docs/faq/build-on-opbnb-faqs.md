---
title: Build on opBNB
---

### How to check if a smart contract is verified on opBNB using an API GET request?

With the [API key](https://nodereal.io/meganode) and smart contract address, you can retrieve the contract's verification status, source code & ABI.

For opBNB mainnet, `https://open-platform.nodereal.io/{{yourAPIkey}}/op-bnb-mainnet/contract/?action=getsourcecode&address={{contract address}}`

For opBNB testnet, `https://open-platform.nodereal.io/{{yourAPIkey}}/op-bnb-testnet/contract/?action=getsourcecode&address={{contract address}}`

### Why does token info (like name, symbol) is not displayed on opBNBscan despite having contract verified?

If the deployed contract is a proxy contract, then the info. will not be displayed as opBNBscan uses enhanced API to fetch the token details like name, symbol etc. In this case, enhanced API needs to call the implementation contract to fetch the token details.
Currently, this feature is under development where enhanced API will make call to implementation contract when token info. returned from proxy contract is empty.

### What are the third-party provider services where we can purchase private RPC access?

You can purchase private RPC access from [Nodereal](https://nodereal.io/meganode).

### Are there any grants or financial support for projects on opBNB?

Yes, we provide the same support for opBNB as for BNB Smart Chain when it comes to grants or financing projects. Check [here](https://www.bnbchain.org/en/developers/developer-programs) for the complete details.

### Is there an ability to run nodes on opBNB?

Check out the official [documentation](https://docs.bnbchain.org/opbnb-docs/docs/tutorials/running-a-testnet-node) to learn how to run nodes on opBNB.

### Can a native project on opBNB issues its token natively on opBNB?

Yes, it is up to the project.

### What is the recommended approach for launching projects, should the project be natively launched on opBNB and then bridged to L1 or the other way around?

The choice of L2 or L1 depends on the specific needs of the project. L2 offers better performance and lower cost, so it is advisable to use L2 as the starting point if these factors are important for the project.

### Is there a possibility of a shared sequencer/liquidity with other chains built on OPStack in the future?

Unfortunatelly, no, in short term, this is BNB Chain team`s goal yet.

### What programming language is used for the opBNB chain and contracts?

The pre-deployed smart contracts are written in Solidity, and opBNB is built with OP Stack framework. For details, please refer to [official docs](https://docs.bnbchain.org/opbnb-docs/docs/core-concepts/why-opstack) for more details.

### Are there any aidrops for opBNB?

We want to clarify that there is NO airdrop planned for opBNB as of now. Please be cautious and aware of any claims or messages suggesting otherwise. Protect yourself from potential scams by staying vigilant and verifying information from official sources.

### What oracles and VRF does opBNB support?

opBNB is a permissionless chain that allows any VRF and oracle services to be integrated. The
first two services that have been launched on opBNB are Binance Oracle and Polythera, which
provide reliable and secure data feeds for smart contracts.

### What to do if there is trouble verifying smart contract with all available methods using the <https://opbnbscan.com/verifyContract>

Try using the alternative explorer <https://opbnb-testnet.bscscan.com/> for verifying your smart contracts.

### How do we set hardhat verification parameters for opBNB?

Refer to the official Hardhat documentation [here](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify#adding-support-for-other-networks)

### How does opBNB handle the storage and execution of metadata associated with NFTs on its optimistic rollup?

The process of creating and storing NFTs on the opBNB is similar to other blockchains. You need to have a smart contract that defines the properties and functions of your NFT, and then deploy it on the opBNB. To store the metadata of your NFT, such as the name, description, image, and other attributes, you can use various storage solutions. Some examples are BNB Greenfield, IPFS, and Filecoin.

### When using hardhat to verify upgradeable/proxy contract on opBNB-testnet, I've encountered "Error: Failed to get logs for contract at address 0x<address>". How can I resolve the issue and verify the upgradeable/proxy contract?

Currently, hardhat API is using chain's public RPC to get contract event log. Therefore, the public RPC limits the query range within the latest 5w blocks only. That's why the error message said "Failed to get logs". 

For the short-term solution, we recommend user to try again on explorer front-end (https://opbnbscan.com/verifyContract & https://testnet.opbnbscan.com/verifyContract) instead via hardhat.

For the long-term solution, the team is building an in-house enhanced API to get contract event logs. ETA will be at least the end of Nov. After which, users can verify upgradeable/proxy via hardhat.

:::info Don't see your question?
We are improving FAQ with from time to time, to include latest questions from the community and partners, bookmark this page! However, if you don't see your question, please feel free ask in the [BNB forum](https://forum.bnbchain.org/) and [Discord](https://discord.com/invite/bnbchain support channel
:::
