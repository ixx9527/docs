# 霍格沃茨之遗：三十天均衡开荒路线

「每天两小时，一个月够不够把霍格沃茨念完一遍？」——这个问题同样要拆成三问：**主线究竟在哪一级把你拦住**、**关键系统按什么顺序解锁**、**剩下的时间花在哪儿最值**。

本文按这三问给答案。先是全部主线的等级门槛（整张计划表的骨架），再是六个阶段共 30 天的逐日流程，然后是天赋加点、咒语解锁链、装备养成路线，最后是进度追踪和三条收尾建议。

**阅读约定：**

- **前提**：第一次游玩、普通难度、不用修改器、不主动学不可饶恕咒。
- **无剧透**：只写任务名、等级门槛和解锁的系统，不碰剧情走向与结局。
- **译名**：中文用常见译法并括注英文原名，与实际显示不一致时以任务日志的英文名为准。部分任务在不同资料库的门槛相差 1 级，表内取主流口径。
- **关于配图**：原稿的截图托管在境外图床（`images.openai.com` 和 Google 的 favicon 服务），国内多半打不开，外链图片也不适合长期存档。**本版一张外链图都不放**——原本该由截图承载的信息，全部改成表格和内嵌 SVG。真想配图的，把图存进 `public/` 再用本地路径引用。

---

## 一、骨架：主线门槛是一条阶梯，不是一堵墙

《霍格沃茨之遗》把经验藏在主线里，所以开荒节奏的第一驱动力不是"刷"，而是"够不够接下一个任务"。把所有主线任务的等级门槛按顺序画出来，形状是这样的：

<svg width="640" height="300" viewBox="0 0 640 300" style="display:block;margin:12px auto;max-width:100%" role="img" aria-label="主线任务等级门槛随天数上升的阶梯图，Lv.24 封顶后 Lv.34 只有学院杯">
  <!-- 坐标：x = 62 + 18*(天数-1)，y = 252 - 6*等级 -->
  <!-- 纵轴参考线：Lv.10 / Lv.20 / Lv.30 -->
  <line x1="62" y1="192" x2="602" y2="192" stroke="currentColor" stroke-width="0.6" stroke-dasharray="4,4" opacity="0.28"/>
  <line x1="62" y1="132" x2="602" y2="132" stroke="currentColor" stroke-width="0.6" stroke-dasharray="4,4" opacity="0.28"/>
  <line x1="62" y1="72" x2="602" y2="72" stroke="currentColor" stroke-width="0.6" stroke-dasharray="4,4" opacity="0.28"/>
  <text x="56" y="196" text-anchor="end" font-size="11" fill="currentColor" opacity="0.6">10</text>
  <text x="56" y="136" text-anchor="end" font-size="11" fill="currentColor" opacity="0.6">20</text>
  <text x="56" y="76" text-anchor="end" font-size="11" fill="currentColor" opacity="0.6">30</text>

  <!-- 坐标轴 -->
  <line x1="62" y1="252" x2="602" y2="252" stroke="currentColor" stroke-width="1"/>
  <line x1="62" y1="252" x2="62" y2="40" stroke="currentColor" stroke-width="1"/>

  <!-- 门槛阶梯（主线） -->
  <path d="M 62,246 H 98 V 240 H 116 V 234 H 152 V 228 H 170 V 222 H 188 V 216 H 224 V 192 H 242 V 186 H 260 V 180 H 296 V 168 H 314 V 162 H 350 V 156 H 368 V 150 H 386 V 144 H 404 V 138 H 440 V 126 H 458 V 120 H 476 V 114 H 512 V 108 H 584"
        fill="none" stroke="#2a8f85" stroke-width="2" stroke-linejoin="round"/>

  <!-- 学院杯那一跳 -->
  <path d="M 584,108 V 48" fill="none" stroke="#be123c" stroke-width="2"/>
  <circle cx="584" cy="48" r="3.5" fill="#be123c"/>

  <!-- 两个结论标注 -->
  <text x="548" y="98" text-anchor="middle" font-size="12" fill="#2a8f85">终章全线 Lv.24 封顶</text>
  <text x="578" y="42" text-anchor="end" font-size="12" fill="#be123c">学院杯 Lv.34</text>

  <!-- 横轴：天数刻度 -->
  <text x="62" y="270" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.7">1</text>
  <text x="134" y="270" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.7">5</text>
  <text x="224" y="270" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.7">10</text>
  <text x="314" y="270" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.7">15</text>
  <text x="404" y="270" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.7">20</text>
  <text x="494" y="270" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.7">25</text>
  <text x="584" y="270" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.7">30</text>
  <text x="332" y="288" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.7">计划天数（Day）</text>
  <text x="26" y="42" font-size="12" fill="currentColor" opacity="0.7">门槛等级</text>
</svg>

::: tip 从这条阶梯能读出两件事
1. **主线门槛最高只有 Lv.24**。从《山脉阴影》到《韦斯莱的注视》，终章一整串任务全都卡在 24 级——而角色等级上限是 40。所以通关这件事本身，不需要你满级，甚至不需要你刻意刷级。
2. **唯一的墙在通关之后**：《学院杯》（The House Cup）要求 **Lv.34**。而通关后主线不再给经验，24 到 34 这 10 级只能靠角色支线、教授作业、挑战手册和开放世界内容攒出来。

**这才是这份计划真正要预留时间的地方**——不是"能不能打完最终战"，而是"打完之后还差 10 级"。
:::

### 主线等级门槛全表

| 门槛等级 | 主线任务（中文 / English） |
| --- | --- |
| Lv.1 | 欢迎来到霍格沃茨 / Welcome to Hogwarts、魔咒课 / Charms Class、黑魔法防御术课 / Defence Against the Dark Arts Class |
| Lv.2 | 韦斯莱下课之后 / Weasley After Class、欢迎来到霍格莫德 / Welcome to Hogsmeade |
| Lv.3 | 禁书区的秘密 / Secrets of the Restricted Section、书籍与磨难 / Tomes and Tribulations、草药学课 / Herbology Class |
| Lv.4 | 来自乌加多的女孩 / The Girl from Uagadou、魔药学课 / Potions Class、梅林试炼 / Trials of Merlin |
| Lv.5 | 学院专属任务（寻找失落之页 / 奥利凡德的传家宝 / 司柯普的遗愿 / 爱的囚徒）、捷克道尔的安息 / Jackdaw's Rest（约 5–6，开放天赋） |
| Lv.6 | 飞行课 / Flying Class、有求必应屋 / The Room of Requirement |
| Lv.8 | 地下室阴影 / In the Shadow of the Undercroft |
| Lv.10 | 地图密室 / The Map Chamber |
| Lv.11 | 珀西瓦尔·拉克汉姆的试炼 / Percival Rackham's Trial |
| Lv.12 | 厄特科特的头盔 / The Helm of Urtkot |
| Lv.13 | 神奇动物课 / Beasts Class |
| Lv.14 | 管理员的月之哀歌 / The Caretaker's Lunar Lament |
| Lv.15 | 小精灵、拿袋与织布机 / The Elf, the Nab-Sack and the Loom、庄园阴影 / In the Shadow of the Estate |
| Lv.16 | 天文学课 / Astronomy Class |
| Lv.17 | 高耸的城堡 / The High Keep |
| Lv.18 | 重回正轨 / Back on the Path |
| Lv.19–20 | 查尔斯·卢克伍德的试炼 / Charles Rookwood's Trial、火焰与罪恶 / Fire and Vice |
| Lv.21 | 全是妖精语 / It's All Gobbledegook |
| Lv.22 | 矿井阴影 / In the Shadow of the Mine |
| Lv.23 | 校长有话说 / The Headmistress Speaks、复方汤剂计划 / The Polyjuice Plot、妮娅·菲茨杰拉德的试炼 / Niamh Fitzgerald's Trial |
| Lv.24 | 山脉阴影 / In the Shadow of the Mountain、洛德高克的忠诚 / Lodgok's Loyalty、桑·巴卡尔的试炼 / San Bakar's Trial、魔杖精通 / Wand Mastery、最后的储藏室 / The Final Repository、韦斯莱的注视 / Weasley's Watchful Eye |
| Lv.34 | 学院杯 / The House Cup（需先完成《韦斯莱的注视》） |

### 关键系统的解锁顺序

推进到对应等级就会自动开放，这决定了探索效率的拐点：

| 等级 | 解锁 | 为什么是拐点 |
| --- | --- | --- |
| Lv.5–6 | 天赋系统（《捷克道尔的安息》后开放界面） | 开始有 Build 差异，加点见第四节 |
| Lv.6 | 飞行扫帚（《飞行课》后在霍格莫德购买） | 能激活远处飞路之焰、跨区抄近路 |
| Lv.6 | 有求必应屋 | 草药种植、魔药制作、装备分解的基地 |
| Lv.8 | 霹雳爆炸 Confringo | 第一个真正的远程群体输出 |
| Lv.10 | 地图密室 | 古代魔法主线全面展开 |
| Lv.14 | 开锁咒 Alohomora | 上锁宝箱不再需要绕路；升级靠隐形兽月亮 |
| Lv.15 | 织布机（有求必应屋） | 装备强化与特质重掷正式开放 |

::: warning 别在 Lv.14 之前认真开宝箱
没有开锁咒时，一部分上锁的箱子和门只能绕行或回头再拿。反过来说：**扫帚（6 级）、有求必应屋（6 级）、开锁咒（14 级）这三样到手之前，地图清理的性价比最低**。前期把时间投在主线和教授作业上，探索留到 14 级之后集中做，比一路捡一路丢更省脚程。
:::

---

## 二、60 小时怎么花

每天 120 分钟的默认切分：

| 内容 | 时间 | 目标 |
| --- | --- | --- |
| 主线任务 | 55 分钟 | 推进剧情、解锁系统 |
| 教授作业与角色支线 | 30 分钟 | 获取咒语、补人物故事 |
| 开放世界探索 | 25 分钟 | 飞路之焰、梅林试炼、宝箱 |
| 装备与资源整理 | 10 分钟 | 换装、出售、整理有求必应屋 |

阶段成果预期（对照第一节的门槛表看，目标等级刻意比门槛高一档，留出被打回去的余量）：

| 阶段 | 天数 | 主线门槛到 | 目标等级 | 重点成果 |
| --- | --- | --- | --- | --- |
| 一 | Day 1–5 | Lv.3 | Lv.1–10 | 基础咒语、首次进霍格莫德 |
| 二 | Day 6–10 | Lv.10 | Lv.9–15 | 天赋、扫帚、有求必应屋 |
| 三 | Day 11–15 | Lv.15 | Lv.14–20 | 第一轮试炼、开锁咒、织布机 |
| 四 | Day 16–20 | Lv.19 | Lv.19–25 | 角色支线起步、第二轮试炼 |
| 五 | Day 21–25 | Lv.23 | Lv.23–30 | 进阶魔法、中后期主线 |
| 六 | Day 26–30 | Lv.24 → 34 | Lv.28–36 | 主线终章、攒经验开学院杯 |

每天结束前在安全区域存档，并记下正在追踪的任务。遇到较长的剧情地下城或守护者试炼，整晚只做这一项完全可以——时间分配是默认值，不是约束。

::: warning 任务不是强制顺序
任务开放受等级、前置任务、学院专属剧情和已学咒语影响。下表的排法是按门槛推出来的**推荐目标**，不是游戏内的固定顺序，每个阶段允许前后浮动 1～3 天。
:::

---

## 三、三十天逐日流程

### 第一阶段：Day 1–5｜入学与基础魔法

| 天 | 主线任务（中文 / English） | 时间分配 | 当天门槛与收获 |
| --- | --- | --- | --- |
| Day 1 | 通往霍格沃茨之路 / The Path to Hogwarts、欢迎来到霍格沃茨 | 序章 90 分钟，菜单与地图 30 分钟 | Lv.1 起｜基础施法、盔甲护身 Protego、昏昏倒地 Stupefy、原形立现 Revelio |
| Day 2 | 黑魔法防御术课、魔咒课、韦斯莱下课之后 | 两门课 65 分钟，城堡探索 35 分钟，教授作业 20 分钟 | Lv.1–2｜悬浮咒 Levioso、飞来咒 Accio；罗南教授作业给修复如初 Reparo |
| Day 3 | 欢迎来到霍格莫德 | 村庄剧情 75 分钟，商店 25 分钟，周边探索 20 分钟 | Lv.2｜初步了解魔杖、装备与战斗消耗品 |
| Day 4 | 禁书区的秘密、书籍与磨难 | 主线为主，视进度做赫卡特作业 1 | Lv.3｜幻身咒 Disillusionment、火焰熊熊 Incendio |
| Day 5 | 草药学课、魔药学课 | 主线与课程 65 分钟，教授作业 35 分钟，探索 20 分钟 | Lv.3｜赫卡特作业 2 给除你武器 Expelliarmus |

这一阶段不要买昂贵装备，也不用试着进所有锁着的房间——城堡里大部分收集品都能回头再拿。

### 第二阶段：Day 6–10｜解锁扫帚和天赋

| 天 | 任务与分配 | 当天重点 |
| --- | --- | --- |
| Day 6 | 《来自乌加多的女孩》＋《梅林试炼》：剧情 70 分钟，探索 50 分钟 | 认识野外探索机制，开始做梅林试炼（门槛 Lv.4） |
| Day 7 | 学院专属任务以及《捷克道尔的安息》：约 110 分钟主线 | **解锁天赋系统**（门槛 Lv.5，见第四节） |
| Day 8 | 《飞行课》后购买扫帚：课程 50 分钟，飞行探索 70 分钟 | 解锁扫帚（Lv.6），开始激活远处飞路之焰 |
| Day 9 | 《有求必应屋》：主线 80 分钟，布置房间与备料 40 分钟 | Lv.6｜消失咒 Evanesco、召唤与改造魔法（与后期的战斗变形咒是两回事） |
| Day 10 | 《地下室阴影》《地图密室》：主线 90 分钟，咒语练习 30 分钟 | Lv.8 与 Lv.10｜获得霹雳爆炸 Confringo |

推进到 Lv.13–15 左右就够了，不用特意刷高等级。从 Day 7 起你会拿到此前等级累积的天赋点，建议立刻投入几个核心天赋。

### 第三阶段：Day 11–15｜战斗成型与第一轮试炼

| 天 | 主线任务（中文 / English） | 建议安排 |
| --- | --- | --- |
| Day 11 | 珀西瓦尔·拉克汉姆的试炼（Lv.11） | 100 分钟试炼 + 20 分钟整理；奖励浑身僵直 Petrificus Totalus |
| Day 12 | 夏普教授作业 1、2；小川夫人作业 1 | 80 分钟教授作业 + 40 分钟支线｜统统飞走 Depulso、四分五裂 Diffindo、冰冻咒 Glacius |
| Day 13 | 厄特科特的头盔（Lv.12） | 90 分钟任务 + 30 分钟探索 |
| Day 14 | 神奇动物课（Lv.13）、管理员的月之哀歌（Lv.14） | 90 分钟主线 + 30 分钟探索｜**开锁咒 Alohomora** |
| Day 15 | 小精灵、拿袋与织布机（Lv.15） | 80 分钟主线 + 40 分钟动物与装备系统｜织布机开放 |

Day 12 拿到的三个咒语值得尽快纳入常用组合：冰冻接切割对付较强敌人，飞走与分裂用来破场地上锁物和拆阵型。教授作业的开放时间前后有差异，卡住就先做别的。

### 第四阶段：Day 16–20｜装备、神奇动物与角色故事

| 天 | 主线与活动 | 当天重点 |
| --- | --- | --- |
| Day 16 | 庄园阴影（Lv.15）＋角色支线 | 开始重点跟进塞巴斯蒂安任务线 |
| Day 17 | 天文学课（Lv.16）及星象台探索 | 天文球拼图，顺带攒经验 |
| Day 18 | 高耸的城堡（Lv.17） | 推进纳察相关剧情，解锁进一步移动能力 |
| Day 19 | 重回正轨（Lv.18）；加里克教授作业 1、2 | 羽加迪姆·勒维奥萨、退敌三尺 Flipendo |
| Day 20 | 查尔斯·卢克伍德的试炼（Lv.19–20） | 第二轮重要试炼；**完成后才会开放豪英作业学爆炸咒** |

从这里开始关注装备特质和升级材料，但别把有限资源大量花在很快被替换的低等级装备上。部分关系任务要等猫头鹰来信或别的前置，可以穿插在主线之间。

### 第五阶段：Day 21–25｜进阶魔法与重要主线

| 天 | 主线任务（中文 / English） | 时间重点 |
| --- | --- | --- |
| Day 21 | 火焰与罪恶（Lv.19） | 90 分钟主线，30 分钟角色支线｜**完成后开放韦斯莱作业学变形咒** |
| Day 22 | 全是妖精语（Lv.21） | 80 分钟主线，40 分钟做欧奈作业学应声落地 Descendo |
| Day 23 | 矿井阴影（Lv.22） | 90 分钟主线，30 分钟战斗与装备准备 |
| Day 24 | 校长有话说、复方汤剂计划（Lv.23） | 90 分钟主线，30 分钟支线｜豪英作业学爆炸咒 Bombarda |
| Day 25 | 妮娅·菲茨杰拉德的试炼（Lv.23） | 100 分钟主线，20 分钟整理 |

如果等级不足以推进某个任务，优先去挑战手册领还没结算的经验和奖励，而不是无目的刷怪。

### 第六阶段：Day 26–30｜主线收尾与攒经验上 34 级

| 天 | 计划内容 | 目标 |
| --- | --- | --- |
| Day 26 | 山脉阴影（Lv.24） | 推进终章，继续调整装备 |
| Day 27 | 洛德高克的忠诚（Lv.24） | 完成重要主线阶段 |
| Day 28 | 桑·巴卡尔的试炼（Lv.24） | 集中体验后期试炼 |
| Day 29 | 魔杖精通、最后的储藏室（Lv.24） | 力争打完主线终章 |
| Day 30 | 韦斯莱的注视（Lv.24）＋补经验 | 攒到 Lv.34 才接得到《学院杯》 |

::: warning 最容易被低估的是最后这 10 级
Day 29 通关时你大概只有 Lv.26–30，而《学院杯》要 Lv.34。这 10 级没有主线经验可拿，来源只有：三条角色关系线的剩余章节、还没做完的教授作业、挑战手册里的各类挑战、梅林试炼与宝藏秘库、地图上的战斗挑战。所以别在 24 级前把塞巴斯蒂安、纳察、波比的线全清完——它们是通关后最体面的升级燃料。
:::

按这个排法，Day 30 收尾很可能还差几级。这不代表计划失败，只是说明 30 天装不下一轮"主线＋学院杯"。**把计划延到 34～36 天，或者把学院杯明确留给下一个月**，都是合理选择。

---

## 四、天赋加点：36 点买什么

先把规则说清楚，避免按错误预期规划：

- 天赋界面在完成《捷克道尔的安息》后开放。
- **天赋点从 Lv.5 起每级 1 点，等级上限 40 级，总计 36 点。** 解锁界面较晚不会损失此前等级对应的点数。
- 天赋总共有 **48 个**，也就是说哪怕满级也**点不全**，必须取舍。
- 部分天赋有角色等级门槛（约 Lv.5、16、22 三档），且必须先学会对应咒语才能投资。
- 天赋可以重置，但要花钱（资料库口径为单棵树 200 金），而且一重置就清掉整条树。**别指望无损改 Build**——第四节开头按"确定不后悔的顺序"排。

### 推荐的前 20 点

| 顺序 | 天赋 | 类型 | 推荐理由 |
| --- | --- | --- | --- |
| 1 | Spell Knowledge I | 核心 | 增加法术栏 |
| 2 | Basic Cast Mastery | 核心 | 基础攻击减少冷却 |
| 3 | Spell Knowledge II | 核心 | 再增加法术栏 |
| 4 | Swift | 核心 | 改善闪避 |
| 5 | Accio Mastery | 法术 | 飞来咒可牵引多个敌人 |
| 6 | Incendio Mastery | 法术 | 强化近距离群体攻击 |
| 7 | Ancient Magic Throw Expertise | 核心 | 加强古代魔法投掷 |
| 8 | Confringo Mastery | 法术 | 提高远程火焰攻击能力 |
| 9 | Protego Absorption | 核心 | 防御时积累古代魔法槽 |
| 10 | Wiggenweld Potency I | 核心 | 提升治疗效率 |
| 11 | Diffindo Mastery | 法术 | 强化切割攻击 |
| 12 | Glacius Mastery | 法术 | 增强冰冻咒效果 |
| 13 | Spell Knowledge III | 核心 | 获得第四组法术栏 |
| 14 | Revelio Mastery | 核心 | 探索时更容易发现目标 |
| 15 | Protego Expertise | 核心 | 完美防御获得额外反击 |
| 16 | Stupefy Mastery | 核心 | 延长敌人眩晕时间 |
| 17 | Wiggenweld Potency II | 核心 | 再提升治疗效果 |
| 18 | Transformation Mastery | 法术 | 提升变形咒的战斗价值 |
| 19 | Stupefy Expertise | 核心 | 让昏昏倒地造成直接伤害 |
| 20 | Protego Mastery | 核心 | 强化完美防御后的反击 |

剩余 16 点不需要在游戏初期就定案。前三组法术栏（Spell Knowledge I/II/III）优先级最高——栏位不足会直接让好咒语坐冷板凳；伤害类 Mastery 等确定自己常用哪几个再补。

---

## 五、咒语解锁链与四组法术栏

咒语只能靠完成任务"吸收"获得，没有商店可买。下表按推荐获取阶段排列，同阶段的咒语存在并列开放的情况。

| 阶段 | 咒语（中文 / English） | 获取途径 | 优先级 |
| --- | --- | --- | --- |
| 序章 | 原形立现 Revelio、荧光闪烁 Lumos、盔甲护身 Protego、昏昏倒地 Stupefy | 通往霍格沃茨之路 | 自带 |
| 初期 | 悬浮咒 Levioso | 黑魔法防御术课 | 必学 |
| 初期 | 飞来咒 Accio | 魔咒课 | 必学 |
| 初期 | 修复如初 Reparo | 罗南教授作业 | 必学 |
| 初期 | 火焰熊熊 Incendio | 赫卡特教授作业 1 | 很高 |
| 初期 | 幻身咒 Disillusionment | 禁书区的秘密 | 必学 |
| 初期 | 除你武器 Expelliarmus | 赫卡特教授作业 2 | 很高 |
| 前中期 | 霹雳爆炸 Confringo | 地下室阴影（Lv.8） | 极高 |
| 前中期 | 统统飞走 Depulso | 夏普教授作业 1 | 高 |
| 前中期 | 四分五裂 Diffindo | 夏普教授作业 2 | 极高 |
| 中期 | 冰冻咒 Glacius | 小川夫人作业 1 | 极高 |
| 中期 | 开锁咒 Alohomora | 管理员的月之哀歌（Lv.14） | 极高 |
| 中期 | 羽加迪姆·勒维奥萨 Wingardium Leviosa | 加里克教授作业 1 | 高 |
| 中期 | 浑身僵直 Petrificus Totalus | 珀西瓦尔·拉克汉姆的试炼 | 潜行用 |
| 中期 | 减震止速 Arresto Momentum | 小川夫人作业 2 | 中 |
| 中期 | 退敌三尺 Flipendo | 加里克教授作业 2 | 中 |
| 中后期 | 应声落地 Descendo | 欧奈教授作业 | 高 |
| 中后期 | 变形咒 Transformation | 韦斯莱教授作业 | 高 |
| 中后期 | 爆炸咒 Bombarda | 豪英教授作业 | 高 |

三个卡口容易踩坑，单独说明：

1. <strong>爆炸咒 Bombarda 不是主线直接给的</strong>。它来自豪英教授作业，而这个作业要<strong>先完成《查尔斯·卢克伍德的试炼》</strong>才会开放。卡在"为什么豪英不理我"的，先去打第二场守护者试炼。
2. <strong>变形咒来自韦斯莱教授作业</strong>，前置是主线<strong>《火焰与罪恶》</strong>，而且变形课要<strong>白天</strong>去上——夜里星象台是打不开的。
3. **开锁咒的等级提升另有一条线**。Alohomora 本身在《管理员的月之哀歌》到手，II 级和 III 级要交隐形兽月亮（地图上的隐形兽月亮标记，夜间潜行收集），这是中期最容易被忽略的一条收集线。

### 推荐的四组法术栏

| 组别 | 主力 | 搭配 |
| --- | --- | --- |
| 输出 | 霹雳爆炸 Confringo | 火焰熊熊 Incendio |
| 控制 | 冰冻咒 Glacius | 昏昏倒地 Stupefy |
| 切割 | 四分五裂 Diffindo | 统统飞走 Depulso |
| 机动 | 飞来咒 Accio | 开锁咒 / 爆炸咒 |

原形立现这类基础法术不占四格普通栏。遇到带颜色护盾的敌人，应及时切到对应颜色的咒语破盾——栏位按属性备齐比全塞伤害咒更实用。

高效连招就三条，够用到通关：

- **Glacius → Diffindo**：冻结后接高伤害，适合强敌和精英。
- **Accio → Incendio**：先拉近再群体火焰，清理普通怪群。
- **Levioso → Descendo**：控制后砸地，对能被悬浮的敌人很稳。

---

## 六、装备与资源养成路线

| 等级阶段 | 重点 | 具体做法 |
| --- | --- | --- |
| Lv.1–10 | 获取和替换 | 选数值更高的装备，不花钱买昂贵服饰 |
| Lv.11–20 | 优先基础属性 | 定期换装，用外观系统保留喜欢的造型 |
| Lv.21–30 | 强化与特质 | 通过织布机有计划地升级装备 |
| Lv.31+ | 成型装备 | 只保留高品质、适合自己的高级装备 |

有求必应屋开放后把它当资源生产基地：种植常用魔药材料，按需做治疗与战斗药剂；神奇动物系统解锁后逐步积累强化材料；不用的装备就地分解。

探索优先级分三档，这是把 60 小时花在刀刃上的关键：

| 档位 | 内容 |
| --- | --- |
| 优先完成 | 路过的飞路之焰、挑战手册奖励、梅林试炼、古代魔法热点、能学新咒语的任务 |
| 中期顺路 | 隐形兽月亮、星象台、战斗挑战、宝藏秘库、有意思的支线 |
| 通关后补完 | 大量装饰性收集品、剩余梅林试炼与地图标记、成就 |

梅林试炼尤其值得盯：完成指定档位后能在挑战手册领到装备容量扩充，这比早期无目的开箱子更能改善体验。

---

## 七、三十天进度追踪

按阶段勾选核心成果即可。某天没完成预计任务，直接从当前进度继续，不用重排整张日程。

| 阶段 | 核心成果 | 完成 |
| --- | --- | --- |
| Day 1–5 | 学会基础咒语、完成首次霍格莫德探索 | ☐ |
| Day 6–10 | 解锁天赋、扫帚、有求必应屋 | ☐ |
| Day 11–15 | 完成第一轮试炼、拿到开锁咒与织布机 | ☐ |
| Day 16–20 | 推进角色支线、完成第二轮试炼 | ☐ |
| Day 21–25 | 掌握进阶魔法、完成中后期主要任务 | ☐ |
| Day 26–30 | 打完主线终章、整理重要支线 | ☐ |
| 追加 | Lv.34 后接《学院杯》 | ☐ |

---

## 八、最后三条建议

**第一，不要按地图图标逐一清理。** 先把扫帚（Lv.6）、有求必应屋（Lv.6）、开锁咒（Lv.14）三样到手，再回头清地图。第一节的阶梯图说明了原因：这些系统之前的探索，单位时间收益最低。

**第二，教授作业比普通支线优先级更高。** 它给的不只是经验——每个新咒语同时强化战斗和解锁新的解谜方式，部分还是后续主线的必要条件。而且作业错过也不会绝版，通关后照样能做。

**第三，塞巴斯蒂安、纳察、波比三条关系线不要跳过。** 它们有相当完整的独立故事，和校园以外的魔法世界联系紧密。即使不打算用不可饶恕咒也值得体验——黑魔法选项集中在其中一条线上，跟着走不等于必须学。同时按第六阶段的提醒留一部分章节当 Lv.24→34 的燃料。

三十天、六十小时，作为"第一轮较完整通关"的目标是可行的；但更准确的表述是：**30 天足够打完主线并留下充分的探索余量，学院杯尾声通常要滑到下一个月**。喜欢慢慢逛城堡的话，把整个计划拉长到 40 天也完全合理。

---

## 资料来源

等级门槛、咒语获取途径与天赋点数经过多方交叉核对，非同一站点口径：

- Fextralife Wiki：[Main Quests](https://hogwartslegacy.wiki.fextralife.com/Main_Quests)（各任务 Required Level）
- Game-Maps：[Main Quests](https://game-maps.com/HL/Quests-Main.asp)（本文门槛全表的主口径）
- GamesRadar+：[Main quests list](https://www.gamesradar.com/hogwarts-legacy-main-quests-missions-list/)（终章 Lv.24 与学院杯 Lv.34 门槛）
- IGN Wiki：[Spells and Charms List](https://www.ign.com/wikis/hogwarts-legacy/Spells_and_Charms_List_-_How_to_Unlock_All_Spells)、[How to Learn Bombarda](https://www.ign.com/wikis/hogwarts-legacy/How_to_Learn_Bombarda)
- Push Square：[How to learn all spells](https://www.pushsquare.com/guides/hogwarts-legacy-how-to-learn-all-spells)
- Fandom Wiki：[Talents](https://hogwarts-legacy.fandom.com/wiki/Talents)（40 级上限、36 点、共 48 个天赋）
- Radio Times：[Hogwarts Legacy level cap](https://www.radiotimes.com/technology/gaming/hogwarts-legacy-level-cap/)
