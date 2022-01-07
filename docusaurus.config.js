const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SR50',
  tagline: 'The world\'s best financial advisor. Free, for everyone.',
  url: 'https://sr50.finance',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'tpascarella', // Usually your GitHub org/user name.
  projectName: 'sr50', // Usually your repo name.
  customFields: {
    description:
      'The cliffnotes for all the best personal finance information you can find on the internet.',
  },
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'announcementBar-2',
      content: 'Increase Your Savings Rate!',
    },
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
          href: 'https://github.com/tpascarella/sr50',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
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
              href: 'https://thomaspascarella.com'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tpascarella/sr50',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} SR50`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [require.resolve('docusaurus-lunr-search')],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tpascarella/sr50-docs/tree/main/',
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tpascarella/sr50-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
      },
    ],
  ],
};