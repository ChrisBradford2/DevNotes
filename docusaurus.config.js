// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevNotes',
  tagline: 'Le Wiki des cours des B3 INGLOG',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ChrisBradford2', // Usually your GitHub org/user name.
  projectName: 'test-docusaurus', // Usually your repo name.
  noIndex: true, // Par défaut, `false`

  /*plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contrib',
        path: 'contrib',
        routeBasePath: 'contrib',
        sidebarPath: require.resolve('./contrib/sidebars.js'),
      }, 
    ],
],*/

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        /*contrib: {
          path: 'contrib',
          sidebarPath : require.resolve('./contrib/sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DevNotes',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Cours',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/contrib', label: 'Contribution', position: 'left'},
          {
            href: 'https://github.com/ChrisBradford2/test-docusaurus',
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
                label: 'Cours',
                to: '/docs/',
              },
              {
                label: 'Blog',
                to: '/blog/',
              },
              {
                label: 'Contribution',
                to: '/contrib',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ChrisBradford2/DevNotes',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/vcCgkDxnbB',
              },
            ],
          },
          {
            title: 'A propos',
            items: [
              {
                label: 'Ouvrir un ticket',
                href: 'https://github.com/ChrisBradford2/DevNotes/issues/new',
              },
              {
                label: 'Nous contacter',
                href: 'mailto:contact@convergence-of-paprika.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DevNotes. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
