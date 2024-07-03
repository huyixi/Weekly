+++
title = '重新上线'
date = 2024-06-24T14:40:16+08:00
draft = false
+++

## 这周做了啥

### 重新上线周刊

#### 周刊的评论系统

使用 giscus 作为评论系统。原本打算使用一个可以进行匿名评论的系统，后来想想，给评论提高一些门槛也是一个很好的选择。所以最后采用了 gitcus，也不需要我另外再搭建服务器，直接放置在 Github 仓库中。

#### 周刊的搜索

这里采用了 pagefind。刚好在搭建的时候发现一个推友推荐这个库，于是去尝试了一下，发现对于静态网站的搜索，这个库效果相当不错。于是最后决定使用这个库进行评论系统的搭建。
我的博客中并没有采用评论系统，因为博客的主题并没有很多，通过浏览基本可以获取到所有的信息。但是对于周刊，这里会收集一些用过的工具，所以搜索系统还是很有必要的一个工具。

### Biliblii 取关

发现 Bilibili 的关注数量已经有 800 多个，但是我并没有时间去看这么多的 UP 主的视频。所以这里决定取关一些 UP 主。但是一个一个取关实在是太麻烦了，于是我写了一个脚本来进行取关。

```javascript
$(".be-dropdown-item:contains('取消关注')").click();
location.replace(location.href);
```

通过查页面所有的取消关注按钮，然后点击这个按钮，最后刷新页面。

不过 Bilibili 一页只能展示 10 个 UP 主，所以这里需要多次执行这个脚本。这里如果有人能实现一个
插件来实现这功能会更好。但是也有一个问题，就是有一些
UP 主是我不想取关的，这里就需要手动处理了。

尽量减少关注的数量。留下来的 Up 主应该符合，发出的视频我观看的几率会超过 60%。没有很高的观看几率其实留下来并没有什么用。很多视频其实都是通过搜索发现的，而不是动态中发现的。

还保留的一些 UP 主：

- 影视飓风：应该是 B 站最强的 Up 主了吧。
- 亿点点不一样：影视飓风新推出的栏目，用超级放大镜或者超级慢放来看一东西。
- 林捂捂：科技类博主，跟其他的科技博主的单纯体验不同，会挖掘一些新的视角来介绍产品。而且笑点很多，基本上每期都追。
- 刘谦：无需多言，视频也相当有趣。
- 王者荣耀皓辰：看见张飞直接上。视频很短，拿来消遣。
- 陈婧霏：现在很喜欢的一个歌手。
- 许嵩：也是喜欢很久了。
- 稚晖君：科技类博主，一个人就是一个团队。现在应该搞创业，视频基本不更新了。
- oooooohmygosh：设计类博主。
- 盗月社：看着下饭！

### Bilibili 国际版

发现 Bilibili 国际版要比国内简洁太多了。两个版本的对比：
![IMG_5551](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/IMG_5551.PNG)
![Screenshot_2024-06-24-11-21-58-230_tv.danmaku.bili](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/Screenshot_2024-06-24-11-21-58-230_tv.danmaku.bili.jpg)

## 这周读了啥

### 搭讪的意义

https://stephenleng.com/cn/the-significance-of-approaching-someone/

自信是搭讪的第一步。

### MIT 的黑客恶作剧画廊

http://hacks.mit.edu/
国家优势依靠军事优势和经济优势 ，军事优势和经济优势又依靠人才优势，人才优势靠制度优势

## 这周发现了啥

**一个相当漂亮的网页动画效果库**：https://ui.aceternity.com

### Chrome 原生长截屏

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/HTjpjm.png)

使用 Chrome 自带长截屏功能，还可以避免 nav 栏 fixed。可以把 Chrome 上的长截屏插件都删掉了。

1. 打开开发者工具

```bash
command + option + i
```

2. 调用 Chrome 命令行窗口

```bash
command + shift +p
```

3. 搜索 `screenshot` 选择你想要的截屏方式

### huang in Caltech Speech: But most important is you, the Graduaters

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/4Lkl4M.jpg)

NVIDIA 的黄仁勋在 Caltech 毕业典礼上的演讲：

> 但是最重要的是你们，毕业生们。

### 一张图片转换成多张 favicon

https://favicon.io/favicon-converter/
