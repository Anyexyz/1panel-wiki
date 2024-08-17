---
title: 命令行工具
---

## 1 1pctl

::: info
1Panel 默认内置了命令行运维工具 **1pctl**，通过执行 `1pctl help`，可以查看相关的命令说明。
```shell
1Panel 控制脚本

Usage: 
  ./1pctl [COMMAND] [ARGS...]
  ./1pctl --help

Commands: 
  status              查看 1Panel 服务运行状态
  start               启动 1Panel 服务
  stop                停止 1Panel 服务
  restart             重启 1Panel 服务
  uninstall           卸载 1Panel 服务
  user-info           获取 1Panel 用户信息
  listen-ip           切换 1Panel 监听 IP
  version             查看 1Panel 版本信息
  update              修改 1Panel 系统信息
  reset               重置 1Panel 系统信息
  restore             恢复 1Panel 服务及数据
```
:::

## 2 1pctl reset

::: info
**重置 1Panel 系统信息，包括取消安全入口登录，取消两步验证等**
```shell
Usage:
  1panel reset [command]

Available Commands:
  domain      取消 1Panel 访问域名绑定
  entrance    取消 1Panel 安全入口
  https       取消 1Panel https 方式登录
  ips         取消 1Panel 授权 IP 限制
  mfa         取消 1Panel 两步验证
```
:::

## 3 1pctl listen-ip

::: info
**修改 1Panel 监听 IP**
```shell
Usage:
  1panel listen-ip [command]

Available Commands:
  ipv4        监听 IPv4
  ipv6        监听 IPv6
```
:::

## 4 1pctl update

::: info
**修改 1Panel 系统信息**
```shell
Usage:
  1panel update [command]

Available Commands:
  password    修改面板密码
  port        修改面板端口
  username    修改面板用户
```
:::

## 5 1panel app

::: info
**应用商店相关命令，包括初始化应用等**
```
Usage:
  1panel app [command]

Available Commands:
  init        初始化应用
```
:::

> 创建应用名为 `app_name`，版本为 `v1.0.0` 的应用，命令如下：

```shell
1panel app init -k app_name -v v1.0.0
```