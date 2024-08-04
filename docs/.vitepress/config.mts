import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'AnaDB',
  description: 'The scalabe cloud-native database',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: '/download' },
      { text: 'Documentation', link: '/doc' },
    ],

    logo: { src: '/logo.svg', width: 24, height: 24 },

    sidebar: {
      '/doc/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ana-db-com/anadb' },
    ],
  },

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  cleanUrls: true,
});
