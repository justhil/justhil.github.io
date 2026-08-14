---
title: 无限空间云盘一键部署，把 tg 变成你的私人网盘 / 图床。
description: 利用 Telegram 搭建私人网盘与图床的一键部署方案。
tags:
  - Telegram
  - 图床
  - Docker
  - 网盘
  - 折腾记录
  - 云服务
pubDate: 2025-07-16
---

**把 Telegram 当成免费无限的网盘和图床**
并非标题党
最近在折腾个人博客，研究图床，发现了 `csznet/tgState` 这个项目，用起来很不错，就是利用 Telegram 当文件存储，但是原项目没有前端，我也不会go。

于是用python写了个带前端的，上链接：[tgstate-python](https://github.com/justhil/tgstate-python)（求star

#### 相较原项目，我加了

*   **一个 Web 前端页面**，拖拽就能上传，管理文件也方便点。
*   **一个独立的图床页面**，方便复制链接贴到博客或笔记里。

<!-- more -->
*   **支持在群里发文件自动同步到网盘**，这个用起来还挺爽的。

#### 界面：

**网盘主页：**
<img src="/images/无限空间云盘一键部署把tg变成你的私人网盘图床/fd4babf1eec4aff5b2f8e11af3c18d2b5b3a0987.png" style="zoom:60%;">

**图床页面：**
<img src="/images/无限空间云盘一键部署把tg变成你的私人网盘图床/580648b925fcfef2523348b9ab70e1f1b34ef5ae.png" style="zoom:60%;">

#### 

### 部署

```bash
docker run -d \
  --name tgstate \
  -p 8000:8000 \
  -e BOT_TOKEN="123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11" \
  -e CHANNEL_NAME="@my_test_channel" \
  -e PASS_WORD="supersecret" \
  -e BASE_URL="https://my-service.com" \
  -e PICGO_API_KEY="supersecret(可选)" \
  mitu233/python-tgstate:latest
```

简单说下几个关键配置：

*   `BOT_TOKEN`: 你的 TG 机器人 token。
*   `CHANNEL_NAME`: 用来存文件的群组用户名。
*   `PASS_WORD`: 网页的登录密码，不设置就谁都能进。
*   `BASE_URL`: 你的域名或公网 IP，用来生成下载链接。
*   `PICGO_API_KEY`: 如果你要用 PicGo 上传，就设个密钥，安全点。

---

#### 怎么用

1.  **网页上传**：打开域名，登录后直接拖文件进去。大文件只能前端上传，上传自动分块，下载还是整体。
2.  **群组上传**：把你的机器人拉到群里，直接往群里发文件就行（TG 限制 20MB 以下），会自动存到网盘里。
3.  **拿链接**：
    *   网页上点文件名就能复制。
    *   在群里**回复**你发的文件，然后发个 `get`，机器人就会把链接给你。

<img src="/images/无限空间云盘一键部署把tg变成你的私人网盘图床/3cc7eefda9bb18ef5f787f079815536391b4a66b.png" style="zoom:50%;">

---

#### 如果你也用 PicGo

如果你也写博客或者记笔记，可以这样配置 PicGo，把图片传到自己的 TG 图床里：

1.  装一下 `web-uploader` 这个插件。
2.  按图里的说明配置下就行，API 地址是 `你的域名/api/upload`。

<img src="/images/无限空间云盘一键部署把tg变成你的私人网盘图床/942d25a852d98557f74f1141019698a7e501f1b1.png" style="zoom:70%;">

---

#### 最后说一下

有个小bug：在群里删了文件，网页上不会同步删除，得手动在网页上点一下删除才行。后面有空再优化。

之后打算加webdav挂载到alist

代码放在 GitHub 了，本来是打算手写，越写越烦最后用ai 3s解决战斗了：(，感觉已经是gemini重度依赖了 :upside_down_face:

**GitHub 地址**: [tgstate-python](https://github.com/justhil/tgstate-python)

求star！

