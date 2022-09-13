/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Anthony CISZEK',
    tagline: 'A React-based static github website template.',
    url: 'https://github.com',
    baseUrl: '/',
    organizationName: 'Selenuix', // Usually your GitHub org/user name.
    projectName: 'selenuix.github.io', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    themeConfig: {
        navbar: {
            title: 'Home',
            logo: {
                alt: 'My Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'about',
                    position: 'left',
                    label: 'More Info',
                },
                {
                    href: 'https://github.com/Selenuix',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Anthony CISZEK',
                    items: [
                        {
                            label: 'Home',
                            to: '/',
                        },
                        {
                            label: 'Resume',
                            to: '/docs/resume',
                        },
                        {
                            label: 'GitHub',
                            to: 'https://github.com/Selenuix',
                        },
                    ],
                },
                {
                    title: 'About',
                    items: [
                        {
                            label: 'About me',
                            to: '/docs/about',
                        },
                        {
                            label: 'Timeline',
                            to: '/docs/timeline',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Anthony CISZEK. Built with Docusaurus.`,
        },
    },

    themes: ['docusaurus-portfolio-theme'],
    plugins: [
        [
            'docusaurus-portfolio-plugin',
            {
                username: 'Selenuix',
                path: '/',
                pageTitle: 'Portfolio',
                pageDescription: 'About me.',
                userOptions: {},
                repoOptions: {
                    type: 'all',
                    sort: 'updated',
                    direction: 'desc',
                    numRepos: 10,
                },
            },
        ],
    ],

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                /* blog: {
                  showReadingTime: true,
                }, */
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr'],
        localeConfigs: {
            en: {
                htmlLang: 'en-GB',
            },
        },
    },
};
