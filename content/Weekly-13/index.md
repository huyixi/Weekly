---
title: 停止在博客上碎碎念
date: 2023-07-16T03:36:00+08:00
lastmod: 2023-07-16T03:36:00+08:00
draft: false
---

## 动态

[刘未鹏](https://mindhacks.cn)

[刘未鹏的豆瓣书单](https://book.douban.com/people/pongba/)

只是计算有多少天读书，受益并没有那么大，因为看书只是记忆只是记住书中的一些观点，只有靠推理才能更加深入地理解一个事物，看到别人看不到的地方，这部分推理的过程就是你的思维时间。

在你刚开始写博客的时候，你可能会因为要写博客而去思考和总结，到了后来因为你习惯了思考和总结，因为你意识到书写是更好的思考，你就需要使你的想法变成一个文字。

停止在自己博客上碎碎念，阅读博客的人希望得到信息而非噪音，如果实在忍不住想要学学年的话，不妨换一下位置这么告诉自己。如果你看到别人博客上有这么一些话，你有兴趣看吗？

针对我自己的博客，其实我最开始是想要模仿阮一峰的技术博客，刚开始的时候博客的内容都是摘抄一些新闻信息，可能看上去感觉很时髦很潮流，不过这些信息的实操性比较少，他的半衰期也是比较短的。后来提了陈皓的一些话，还是谁的我给忘记了，就逐渐不再追求一些很时髦很潮流的东西，记录自己用过的比较好用的一些工具等等进行分享。

接下来内容应该主要还是要偏向于思考总结的内容，因为我发现像阮一峰这样的博客，我其实并没有兴趣去阅读他网站上的所有内容，但是如果像一些技术性信息量比较高的博客，比如说陈皓的博客，我就会有动力将他网站上所有的内容扒取下来，进行全部的阅读，所以接下来就尽量发一些在周刊上面发一些自己用过的比较有用的工具，尽量多发一些自己思考的东西。

学习和思考的过程中，要经常问自己几个问题，你的问题到底是什么？到目前为止你有哪些收获？如果你将你这个东西要讲给别人听，你会怎么讲？

养成反驳自己想法的习惯。再有一个想法的时候，习惯性的去反驳他，问自己难道一定成立吗？有没有反例或者例外？

在学习一个小领域的时候，时时刻刻把最终能够写出一篇漂亮的博文放在大脑中提醒自己。这有助于在阅读和实践的时候，有意无意地整理知识点的结构本质和重点。经过整理之后的知识点会更加深刻，更加不容易忘记，更加容易被提取。

### 2023.07.16

今天重新整理了一下我的 RSS 订阅。原本我使用了三个 Feedly 账号来组织我的订阅，但发现这样有些麻烦，于是我想把它们整合到一起，以更好地进行管理。

在编辑这份 opml 文件的时候，我发现 Hacker News 里面推荐了一些技术博客，于是我把它加入到了文件中， 但是我之后发现这封文件中的订阅播客实在是太多了，我想删除它。我发现 Reeder 的没有办法批量删除 Feed。

如果我删除这个账号，之前的订阅仍然存在，也无法进行删除。

于是我想到了在安卓上使用自动点击器的软件，在 Mac 上是否有类似的软件。我找到了系统上自带的一个名为"Automator"的软件，并使用 Cliclick 自动执行这些重复的步骤。

![Automator](https://raw.githubusercontent.com/huyixi/Pics/main/Automator.png)

我的代码：

```AppleScript
on run {input, parameters}
  set dx1 to 30
  set dy1 to 80
  set dy2 to 20
  set counter to 0
  repeat 3 times
    repeat 5 times
      set x to 80
      set y to 280 + dy2 * counter
      do shell script "/opt/homebrew/bin/cliclick m:" & x & "," & y & " w:10 c:. w:10 kd:ctrl w:10 c:. w:10 ku:ctrl w:10"
      set x to x + dx1
      set y to y + dy1
      do shell script "/opt/homebrew/bin/cliclick m:" & x & "," & y & " c:. w:300"
      do shell script "/opt/homebrew/bin/cliclick m:590,430 c:."
      do shell script "/opt/homebrew/bin/cliclick k:return"
      set counter to counter + 1
    end repeat
    set counter to 0
  end repeat
  return input
end run
```

执行效果：

![](https://raw.githubusercontent.com/huyixi/Pics/main/CleanShot%202023-07-16%20at%2015.50.33.gif)

[Cliclick](https://github.com/BlueM/cliclick) - macOS CLI tool for emulating mouse and keyboard events

| **命令**     | **格式**    | **描述**                                                                                           |
| ------------ | ----------- | -------------------------------------------------------------------------------------------------- |
| 鼠标移动     | **m:x,y**   | 将鼠标移动到屏幕的 **(x, y)** 位置                                                                 |
| 鼠标左键点击 | **c:x,y**   | 在屏幕的 **(x, y)** 位置进行左键点击                                                               |
| 鼠标右键点击 | **rc:x,y**  | 在屏幕的 **(x, y)** 位置进行右键点击                                                               |
| 鼠标双击     | **dc:x,y**  | 在屏幕的 **(x, y)** 位置进行双击                                                                   |
| 开始拖动     | **dd:x,y**  | 在屏幕的 **(x, y)** 位置开始拖动                                                                   |
| 继续拖动     | **dm:x,y**  | 将鼠标拖动到屏幕的 **(x, y)** 位置                                                                 |
| 结束拖动     | **du:x,y**  | 在屏幕的 **(x, y)** 位置结束拖动                                                                   |
| 按下修饰键   | **kd:keys** | 按下指定的修饰键，修饰键包括 **ctrl**、**alt**、**cmd**、**fn**、**shift**                         |
| 弹起修饰键   | **ku:keys** | 弹起指定的修饰键，修饰键包括 **ctrl**、**alt**、**cmd**、**fn**、**shift**                         |
| 模拟按键     | **kp:key**  | 模拟按下指定的键，如：**arrow-down**、**arrow-left**、**arrow-right**、**arrow-up**、**return** 等 |
| 键盘输入     | **t:text**  | 输入指定的文本                                                                                     |
| 等待         | **w:ms**    | 等待指定的毫秒数                                                                                   |
| 打印颜色     | **cp:str**  | 打印指定屏幕位置的颜色值                                                                           |

[Automator User Guide](https://support.apple.com/guide/automator/welcome/2.10/mac)

## 阅读

### 《论持久战》 毛泽东

让 GPT 输出他的思考过程的 Prompt

step-by-step approach in your response, cite sources and give reasoning before sharing final answer

## 说说

在一些问题的时候，要时时刻刻不要忘记你要求的是什么东西，问题是什么东西。另外你应该将它写在纸上，以便给大脑留出足够的内存来思考其他的内容。

有很多时候我们可以在超市里面会选择拿一卷卫生纸的抉择半天，却在面对生活中的重大抉择的时候就轻易随波。

有些问题你想通了之后，其实觉得也很简单，但是问题的困难程度并不取决于想通之后还觉得有多难，而在于从你觉得它难到你觉得它简单需要耗费多少的思维体力，你耗费的时间越长，说明还有更多的人最终还是没有想明白。

如何克服休息羞耻，不知道你们是否有过这样的感觉，好像失去了给自己好好放个假的能力，太多的攀比，导致我们无时无刻不在追求成功，我们都在这样想身子就好了，下份工作找到就好了，贷款还完就好了，殊不知这是一条没有止境的路。这个阶段过去在休息，但是这个阶段却永远不会结束，给自己放假是一种能力，如果没有这个能力，即使在休息的时候也会被无穷的焦虑填满。

焦虑不安的休息没有任何意义，清晰的划分工作，还有休息的时间很重要，几号到几号上班，几号到几号结束工作，工作的时间专注于工作，工作的时间结束就要果断休息，切换到休息模式，这也是保证效率的一种方式。因为长时间的工作必然导致低效，这样才会有一种休息羞耻。

针对工作还有学习也要制定相关的计划。如果没有完成今日的目标，要跟自己说没关系，也不是每一天都要过得有意义，人要过人的一生，而不是不知匹配的 AI 的一生。