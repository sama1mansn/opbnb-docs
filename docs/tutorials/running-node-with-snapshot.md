---
sidebar_label: Run Node With Snapshot
description: Guide to running opBNB Node with snapshot
---

# Running the Node with Snapshot

To improve the synchronization speed of the node, you can utilize snapshots to initialize it. 

An example of the snapshot's URL is as follows:
https://opbnb-snapshot-{{NETWORK}}.bnbchain.org/geth-yyyymmdd.tar.gz

Modify the domain and date to obtain the desired snapshot. For example, if you want to download the snaptshot of September 1st of 2023 for mainnet, you need use the URL of https://opbnb-snapshot-mainnet.bnbchain.org/geth-20230901.tar.gz.

:::info
Snapshots are generated and retained on a daily basis, with each snapshot being stored for a duration of 7 days.
:::


## usage

### Step 1: Download the snapshot and decompress it.

```bash
wget -q -O - https://opbnb-snapshot-testnet.bnbchain.org/geth-20230723.tar.gz | tar -xvf -
```

### Step 2: Replace the data.

1. Stop the running `op-geth` client, ensuring that it has completely shut down.
2. To back up the original data, execute the following commands:
    ```
    mv ${OPGeth_DataDir}/geth/chaindata ${OPGeth_DataDir}/geth/chaindata_backup
    mv ${OPGeth_DataDir}/geth/triecache ${OPGeth_DataDir}/geth/triecache_backup
    ```
3. Replace the data with the snapshot by running:
    ```
    mv ./geth/chaindata ${OPGeth_DataDir}/geth/chaindata
    mv ./geth/triecache ${OPGeth_DataDir}/geth/triecache
    ```
4. Restart the `op-geth` client and verify the logs.
