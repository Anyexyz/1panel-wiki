# 安装

参考 [1Panel 文档 - 在线安装](https://1panel.cn/docs/installation/online_installation/) 部分，这里仅作常见安装失败的问题解析。

# 常见Q&A
> 收集自 1Panel微信群，论坛以及GitHub issue

## Q1. 安装过程中提示 `docker 安装失败`
```bash
[1Panel Log]: … 启动 docker
Failed to enable unit: Unit file docker.service does not exist.
Failed to start docker.service: Unit docker.service not found.
[1Panel Log]: docker 安装失败
```
**问题解析：**
1Panel 应用部署环境依赖于 docker，默认安装脚本会尝试安装 docker，若安装 docker 失败并不会返回报错，会在 docker 启动阶段报错未安装，该问题主要出在国内服务器。

**解决办法：**
需要用户手动安装docker，参考命令：
```bash
curl -fsSL https://get.docker.com | bash -s -- --mirror Aliyun
```
或者
```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

## Q2. PVE LXC 架构的虚拟机安装 docker 失败
报错同上
**问题解析：**
- 内核功能限制：LXC 容器可能没有启用 Docker 所需的特定内核功能，例如 cgroups 等。
- 权限问题：LXC 容器默认情况下可能没有足够的权限来运行 Docker

**解决办法：**
若为自己配置的 LXC 容器，则可参考 [这里的配置](https://www.anye.xyz/archives/1700913888051#pve-lxc-%E8%BF%90%E8%A1%8C-docker)。
否则尝试下面这个 docker 安装脚本
```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```
## Q3. Alpine Linux 安装 1panel 失败
```bash
sh: localhost: unknown operand
暂不支持的系统架构，请参阅官方文档，选择受支持的系统。
```
**问题解析：**
1Panel 仅支持主流 Linux 发行版本（基于 Debian / RedHat 的发行版，包括国产操作系统）

**解决办法：**
更换受支持的操作系统。

## Q4. 提示 "ERROR: Unsupported distribution 'xxx'"
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/8186b43660c34a39adac0037915c0f35.png)
**问题解析：**
上图的错误是由于 docker 的在线安装脚本不支持该操作系统导致。

**解决办法：**

> **RockyLinux**
> 
> ```bash
> # 设置仓库
> sudo yum-config-manager \
>     --add-repo \
>     http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
>     
> # 安装 Docker
> sudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin
>
> # 启动 Docker 服务
> sudo systemctl start docker.service
> sudo systemctl enable docker.service
>    ```

> **AlmaLinux**
>
> ```bash
> # 更新系统
> sudo dnf update
> sudo dnf install epel-release
> sudo dnf remove podman
> 
> # 添加 Docker-CE 存储库
> sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
>
> #安装 Docker-CE
> sudo dnf install docker-ce docker-ce-cli containerd.io
>
> # 启动 Docker
> sudo systemctl start docker.service
> sudo systemctl enable docker.service
> ```

## Q5. 使用 windows 的 wsl 子系统安装失败
```bash
System has not been booted with systemd as init system (PID 1). Can't operate. Failed to connect to bus: Host is down
```
**问题解析：**
上图的错误是由于 wsl 子系统不能使用 systemd 导致的启动 docker 服务失败

**解决办法：**
更新 systemd 管理，支持 systemd 后问题即可解决
参考文档：[Systemd support is now available in WSL!](https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/)

## Q6. command not found 命令未找到
```bash
-bash: curl: command not found
-bash: tar: command not found
```
**问题解析：**
操作系统缺乏运行脚本的基本命令

**解决办法：**
自行根据操作系统安装 `curl`，`tar` 等命令