// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevNotes',
  tagline: 'La librairie des cours des B3 INGLOG',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ChrisBradford2', // Usually your GitHub org/user name.
  projectName: 'test-docusaurus', // Usually your repo name.
  noIndex: true, // Par défaut, `false`

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
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
                href: 'https://discord.gg/Gaj57Br',
              },
            ],
          },
          {
            title: 'Un problème ?',
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
