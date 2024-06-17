+++
title = '二八定律'
date = 2024-06-17T11:14:16+08:00
draft = false
+++

## 利用 28 定律学习，并让 AI 帮我找出最重要的 20%

学习新技术的时候，由于对新技术的不了解，初学者看文档只能从头到尾看过去，很难知道哪一些部分是比较重要的。而这些教程又往往过于冗长，很难在短时间内掌握。这会严重打击学习的积极性。利用 28 定律帮初学者找出新技术中最重要的 20% 可以让学习的过程更加轻松。
以下是一个 Prompt

```markdown
根据二八定律（帕累托法则），80%的效果通常由20%的原因引起。我有一份学习材料的目录，希望你能帮助我找出其中最重要的20%内容，这些内容是考试或工作中的核心，能产生80%的影响。请你分析并提取这些关键知识点，并详细解释为什么这些部分重要，以及为什么其他部分相对不重要。
```

以 TypeScript 的学习为例，与 Data Analyst 进行对话。这里的 TypeScript 教程目录采用的是阮一峰网道上的 [TypeScript 教程](https://wangdoc.com/typescript/)
[ChatGPT对话链接](https://chatgpt.com/share/c2b8b6bc-46a5-4f23-bd58-9f3a34aca5b8)
![28 Prompt](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/AhVMSI.jpg)
如果提取出来的要学习的目录还是过多，可以让 AI 进一步进行提取。

## 我在看什么

### WWDC 2024

2024-06-11 02:44:53
iPad 计算器还是来了。计算器上的这些功能还蛮有意思的，学生学习更加方便了。
对于这些笔记的加强，iPad 反而更像 iPad 了，而不是
Apple 所说的你的另一台 Mac。
哈哈哈，白头帅哥 Craig 还会跑酷。
MacOS 最终还是加入了屏幕吸附的功能。可以省下 Raycast 中的快捷键了。
我们是否在从应用时代，向另一个时代过渡。
新的机器交互方式可能只需要语言，而不需要触摸，这可能能让更多的人享受科技。
减少通知内容是一个非常重要的避免打扰的功能。
并没有带来十分令人激动的更新。
Thank you for join us. Let's start WWDC

### 庆余年
2024-06-12 01:44:52
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/fzkSO6.jpg)

### 一个夜晚：陈岍的口琴与袁峥的吉他 solo
李志的 2019 跨年演唱会「洗心革面」，一个夜晚，陈岍的口琴与袁峥的吉他 solo。
![](/i/123.gif)

### 一只小猫
![](/i/SaveTwitter.Net_1801234950609584128496p-ezgif.com-video-to-gif-converter.gif)
在 Twitter 上刷到了一只藏在汽车发动机里的小猫，眼睛好有神。

### 北野武 - 首

周五晚在家看了最近很火的「北野武」监制的电影《首》。
画面异常血腥，开头就给了我一个震惊的无头尸首在河流上，一只螃蟹从里面钻出来的血型场面。很久都没有看到这么血腥的电影了。
感觉其中的一些人物好像并没有很厉害的样子。比如原本的信长，还有
感觉老谋深算的就是家康，以及主角。怪不得后面会有德川幕府。
乱世之中，人命如草芥。到处都是陷阱，到处都是敌人。

## 我发现了啥

### CSS Scan

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/Rmw7PJ.jpg)
不用打开开发者工具就能查看网页元素的 CSS 样式，并且还可以一键转换成 TailwindCSS 代码。就是价格有点贵了，单买一个要近 600，先 Mark 住。

这个网站上还有几个相关的网页元素样式，都很漂亮。
Checkbox：
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/43tU94.png)
按钮：
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/oZ2p4Y.png)
盒子阴影：
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/a8SVjX.png)

### Rough Notation
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/vwGBVf.jpg)
一个只有 3.8k 的手写页面注释库，还有动画效果。

### Video to Gif

[ezgif](https://ezgif.com)
一个视频转 Gif 在线网站，有多个可调整的选项。

## 我在读什么

### 抖音论文：看视频的偏好与时间的关系
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/fkesln.png)
抖音发布了一篇论文： 在一天中不同的时间下，人们看视频的偏好也会有所不同。
摘要的第一句话： 用户的偏好在一天中呈现动态模式，例如，早上 8 点，用户可能更喜欢阅读新闻，而晚上 8 点，他们可能更喜欢看电影。
论文地址：https://arxiv.org/abs/2404.19357

### MacOS 上的文件扩展

#### 列出 Mac 上所有程序的 Bundle ID

```bash
lsappinfo list | rg --multiline '("[^"]*?") ASN:.*\n.*bundleID=("[^"]*?")' --replace '$1 $2' --only-matching
```

#### 查看某个应用程序支持的扩展

以 Safari 为例：
```bash
cd /Applications/Safari.app/Contents
grep -A3 CFBundleTypeExtensions Info.plist  | grep string
```

### 微信设计团队：做可持续的 UI 设计

[链接](https://mp.weixin.qq.com/s/L2WdQztc9243MjQIo6IcgA)
为什么要做可持续的 UI 设计：降低能源的消耗，达到环境可持续的目的。
深色模式比浅色模式能耗更低；
发现微信设计团队这个公众号里面的文章质量都很高，值得关注。
