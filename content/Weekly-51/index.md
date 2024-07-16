+++
title = '我的领域'
date = 2024-07-15T21:21:15+08:00
draft = false
+++

封面图是我跟我妹在家里下象棋，好久没下象棋了，第一把不注意居然还给输了。

## 这周做了啥

### WebTOC

![Kapture2024-07-13](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/Kapture2024-07-13.gif)

一个谷歌浏览器扩展，用于发现当前页面的目录。

这周在看《如何阅读一本书》，讲到在阅读书籍的时候要先看一下整本书的目录，了解一下书籍的大致结构。因为一些网站没有提供目录导航，所以做了这样一个 Chrome 插件来实现这个功能。

一些亮点：

- Side Button 使用了毛玻璃效果
- TOC 主体上的关闭按钮模仿 Mac 的按钮设计。另外写了个 CodePen。链接：https://codepen.io/huyixi/pen/OJeVyYE

目前已经实现了 MVP，后续的一些改进的地方：

- 可移动的 Side Button
- 可移动的 TOC 主体
- 根据网页的语言展示「目录/TOC」
- 可以自定义配置样式
  - 自由改变目录的宽高

### 快速切换输入法

自己在电脑使用的时候经常会因为要敲代码，如果此时输入法中有一个中文输入会经常打断流畅的编码体验。因为自己在使用的是 Rime，所有的配置都根据自己的配置文件来设置倒是比较方便。只需要注释掉对应的中文输入法就可以。

另外因为 Rime 输入法需要使用 deploy 来将配置部署到输入法中。使用 Apple Script 来自动化这个操作。

![image-20240713164510475](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20240713164510475.png)

写了一个 Rust 程序帮自己完成这件事，现在只需要在终端中输入

```bash
toggle-input-method
```

就可以实现中文输入法的快速打开和关闭。

![image-20240713164608428](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20240713164608428.png)

仓库链接：https://github.com/huyixi/Utils/tree/main/toggle-input-method

### 如何阅读一本书

这周和上周把《如何阅读一本书》读完了，给我的启发还是挺大的。一直想着用「自顶向下方法」来写一篇读书笔记，但是目前内容还不多，也不知道什么时候能发到博客上去。

### 我的领域

在整理《如何阅读一本书》的时候，看到了一些获取信息与知识管理的方法。这周前两天读了很多少楠的「[产品沉思录](https://www.pmthinking.com/a601a12335044f349a22caf57f274c27)」的相关内容。于是开了新的分支：「知识管理」。

这里面给我很大改变的一点就是 P.A.R.A. 管理法。

A：Area，领域。

P：Project，项目。

R：Resources，资源。

A：Archive，归档。

少楠对 PARA 管理法的看法与原作者的看法有些许不同。少楠把 Area 领域理解成需要精通的事物，原作者的理解是需要对事物产生的结果负责的事物。我认为少楠这里的解释很不错。一个领域下会有许多的 Projetc，这些 Project 会指向某些具体的任务。资源就很好理解了，就是我们在推进项目或者在当前领域下需要的一些材料等等。当一个项目做完之后，就可以进行归档整理。

我把领域的概念往前放，因为我认为这是这个管理法的精髓，也是改变我行动的最大的一点。

在过去的一年里，我在工作以外的时间很喜欢折腾许多事情，但是没有深入任何一件。所以到现在也没有一个很厉害的产出。看到这个方法之后，我反思了一些，认为这是知识管理方法出现了问题。其实这个问题之前月车哥很早就给我指出了，但是我并没有很认真的执行。我总认为，要先看的够广，才能找到想要自己投入的领域。但是其实学习能力提高上去后，想要迁移到另一个技术是很快的事情。

关于领域，由于人的精力有限，不能在过多的领域投入精力。而是要想清楚自己需要什么，然后再在上面投入精力。

## 这周发现了啥

### Shadcn/UI

在搜索 Svelte 的组件库的时候发现一个 shadcn-svelte 的组件合集，文档中有这样一句话：

> This is **NOT** a component library. It's a collection of re-usable components that you can copy and paste or use the CLI to add to your apps.
>
> **What do you mean not a component library?**
>
> It means you do not install it as a dependency. It is not available or distributed via npm, with no plans to publish it.
>
> Pick the components you need. Use the CLI to automatically add the components, or copy and paste the code into your project and customize to your needs. The code is yours.
>
> _Use this as a reference to build your own component libraries._

这不是一个组件库，而是一个组件集合。这意味着你不需要使用 npm 来安装整个库，你只需要通过命令行或者复制粘贴相关的组件代码到你自己的代码中。所有的代码都将属于你自己。

工作中一般都使用 ElementUI，但是并没有根据 Element 的风格来设计 UI，而是有很多的自定义。这也就导致了在写样式的时候需要对 Element 做很多的自定义进行样式覆盖，不同的组件之间还有可能有样式冲突的问题。如果换成 Shadcn 的话会方便很多。

很早就看到 Shadcn/UI 作为去年的 CSS 框架榜一，但是没有认真看文档，以为就是一个普通的 UI 组件库。还是要认真看文档一些关键的创新点。

### 机器人为什么羡慕人类

看到一个群友发了这样一个音乐节的 VJ 视频。里面有几句话：
![SCR-20240708-nwiw](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20240708-nwiw.png)
![SCR-20240708-nvzd](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20240708-nvzd.jpeg)
![SCR-20240708-nwaf](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20240708-nwaf.png)
![SCR-20240708-nwdd](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20240708-nwdd.png)
![SCR-20240708-nwed](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/SCR-20240708-nwed.png)
或许多年之后，AI 变得更强的时候，这会成真。

### 面向 Web2 工程师的 Web3 入门

https://s3.laisky.com/public/slides/web3-101.slides.html#

- 养成习惯时常去 https://revoke.cash/ 这样的网站检查自己钱包的授权，及时撤销不必要的授权。

- 入金 & 出金：CEX 上所有的交易都是基于加密货币，一般不会支持直接使用法币（fiat）进行买卖。 所以用户需要先将自己的法币兑换成加密货币，兑换的方式往往是 C2C 交易。

  也就是由交易所撮合，提供一个卖家，你将法币转入到卖家的账户，卖家将对应的加密货币转入你在 CEX 的账户。 出入金最怕的就是黑钱，黑钱具有传染性，一旦某个账户被认定为黑钱，那么一段时间内所有和这个账户有过交易的账户都会被冻结。

  一般建议尽量不要使用微信/支付宝进行出入金操作，尽量使用不常用的银行卡。

- 《区块链黑暗森林自救手册》:https://github.com/slowmist/Blockchain-dark-forest-selfguard-handbook/blob/main/README_CN.md

## 这周看了啥

### polebug23 - vlog #63

https://www.bilibili.com/video/BV1wM4m1m7Ni/?spm_id_from=333.337.search-card.all.click

> 1. Topic（1/n）：当写代码从爱好变成工作，如何保持学习的兴趣？
>
>随意所欲地敲键盘，就像艺术创作一样。
>
>编程也可以是一种自由表达的方式。
>
>不要总是被工作任务束缚，
>
>给自己一些时间自由地编写代码。
>
>尝试编写一些你感兴趣但与工作无关的程序
>
>享受编码过程中的创造力和乐趣。
>
> 2. Topic（3/n）：我的日记都写什么呢
>
>大多数时候，我比较关心我每天的状态，
>
>会简单回顾一下自己的工作、学习情况，
>
>比如做了哪些事情、
>
>遇到了什么挑战、
>
>有什么事情做到一半明天要继续的，
>
>或者是今天哪里没做好的，
>
>明天需要调整，等等。
>
> 3. Topic（3/n）：我的日记都写什么呢
>
>有时我会遇到一些让我难受的事情，
>
>我就会在日记中进行梳理和排解负面情绪。
>
>我会把这些事情非常具体地写下来，
>
>从事情的起因、经过、结果，
>
>在梳理的过程中，
>
>我就会逐渐找到引起负面情绪的根源是什么，
>
>最后再写下未来应对的方式，
>
>或者是写下对这件事的感受，
>
>就当作是与负面情绪的一次对话。

看到 polebug 说的做视频进行总结的好处，或许以后有条件自己也可以尝试一下。

polebug 的输入要比我好上许多。她的输入源有书籍、Github，Ted 等等高质量的内容，而我的输入源质量相对来说就要比 polebug 差一点。最近在尝试减少我的信息输入源，帮助自己获得更多的时间与专注。

另外 polebug 的日记，每月复盘也是一个不错的方法，与我在上周看的 plantegg 的《如何在工作中学习》的博客所提倡的总结与建构的不错的实践方法论。

### XIHU Rock 音乐节

今天买了 XIHU Rock 的音乐节双日门票，打算过两周带妹妹一起去看。这次的演出阵容其实我大部分都不认识，计划盲冲。相信大快这个主办方。

### 利用二八定律学习新技术的替代品

Learn X in Y minutes：https://learnxinyminutes.com

前两周说使用 ChatGPT 帮我总结出来学习一门技术中最重要的 20% 以此来帮我快速进行学习。发现这个工具，经过了多人的总结编辑，或许是比 ChatGPT 总结更好的方式。

- [我正在使用的火狐扩展（2024 年版） - 依云's Blog](https://blog.lilydjwg.me/2024/7/9/firefox-addons-i-m-using-2024.216855.html)
- [中国年轻人的“三座大山”：体制内、不出省和相亲](https://stephenleng.com/cn/chinese-young-people-under-three-big-mountains/)
- [UI 设计外包的出路和自救](https://mp.weixin.qq.com/s/d141hMuyOkNAend9BzSyDw)：程序员也是一样

### [flomo 101 - 不知道积累什么知识，是因为你没有自己关注的领域](https://mp.weixin.qq.com/s/i6YXHka8QE-qe8gbRp6JiQ)

- 自己承担责任，靠着吃饭的东西叫领域。自己负责
- 人生需要学习很多的知识，但是领域的知识才是我们最应当去学习的。
- 在进行知识积累的时候，要下意识问自己，这是自己应该去学习掌握的领域，还是只是自己的兴趣爱好
- 领域是会变动的。如果你的身份改变，之前的

### Hacker News 推荐的阅读书单

![765shots_so](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/765shots_so.png)

### 一个十年软件工程师推荐的阅读书单

https://software-engineering-books.com

![368shots_so](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/368shots_so.png)

但是我找不到相关的作者信息，虽然这些书大部分是在很多地方都能看到的经典，但是阅读前还是要加以筛选。

### LIfe：生活日志

https://github.com/cheeaun/life

![427shots_so](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/427shots_so.png)

使用简单的 Markdown 文件生成自己的生活日志。

### 编程中不同形式的命名

|命名形式|示例|使用场景|
|---|---|---|
| 小驼峰式（camelCase）|`myVariable`, `calculateTotal`, `userName`| 变量名、函数名、对象属性|
| 大驼峰式（PascalCase）| `MyClass`, `EmployeeRecord`, `User`|类名、构造函数名|
| 短横线（kebab-case）| `my-css-class`, `main-container`, `app-config`|CSS 类名、文件名、配置文件键名（如 YAML）|
| 下划线（snake_case） | `MAX_VALUE`, `total_amount`, `USER_ID`| 常量名、数据库字段名、宏定义|
| 宏定义（MACRO_DEFINITION）| `#define MAX_BUFFER_SIZE 1024`, `#define PI 3.14` | 预处理宏（如 C 和 C++中的宏）、配置常量|
| 匈牙利命名法（Hungarian Notation）| `strName`, `nCount`, `pElement`| 早期 Windows API、一些特定场景中的变量命名|

### 产品沉思录

https://codepen.io/huyixi/pen/OJeVyYE

更新了一些知识管理的理念方法。

计划使用 flomo 管理 Area，Linear 管理 Project，Resources 就放在自己的 wiki 里。

![image-20240712085743329](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20240712085743329.png)

Linear 新增了一个 initiatives 设置公司的举措，其实这跟个人的领域是一个类似的概念

我用 flomo 管理我的领域的知识， Linear 管理我的项目进度，Resources 的内容放置在我的个人 Wiki 中。

### 淘宝和拼多多的 widge

![image-20240713135701557](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20240713135701557.png)

![image-20240713135805679](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20240713135805679.png)

淘宝和拼多多的 Widgets 对比，淘宝一堆乱七八糟的入口，拼多多就简洁多了。很讨厌拼多多的压榨，但不得不说，拼多多这个 app 确实是要比淘宝好用。启动速度更快，页面更简洁。拼多多的收货地址可以直接复制使用，淘宝和京东的都无法直接复制。另外最近使用淘宝启动聊天窗口，两个小米手机都启动失败了。其中一个系统是 MIUI，一个是新出的澎湃。

### 其他文章

[2024 年上半年，一次通过软考高级架构师考试的备考秘诀](https://mp.weixin.qq.com/s/9aUXHJ7dXgrHuT19jRhCnw)
