import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({

  /* 主题基本配置 */
  hostname: "https://www.1panel.wiki",
  author: {
    name: "Anye",
    url: "https://www.anye.xyz",
    email: "anyexyz@foxmail.com"
  },
  license: "MIT",
  favicon: "/favicon.png",

  /* 主题功能配置 */
  // 加密配置
  encrypt: {
    config: {
      /* "": [""], */
    },
  },

  /* 主题布局配置 */
  // 导航栏
  navbar,
  logo: "/favicon.png",
  // 侧边栏
  sidebar,
  repo: "Anyexyz/1panel-wiki",
  docsRepo: "https://github.com/Anyexyz/1panel-wiki",
  docsDir: "src",
  copyright: 'Copyright © 2024 <a href="https://www.1panel.wiki">1Panel Wiki</a>. All Rights Reserved.',
  displayFooter: true,

  /* 主题外观配置 */
  iconAssets: "https://registry.npmmirror.com/@fortawesome/fontawesome-free/6.6.0/files/js/all.min.js",
  darkmode: "switch",

  // 配置主题提供的插件
  plugins: {
    comment: {
      provider: "Twikoo",
      envId: "https://comment.anye.in/"
    },

    components: {
      components: ["Badge", "VPCard","SiteInfo","VPBanner","BiliBili"],
    },

    mdEnhance: {
      gfm: true,
      alert: true,
      align: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      mark: true,
      sub: true,
      sup: true,
      tabs: true,
    },
    
    search: true
  },
});
