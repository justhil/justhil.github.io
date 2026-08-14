---
title: 关于 grok build 的 api 与官网 api 差异，build 确实更多
description: 对比 grok build 站点与官网 api 的鉴权方式和额度差异。
tags:
  - grok
  - API
  - 额度对比
  - AI实践
  - API工具
pubDate: 2026-07-10
---

https://cli-chat-proxy.grok.com/v1 这是build的站点
https://api.x.ai/v1 官方站点，cpa请求的站点

cpa里走的是官方站点，看到站内有人说build的额度更高(模型计费便宜？)
我就看了下怎么用build的站点
build的站点是openai responses的格式，鉴权用的是`C:\Users\Administrator\.grok`下的`key`的值
直接请求是不通的，请求头要附上
```
X-XAI-Token-Auth: xai-grok-cli
x-grok-client-version: <cli版本, 如 0.2.93>
```
具体额度和tps之类的差异进一步体验中

<!-- more -->

更新额度
cpa也就是官方api额度如下
![image|675x500, 50%](/images/关于grok-build的api与官网api差异/1d9c08598bca586db9dc7972ea00994927f7e18e.png)
![image|530x499, 50%](/images/关于grok-build的api与官网api差异/ac42e28f1e515906672f07267202935a48039c78.png)
build api额度还没蹬完，目前
![image|690x195, 50%](/images/关于grok-build的api与官网api差异/1a3f499a6e73193ef3b5d0b5b323e9b535f38841.png)
![image|560x500, 50%](/images/关于grok-build的api与官网api差异/edcbeadbb12bb66d474367d3a33e91c45e19d8d7.png)

多了不止一点啊，cpa可以提个issue了
测试非严谨测试，build的测试号测试前额度忘记记录了，应该实际会更多一点
周限结论如下
![image|640x500, 75%](/images/关于grok-build的api与官网api差异/28683c867c495a06f1921b41ad210b555b555d8b.png)
