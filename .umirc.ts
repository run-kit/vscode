import { defineConfig } from 'dumi';

export default defineConfig({
  // description: '工欲善其事',
  logo: '/vscode/images/logo.png',
  title: 'VS Code',
  base: '/vscode/',
  publicPath: '/vscode/',
  mode: 'site',
  locales: [
    ['zh-CN', '中文']
  ],
  themeConfig: {},
  navs: [
    {
      title: '使用',
      path: '/usage',
    },
    {
      title: '扩展',
      path: '/extension',
    },
  ],
  favicon: '/vscode/images/favicon.ico',
  metas: [
    {
      name: 'keywords',
      content: 'vscode',
    },
    {
      name: 'description',
      content: '工欲善其事',
    },
  ],
  theme: {
    '@c-primary': '#C641EB',
  },
  styles: [
    `.markdown h3 a { color: #454d64; }
     .markdown blockquote p { margin: 5px  0; }`,
  ],
  404: true,
  // more config: https://d.umijs.org/config
});
