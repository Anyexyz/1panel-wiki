import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/docs/": [
    {
      text: "产品介绍",
      prefix: "/docs/",
      link: "index.md"
    },
    {
      text: "安装部署",
      collapsible: true,
      expanded: true,
      prefix: "/docs/",
      children: [
        {
          text: "在线安装",
          link: "installation/online_installation.md"
        },
        {
          text: "离线包安装",
          link: "installation/package_installation.md"
        },
        {
          text: "阿里云镜像安装",
          link: "installation/cloud_image.md"
        },
        {
          text: "在线升级",
          link: "installation/online_upgrade.md"
        },
        {
          text: "命令行工具",
          link: "installation/cli.md"
        }
      ]
    },
    {
      text: "功能手册",
      collapsible: true,
      expanded: true,
      prefix: "/docs/",
      children: [
        {
          text: "应用商店",
          collapsible: true,
          expanded: false,
          children: [
            {
              text: "应用商店概述",
              link: "user_manual/appstore/appstore.md"
            },
            {
              text: "安装应用",
              link: "user_manual/appstore/install.md"
            },
            {
              text: "应用操作",
              link: "user_manual/appstore/installed.md"
            }
          ]
        },
        {
          text: "网站",
          collapsible: true,
          expanded: false,
          children: [
            {
              text: "网站",
              collapsible: true,
              expanded: false,
              children: [
                {
                  text: "网站概述",
                  link: "user_manual/websites/websites.md"
                },
                {
                  text: "创建网站",
                  link: "user_manual/websites/website_create.md"
                },
                {
                  text: "基本设置",
                  link: "user_manual/websites/website_config_basic.md"
                },
                {
                  text: "安全设置",
                  link: "user_manual/websites/website_config_waf.md"
                },
                {
                  text: "其他设置",
                  link: "user_manual/websites/website_config_other.md"
                },
                {
                  text: "网站分组",
                  link: "user_manual/websites/website_group.md"
                },
                {
                  text: "网站备份",
                  link: "user_manual/websites/website_backup.md"
                },
                {
                  text: "OpenResty 设置",
                  link: "user_manual/websites/openresty.md"
                }
              ]
            },
            {
              text: "证书",
              collapsible: true,
              expanded: false,
              children: [
                {
                  text: "证书概述",
                  link: "user_manual/websites/certificate.md"
                },
                {
                  text: "申请证书",
                  link: "user_manual/websites/certificate_create.md"
                },
                {
                  text: "续签证书",
                  link: "user_manual/websites/certificate_renew.md"
                },
                {
                  text: "Acme 账户",
                  link: "user_manual/websites/certificate_acme.md"
                },
                {
                  text: "DNS 账户",
                  link: "user_manual/websites/certificate_dns.md"
                }
              ]
            },
            {
              text: "运行环境",
              collapsible: true,
              expanded: false,
              children: [
                {
                  text: "PHP",
                  link: "user_manual/websites/php.md"
                },
                {
                  text: "Node.js",
                  link: "user_manual/websites/node.md"
                }
              ]
            }
          ]
        },
        {
          text: "数据库",
          collapsible: true,
          expanded: false,
          children: [
            {
              text: "MySQL",
              link: "user_manual/databases/mysql.md"
            },
            {
              text: "Redis",
              link: "user_manual/databases/redis.md"
            }
          ]
        },
        {
          text: "容器",
          collapsible: true,
          expanded: false,
          children: [
            {
              text: "容器",
              link: "user_manual/containers/container.md"
            },
            {
              text: "编排",
              link: "user_manual/containers/compose.md"
            },
            {
              text: "镜像",
              link: "user_manual/containers/image.md"
            },
            {
              text: "网络",
              link: "user_manual/containers/network.md"
            },
            {
              text: "存储卷",
              link: "user_manual/containers/volume.md"
            },
            {
              text: "仓库",
              link: "user_manual/containers/repo.md"
            },
            {
              text: "编排模版",
              link: "user_manual/containers/compose_template.md"
            },
            {
              text: "配置",
              link: "user_manual/containers/setting.md"
            }
          ]
        },
        {
          text: "计划任务",
          link: "user_manual/cronjobs.md"
        },
        {
          text: "主机",
          collapsible: true,
          expanded: false,
          children: [
            {
              text: "文件",
              link: "user_manual/hosts/file.md"
            },
            {
              text: "监控",
              link: "user_manual/hosts/monitor.md"
            },
            {
              text: "终端",
              link: "user_manual/hosts/terminal.md"
            },
            {
              text: "防火墙",
              link: "user_manual/hosts/firewall.md"
            }
          ]
        },
        {
          text: "工具箱",
          collapsible: true,
          expanded: false,
          children: [
            {
              text: "进程守护",
              link: "user_manual/toolbox/supervisor.md"
            },
            {
              text: "病毒扫描",
              link: "user_manual/toolbox/clam.md"
            },
            {
              text: "FTP",
              link: "user_manual/toolbox/ftp.md"
            },
            {
              text: "Fail2ban",
              link: "user_manual/toolbox/fail2ban.md"
            }
          ]
        },
        {
          text: "面板日志",
          link: "user_manual/logs.md"
        },
        {
          text: "高级功能",
          collapsible: true,
          expanded: false,
          children: [
            {
              text: "WAF",
              collapsible: true,
              expanded: false,
              children: [
                {
                  text: "概述",
                  link: "user_manual/xpack/waf/waf.md"
                },
                {
                  text: "概览",
                  link: "user_manual/xpack/waf/dashboard.md"
                },
                {
                  text: "全局设置",
                  link: "user_manual/xpack/waf/global.md"
                },
                {
                  text: "网站设置",
                  link: "user_manual/xpack/waf/site.md"
                },
                {
                  text: "拦截记录",
                  link: "user_manual/xpack/waf/log.md"
                },
                {
                  text: "封锁记录",
                  link: "user_manual/xpack/waf/block.md"
                }
              ]
            }
          ]
        },
        {
          text: "面板设置",
          link: "user_manual/settings.md"
        }
      ]
    },
    {
      text: "常见问题",
      collapsible: true,
      expanded: true,
      prefix: "/docs/",
      children: [
        {
          text: "产品 FAQ",
          link: "faq/faq.md"
        },
        {
          text: "操作系统相关",
          link: "faq/operating_system.md"
        },
        {
          text: "服务器架构相关",
          link: "faq/server_architecture.md"
        }
      ]
    },
    {
      text: "开发文档",
      collapsible: true,
      expanded: true,
      prefix: "/docs/",
      children: [
        {
          text: "开发环境搭建",
          link: "dev_manual/dev_manual.md"
        }
      ]
    },
    {
      text: "版本迭代",
      prefix: "/docs/",
      link: "changelog.md"
    },
    {
      text: "联系我们",
      prefix: "/docs/",
      link: "contact.md"
    }
  ]
});