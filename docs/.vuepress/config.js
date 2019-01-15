module.exports = {
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
      '/components/',
      '/enhancers/',
      '/middleware/',
      '/utils/',
    ],
  },
}
