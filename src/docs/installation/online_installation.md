---
title: 在线安装
---

## 1 环境要求

::: tip
**安装前请确保您的系统符合安装条件：**

* 操作系统：支持主流 Linux 发行版本（基于 Debian / RedHat，包括国产操作系统）；
* 服务器架构：x86_64、aarch64、armv7l、ppc64le、s390x；
* 内存要求：建议可用内存在 1GB 以上；
* 浏览器要求：请使用 Chrome、FireFox、IE10+、Edge等现代浏览器；
* **可访问互联网**。
:::

## 2 安装部署

> [GitHub release 链接](https://github.com/1Panel-dev/1Panel/releases)

::: tabs 
@tab RedHat / CentOS
```shell
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh
```

@tab Ubuntu
```shell
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
```

@tab Debian
```shell
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh
```

@tab openEuler / 其他

- 第一步：安装 docker
```shell
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

- 第二步：安装 1Panel

```shell
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh
```
:::

::: tip
安装成功后，控制台会打印面板访问信息，可通过浏览器访问 1Panel：

```
http://目标服务器 IP 地址:目标端口/安全入口
```
:::

- **如果使用的是云服务器，请至安全组开放目标端口。**
- **ssh 登录 1Panel 服务器后，执行 `1pctl user-info` 命令可获取安全入口（entrance）**

::: tip
安装成功后，可使用 [1pctl](cli.md) 命令行工具来维护 1Panel
:::