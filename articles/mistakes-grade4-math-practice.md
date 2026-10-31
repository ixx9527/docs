# 举一反三

与 [第 15 题](mistakes-grade4-math-first.md#第 -15-题) 同一类本事：**先数"一共能错几次"，再拿这个总数去逼每一道题**。

## 练习 A　三人都得 60 分

> A、B、C 三名同学参加了一次小测验，试题共 8 道，都是判断题，每道题 10 分，满分为 80 分。他们的答卷如下表。考试成绩公布后，三人都得 60 分。请你推算出各题的正确答案。

| 题号 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | <span class="tf tf--no">✗</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> |
| B | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> |
| C | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> |

::: details 提示

每题 10 分，得 60 分 → 对 6 道、错 2 道。任意两个人合起来 → 一共错 2 + 2 = 4 道。

数一数 A 和 B 答案不一样的有几道？
:::

::: details 正解

**第一步：60 分换成"错几道"。**

```text
每题 10 分，得 60 分 → 对 6 道、错 2 道
任意两个人合起来 → 一共错 2 + 2 = 4 道
```

**第二步：比 A 和 B 的答卷。**

```text
不一样：第 1、2、3、4 题 → 4 道
一样　：第 5、6、7、8 题 → 4 道
```

**第三步：名额刚好用完。**

答案不一样的题，一个写✓一个写✗，所以每道必然恰好有一个人错。
4 道不一样的题 → 已经摊掉 4 个人次的错。可 A、B 两人合起来只能错 4 道，名额到此用完。

→ 那 4 道"答案一样"的题，两个人都没错，他们写什么就是什么：

```text
第 5 题 ✓　第 6 题 ✓　第 7 题 ✓　第 8 题 ✓
```

**第四步：换一对人，再来两次。**

A 和 C 不一样：第 1、2、5、6 题 → 4 道；一样的第 3、4、7、8 题两人都对：

```text
第 3 题 ✓　第 4 题 ✓　第 7 题 ✓（与上面撞上，对得上）　第 8 题 ✓
```

B 和 C 不一样：第 3、4、5、6 题 → 4 道；一样的第 1、2、7、8 题两人都对：

```text
第 1 题 ✓　第 2 题 ✓　第 7 题 ✓（又一次对上）　第 8 题 ✓
```

**第五步：8 道全出来了。**

| 题号 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 正确答案 | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> |

**验算**（回代三人答卷，每人都要恰好错 2 道）

```text
A 错在：第 1、2 题 → 2 道 ✓
B 错在：第 3、4 题 → 2 道 ✓
C 错在：第 5、6 题 → 2 道 ✓
```
:::

## 练习 B　两人都得 80 分

> A、B 两名同学参加了一次测验，试题共 10 道，都是判断题，每道题 10 分，满分为 100 分。他们的答卷如下表。考试成绩公布后，两人都得 80 分。请你推算出各题的正确答案。

| 题号 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | <span class="tf tf--no">✗</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> |
| B | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> |

::: details 提示

每题 10 分，得 80 分 → 对 8 道、错 2 道。两人合起来 → 一共错 2 + 2 = 4 道。

数一数 A 和 B 答案不一样的有几道？
:::

::: details 正解

**第一步：80 分换成"错几道"。**

```text
每题 10 分，得 80 分 → 对 8 道、错 2 道
两人合起来 → 一共错 2 + 2 = 4 道
```

**第二步：比 A 和 B 的答卷。**

```text
不一样：第 1、2、3、4 题 → 4 道
一样　：第 5、6、7、8、9、10 题 → 6 道
```

**第三步：名额刚好用完。**

答案不一样的题，一个写✓一个写✗，所以每道必然恰好有一个人错。
4 道不一样的题 → 已经摊掉 4 个人次的错。可 A、B 两人合起来只能错 4 道，名额到此用完。

→ 那 6 道"答案一样"的题，两个人都没错，他们写什么就是什么：

```text
第 5 题 ✓　第 6 题 ✓　第 7 题 ✓　第 8 题 ✓　第 9 题 ✓　第 10 题 ✓
```

**第四步：那 4 道不一样的题怎么定？**

这道题只有两人，没法像三人题那样"换一对人再来"。但注意：A 在第 1、2 题写✗，B 在第 1、2 题写✓；A 在第 3、4 题写✓，B 在第 3、4 题写✗。

两人各错 2 道，而不一样的正好 4 道 → **A 错的 2 道一定在第 1、2、3、4 题里，B 错的 2 道也一定在第 1、2、3、4 题里**。

但只有两人没法进一步区分谁对谁错——**这道题需要额外条件才能唯一确定**。所以两人版只能推出"后 6 道全✓"，前 4 道有两种可能（A 对或 B 对）。

**正确答案（两种可能之一）：**

| 题号 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 正确答案 | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> |

（或前 4 题为✗✗✗✗，两种都符合"两人都得 80 分"）

**验算**

```text
若正确答案全✓：
A 错在：第 1、2 题 → 2 道 ✓
B 错在：第 3、4 题 → 2 道 ✓

若正确答案前 4 道为✗：
A 错在：第 3、4 题 → 2 道 ✓
B 错在：第 1、2 题 → 2 道 ✓
```

**一句话提醒**：两人版只能推出"答案相同的题全对"，"答案不同的题"没法唯一确定——这就是为什么原题要设计成三人。
:::
