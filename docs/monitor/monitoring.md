---
title: Node Metrics and Monitoring
---

## Import Json Model

To monitor the health of your node, you can import the [rpc_nodes.json](rpc_nodes.json).

## Important Metrics

- **chain_head_header:** This metric represents the node's current unsafe block number. If it stops increasing, it means that the node is not syncing. If it goes backwards, it means your node is reorging.
- **rpc_duration_all:** This metric represents histogram of RPC server request durations.
- **rpc_requests:** This metric represents total requests to the RPC server.
- **p2p_peers:** This metric represents how many peers the op-geth is connected to. Without peers, the op-geth cannot sync by engine sync. Also can sync by op-node.
- **op_node_default_peer_count:** This metric represents how many peers the op-node is connected to. Without peers, the op-node cannot sync unsafe blocks and your node will lag behind the sequencer as it will fall back to syncing purely from L1.