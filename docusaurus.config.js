const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SR50',
  tagline: 'The best financial advice in the world, located on one website.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sr50logo.ico',
  organizationName: 'tpascarella', // Usually your GitHub org/user name.
  projectName: 'sr50', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SR50',
      logo: {
        alt: 'My Site Logo',
        src: 'img/sr50logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Library',
        },
        {to: '/blog', label: 'Articles', position: 'left'},
        {
          href: 'https://github.com/tpascarella',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Library',
              to: '/docs/intro',
            },
            {
              label: 'Articles',
              to: '/blog',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Founder',
              href: 'https://tpascarella.github.io'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tpascarella',
            },
            
          ],
        },
        /*
        {
          title: 'Core Thesis',
          items: [
            {
              label: 'Personal Finance is Personal Reponsibility',
              to: '../src/pages/coreThesis.js',
            },
          ],
        },
        */
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SR50 Finance Corporation.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
          // editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/', 
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
          //editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/blog/', 
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
