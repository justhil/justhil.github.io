---
title: 自研 augment，pi 的 ace-tool 拓展
description: 为 pi 定制的 ace-tool 插件，自动索引项目代码并通过远程语义检索返回上下文。
tags:
  - pi
  - augment
  - 语义检索
  - 插件开发
  - 开发实践
  - AI工具
pubDate: 2026-05-12
---

在我了解𝝅的插件生态后发觉为𝝅定制一个插件真的是和喝水一样简单

能做的真的很多，如果把常用的mcp做成插件的形式就能解决很多mcp难以解决的问题，比如：

* 原生的输入框劫持，可以做到提示词增强后返回输入框
* 一堆hook点，防止长上下文后调用不频繁的问题
* 深度的ui定制，加载动画等都可以定制
* 原生tui配置，环境变量可以ui选择输入了

几乎可以做到原生工具调用的水平，且可以更灵活的开关功能，pi可定制程度比我想的还要多
以下为本插件做了什么：
* 注册 pi 原生工具：`search_context`
* 自动扫描、分块、索引当前项目
* 只上传新增或变更代码块到 Augment 兼容 API
* 通过远程语义检索返回相关代码上下文
* 提供 `/ace-enhance` 提示词增强命令
* 支持官方 Augment `/prompt-enhancer` 和 pi 已配置模型进行提示词增强

<!-- more -->

链接 [pi-ace-tool](https://github.com/justhil/pi-ace-tool)

安装
```
pi install https://github.com/justhil/pi-ace-tool
```

参考站内大佬项目,用了很久真心感谢
![image|690x77](/images/自研augment-pi的ace-tool拓展/db562ba2347fb1464b0a93ec8fe36c80a474a719.jpeg)
![image|690x120](/images/自研augment-pi的ace-tool拓展/8924b34b71770ce83dc531f50cfa75b1e062d940.jpeg)
![image|690x404](/images/自研augment-pi的ace-tool拓展/cfd9bcf160ff01f6d94079850af01523cc4703dc.jpeg)
