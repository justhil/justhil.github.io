---
title: 【3.7 更新可用】abacus2api python 项目
description: 使用 Python 封装 Abacus2Api，支持以 Cookie 方式接入。
tags:
  - Python
  - OpenAI
  - Abacus2Api
  - 开发实践
  - API工具
pubDate: 2025-02-25
---

# Abacus2Api python项目

在 Abacus2Api 项目上线的评论区中，发现大家都无法使用。由于我没有 Go 语言环境，因此使用 AI 分析了框架，并搭建了一个 Python 项目。
github地址：[abacus2api](https://github.com/justhil/abacus2api)
求点赞！
## 调用说明

在使用 OpenAI 的 API 时，请确保传入的 `key` 为 Abacus 的 Cookie。需要注意的是，CherryStudio 无法识别完整的 Cookie。我使用的 OneAPI 网站中转可以正常识别。

有人吐槽用不了，换号发现创建会话的方式不是固定id创建，更新项目换号可用。

正常运行中。。。

<!-- more -->
![image|690x337](/images/abacus2api-python-项目/15eef4264eb139a4e82ff6ca7bc2d187a151cb56.png)

