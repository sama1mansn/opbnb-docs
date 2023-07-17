/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  guideSidebar:[
    {
      type: "category",
      label: "Introduction",
      //link: {type: 'doc', id: 'intro'},
      collapsible: true,
      collapsed: true,
      items:[
        'intro',
        'core-concepts/why-opbnb',
        'intro/why-opstack',
        'core-concepts/difference-BSC-Eth',
        'core-concepts/difference-L2',
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsible: true,
      collapsed: true,
      items:[
        'build-on-opbnb/getting-started',
        'build-on-opbnb/network-faucet',
        'build-on-opbnb/opbnb-testnet-information',
        'build-on-opbnb/deposit-to-opbnb',
        'build-on-opbnb/wallet-configuration',
        'build-on-opbnb/withdraw-from-opbnb',
        'build-on-opbnb/ecosystem',
      ],
    },
    {
      type: "category",
      label: "Economics",
      collapsible: true,
      collapsed: true,
      items:[
        'economics/rollup-economis-explained',
        'economics/gas-and-fees',
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      collapsible: true,
      collapsed: true,
      items:[
        'tutorials/running-a-testnet-node',
        'tutorials/running-a-local-development-environment',
        'tutorials/full-stack-dapp',
      ],
    },
    {
      type: 'doc', id:'faq/opbnb-faq', label: 'FAQs'
    },
    {
      type: 'doc', id:'contact', label: 'Contact'
    },
  ]

};

module.exports = sidebars;
