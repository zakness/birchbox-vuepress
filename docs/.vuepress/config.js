module.exports = {
  base: '/birchbox-vuepress/',
  title: 'Bernard Docs',
  description: 'Evaluating VuePress for Birchbox',
  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'Guides',
        children: [
          '/guides/addresses',
          '/guides/event-logging/',
          '/guides/routing/',
        ],
      },
      {
        title: 'Components',
        children: [
          '/components/AdaptiveWrapper',
          '/components/Button',
        ],
      },
      '/enhancers/',
      '/middleware/',
      '/utils/',
    ],
    lastUpdated: 'Last Updated',
    repo: 'zakness/birchbox-vuepress',
    docsDir: 'docs',
    docsBranch: 'vuepress',
    editLinks: true,
    editLinkText: 'Edit on GitHub',
  },
}
