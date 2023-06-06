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
      link: {type: 'doc', id: 'intro'},
      collapsible: true,
      collapsed: true,
      items:[
      ],
    },
    {
      type: "category",
      label: "For Developers",
      collapsible: true,
      collapsed: true,
      items:[
        "guide/getting-started/overview",
      ],
    },
    {
      type: "category",
      label: "FAQ",
      collapsible: true,
      collapsed: true,
      items:[
        "guide/getting-started/overview",
      ],
    },
    {
      type: 'doc', id:'guide/resources'
    }
  ]

};

module.exports = sidebars;
