import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/docs/",
  "/faq/",
  "/thirdStores/",
  {
    text: "服务状态监控",
    link: "https://status.1panel.top/",
    icon: "signal"
  },
  "/about"
]);
