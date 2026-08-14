---
title: 使用电报 telegram 与 SillyTavern 酒馆角色卡对话的插件
description: 通过 Telegram 与 SillyTavern 角色卡对话的插件实践记录。
tags:
  - Telegram
  - SillyTavern
  - 角色卡
  - AI工具
  - 插件开发
pubDate: 2025-12-02
---

手机开酒馆网页太吃资源了，找了个通过 Telegram 和酒馆通信的插件。原项目基本不可用，我 vibe coding 完善了一下。
项目地址求star！
 [justhil/SillyTavern-Telegram-Connector](https://github.com/justhil/SillyTavern-Telegram-Connector)

![image|623x266, 50%](/images/使用telegram与SillyTavern酒馆角色卡对话的插件/2077cd34accfcabbf20b50b2cae528aefcffafdd.png)
![image|561x290, 50%](/images/使用telegram与SillyTavern酒馆角色卡对话的插件/ba66beffb70ad20cea2576d914b441bce8616508.png)

主要功能

<!-- more -->
📱 Telegram 直接和 AI 角色聊天
🔄 流式输出，实时显示回复
📋 内联按钮菜单，分页浏览角色/聊天记录
Docker 一键部署
心跳检测 + 自动重连
注意事项
HTTPS 页面必须用 wss:// 连接，不能用 ws://，需要配置 Nginx 反向代理
推荐别玩前端卡，当然可以玩，但是AI输出的前端代码会自动识别删除，但可能有遗漏。
另外前排求好玩的卡！

