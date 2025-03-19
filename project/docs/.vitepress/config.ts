import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: '小岛时间',
  description: '基于 Vite 和 Vue 驱动的静态站点生成器',
  base: '/islandTime/',

  themeConfig: {
    nav: [
      { text: '示例', link: '/example' },
      { text: '用户协议', link: '/agreement' },
    ],

    sidebar: [
      {
        items: [
          { text: '示例', link: '/example' },
          { text: '用户协议', link: '/agreement' },
        ],
      },
    ],
  },
});