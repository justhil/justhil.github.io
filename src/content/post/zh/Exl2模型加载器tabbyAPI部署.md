---
title: Exl2模型加载器tabbyAPI部署
description: Windows 下使用 tabbyAPI 加载 EXL2 模型的部署笔记。
tags:
  - EXL2
  - tabbyAPI
  - 语言模型
  - AI实践
  - 本地部署
pubDate: 2024-11-11
---

# windows下 Exl2模型加载器tabbyAPI部署

1. ## 准备工作

   一块支撑得起你想使用模型消耗的显卡

   16g以上的内存

   [Python 3.11](https://www.python.org/downloads/release/python-3117/) 

   [tabbyAPI](https://github.com/theroyallab/tabbyAPI)的源码 你可以使用[git](git clone https://github.com/theroyallab/tabbyAPI) 也可以网页下载源码压缩包解压

2. ## 加载模型前步骤

   双击start.bat，根据屏幕提示选择选项。

3. ## 加载模型

<!-- more -->

   你可以在项目根目录下找到***config.yml***与***config_sample.yml***,如果前者为空可以复制后者内容至***config.yml***.

   以下为文件内重要部分示例,使用搜索功能快速定位修改,其余保持默认即可.

   ```json
     # 主机 IP
     # 使用 0.0.0.0 可在所有网络适配器上开放服务
     host: 127.0.0.1
     # 端口号
     port: XXXX
     # 关闭密匙认证 本地使用推荐关闭 公网使用务必开启
     disable_auth: XXXX
     # 模型查找目录 根目录下的目录直接填写目录名
     model_dir: XXXX
     # 加载的模型
     # 必填：启动时加载模型必须填写此项
     model_name: XXXX
     # 缓存模式
     # 可选值: 'FP16', 'Q8', 'Q6', 'Q4'
     #推荐Q4最省显存
     cache_mode: XXXX
     max_seq_len: 最大上下文长度 越大上下文越大越占显存
    chunk_size:处理上下文的速度 越大越快越占显存
   ```

   ### **关于模型存放格式**

   默认目录为根目录下的models文件夹，从hf站下载的模型请按照
   ***根目录>>models>>模型名称文件夹>>模型本体与其他文件***
   的形式放好

4. ## 启动！！

   再次双击start.bat等待加载完成

## 关于接入酒馆

tabbyAPI使用OpenAI API 所以你可以使用http://localhost:xxxx/v1作为API URL

## 关于报错

如果出现诸如out of memory等提示则是显存不足,可以通过减小**max_seq_len**和**chunk_size**减小显存占用.
