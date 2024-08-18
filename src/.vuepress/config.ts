import { defineUserConfig } from "vuepress";
import { umamiAnalyticsPlugin } from '@vuepress/plugin-umami-analytics'


import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "1Panel Wiki",
  description: "1Panel 三方 wiki",

  theme,

  plugins: [
    umamiAnalyticsPlugin({
      id: '29e85d4c-2ea7-4f10-a794-a8a0f91fd98a',
      link: 'https://umami.anye.xyz/script.js',
    }),
  ],
});
