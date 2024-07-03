+++
title = '去厦门玩'
date = 2024-07-02T20:42:59+08:00
draft = false
+++

本期：2024-06-24 至 2024-06-30

封面图是和妹妹去厦门星巢沃克秀一起看「莉莉周她说」的演出时候拍下来的。

## 这周玩了啥

周五像往常一样回家，半夜刷小红书的时候发现这周六莉莉周她说居然要在厦门演出。和妹妹商量了一下，定了晚上演出的票。
![IMG_5766](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/IMG_5766.HEIC)
演出持续了大概一个半小时。大概有一个多月没看演出了，耳朵居然有点受不了，反而是妹妹觉得还可以，看来她可能比我更爱蹦。下次看演出的时候还是戴个耳塞比较好。
第二天跟同学逛了华侨大学，刚好赶上华大的毕业典礼。想想去年我也是个毕业生，真是羡慕啊。然后骑了附近一个步道，骑到园博苑门口发现太热，找了个地方喝茶休息。
![IMG_5833](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/IMG_5833.HEIC)
在店里发现了一只可爱的小狗
![IMG_5855](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/IMG_5855.HEIC)
下午在厦大的白城沙滩一直坐到晚上，看着夕阳慢慢落下。

## 这周发现了啥

### 阿里云网页终端切换到 normal 模式

网页中打开终端使用 vim ，进入 esc 模式和退出网页冲突
阿里云网页终端控制台，使用 vim 编辑文件，点击 esc 无法进入 vim 的 normal 模式，可以使用 Control+C 代替 Esc 将 Vim 切换到 normal 模式

### 修改 Mac 上文件的默认打开应用

平时一般直接通过右键文件，点击 Open with 修改文件的默认打开方式。但是这种修改其实只能修改单个文件的默认打开应用。

第二个办法是通过右键 Get Info 同样修改 Open with，但是增加点击 `Change All...` 按钮来修改所有的文件打开方式。

但是电脑可能需要备份迁移，这样的单个配置迁移起来十分繁琐。通过使用 duti 进行默认打开应用的设置。

Mac 上根据 Bundle Identifier 来找到应用的对应名称。所以要设置默认打开应用，需要知道应用的 Bundle Identifier。

Mac 上使用 UTI 来定义文件类型，可以通过 `mdls` 命令查看文件的 UTI 类型。但是使用 duti 设置的时候，可以只根据文件后缀名来设置。但是以下还是提供了查看文件 UTI 的方法。

完整 sh 脚本：

```bash
#!/bin/bash

# Bundle Identifiers
# For example:
# mdls -name kMDItemCFBundleIdentifier /System/Applications/Books.app
# Get all bundle identifiers in /Applications
# lsappinfo list | rg --multiline '("[^"]*?") ASN:.*\n.*bundleID=("[^"]*?")' --replace '$1 $2' --only-matching

# System-Declared Uniform Type Identifiers
# https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html#//apple_ref/doc/uid/TP40009259

# 检查 duti 是否安装
if ! command -v duti &> /dev/null; then
    echo "duti 未安装。请先安装 duti。"
    exit 1
fi

# 设置文件类型与应用程序的关联
fileAssociations=(
    # 图片文件
    "com.interversehq.qView jpg"
    "com.interversehq.qView jpeg"
    "com.interversehq.qView png"
    "com.interversehq.qView gif"
    "com.interversehq.qView tiff"
    "com.interversehq.qView bmp"
    "com.interversehq.qView heic"
    # 视频文件
    "com.colliderli.iina mov"
    "com.colliderli.iina mp4"
    "com.colliderli.iina avi"
    "com.colliderli.iina mkv"
    "com.colliderli.iina m4v"
    # 文本文件
    "com.microsoft.VSCode txt"
    "com.microsoft.VSCode xml"
    "com.microsoft.VSCode opml"
    "com.microsoft.VSCode json"
    "com.microsoft.VSCode html"
    "com.microsoft.VSCode css"
    "com.microsoft.VSCode js"
    "com.microsoft.VSCode ts"
    "com.microsoft.VSCode tsx"
    "com.microsoft.VSCode md"
    "com.microsoft.VSCode xls"
    "com.microsoft.VSCode xlsx"
    "com.microsoft.VSCode pub"
    # PDF 文件
    "com.apple.iBooksX pdf"

)

# 错误日志
errors=()

# 应用设置
for association in "${fileAssociations[@]}"; do
    app=$(echo "$association" | awk '{print $1}')
    ext=$(echo "$association" | awk '{print $2}')
    if ! duti -s "$app" "$ext" all; then
        errors+=("设置 $ext 类型的默认应用程序为 $app 失败。")
    fi
done

# 输出错误日志
if [ ${#errors[@]} -ne 0 ]; then
    echo "以下文件类型的默认应用程序设置失败："
    for error in "${errors[@]}"; do
        echo "$error"
    done
    exit 1
else
    echo "默认应用程序全部设置成功。"
fi
```

### Vue3 中的 ref 与 reactive

**适用范围**
ref 适用于简单的数据结构，如 Boolean, Number, String；reactive 适用于较为复杂的数据结构，如 Object, Array。

如果给 ref 赋值 Object 或 Array，数据更新往往无法触发响应式，除非指定对象或数组中的某个数据。

所以在使用的时候给大量变动的 Object 或 Array 使用 reactive，而简单的数据使用 ref 赋值。

**返回类型**
ref 返回的是一个对象，需要通过 value 来访问 ref 的值；而 reactive 返回的是一个 Proxy，可以直接访问变量。

### Twitter Vid

Link: https://twittervid.com

Twitter Video Downloader

![8b41s0](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/8b41s0.png)

## 这周读了啥

### 被讨厌的勇气

可能本书对话进行内容呈现的形式就是作者多次请教岸见一郎的原型。

本书的中所提出的观点基本上每一个都在刷新我的认知。

后续有时间的话会整理一下。

## 这周看了啥

### TED 拖延症

在 Youtube 上看了 TED 播放量最高的一个演讲，这是一个关于人的拖延症的演讲。演讲者相当有意思，整个演讲经常有令人意想不到的笑点。

![image-20240627200053036](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20240627200053036.png)

演讲中采用理智人、想要及时享乐的猴子，以及怪兽帮人了解在拖延的时候大脑具体发生了什么。理智人往往会尝试去做一些有意义的事情，而这时猴子就会出来尝试干扰理智人所做的行为。只有当截止日期到来前，怪兽才会出来吓走猴子，开始做应该做的事情。

但是的怪兽往往只出现在有截止日期的任务前，但其实最令人担心的往往并不是有截止日期的任务，而是一些没有截止日期的拖延。由于没有怪兽的出现，我们的大脑更倾向于无限延长拖延，而这无限延长的拖延导致我们情绪不断的焦虑。

演讲者最后并没有给出一个比较好的解决方案，而是给了我们一个人生的日历，让我们珍惜时间。

### 虚实之间：高考经济学

用数据解读高考的投资回报比，得出的结论是在教育上的投资往往大于其回报。

对于一个普通家庭，从学前班到大学，教育平均投入 20 多万元。最低的家庭也需要投资大概 18 万元。所以教育其实相对一个家庭来说是一个刚性的支出。

对于 211 院校，大概有 3% 的同学可以考入；而对于普通的本科院校，录取的几率则大大增加到 1/3。

普通本科院校的成本回收大概在 8 年左右，而 211 的成本回收大概在 6 年左右。而且其实普通本科院校和 211、985 院校的收入水平不会相差特别大。当然 211、985 院校在多年以后的上限也会更高。

最令人感到震惊的不只是教育上的投资回报比，而是在一些看起来冷门专业的投资回报比，比如艺术类专业。艺术类专业在学习的时候要比普通专业的平均投入高 10w，但是毕业五年后艺术类专业的同学就业满意度往往较高，而且获得一个很不错的收入水平。

这就涉及到播客中所说的一些反常识的结论，往往我们看到的并不是真实的。播客最后还推荐了一本美国赛思·斯蒂芬斯-达维多维茨的《别相信直觉》

## 这周买了啥

HHKB 键盘
