# 给麻麻搭一条录入管线：Meta Muse、错题本与这个站点

> 录入错题和作文的人是夏末的妈妈，她只用 iPad，不碰 git，也不碰命令行。
> 这篇记录这套环境怎么搭起来的，并且把官方写明的能力和还没实测的部分开列。

约束只有一条，整套方案都从它倒推：录入这一端没有终端。要求她敲命令、手改配置文件的方案可以先排除，剩下的分法是——她说、她拍，其余环节交给工具和我。

Meta 在 2026 年 9 月发布了 Muse，一个会替人执行任务的个人智能体：开网页、填表单、收发邮件，关掉 App 还在后台跑。它落在那条约束的另一侧，所以这套环境押在它身上。

先把这篇的结论边界说清：**需要设计的是关口，不是那个智能体。而链路本身能不能跑通还没验证，要等第八节那三条实测。**

---

## 一、Muse 是什么，以及三条绕不过去的硬约束

Muse 是 Meta 的"个人智能体"，2026 年 9 月 8 日在 Connect 发布，驱动它的是 Muse Spark 系列模型。它和聊天机器人的区别在于它会真的去执行：开网页、填表单、收发邮件、下单，你关掉 App 它还在后台跑。

三条硬约束决定了它在我这个场景里的形状：

**一，它不跑在麻麻的 iPad 上。** 官方说法是每个用户配一台专属云虚拟机（Muse Secure VM），Meta 的 AI Research 博客把它描述成"一台隔离的 Linux 机器，有浏览器，有足够的存储和算力做真实工作——比如编译智能体自己写的代码、开发自定义 skill、跑并发子代理和定时任务"。智能体守护进程（内部代号 Hatch）跑在 `systemd-nspawn` 容器里，有自己的完整 Debian rootfs，系统调用被过滤，没有 `CAP_NET_ADMIN`、`CAP_SYS_PTRACE`。所有对外流量还要过一个独立的 Sentinel 审批代理。

**二，它的浏览器不是 Chrome 的完整能力。** 驱动浏览器的子代理看到的是 accessibility tree 快照，不能在页面上下文里执行 JavaScript。官方给的类比是"像一个用读屏器的谨慎人那样使用网站"。这条直接废掉了半个现代网页，第四节细说。

**三，它还处在早期。** 截至 2026 年 10 月只对美国和加拿大开放，要求年满 18 岁。免费额度有多大 Meta 没公布；付费档是公开报道里的 Power 每月 20 美元（每周 5 亿 token）和 Maximum 每月 100 美元（每周 30 亿 token）。端到端加密的 Confidential VM、Shop Pay、1Password 支持都还挂着"coming soon"。

另外要说一句：它能看到密码这件事官方是否认的，支付卡号也看不到。但凭证终究是落在别人家的机器上，第七节按这个前提设计。

---

## 二、整条链路

```text
麻麻（iPad） → Muse（Meta 云端 VM） → GitHub 新分支 + PR → 我 review → Actions 构建部署 → 站点
```

画成图是这样，五个环节各自的责任边界很清楚：

<svg width="900" height="132" viewBox="0 0 900 132" style="display:block;margin:14px auto;max-width:100%;height:auto" font-family="PingFang SC, Microsoft YaHei, sans-serif" font-size="13" fill="currentColor" stroke="currentColor">
  <defs>
    <marker id="pl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0,1 L 9,5 L 0,9 z" fill="currentColor" stroke="none"/>
    </marker>
  </defs>
  <g font-size="12" opacity="0.65" text-anchor="middle" stroke="none">
    <text x="87" y="42">麻麻</text>
    <text x="267" y="42">Meta 云端</text>
    <text x="447" y="42">GitHub</text>
    <text x="627" y="42">我</text>
    <text x="807" y="42">自动</text>
  </g>
  <g fill="none" stroke-width="1.2">
    <rect x="12" y="54" width="150" height="66" rx="9"/>
    <rect x="192" y="54" width="150" height="66" rx="9"/>
    <rect x="372" y="54" width="150" height="66" rx="9"/>
    <rect x="552" y="54" width="150" height="66" rx="9"/>
    <rect x="732" y="54" width="150" height="66" rx="9"/>
  </g>
  <g font-size="14" text-anchor="middle" stroke="none">
    <text x="87" y="80">拍照</text>
    <text x="267" y="80">读规范转文字</text>
    <text x="447" y="80">新分支 + PR</text>
    <text x="627" y="80">看三件事</text>
    <text x="807" y="80">点 merge</text>
  </g>
  <g font-size="12" opacity="0.78" text-anchor="middle" stroke="none">
    <text x="87" y="104">原题图不进仓库</text>
    <text x="267" y="104">以 QWEN.md 为准</text>
    <text x="447" y="104">main 推不进去</text>
    <text x="627" y="104">手机上的事</text>
    <text x="807" y="104">构建红则不上线</text>
  </g>
  <g stroke-width="1.2" fill="none">
    <line x1="162" y1="87" x2="188" y2="87" marker-end="url(#pl-arrow)"/>
    <line x1="342" y1="87" x2="368" y2="87" marker-end="url(#pl-arrow)"/>
    <line x1="522" y1="87" x2="548" y2="87" marker-end="url(#pl-arrow)"/>
    <line x1="702" y1="87" x2="728" y2="87" marker-end="url(#pl-arrow)"/>
  </g>
</svg>

第一版我不是这么设计的。第一版让麻麻直提 `main`，因为网页编辑器只点一下，最省事。做完才想明白问题：**"我来 review"这个愿望，在直提 main 的方案里是靠自觉实现的，而自觉不是关口。** 所以上图第 3、4 格才是这篇文档真正的主题。

---

## 三、环境底座：一份 QWEN.md 当唯一规范

这套环境里最重要的配置动作，不是教麻麻说什么话，而是把规矩写进一个文件，让两边都读它。

仓库根目录有个 `QWEN.md`。它已经在 `srcExclude` 里，不会被编成 `/QWEN.html` 上站点；它同时被两个方向读取——我这边的本地 agent 读工作区里的那份，麻麻那边的 Muse 读 GitHub 上的 raw 地址：

```text
https://raw.githubusercontent.com/ixx9527/docs/main/QWEN.md
```

这一条通道比我预期的干净：那台 VM 在美国，读 `raw.githubusercontent.com` 完全不受国内网络影响。规范改一次，两边同时生效，不存在"我这边改到第三版、录入那一端还在用第一版"这种状态。

规范正文里这几条是踩过坑才写进去的，值得单独说明：

| 规矩 | 为什么必须写死 |
|:---|:---|
| 绝不改 `index.md` | 首页卡片由 `articles.data.mjs` 从侧边栏自动生成，手改既冲突又被丢弃 |
| 新页面必须同一次提交里登记 `config.js` | 只提 md 会让首页永远看不到这篇；分两次提则中间有一版死链 |
| 不许出现外链图片和图片文件 | 站点读者在国内，外链图片加载不出来；仓库是公开的，`public/` 会原样发布 |
| 错题只收「当时没独立做出来的题」 | 否则它会把所有答错的题都抄进来，错题本立刻失去意义 |
| 正解不列方程 | 四年级上学期还没正式用方程解题，这是本册的既定口径 |
| 「当时卷面」一列不能省，要分清红笔圈和铅笔圈 | 这一列最容易被脑补，而它恰恰是整页最有用的信息 |
| 老师没批的作文不许画红笔痕迹 | 未批改只有四段式；画了就是冒充老师的权威 |
| 中文标点紧邻 `**` 时改用 `<strong>` | VitePress 的 CommonMark 前后缀规则会解析失败，加粗直接不渲染 |
| 不得写入任何密码、token、姓名班级、手机号 | 仓库公开 |

至于 Muse 侧怎么让它真的去读这个文件，是在第一条长期任务里说死的（第五节有原话），并在每次任务开头重申一次——智能体的长期记忆会被后续对话稀释，规范以文件为准，不靠它记着。

---

## 四、一个必须先说清的坑：它的浏览器跑不了页面脚本

这一节是纯纠错，因为不纠正，后面每一步都会撞墙。

第三节的链路要麻麻那边零 git 负担，最顺的做法看起来是让 Muse 在 GitHub 网页里操作。我一开始按这个思路推荐了 `github.dev`（浏览器里的 VS Code，方便一次提交多个文件）。

**这个推荐是错的。** VS Code Web 整个是 JavaScript 撑起来的，而 Muse 的浏览器子代理不能在页面上下文执行脚本。同理，GitHub 那个"提交更改"的弹窗也是脚本驱动的，能不能点过去属于未知。官方给的可信路径只有一条：**表单本身就是表单的网站。** 纯 `<form>` + 输入框 + 提交按钮，它才使得上劲。

这直接改变了方案分工：

- 网页编辑器的路线只适合**往已有页面追加内容**（单个 md 文件，铅笔图标进去，改完提交）。追加错题到已有错题本，就是这个动作。
- 新开一册要同时动 md 和 `config.js`，网页路线做不了（一次只能提一个文件），必须走 git 或者交给我。

也正是这一条，让我认真评估了"把仓库 clone 到那台 VM 里用 git"——第七节。

---

## 五、Muse 侧的一次性配置

这些动作在 App 的设置里，不是靠对话说的。按这个顺序来，一次配完。

**收紧默认权限。** 审批模式调到严格，让所有对外动作都要麻麻点确认。关掉"用我的互动数据改进模型"。连接的服务只留必要项——这套流程里连 Gmail 都不需要，支付能力更要保持未连接。在头像下方的活动记录里，我们每周一起翻一次它实际干了什么。

**立规矩的第一条消息。** 一次说清，之后靠它自己的长期记忆，但规范仍以文件为准：

```text
你以后帮我做一件固定的事：把小学生的错题和作文整理成网页文稿，
提交到 GitHub 仓库 ixx9527/docs。
动手前先打开并完整读 https://raw.githubusercontent.com/ixx9527/docs/main/QWEN.md，
以那个文件里的规范为唯一标准；我说的和它冲突时，先问我，不要自己决定。
只做我明确交给你的这一件事，不要顺手改别处，不要重构，不要格式化。
```

**建一条长期任务**（它的 Goals 分页），把背景挂起来，省得每次重述：

```text
名称：夏末错题本与作文录入
说明：每次收到照片或文字，按仓库 QWEN.md 的规范整理成稿，
      在新分支上提交并发起 PR，然后回报我改了哪些文件、PR 链接、
      以及原稿里哪些细节是它推测的。不要直推 main。
```

---

## 六、录入这一端的三步

### 第一步，拍照发过去，配一句话

```text
第 5 页这道题她空着，我讲了。按规范加进错题本。
```

Muse 会读规范、把图转成文字、产出草稿。原题照片只存在于那次对话里，不进仓库——卷子上有名字、班级、老师的批语，而这个仓库全世界能看。

### 第二步，只看草稿，别急着让它提交

这一步不能省，原因在智能体这一侧：它会非常自信地把细节编圆。草稿到手只看三处：

1. 题干里的数字抄错没有；
2. 「当时卷面」写的是不是事实——是空着，还是做了做错？红笔圈的还是铅笔圈的？
3. 正解有没有偷偷用方程。

不对就回一句「第 2 条不对，她当时是……」让它重做，而不是自己上手改文本。理由很实际：手改只修好这一篇，规范还错着，下一道题照样再错一遍；而让她回一句话，错的是规范本身，会被顺手改掉。

作文那边同理，但核对的三件事换成：拼音顶替的字有没有如实留着、老师批过的地方有没有凭空多出来、修改版是不是真的达到了作业要求的字数。

### 第三步，让它提交

```text
可以了，起个新分支提交，把 PR 链接发我。
```

追加到已有页面这一步，它能在网页编辑器里走完；新开一册就攒着给我。这个分工不是妥协，是它的浏览器能力划出来的边界。

---

## 七、review 关口：让平台拒绝，而不是靠约定

麻麻那个录入账号有写入权限，而写入权限是允许直推 `main` 的。只要有一次误操作，或者一次提示词注入（她发过去的照片里如果出现"忽略之前的指令"这类文字，是有可能被读进去的），"我来 review"就没了。

所以 main 要在 GitHub 层面推不进去。Settings → Rules → Rulesets → New branch ruleset：

```text
Target branch: main（Include default branch）
☑ Restrict pushing            —— 禁直推
☑ Require a pull request before merging
    ☑ Require approvals = 1
    ☑ Dismiss stale comments on new commits
☑ Block force pushes
Bypass list: 只留我自己
—— 不要把录入账号加进 Bypass
```

公开仓库的 ruleset 在免费计划下可用。配完之后最坏情况从"内容破了"变成"它推不上去，报一个权限错"。这是这篇文档里我认为唯一一件**必须**做的事。

凭证那边，给了 token 就别给密码。GitHub → Settings → Developer settings → Fine-grained tokens：

```text
Repository access: Only select repositories → 这一个仓库
Permissions:       Contents = Read and write      ← 只这一项
Expiration:        30 天（到期逼我复核一次）
```

不给 Administration，不给 Workflows，不给 Dependabot secrets。走 token 之后，麻麻在浏览器里连 GitHub 都不用登录了——上一版方案里"云端 VM 里输密码"那个最别扭的环节自然消失。

代价也要写明白：这个 token 存在 Meta 的机器上，以可复制的文本形式活在对话里，我无法审计它有没有被写到别处。可撤销、可过期、能看到 last used，是止损手段，不是隔离。

---

## 八、两条路线：VM 里跑 git，还是我自己的服务器

顺着"能不能 clone 到那台 VM"往下想，出现了第二个方案。它比网页路线更合我的原意：**在 VM 里改文件之前先跑一次构建校验**，那才是"提交前把关"的完全体。

官方能力描述里，那台机器能编译智能体自己写的代码、能通过 CLI 写自定义 connector，所以 clone + git 不算异想天开。但有三处没写进文档，只能实测：

| 未知 | 为什么关键 |
|:---|:---|
| rootfs 里有没有 `git` 和 `node` | 有 git 没 node，跑不了 `npm run build`，收益掉一半 |
| 出网到 `github.com:443` 放不放行 | 所有对外流量过 Sentinel；沙箱网络策略有 `proxy-only` / `restricted` / `unrestricted` 几档，消费版默认哪档没写 |
| `.git` 能不能写 | Meta 另一条产品线 Muse Code 的权限文档明确写着：工作区里 `.git`、`.muse`、`.agents` 保持只读，防止智能体改写自己的历史。这条若同样适用于那台 VM，`git commit` 会被沙箱直接拒掉 |

实测三条，按顺序发，任何一步失败就记下原话：

```text
1. 你的工作环境里能执行命令行吗？跑 git --version 和 node --version，把输出贴给我。
2. 用 https://github.com/ixx9527/docs.git 做一次只读 clone，
   成功后列出 articles/ 下的文件名就停住，不要改任何文件。
3. 在 clone 目录里新建分支 mistakes/probe-1，加一个 probe.md，执行 git commit。
   只 commit，不要 push。如果沙箱拒绝写入 .git，把拒绝信息原文给我。
```

第 3 条是决定性的一测。

两条路线摆开：

| | VM 里跑 git + token | 我自己的服务器 |
|:---|:---|:---|
| clone 与 commit | 未文档化，可能撞 `.git` 只读 | 确定可用 |
| 跑 `npm run build` 把关 | 取决于有没有 node，慢且吃额度 | 确定可用，秒级 |
| 凭证存放 | Meta 的机器 | 我自己的机器 |
| 麻麻的动作 | 拍照、核对、等它跑完 | 拍照、核对、转给我 |
| 搭建成本 | 实测通过就几乎为零 | 要写一条入库管线 |

这一栏的两条路还没有定论。它们唯一的实质差别是"那台执行 git 的机器是谁的"，review 关口两边一模一样，所以这个取舍完全交给第 3 条实测——通不过就自动落到右边那条。也正因此，这一节是这篇里唯一留着没写完的地方。

---

## 九、红线清单

这些约束是给环境定的，落点应该在 `QWEN.md` 和 ruleset 里，而不是靠谁记住。写在下面只是为了让我配的时候不漏。

- 不叫它"顺手把站点整理一下"，不叫它"把 config.js 弄干净点"。
- 不动 `index.md`、`public/`、`.vitepress/theme/`、`.github/`。
- 不给 owner 账号，不给任何宽权限 token。
- 卷面上的姓名、班级、学校、老师全名，转文字时一律去掉。
- 错题本这一页按既定约定**就是不上锁的**——不许为了让参考解答页那个锁脚本生效，把 `::: details 正解` 改名成"参考解答"。
- 同一道题提交失败两次就停手，攒着给我。失败重试是智能体最容易把小问题变成大问题的动作。

---

## 十、上线自查：在浏览器里就能做完

提交成功不等于已发布，这两件事隔了几分钟，还隔着一次构建。按下述顺序确认，任何一条对不上就停在这里，把 PR 链接发给我：

1. GitHub 上那个 PR 有没有链接；没有链接就是根本没提交成功。
2. 我这边点了 merge 之后，等 2 到 3 分钟（Pages 部署有延迟，刚提完打开看到 404 是正常的）。
3. 打开首页，对应分类下**有没有新卡片**。没卡片说明侧边栏没登记，或者那次提交只动了 md。
4. 点进卡片，正解折叠块能点开、图能显示。
5. 只在新开一册时才需要看第 6 条：Actions 页那条流水线是绿的吗。红了说明构建挂了，站点停在上一版——线上内容不会坏，只是不变新，把 PR 链接发给我就行。

---

## 十一、还没落定的几件事

诚实地列在这里，别让这一页看起来比它实际更确定。

- 第 3 条探针还没跑。整个第八节的取舍等它决定。
- VM 那台机器的 `.git` 写不写得了，我只有第三方文档里的一条只读规则可以引用，没有一手实测。
- 关于 Muse 沙箱隔离，检索时撞到过公开报道在质疑它的逃逸与失效（Ars Technica 一个 0-day、另有一篇讲 containment failures）。这两篇我没读过，不足以据此下结论，但也不足以当作"没问题"。第八节如果要真给 token，先读完。
- 免费额度有多大，官方没公布，所以我没敢给麻麻估一次录入的 token 成本。
- 作文那一支我只写了核对要点，模板还没进 QWEN.md——等第一次真的用它录完一篇周记，再按实际偏差补规范。

这套环境现在的状态是：**规矩已经在一个文件里，关口已经在平台层面，剩下的都在等实测。** 第一篇真错题跑通之后，这一页该补上它到底在哪儿卡了一下。

---

## 参考来源

- Meta 官方发布稿：Introducing Muse, a personal AI agent（2026-09-08）— about.fb.com
- Meta AI Research：Security and safety for AI agents — our approach with Muse（VM 架构、nspawn 容器、Sentinel、自定义 connector）— research.meta.ai
- Muse 产品页与帮助中心（能力清单、审批模式、可用地区与年龄限制）— ai.meta.com / meta.com/help
- Muse Code 权限文档（沙箱与 `.git` 只读规则、`--sandbox-network` 档位）— dev.meta.ai
- 第三方实测综述（浏览器子代理只读 accessibility tree、免费额度未公布、付费档价格）— nex-automations.com、realpython.com
