// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Athenian Computer Science',
  tagline: 'At the intersection of technology and the liberal arts',
  url: 'https://athenian-cs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Athenian-Computer-Science', // Usually your GitHub org/user name.
  projectName: 'athenian-cs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Athenian-Computer-Science/athenian-cs/blob/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Athenian-Computer-Science/athenian-cs/blob/master',
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
        title: 'Athenian CS',
        logo: {
          alt: 'Athenian CS Website',
          src: 'img/athenian-logo.png',
          width: 32,
          height: 32,
          //className: 'custom-navbar-logo-class',
          //style: {border: 'solid red'},
        },
        items: [
          {
            label: 'Computational Thinking',
            type: 'doc',
            docId: 'intro',
            position: 'left',
          },
          {
            label: 'Intro to CS',
            type: 'doc',
            docId: 'CompSci/CS_page',
            position: 'left',
          },
          {
            label: 'APCS',
            type: 'doc',
            docId: 'intro',
            position: 'left',
          },
          {
            label: 'Data Structures and Algorithms',
            type: 'doc',
            docId: 'intro',
            position: 'left',
          },
          {
            label: 'Blog',
            to: '/blog',
            position: 'left',
          },
          {
            href: 'https://github.com/Athenian-Computer-Science/athenian-cs',
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
                label: 'Computational Thinking',
                to: '/docs/intro',
              },
              {
                label: 'Intro to CS',
                to: '/docs/CompSci/CS_page',
              },
              {
                label: 'APCS',
                to: '/docs/intro',
              },
              {
                label: 'Data Structures and Algorithms',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Athenian-Computer-Science/athenian-cs',
              },
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["kotlin", "java", "python"],
      },
      // Use this to enable an announcement.
      // see: https://docusaurus.io/docs/api/themes/configuration#announcement-bar
      // announcementBar: {
      //   id: 'support_us',
      //   content: 'This is an important announcement',
      //   backgroundColor: 'red',
      //   textColor: 'white',
      //   isCloseable: false,
      // },

      // Use this to disable the color switch option in the header.
      // see: https://docusaurus.io/docs/api/themes/configuration#color-mode---dark-mode
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

    }),
    themes: ['@docusaurus/theme-live-codeblock'],
};

module.exports = config;