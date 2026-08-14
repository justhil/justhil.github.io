---
title: pi-app，兼容 pi 插件生态，优雅的 pi 桌面 GUI 开源实现
description: pi 的桌面壳，替代内置 tui，兼容现有插件生态，时间线、工具卡、改动审查、会话树。
tags:
  - pi
  - GUI
  - 桌面应用
  - 开源
  - 开发实践
  - AI工具
pubDate: 2026-06-22
---

**pi 的桌面壳，用于替代内置tui。内核仍是 pi，时间线、工具卡、改动审查、会话树，替代终端 TUI 交互。**（抄的codex app）
![image|690x460](/images/pi-app兼容pi插件生态优雅的pi桌面GUI开源实现/3c2899f59796a1e0749a75a82b69d79a7d9b6407.png)

![image|690x459](/images/pi-app兼容pi插件生态优雅的pi桌面GUI开源实现/d4a806784d4b1554eaa915e27cda6e0b8189bb49.png)


**内置 SDK 或复用已有 pi 环境;自动检测已有会话,GUI 与 TUI 会话双向非实时同步(同一份 JSONL)。**

<img src="/images/pi-app兼容pi插件生态优雅的pi桌面GUI开源实现/9bd0d750ea8419c5a95b054c96f925ed6d09b7ea.png" alt="image-20260622222950578" style="zoom:67%;">

<!-- more -->

**上下文管理，可查看编辑当前注入上下文**

![image|690x460, 100%](/images/pi-app兼容pi插件生态优雅的pi桌面GUI开源实现/6748554a627a7792c2caf43926c4a896f9375b9a.png)


**兼容 pi 现有插件生态——通过单文件 JSON 适配器把 TUI 界面适配到 GUI,AI 可一键生成;应用内置主流插件适配,且支持外置覆盖。**

![image|690x460](/images/pi-app兼容pi插件生态优雅的pi桌面GUI开源实现/f1591265ce261bc2071d807f3d28b663ce6fce86.png)


**适配器兼容插件的配置页示例**

<img src="/images/pi-app兼容pi插件生态优雅的pi桌面GUI开源实现/7d0ec1978407bed94010b7af852d366dd4e89bc1.png" alt="image-20260622223134181" style="zoom:67%;">

**工具调用渲染截图**

![image|690x460](/images/pi-app兼容pi插件生态优雅的pi桌面GUI开源实现/f74a97ad015a41f1d00c200302012bc14a77ef50.png)
![image|459x500, 100%](/images/pi-app兼容pi插件生态优雅的pi桌面GUI开源实现/9e6722ca81f7803367e8ec5221e316c9c2492a02.png)

![image|690x460, 75%](/images/pi-app兼容pi插件生态优雅的pi桌面GUI开源实现/23bfaea5aaaacf7c6ee265a52384efe258cdeb0e.jpeg)

模型配置
![image|690x460](/images/pi-app兼容pi插件生态优雅的pi桌面GUI开源实现/d3798b7f8bf58ae73aca7eba37411bab517ebeed.png)
![image|690x460](/images/pi-app兼容pi插件生态优雅的pi桌面GUI开源实现/b085186fa4d3cd80d656c7edccdb4377179fc0e3.png)
![image|690x382](/images/pi-app兼容pi插件生态优雅的pi桌面GUI开源实现/8992b0f5f2aaf239b52f4d4a382d487f57944167.png)

双击esc可回退，单击可取消，/ 命令支持，拖动文件到输入框附加文件支持，上下键历史输入，更多操作参考readme，后续会支持更多tui的操作进来。

不止编码，对话分区可新建临时文件夹的对话用于日常对话，后续更新会把对话分区的提示词注入独立出来。

适配器单文件编写发送链接：https://github.com/justhil/pi-app/tree/main/doc 给ai即可快速编写，内置适配器列表见项目主readme文件。

**项目地址**：[pi-app](https://github.com/justhil/pi-app) 求star，这对我真的很重要！

主要写出来自用，有些功能可能不怎么用打磨不到位，帖子下反馈bug或者提issue。

当前版本的readme部分为ai生成可能有错漏，疑问可以回复询问。

最近期末周bug攒着后面修
**已知bug**：
