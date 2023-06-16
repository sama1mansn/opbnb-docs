// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BNB Optimistic Rollup",
  tagline: "opBNB",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/opbnb-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "huihzhao", // Usually your GitHub org/user name.
  projectName: "bnbopbnb-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/bnb-chain/opbnb-docs",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://www.bnbchain.org/en/blog/",

        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        }
      },
      navbar: {
        title: "BNB Optimistic Rollup",
        logo: {
          alt: "BNB Optimistic Rollup",
          src: "img/logo.svg"
        },
        items: [
          {
            link: {type: 'doc', id: 'intro'},
            label: "Guide",
            position: "left",
            to: "/docs/intro",
          },
          {
            link: {type: 'doc', id: 'openbnb-faq'},
            label: "FAQs",
            position: "left",
            to: "/docs/faq/opbnb-faq",
          },
        ],
      },
      footer: {
        /*style: "dark",
        logo: {
          alt: 'BNB Chain Logo',
          src: 'img/logo.svg',
          width: 160,
          height: 51,
        },
        links: [
          {
            title:"Learn",
            items:[              
              { 
                label: "Whitepaper",
                to: "https://github.com/bnb-chain/greenfield-whitepaper"
              },
              { 
                label: "Official Website",
                to: "http://greenfield.bnbchain.org/"
              },
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/QRTQvfhADQ"
              },
              {
                label: "Twitter",
                href: "https://twitter.com/BNBChain"
              },
              {
                label: 'Telegram',
                href: 'http://t.me/bnbchain',              
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://www.bnbchain.org/en/blog/"
              },
              {
                label:"Youtube",
                to: "https://www.youtube.com/channel/UCG9fZu6D4I83DStktBV0Ryw"
              },
              {
                label: "GitHub",
                href: "https://github.com/bnb-chain"
              },
            ]
          }
        ],
        
        copyright: `Copyright © ${new Date().getFullYear()} BNB Chain`
      */
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"]
      }
    }),

  themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
