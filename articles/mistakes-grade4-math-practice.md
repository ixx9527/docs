# 举一反三

与 [第 15 题](./mistakes-grade4-math-first.md#第 -15-题) 同一类本事：**先数"一共能错几次"，再拿这个总数去逼每一道题**。

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

## 练习 B　四人都得 90 分（提升难度）

> A、B、C、D 四名同学参加了一次测验，试题共 12 道，都是判断题，每道题 10 分，满分为 120 分。他们的答卷如下表。考试成绩公布后，四人都得 90 分。请你推算出各题的正确答案。

| 题号 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | <span class="tf tf--no">✗</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> |
| B | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> |
| C | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> |
| D | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--no">✗</span> | <span class="tf tf--no">✗</span> |

::: details 提示

每题 10 分，得 90 分 → 对 9 道、错 3 道。任意两个人合起来 → 一共错 3 + 3 = 6 道。

数一数 A 和 B 答案不一样的有几道？再数数其他配对。
:::

::: details 正解

**第一步：90 分换成"错几道"。**

```text
每题 10 分，得 90 分 → 对 9 道、错 3 道
任意两个人合起来 → 一共错 3 + 3 = 6 道
```

**第二步：比 A 和 B 的答卷。**

```text
不一样：第 1、2、3、4、5、6 题 → 6 道
一样　：第 7、8、9、10、11、12 题 → 6 道
```

**第三步：名额刚好用完。**

答案不一样的题，一个写✓一个写✗，所以每道必然恰好有一个人错。
6 道不一样的题 → 已经摊掉 6 个人次的错。可 A、B 两人合起来只能错 6 道，名额到此用完。

→ 那 6 道"答案一样"的题，两个人都没错，他们写什么就是什么：

```text
第 7 题 ✓　第 8 题 ✓　第 9 题 ✓　第 10 题 ✓　第 11 题 ✓　第 12 题 ✓
```

**第四步：换一对人，再来。**

A 和 C 不一样：第 1、2、3、7、8、9 题 → 6 道；一样的第 4、5、6、10、11、12 题两人都对：

```text
第 4 题 ✓　第 5 题 ✓　第 6 题 ✓　第 10 题 ✓（与上面撞上）　第 11 题 ✓　第 12 题 ✓
```

A 和 D 不一样：第 1、2、3、10、11、12 题 → 6 道；一样的第 4、5、6、7、8、9 题两人都对：

```text
第 4 题 ✓（又一次对上）　第 5 题 ✓　第 6 题 ✓　第 7 题 ✓（与第一步撞上）　第 8 题 ✓　第 9 题 ✓
```

**第五步：12 道全出来了。**

| 题号 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 正确答案 | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> | <span class="tf tf--yes">✓</span> |

**验算**（回代四人答卷，每人都要恰好错 3 道）

```text
A 错在：第 1、2、3 题 → 3 道 ✓
B 错在：第 4、5、6 题 → 3 道 ✓
C 错在：第 7、8、9 题 → 3 道 ✓
D 错在：第 10、11、12 题 → 3 道 ✓
```

**一句话提醒**：四人版比三人题多了一重验证——每多换一对人，就多一次"撞上"的机会，答案就越稳。
:::
