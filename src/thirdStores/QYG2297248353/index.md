# QYG2297248353/appstore-1panel

本项目由 [`新疆萌森软件开发工作室`](https://lifebus.top/) 提供技术支持，我们致力于为 `1Panel` 应用商店用户提供更多的应用程序。

本仓库中的所有应用不会与 `1Panel` 官方应用商店冲突(存在相同应用并不影响后续的安装与升级,择优选择你需要的版本即可)
，我们会定期更新应用，如果您有任何问题，请联系我们。

---

<div style="border: 1px solid #e1e1e1; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 16px; margin: 16px; background-color: #fff; width: 80%; margin-left: auto; margin-right: auto;">
  <h2 style="margin: 0 0 8px 0; font-size: 1.5em;">2024年12月04日 公告</h2>
  <p>我们已支持应用商店: <span style="font-weight: bold; color: #d9534f;">1Panel</span>, <span style="font-weight: bold; color: #d9534f;">DPanel</span>, <span style="font-weight: bold; color: #d9534f;">Dockge</span></p>
  <p>即将支持应用商店: <span style="font-weight: bold; color: #d9534f;">CasaOS</span></p>
  <p>近期我们上架了很多新应用，如果您有任何问题，请联系我们。</p>
  <p>欢迎投稿，我们会根据您的需求，上架更多的应用。</p>
  <p>🥰 <a href="https://blog.lifebus.top/" target="_blank" >新疆萌森软件开发工作室</a> 祝您生活愉快！</p>
</div>


<div style="border: 1px solid #e1e1e1; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 16px; margin: 16px; background-color: #fff; width: 80%; margin-left: auto; margin-right: auto;">
  <h2 style="margin: 0 0 8px 0; font-size: 1.5em;">2024年11月28日 公告</h2>
  <p>我们已支持应用商店: <span style="font-weight: bold; color: #d9534f;">1Panel</span>, <span style="font-weight: bold; color: #d9534f;">Dockge</span></p>
  <p>即将支持应用商店: <span style="font-weight: bold; color: #d9534f;">DPanel</span></p>
  <p>近期我们上架了很多新应用，如果您有任何问题，请联系我们。</p>
  <p>欢迎投稿，我们会根据您的需求，上架更多的应用。</p>
  <p>🥰 <a href="https://blog.lifebus.top/" target="_blank" >新疆萌森软件开发工作室</a> 祝您生活愉快！</p>
</div>

---

## 应用安装

> 温馨提示：
> 当您已安装其他第三方库时并且存在应用冲突，安装过程中会主动删除冲突的第三方库应用，如果您不同意，请不要执行脚本。
>
> 我们建议您在安装之前备份您的数据，或手动安装。
>
> 如果您不使用 `curl` 命令，可以使用 `wget` 命令代替。
>
> 将 `curl -sSL` 替换为 `wget -qO-` 即可。
>
> 脚本执行成功后，会自动将应用添加到 `1Panel` 应用商店中，在应用商店页执行 `更新应用列表` 即可看到新应用。

### 自动化安装

一键式安装，无需手动操作，自动完成 1Panel应用 上架应用商店。

每三小时自动更新一次应用列表。

```sh
curl -sSL https://install.lifebus.top/auto_install.sh | bash
```

> 卸载自动化脚本 (不会卸载应用)

```sh
curl -sSL https://install.lifebus.top/auto_uninstall.sh | bash
```

如需卸载应用列表，您可以手动删除以下目录：

+ 应用目录：`${1panel应用目录}/resource/apps/local`

+ 应用公共文件目录：`/etc/1panel/envs`

+ 应用数据目录：`${应用持久化目录}`

### 手动安装模式

更新时机由自己把握，手动执行命令。

```sh
curl -sSL https://install.lifebus.top/app_install.sh | bash
```

### 计划任务模式

将内容写入Shell计划任务中，设定定期执行。

```sh
#!/bin/bash

# 此处可以定义代理方案

script_url="https://install.lifebus.top/app_install.sh"

echo "Downloading and executing script from $script_url..."
bash <(curl -sL "$script_url")

echo "Script execution completed."

```

#### 配置脚本网络代理

如果您的网络环境需要代理，请在脚本执行前配置代理。

可将以下脚本插入到 `计划任务模式` 的脚本中。

```sh
proxy_protocols="http"
proxy_server="server address"
proxy_port="server port"
export http_proxy="$proxy_protocols://$proxy_server:$proxy_port"
export https_proxy="$proxy_protocols://$proxy_server:$proxy_port"
```

---

### 安装 `Pre 尝鲜版` 应用 (不推荐)

> 说明：
>
> `Pre 尝鲜版` 应用为测试版本，可能存在未知问题，我们建议您在测试环境中使用。

#### 安装尝鲜版应用

```sh
curl -sSL https://install.lifebus.top/pre_app_install.sh | bash
```

#### 卸载尝鲜版应用

```sh
curl -sSL https://install.lifebus.top/pre_app_uninstall.sh | bash
```

---

### 卸载所有本地应用

通过此脚本，您可以卸载所有本地应用(包含您从其他三方库中导入的应用)，但是不会删除数据。

可能您的库中遗留了一些无用的应用，您可以通过此脚本进行清理。该脚本不影响 `自动化脚本` 的应用更新。

**此脚本必须`root`用户执行**

```sh
curl -sSL https://install.lifebus.top/local_app_uninstall.sh | bash
```

---

## 常见问题

+ 安装脚本提示
    + 没有权限
        + 请使用 `root` 用户执行脚本
    + `curl: command not found`
        + 请安装 `curl` 命令
        + `apt install curl -y`
        + `yum install curl -y`
    + 由于安装脚本的网络问题导致安装失败
        + 请检查网络状况
        + 请尝试重新执行安装脚本
        + 请尝试使用 `wget` 命令代替 `curl` 命令
+ 升级失败
    + 检查网络状况与磁盘空间
    + 配置镜像地址
    + 尝试重新升级
    + 进行卸载重装
    + 多次升级依旧失败，请联系我们
+ 安装提示
    + `Error: /xxx/xxx/.env file does not exist`
        + 请手动创建 `.env` 文件，不需要填写任何内容的空文件
        + 重新点击安装
+ 前置检查
    + `前置检查` 是利用 `1Panel` 的应用特性，进行安装前的环境检查，如果您的环境不符合要求，将无法安装应用。
    + 关于 `前置检查` 依旧需要填写 `数据库` 相关连接信息，是因为其提供的能力并不是完全可靠，避免后期出现问题，我们采用持久化的方式存储。
    + 如果您的环境符合要求，但是依旧无法安装，请联系我们。

---

## 温馨提示

安装应用前请查看应用说明，了解应用的使用方法和注意事项。
当前第三方库应用均为开源应用，我们不对应用的安全性和稳定性负责。
如果您在使用过程中遇到问题，请查看应用的官方文档或社区，或者联系我们。

---

## 联系我们

<a href="mailto:qyg2297248353@gmail.com" target="_blank" style="display: block; width: 300px; margin: 16px auto; padding: 16px; border: 1px solid #e1e1e1; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); background-color: #fff; text-decoration: none; color: #333;">
  <div style="display: flex; align-items: center;">
    <div style="width: 50px; height: 50px; border-radius: 50%; border: 2px solid #e1e1e1; overflow: hidden; margin-right: 16px; display: flex; align-items: center; justify-content: center;">
      <img src="https://file.lifebus.top/imgs/google_gmail_logo.png" alt="Gmail 邮箱" width="32px" style="width: 32px; object-fit: contain;">
    </div>
    <div style="flex: 1;">
      <div style="font-weight: bold;">Gmail 邮箱</div>
      <div style="color: #555; font-size: 0.9em;">通过邮箱反馈您所遇到的问题</div>
    </div>
  </div>
</a>

<a href="https://blog.lifebus.top/" target="_blank" style="display: block; width: 300px; margin: 16px auto; padding: 16px; border: 1px solid #e1e1e1; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); background-color: #fff; text-decoration: none; color: #333;">
  <div style="display: flex; align-items: center;">
    <div style="width: 50px; height: 50px; border-radius: 50%; border: 2px solid #e1e1e1; overflow: hidden; margin-right: 16px; display: flex; align-items: center; justify-content: center;">
      <img src="https://file.lifebus.top/imgs/ms_studio_logo.png" alt="人生足迹 · 博客" width="32px" style="width: 32px; object-fit: contain;">
    </div>
    <div style="flex: 1;">
      <div style="font-weight: bold;">人生足迹 · 博客</div>
      <div style="color: #555; font-size: 0.9em;">技术分享的博客平台</div>
    </div>
  </div>
</a>

<a href="https://github.com/QYG2297248353" target="_blank" style="display: block; width: 300px; margin: 16px auto; padding: 16px; border: 1px solid #e1e1e1; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); background-color: #fff; text-decoration: none; color: #333;">
  <div style="display: flex; align-items: center;">
    <div style="width: 50px; height: 50px; border-radius: 50%; border: 2px solid #e1e1e1; overflow: hidden; margin-right: 16px; display: flex; align-items: center; justify-content: center;">
      <img src="https://file.lifebus.top/imgs/github_logo.png" alt="GitHub" width="32px" style="width: 32px; object-fit: contain;">
    </div>
    <div style="flex: 1;">
      <div style="font-weight: bold;">GitHub</div>
      <div style="color: #555; font-size: 0.9em;">全球最大同性交友网站</div>
    </div>
  </div>
</a>

<a href="https://git.lifebus.top/" target="_blank" style="display: block; width: 300px; margin: 16px auto; padding: 16px; border: 1px solid #e1e1e1; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); background-color: #fff; text-decoration: none; color: #333;">
  <div style="display: flex; align-items: center;">
    <div style="width: 50px; height: 50px; border-radius: 50%; border: 2px solid #e1e1e1; overflow: hidden; margin-right: 16px; display: flex; align-items: center; justify-content: center;">
      <img src="https://file.lifebus.top/imgs/gitea_logo.png" alt="Gitea" width="32px" style="width: 32px; object-fit: contain;">
    </div>
    <div style="flex: 1;">
      <div style="font-weight: bold;">Gitea</div>
      <div style="color: #555; font-size: 0.9em;">国内镜像发布仓库</div>
    </div>
  </div>
</a>

<a href="https://www.youtube.com/@cn_ms_studio" target="_blank" style="display: block; width: 300px; margin: 16px auto; padding: 16px; border: 1px solid #e1e1e1; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); background-color: #fff; text-decoration: none; color: #333;">
  <div style="display: flex; align-items: center;">
    <div style="width: 50px; height: 50px; border-radius: 50%; border: 2px solid #e1e1e1; overflow: hidden; margin-right: 16px; display: flex; align-items: center; justify-content: center;">
      <img src="https://file.lifebus.top/imgs/google_youtube_logo.png" alt="YouTube" width="32px" style="width: 32px; object-fit: contain;">
    </div>
    <div style="flex: 1;">
      <div style="font-weight: bold;">YouTube</div>
      <div style="color: #555; font-size: 0.9em;">Google旗下的视频分享网站</div>
    </div>
  </div>
</a>

<a href="https://twitter.com/ms2297248353" target="_blank" style="display: block; width: 300px; margin: 16px auto; padding: 16px; border: 1px solid #e1e1e1; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); background-color: #fff; text-decoration: none; color: #333;">
  <div style="display: flex; align-items: center;">
    <div style="width: 50px; height: 50px; border-radius: 50%; border: 2px solid #e1e1e1; overflow: hidden; margin-right: 16px; display: flex; align-items: center; justify-content: center;">
      <img src="https://file.lifebus.top/imgs/twitter_x_logo.png" alt="Twitter" width="32px" style="width: 32px; object-fit: contain;">
    </div>
    <div style="flex: 1;">
      <div style="font-weight: bold;">Twitter</div>
      <div style="color: #555; font-size: 0.9em;">X. 正在发生的事</div>
    </div>
  </div>
</a>
