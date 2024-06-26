---
title: 我的自动化生活
date: 2023-06-12T22:46:00+08:00
lastmod: 2023-06-12T22:46:00+08:00
draft: false
---

## 生活碎片

### 生活自动化

本周使用 iOS 的捷径功能将自己的生活上的一些固定操作场景自动化。 使用效果还不错以下是我的一些自动化的场景。

由于快递的消息很多，我平时会使用待办事项来管理我的快递信息。 平时的基本操作流程是收到短信之后将题复制粘贴到待办事项中。 然后现在我通过自动化的设置，当手机收到短信的时候，自动运行脚本，将其添加到我的指定的待办事项中。以下是我的解决方案。

![auto-example](https://raw.githubusercontent.com/huyixi/Pics/main/20230612235401.png)

由于自动化检测短信的时候只能检测其中的一个词语，但是并不是所有的快递短信都包含有相同的词语，所以只好创建多个自动化。下面是实现步骤：

1. 点击创建个人自动化

   ![personal-auto](https://raw.githubusercontent.com/huyixi/Pics/main/20230612235309.png)

2. 如图添加条件

   ![auto-2](https://raw.githubusercontent.com/huyixi/Pics/main/20230612235501.png)

3. 如图所示添加自动化

   ![auto-3](https://raw.githubusercontent.com/huyixi/Pics/main/20230612235552.png)

   你可以通过下面的搜索框去搜索一些特定的动作这样自动化就搭建完成了是不是十分简单。

   这两天在使用的时候出现了一些小问题比如说当我在收到一条短信同时包含有其中的几个内容比如说包裹和驿站这时候会出现添加两条提醒事项的情况对于这个问题目前的解决办法是分析几个快递所发送的短信的内容 尽量避免使用相同的字符。 如果后续苹果有更新条件的话这个问题就应该可以很好地解决了。

### 网络搭建

本周在家里搭建了两个路由器，实现了连接路由器连上网的功能。 现在一条网络平时使用，一条网络上网使用体验真的是太棒了。真后悔没有早点搭建， 之前每天去开开关关软件真的是太麻烦了。 自从搭建完成，现在简直想每天都想赖在家里。

### 毕业相关

### 其他碎片

其实这两周还做了许多其他的事情。包括毕业呀等等之类的。然后我还研究了 RSI， 也就是劳损现在先提前做好预防，防止以后出现职业病。 目前对自己家里的一个办公环境也有一个雏形设想。但是可能还需要搭建完成之后再进行检验。后面有空的时候再整理一下这部分的内容，再分享出来。除此之外一直在写一个文章的一个爬虫。这个项目在我的电子书不完全解决方案中也有提到，但是那里面获取爬虫的时候还需要分步骤进行。我现在想把它集成为一整个功能，方便我在 Kindle 上阅读电子书。 这么多的东西其实都是源自于陈浩先生的个人博客。他的个人博客我大概粗略地阅读了一遍，然后延伸出这么多的东西。现在还没返回去。就好像一张网，陈浩先生的个人博客是这个主干网，然后我像一个蜘蛛一样在上面探索，探索的越来越偏远了。

对了最近还在折腾 Todo，Raycast 好多东西啊！还看了好多的文章还有两本书。Stack 已被塞满！！！

### 未来一小段时间的规划

1. 完成电子书爬虫
2. 重新构建自己的个人博客。 最近又发现了好多制作很精美，并且文章质量很高的博客。又想要把自己的博客折腾得像他们一样好看。博客这条路真的是折腾不止啊。
3. 最近几周一直在想着将陈皓先生的一些文章整理出来。但是这个电子书爬虫完成的时间有点久（其实已经可以使用了，但是我想把它获取页面目录链接和爬取页面内容还有生成电子书这三个步骤合三为一，方便我后面的使用。 其中涉及到太多的错误处理，和返回的东西不一样等等。），然后比较抗拒使用电子屏幕来阅读。还是想要把这些文字资料尽可能的在 Kindle 进行阅读，所以就一直拖着。对了还有最近学校那些事情毕业要交的各种材料啊等等，其实事情还是蛮多的，后面慢慢做吧。

## 动态

## 文章

### 1.新时代的电子书阅读指南

[电子阅读新语](https://blog.si-on.top/2023/key4read/)

下面包含文章的主要内容以及我的一些理解。

知识的获取主要分为三个步骤分别是：信息的选择，输入以及输出。

**信息选择**： 选择高质量的信息渠道。 比如官方文档、书籍、书单、个人博客（不一定）等等。

在这个时代噪音实在是太多了。包含且不仅限于：各种社交媒体，信息流等等。 你所接收到的信息有家影响到你的行为决策。 一个低质量的信息渠道可能会让 那你形成错误的认知，导致你做出许多错误的决定。 所以我们应该选择一些更好的渠道来获取信息所以我现在避免使用一些低质量的信息平台比如说抖音（虽然我本来就不用，并且强烈鄙视刷抖音的用户）微博（关注有必要关注的博主获取一些视野）等等。

**信息输入**：

**信息输出**：低级：写作；中级：教学；高级：生活。

对一个知识的理解或者说掌握程度最低级的就是可以去写作，也就是写博客（感觉在骂我）、读书笔记等等， 中级的理解是你可以教会别人，最高级的理解就是将它应用到你生活中的方方面面。

最后作者还推荐了一些电子书的管理方案，比如说 calibre 这个软件。我在我的《电子书不完全解决方案》这篇文章中也有介绍，确实十分好用。

除此之外作者文章中还威胁我觉得很有意思的观点：

- 在目前这个社交平台上我们每个人都是条鱼，我们在评论的时候我们也都在创造鱼饵。但是我们所创造的鱼饵却又不属于我们自己，它被资本家无偿占有，这是我们的输出劳动但是劳动成果却不属于我门。当 AI 时代来临内容的创作数量将呈指数型上涨，我们这些鱼儿也将会被抛弃。

### 2.数据仓库与数据湖

- [什么是数据仓库？-- Google](https://cloud.google.com/learn/what-is-a-data-warehouse?hl=zh-cn#section-8)
- [数据仓库的概念](https://aws.amazon.com/cn/data-warehouse/)
- [什么是数据仓库？](https://www.oracle.com/cn/database/what-is-a-data-warehouse/)

### 3.阮一峰的网格布局教程

[CSS Grid 网格布局教程](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

### 4.“我是一名专家” - ChatGPT Prompt

网友分享，据说这么提示 GPT 生成的内容质量更高。

## 资源

### 1.Mac 下载文件提示损坏的解决方案

在 Mac 系统上没有通过官方的 Store 下载应用程序的时候，可能会提示该文件已损坏，请移到垃圾桶。如**`"XXX" is damaged and can't be opened. You should move it to the Trash`**

这个时候你只需要导航到你的应用程序文件夹的终端，然后输入下面这行代码之后，再打开该应用程序并可以正常运行了。

```
sudo xattr -r -d com.apple.quarantine /YOUR_PATH/xxxxx.app
```

YOUR_PATH 是你的应用程序的路径。 在 Mac 系统上在根路径 /Application。

### 2.Apache EChart

一个基于 JavaScript 的[开源](https://github.com/apache/echarts)[可视化图表库](https://echarts.apache.org/en/index.html)。图表十分精美，正在使用中。

### 3.magic-api

[文档](https://www.ssssssss.org/magic-api/pages/quick/intro/)

## 说说

- 我认为的最理想的工作应当是与自己的追求与理想相契合的。除此之外还能提供必要的一些环境上的支持。
- 前端工作存在目的是为了让不懂代码的普通人也能够享受技术带来的便利。 前端只是降低了普通人使用技术工具的门槛。
- 不要被思维导图的概念给裹挟了。真正有想法的人，只要给他一张纸和一支笔，他就能在上面描绘出他的思路。如果只是把课本上的知识搬到思维导图上面去其实对我们来说是完全没有用处的。 - 忘记在哪里看到的
- 比如人们会常说：”我没有时间健身、读书或学习。“这时，无论（你选择）占用你时间的是工作、家庭还是其他什么东西。一旦你开始抱怨，你把原本属于你的，掌控自己时间的权力，给了别人。而如果换一种说法，你可以夺回这种权力，比如：“我选择不花时间去锻炼、读书或学习。因为我想完成这个项目，我想看电影放松，我想和朋友叙旧。”这样一来，你知道是你在做选择。既然你选择了过去，那么你也可以选择未来。
