const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SR50',
  tagline: 'Open Source Personal Finance.',
  url: 'https://docs.sr50.finance',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'tpascarella', // Usually your GitHub org/user name.
  projectName: 'sr50-docs', // Usually your repo name.
  
  themeConfig: {
    hideableSidebar: true,
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
          label: 'Docs',
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
          title: 'Library',
          items: [
            {
              label: 'Docs',
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
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tpascarella/sr50-docs/tree/main/',
          // editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/', 
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tpascarella/sr50-docs/tree/main/',
          //editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/blog/', 
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
      },
    ],
  ],
  /*
  plugins: [   
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-4KM8KED22Z',
        anonymizeIP: true,
      },
    ],  
    [
      'pwa',
      {
        debug: isDeployPreview,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        // swRegister: false,
        swCustom: path.resolve(__dirname, 'src/sw.js'),
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/docusaurus.png',
            color: 'rgb(62, 204, 94)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],  
    [
      'ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
 
  ],
  */
};