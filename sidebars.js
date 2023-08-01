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
        'intro/why-opbnb',
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsible: true,
      collapsed: true,
      link:{type: 'doc', id:'build-on-opbnb/getting-started'}, 
      items:[
        'build-on-opbnb/wallet-configuration',
        'build-on-opbnb/opbnb-testnet-info',
        'build-on-opbnb/cross-chain',
        'build-on-opbnb/network-faucet',
        'build-on-opbnb/deposit-to-opbnb',
        'build-on-opbnb/withdraw-from-opbnb',
        'build-on-opbnb/ecosystem',
      ],
    },
    {
      type: "category",
      label: "Core Concepts",
      collapsible: true,
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Core Concepts',
        //description: 'Learn about the core concepts of opBNB',
        slug: '/core-concepts',
      },
      items:[
        'core-concepts/need-for-opbnb',
        'core-concepts/why-opstack',
        'core-concepts/optimization',
        'core-concepts/difference-BSC-Eth',
        'core-concepts/difference-L2',
        //'core-concepts/opbnb-contracts',
        //'core-concepts/challenger',
        'economics/gas-and-fees',
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      collapsible: true,
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'opBNB Tutorials',
        description: 'Learn to build dapps on opBNB',
        slug: '/tutorials',
      },
      items:[
        'tutorials/running-a-testnet-node',
        'tutorials/running-a-local-development-environment',
        'tutorials/full-stack-dapp',
        'tutorials/opbnbscan-verify-hardhat-truffle',
      ],
    },
    
    {
      type: 'doc', id:'contribute', label: 'Contribute'
    },
  ],

  faqs:[
    
    {
      type: "category",
      label: "FAQs",
      collapsible: true,
      collapsed: true,
      link:{
          type: 'doc', id:'faq/opbnb-faq'
        }, 
      items:[
        'faq/platform-faqs',
        'faq/gas-and-fees-faqs',
        'faq/opbnb-bridge-faqs'
      ],
    },
    
  ]
};

module.exports = sidebars;
