![1panel-wiki](https://socialify.git.ci/Anyexyz/1panel-wiki/image?font=KoHo&forks=1&issues=1&language=1&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto)

本仓库为 [1Panel 项目](https://github.com/1Panel-dev/1Panel) 的 [第三方 Wiki](https://www.1panel.wiki/)，采用 [VuePress](https://vuepress.vuejs.org/) 框架下的 [VuePress Theme Hope](https://theme-hope.vuejs.press/) 主题构建。

## 本地开发

### 克隆本仓库
```bash
git clone https://github.com/Anyexyz/1panel-wiki.git
```

### 安装依赖
```bash
pnpm install
```

### 修改文档内容

本文档的侧边栏定义在 `src/.vuepress/sidebar.ts` 文件中，使用文档的具体内容在 `docs` 目录中，常见问题在 `faq` 目录中。

文档内容使用 markdown 语法编写，若要添加新的文档，需要先在 `src/.vuepress/sidebar.ts` 文件中增加对应章节导航。

### 本地调试文档
```bash
pnpm run docs:dev
```
执行上述命令后，可通过 `http://127.0.0.1:8080` 地址查看生成的文档内容，当修改文档后，页面内容会自动更新。

### 构建文档
```bash
pnpm run docs:build
```

执行上述命令后，会在 `src/.vuepress/dist` 目录下生成文档站点的静态文件，将目录中的内容复制到任意 HTTP 服务器上即可完成文档的部署。

## 问题反馈

如果您发现文档中存在错误，或对文档内容存在疑问，请提交 GitHub Issue 到 [1Panel 项目的主仓库](https://github.com/Anyexyz/1panel-wiki/issues)
