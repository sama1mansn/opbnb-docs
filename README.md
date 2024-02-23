# opBNB Official Documentation

## Overview

The opBNB network is the Layer 2 scaling solution for the BNB Smart Chain powered by [bedrock version](https://community.optimism.io/docs/developers/bedrock/) of Optimism opStack.

This is the GitHub repo of the official documentation for opBNB. This app is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Prerequisites

- **Node** _version >= 16 or above_

  - _node -v_
    - v16.14.0

- **Yarn** _version >= 1.5 _
  - _yarn --version_
    - 1.22.19

### How to Run Locally

Clone the repository and run the following commands.

### Installing Dependencies

- Install the packages.

```bash
$ yarn install
```

- Start local development server

```bash
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

We recommend to use the yarn package for building and deploying this website.

```bash
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Build and Serve locally

```bash
$ yarn start
```

### Serve Locally after build is created

```bash
$ yarn serve
```

The website is run locally on your default browser on http://localhost:3000.
