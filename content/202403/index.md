---
title: "2024年3月"
date: 2024-04-11T20:31:16+08:00
lastmod: 2024-04-11T20:31:16+08:00
draft: false
tags:
  [
    "笑场",
    "李诞",
    "Tokio",
    "alias",
    "nuxt",
    "English Buddy",
    "PR",
    "follow",
    "happiness",
    "ARTS",
    "FuZhou",
    "左耳听风",
    "Japan Visa",
    "delete Chinese input method",
    "first PR",
    "cancel follow",
    "ARTS Weekly challenge",
    "ARTS1",
  ]
---

## 本月阅读

《笑场》  
2024-03-05 21:26:14 看完，2 星。  
原本以为是李诞关于工作内容的书籍，没想到是小说。刚开始看没继续看下去，今天中午从 Kindle 偶然翻出来，看到澈丹的故事，被感动到了，然后接着读完了。内容还挺有意思的。在听《文化有限》播客的时候有一期是介绍李诞的这四本书。其中有一句讲到，李诞的这几本书进步之巨大令人惊奇，也好奇后面几本书的内容是什么样的。

## Tokio Tutorial

2024-03-06 22:27:01
发现 Tokio 的 Tutorial 真不错。通过指导你搭建一个 mini-redis 来学习 tokio。

## alias do

2024-03-09 12:57:14
今天尝试 nuxt 的时候，在 zshrc 配置文件中设置了一个别名，用来快速启动应用。

```bash
alias do = "nr run dev"
```

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/uOF8va.jpg)
在激活 zshrc 的时候，遇到两个错误
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/yxHxUF.jpg)
刚开始以为是环境问题，重新安装了几次都无法解决。于是尝试查看这两处的源码，也没有发现什么问题。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/55okLr.jpg)
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/tB0l7Z.jpg)
然后开始 google，发现一个 [issue](https://github.com/nvm-sh/nvm/issues/987)
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/DyClMe.jpg)
原来是把保留字设置为别名导致 bash 命令行函数执行的时候误解了。

### Bash 中的一些保留字

if，then，else，elif，fi：用于条件判断。
case，esac：用于模式匹配和条件选择。
for，in，do，done：用于 for 循环。
while，until：用于 while 和 until 循环。
select：用于生成简单的菜单。
{，}：代码块的开始和结束。
function：函数定义的开始。
!：逻辑 NOT 操作符。
[[，]]：用于高级条件表达式。
time：用于计时命令执行时间。

## Migrate Vue/Cli to vite

2024-03-12
Today, Migrate the project of work from vue/cli to vite. The vite run the project only need a little time. the vue/cli run the project need two minutes. Vite save many time for my work. So nice!
Migrate process meet many trouble. Some syntax is different in vite project. Finally, I change 55 files in my project in process.
Reference: [How to Migrate from Vue CLI to Vite](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/)

## I created an English Buddy GPT

To improve my English level, I created an English buddy GPT help me correct my mistakes. If you want to try this GPT, you can click this [link](https://chat.openai.com/g/g-KNJ5Pg2xP-english-buddy).

## I deleteed the Chinese input method from my Mac

I deleted the Chinese input method from my Mac. I want to use English and try my best. If I only read some English documents, maybe I can't archive native English proficiency. Therefore I decided to switch the English input method from my Mac, I will write blog in English. Write blog is few in number chance for me in English output. Of course, I don't delete Chinese input method in my iPhone and iPad. Some time, I need search some word base Chinese.

## Cancel follow someone, get more info

2024-03-19 08:56:32t
My RSS and Twitter are following too many people. Following too many people can lead to an overload of information. I don't have enough time to deal with all these information. If I'm looking to obtain high-quality information from these individuals. Maybe I should consider keeping only these who share valuable information.

## What is happiness?

Tw93 send a [twitter](https://twitter.com/HiTw93/status/1769286435314757696): 用一句话来描述 你觉得什么是幸福？
The hotest comment is good: 幸福就是每天早上醒来都很期待这一天. And another comment is fun: 要拉屎，只有一个坑，你蹲在那儿，你就比我幸福。 So funny people.

## ARTS Weekly challenge

A activate Chen Hao call. Every Week complete a ARTS Task:

- **A**: Algorithm Problem
- **R**: Review a English Article
- **T**: Technique/Tips: Recommend a Technique or Tips.
- **S**: Share: Share an insight.

Some people who are doing the ARTS Weekly challenge:
https://www.codingtour.com
https://ppambler.github.io/arts/
https://www.codingtour.com

## 2024 FuZhou Strawberry Music Festival

Today I received the volunteer application message for the FuZhou Strawberry Music Festival, Which has left me very excited and unable to sleep. However, I'm more focused on the work project.

## 左耳听风-传奇程序员练级攻略

2024-03-22 01:51:13
Star: 4.6/5
It is an excellent book. It serves as an excellent guide for junior programmers. However, it lacks some content on varied growth paths for programmers compared to Geek Time. The most crucial aspect is personal growth. If Chen Hao were still with us, I can hardly imagine the heights his company would have reached. I aspire to join a company like his, MegaEase.

## Japan Visa

2024-04-03 00:39:16
Checked the Visa of Japan have sent! So nice!
