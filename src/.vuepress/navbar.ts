import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/docs/",
  "/faq/",
  {
    text: "第三方应用商店",
    icon: "cube",
    children: [
      "/thirdStores/okxlin/",
      "/thirdStores/QYG2297248353/",
    ]
  },
  {
    text: "服务状态监控",
    link: "https://status.anye.xyz/",
    icon: "signal"
  },
  "/about"
]);
