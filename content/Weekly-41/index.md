+++
title = 'Weekly 41'
date = 2024-06-17T09:36:39+08:00
draft = false
+++

本周：2024-05-26-2024-06-01

## 赵纯想

胃之书 App 开发者，还是一个小说家，有多部已出版书籍，还是一个设计师。很像「黑客与画家」+ 作家的结合体。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/JP7CmY.png)
个人网站：https://me.revome.cn

## 勇敢

勇敢并不意味着不害怕，而是意味着尽管害怕，你还是去做那些必须要做的事。
-- Hacker News 读者

## 关于飞机的指南

- [Air Travel Design Guide](https://airtraveldesign.guide)：关于飞机的指南

## Juntao 的博客

https://www.icodeit.com.au/

有一系列关于网站搭建的博客

## Mockup

- [SocialScreenshots](https://socialscreenshots.com/editor)：一个新的 Mockup 生成网站，可以使用 Safari 打开。

## Grid 出血布局

- [Full-Bleed Layout Using CSS Grid](https://www.joshwcomeau.com/css/full-bleed/)

解决方案：
```CSS
.wrapper {
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
}
.wrapper > * {
  grid-column: 2;
}
.full-bleed {
  width: 100%;
  grid-column: 1 / 4;
}
```
