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
      label: "📜 Introduction",
      //link: {type: 'doc', id: 'intro'},
      collapsible: true,
      collapsed: true,
      items:[
        'intro',
        'intro/why-opstack',
      ],
    },
    {
      type: "category",
      label: "🕶️ Core Concepts",
      collapsible: true,
      collapsed: true,
      items:[
        'core-concepts/architecture',
        'core-concepts/why-opbnb',
      ],
    },
    {
      type: "category",
      label: "💰 Economics",
      collapsible: true,
      collapsed: true,
      items:[
        'economics/rollup-economis-explained',
        'economics/gas-and-fees',
      ],
    },
    {
      type: "category",
      label: "🎯 Build on zkBNB",
      collapsible: true,
      collapsed: true,
      items:[
        'build-on-opbnb/opbnb-testnet-information',
        'build-on-opbnb/getting-started',
        'build-on-opbnb/deposit-to-opbnb',
        'build-on-opbnb/wallet-configuration',
      ],
    },
    {
      type: "category",
      label: "👩‍🏫 Tutorials",
      collapsible: true,
      collapsed: true,
      items:[
        'tutorials/running-a-testnet-node',
        //"faq/opbnb-faq",
      ],
    },
    {
      type: "category",
      label: "🧑‍🔧 Troubleshooting",
      collapsible: true,
      collapsed: true,
      items:[
        'faq/opbnb-faq',
        //"faq/opbnb-faq",
      ],
    },
    {
      type: 'doc', id:'contact', label: '☎️ Contact'
    },
  ]

};

module.exports = sidebars;
