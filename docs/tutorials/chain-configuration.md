---
sidebar_label: Chain Configuration
description: New L2 Rollup Configuration
---

# New Blockchain Configuration

New l2 rollup blockchains are currently configured with a JSON file inside the [opbnb](https://github.com/bnb-chain/opbnb). The file is ./packages/contracts-bedrock/deploy-config/<chain-name>.json.

## Admin addresses

|  Key  | Type  | Description |Default / Recommended value|
|:-----:|:-----:|:---------------------:|:------:|
|  finalSystemOwner     |   L1 Address    |    Address that will own all ownable contracts on L1 once the deployment is finished, including the ProxyAdmin contract.      |   It is recommended to have a single admin address to retain a common security model.        |
|   proxyAdminOwner    | L2 Address |    ddress that will own the ProxyAdmin contract on L2. The L2 ProxyAdmin contract owns all of the Proxy contracts for every predeployed contract in the range 0x42...0000 to 0x42..2048. This makes predeployed contracts easily upgradeable.         |    It is recommended to have a single admin address to retain a common security model.       |


## Fee recipients

|  Key  | Type  |     Description     |Default / Recommended value|
|:-----:|:-----:|:--------:|:------:|
|  baseFeeVaultRecipient     |   L1 or L2 Address    |       Address that the base fees from all transactions on the L2 can be withdrawn to.       |   It is recommended to have a single admin address to retain a common security model.        |
|   l1FeeVaultRecipient    | L1 or L2 Address |     Address that the L1 data fees from all transactions on the L2 can be withdrawn to.      |    It is recommended to have a single admin address to retain a common security model.       |
|   sequencerFeeVaultRecipient    | L1 or L2 Address |     Address that the tip fees from all transactions on the L2 can be withdrawn to.      |    It is recommended to have a single admin address to retain a common security model.       |

## Minimum Fee Withdrawal Amounts

|  Key  | Type  |    Description      |    Default / Recommended value   |
|:-----:|:-----:|:--------------:|:-------------------:|
|  baseFeeVaultMinimumWithdrawalAmount     |   Number in wei    |   The minimum amount of BNB the BaseFeeVault contract must have for a fee withdrawal.    |  10 BNB  |
|  l1FeeVaultMinimumWithdrawalAmount     |   Number in wei    |    The minimum amount of BNB the L1FeeVault contract must have for a fee withdrawal.     |  10 BNB  |
|  sequencerFeeVaultWithdrawalAmount     |   Number in wei    | The minimum amount of BNB the SequencerFeeVault contract must have for a fee withdrawal. | 10 BNB  |

## Withdrawal Network

|  Key  | Type  |             Description                      |           Default / Recommended value   |
|:-----:|:-----:|:---------------------------:|:-------------------------:|
|  baseFeeVaultWithdrawalNetwork     |   Number representing network enum    | A value of 0 will withdraw BNB to the recipient address on L1 and a value of 1 will withdraw BNB to the recipient address on L2. |   |
|  l1FeeVaultWithdrawalNetwork     |   Number representing network enum    | A value of 0 will withdraw ETH to the recipient address on L1 and a value of 1 will withdraw ETH to the recipient address on L2. |   |
|  sequencerFeeVaultWithdrawalNetwork     |   Number representing network enum    | A value of 0 will withdraw BNB to the recipient address on L1 and a value of 1 will withdraw BNB to the recipient address on L2. |  |

## Misc.

|  Key  | Type  |     Description        | Default / Recommended value |
|:-----:|:-----:|:------------:|:---------------------------:|
|  numDeployConfirmations     |   Number of blocks    | Number of confirmations to wait when deploying smart contracts to L1. | 1 |
|  l1StartingBlockTag     |   Block hash    | Block tag for the L1 block where the L2 chain will begin syncing from. Generally recommended to use a finalized block to avoid issues with reorgs. |  |
|  l1ChainID     |   Number    | Chain ID of the L1 chain. |     97 for bsc testnet.     |
|  l2ChainID     |   Number    | Chain ID of the L2 chain. |             901             |

## Blocks

|  Key  | Type  |       Description       |     Default / Recommended value    |
|:-----:|:-----:|:------------------------:|:---------------:|
|  l2BlockTime     |   Number of seconds    |  Number of seconds between each L2 block. Must be < = L1 block time   |  1  |
|  maxSequencerDrift     |   Number of seconds    | How far the L2 timestamp can differ from the actual L1 timestamp | 600 (10 minutes) |
|  sequencerWindowSize     |   Number of blocks    |  Maximum number of L1 blocks that a Sequencer can wait to incorporate the information in a specific L1 block. For example, if the window is 10 then the information in L1 block n must be incorporated by L1 block n+10.  | 3600 (3 hours) |
|  channelTimeout     |   Number of blocks    |  Maximum number of L1 blocks that a transaction channel frame can be considered valid. A transaction channel frame is a chunk of a compressed batch of transactions. After the timeout, the frame is dropped.  | 300 (15 minutes)  |
|  p2pSequencerAddress     |   L1 Address    |  Address of the key that the Sequencer uses to sign blocks on the p2p network.   | Sequencer, an address for which you own the private key |
|  batchInboxAddress     |   L1 Address    |  Address that Sequencer transaction batches are sent to on L1.  |  0xff00…00901  |
|  batchSenderAddress     |   L1 Address    |  Address that nodes will filter for when searching for Sequencer transaction batches being sent to the batchInboxAddress. Can be updated later via the SystemConfig contract on L1.  |  Batcher, an address for which you own the private key  |

## Proposal Fields

|  Key  |        Type        |    Description         |              Default / Recommended value              |
|:-----:|:------------------:|:--------------:|:---------------------------:|
|  l2OutputOracleStartingBlockNumber     |       Number       |        Block number of the first block.  | 0  |
|  l2OutputOracleStartingTimestamp     |       Number       |       Timestamp of the first block. This MUST be the timestamp corresponding to the block defined by the l1StartingBlockTag.       |   |
|  l2OutputOracleSubmissionInterval     |  Number of blocks  |       Number of blocks between proposals to the L2OutputOracle     |    120   |
|  finalizationPeriodSeconds     | Number of seconds  | Number of seconds that a proposal must be available to challenge before it is considered finalized by the OptimismPortal contract. |  Recommend 12 on test networks, seven days on production ones   |
|  l2OutputOracleProposer     |     L1 Address     |     Address that is allowed to submit output proposals to the L2OutputOracle contract    |       |
|  l2OutputOracleChallenger     |     L1 Address     |    Address that is allowed to challenge output proposals submitted to the L2OutputOracle.    |    It is recommended to have a single admin address to retain a common security model.  |

## L1 data fee

### Bedrock & Regolith

|  Key  |   Type   |    Description    |             Default / Recommended value             |
|:-----:|:--------:|:-----------:|:-------:|
|  gasPriceOracleOverhead     |  Number  |   Fixed L1 gas overhead per transaction.  |  2100  |
|  gasPriceOracleScalar     | Number |    Dynamic L1 gas overhead per transaction, given in 6 decimals. Default value of 1000000 implies a dynamic gas overhead of exactly 1x (no overhead). | 1000000   |

### Ecotone

|  Key  |   Type   |     Description       | Default / Recommended value |
|:-----:|:--------:|:--------------:|:---------------------------:|
|  gasPriceOracleBaseFeeScalar     |  Number  |       Scalar applied to the Ethereum base fee in the L1 data fee cost function, given in 6 decimals.      |           1000000           |
|  gasPriceOracleBlobBaseFeeScalar     | Number |      Scalar applied to the Ethereum blob base fee in the L1 data fee cost function, given in 6 decimals.  |              0              |

## EIP 1559 gas algorithm

|  Key  |   Type   |      Description      | Default / Recommended value |
|:-----:|:--------:|:--------:|:-------------------:|
|  eip1559Denominator     |  Number  |   Denominator used for the EIP1559 gas pricing mechanism on L2. A larger denominator decreases the amount by which the base fee can change in a single block.     |             50              |
|  eip1559Elasticity     | Number |  Elasticity for the EIP1559 gas pricing mechanism on L2. A larger elasticity increases the maximum allowable gas limit per block.   |             10              |
|  l2GenesisBlockGasLimit     | String |  Initial block gas limit, represented as a hex string. Default is 25m, implying a 2.5m target when combined with a 10x elasticity.   |              0x17D7840               |
|  l2GenesisBlockBaseFeePerGas     | String |  Initial base fee, used to avoid an unstable EIP1559 calculation out of the gate. Initial value is 1 gwei.   |              0x3b9aca00               |

## Governance token

|  Key  |   Type   |        Description       |    Default / Recommended value    |
|:-----:|:--------:|:-----------:|:------------------:|
|  governanceTokenOwner     |  L2 Address  |   Address that will own the token contract deployed by default to every  chain.     |                     |
|  governanceTokenSymbol     | String |  Symbol for the token deployed by default to each  chain.   |                    |
|  governanceTokenName     | String |  Name for the token deployed by default to each  chain.   |                |

## OP-Batcher Configuration 

|  Key  |   Type   |    Description    | Default / Recommended value |
|:-----:|:--------:|:----------------------:|:---------------------------:|
|  OP_BATCHER_MAX_CHANNEL_DURATION     |  Number  |   The maximum duration of L1-blocks to keep a channel open. Set to 0 to disable.     |              0              |
|  OP_BATCHER_BATCH_TYPE     | Number |  The batch type. Set to 0 for SingularBatch and 1 for SpanBatch.   |              0              |
|  OP_BATCHER_DATA_AVAILABILITY_TYPE     | String |  The data availability type to use for submitting batches to the L1. Valid options: calldata, blobs   |          calldata           |
|  OP_BATCHER_TARGET_NUM_FRAMES     | Number |  The target number of frames to create per channel. Controls number of blobs per blob tx, if using Blob DA.   |              1              |
|  OP_BATCHER_TXMGR_MIN_BASEFEE     | Number |  Enforces a minimum base fee (in GWei) to assume when determining tx fees. 1 GWei by default.   |              1              |
|  OP_BATCHER_TXMGR_MIN_TIP_CAP     | Number |  Enforces a minimum tip cap (in GWei) to use when determining tx fees. 1 GWei by default.   |              1              |
|  OP_BATCHER_RESUBMISSION_TIMEOUT     | Number |  Duration to wait before resubmitting a transaction to L1.   |             48s             |
