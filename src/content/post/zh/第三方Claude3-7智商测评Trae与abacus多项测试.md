---
title: 第三方 Claude3.7 智商测评！Trae 与 abacus 多项测试
description: 对比测试 Trae 与 abacus 的 Claude 3.7 在编程、数学、逻辑推理上的表现。
tags:
  - Claude
  - Trae
  - abacus
  - 模型评测
  - AI实践
pubDate: 2025-03-04
---

**Trae不显示思维链但是程序中会显示思考中，我默认Trae的3.7为thinking版**

**先写典中典天气页面效果,题目如下**
```
Create a single HTML file containing CSS and JavaScript to generate an animated weather card. The card should visually represent the following weather conditions with distinct animations: Wind: (e.g., moving clouds, swaying trees, or wind lines) Rain: (e.g., falling raindrops, puddles forming) Sun: (e.g., shining rays, bright background) Snow: (e.g., falling snowflakes, snow accumulating) Show all the weather card side by side The card should have a dark background. Provide all the HTML, CSS, and JavaScript code within this single file. The JavaScript should include a way to switch between the different weather conditions (e.g., a function or a set of buttons) to demonstrate the animations for each
```
先是trae

![image|690x433](/images/第三方Claude3-7智商测评Trae与abacus多项测试/4a17ba04ce99fa78da1f389bedaad8d9da30d611.png)

![image|690x358](/images/第三方Claude3-7智商测评Trae与abacus多项测试/73985dc27a44e9647c82e0341ec4505cf9832a05.png)
trae的代码字符数
![image|103x42](/images/第三方Claude3-7智商测评Trae与abacus多项测试/a7a7264e1239745268c9d912216f635953a59178.png)

然后abacus
![image|690x438](/images/第三方Claude3-7智商测评Trae与abacus多项测试/648d0c039d3a0c7858710f7a981a43443bc58d90.png)
![image|690x358](/images/第三方Claude3-7智商测评Trae与abacus多项测试/ddc8b10636429f91682f93a99a211459de21a42e.jpeg)
abacus的代码字符数
![image|110x27](/images/第三方Claude3-7智商测评Trae与abacus多项测试/800677f1034fb75f6705259d9a4c3847633d0902.png)

<!-- more -->

**接着是测试数学能力,题目如下**
```
给定不小于3的正整数 \( n \)，求最小的正数 \(\lambda\)，使得对于任何 \(\theta_i \in (0, \frac{\pi}{2}) \) (\(i = 1, 2, \cdots, n\))，只要 \(\tan \theta_1 \cdot \tan \theta_2 \cdots \cdot \tan \theta_n = 2^{\frac{n}{2}}\)，就有 \(\cos \theta_1 + \cos \theta_2 + \cdots + \cos \theta_n\) 不大于 \(\lambda\)。
```
答案为`n−1`
Trae的输出字符数少的离谱![image|165x42, 75%](/images/第三方Claude3-7智商测评Trae与abacus多项测试/34e10b8c3c48628c342f8f81e445690ddc3e2aa5.png)且答案错误
![image|690x132, 75%](/images/第三方Claude3-7智商测评Trae与abacus多项测试/4924476fa705f969f57388da311d90a98b10c30e.png)
abacus则输出多的离谱![image|180x21](/images/第三方Claude3-7智商测评Trae与abacus多项测试/fc501dfa4659d904dcc1e44e358a0e0449bedf6e.png)但答案依旧错误
![image|690x229](/images/第三方Claude3-7智商测评Trae与abacus多项测试/0094539f9f794cdbaecb9371759a19a6eb64b3a0.png)

**最后逻辑推理能力，题目如下**
```
Sroan 有一个私人的保险箱，密码是 7 个 不同的数字。 Guess #1: 9062437 Guess #2: 8593624 Guess #3: 4286915 Guess #4: 3450982 Sroan 说： 你们 4 个人每人都猜对了位置不相邻的两个数字。 （只有 "位置及其对应的数字" 都对才算对） 问：密码是什么？
```
答案为`4053927`
Trae依旧简短![image|146x31](/images/第三方Claude3-7智商测评Trae与abacus多项测试/a9ac2f12f14d1e2f4ef53a32f2ddc636348a96f1.png)且错误
![image|690x293](/images/第三方Claude3-7智商测评Trae与abacus多项测试/630f5ace7975b5b7a3e1b2b7b8460af2da79aeb6.png)


abacus的超级长(长到怀疑abacus是不是用了提示词加长)![image|171x24](/images/第三方Claude3-7智商测评Trae与abacus多项测试/aa7375802583ee301ba1d4a7c0bfcccc00ab84c5.png)但是依旧出错
![image|690x311](/images/第三方Claude3-7智商测评Trae与abacus多项测试/ce5b4a11c2c4c8a342342642daf41be0f780ce0f.png)

**ALL IN ALL**
在测试过程中abacus的逻辑能力比Trae高几百倍但是编程能力却差不多，合理猜测Trae的提示词限制了输出，Trae在输出代码或者编程问题上明显健谈且高智商，换成其他问题瞬间小脑萎缩，abacus则是疑似满血各方面接近官网体验。


*Trae免费用，我接入cline后明显比Trae体验好很多，强烈推荐这种用法！*
