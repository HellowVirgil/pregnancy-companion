# AGENTS.md

本文件供 AI 编码代理（及新加入的维护者）快速理解本项目。改动代码前请先读完这一页。

## 项目是什么

「孕期同行手册」：一对夫妻（杭州产检 → 香港分娩，中间有一次澳洲旅行）的私人孕期管理工具。
纯前端单页应用，**无后端、无账号体系**，完成状态和备注保存在浏览器 localStorage。

三个不可动摇的原则：

1. **内容即医疗 adjacent**：所有文案只做"行动整理与提醒"，不提供诊断或处方；紧急就医信号（SOS）相关内容不得弱化或删改，措辞改动需格外谨慎。
2. **用户是真人在用**：localStorage 里存着用户按周累积的真实进度，任何涉及存储的改动都必须向后兼容（见下文"存储"）。
3. **界面语言为中文**：新增 UI 文案用中文，语气平和、不制造焦虑；日期格式遵循现有 `2026.09.24` / `9月24日` 风格。

## 技术栈与命令

- React 18 + TypeScript + Vite。**没有** UI 组件库、CSS 框架、状态管理库、路由库——刻意保持零依赖，不要随意引入。
- 样式是一份全局 CSS（`src/styles.css`），类名沿用旧版命名，设计令牌在 `:root` CSS 变量里（暖米色 + 鼠尾草绿主题）。

```bash
npm install
npm run dev        # 开发服务器（Vite，热更新）
npm run build      # tsc --noEmit 类型检查 + vite build → dist/
npm run preview    # 本地预览构建产物（注意带 /pregnancy-companion/ 前缀访问）
```

## 目录结构

```
src/
  data/                  # ★ 全部业务数据在这里，改数据不需要动组件
    _generated_tasks.ts      # 55 条任务（从旧版单文件提取生成，可整体重新生成）
    _generated_prenatal.ts   # 14 条医学产检里程碑（同上）
    prenatal.ts              # 产检数据入口：医学节点 + 孕肚周记 + 孕妇照，按 start 排序
    tasks.ts                 # 任务数据入口 + taskStatus/taskRange/chooseNextTask
    labels.ts                # 文案映射、宝宝果实尺寸表、首页倒计时配置
  lib/
    date.ts              # PROFILE（★ 末次月经/预产期等个人资料唯一来源）、孕周计算、?today 预览
    storage.ts/.ts       # localStorage 读写与迁移（storageKeys.ts 存键名与预置项）
    celebrate.ts         # 完成时的撒花微动效（尊重 prefers-reduced-motion）
  hooks/useAppState.ts   # 全局应用状态（completed/notes/prenatalCompleted/prenatalNotes）
  components/            # Header、TabBar、五个面板、SosModal、icons（内联 SVG）
  styles.css             # 全部样式，:root 内是设计令牌
```

## 架构与数据流

- 状态只有一份：`useAppState` 持有 `{ completed, notes, prenatalCompleted, prenatalNotes, storageUnavailable }`，任何修改通过 setState 触发，`useEffect` 统一写回 localStorage。**不要**在组件里各自直连 localStorage。
- 标签页切换是自实现的路由（`App.tsx` 的 `activeTab` + `location.hash`），映射表 `ANCHOR_TAB` 支持内容锚点（如 `#hangzhou` 跳专题卡）。**没有用 react-router**。
- 五个面板**始终挂载**，用 `.is-active` 类切换显示——打印样式（`@media print`）依赖"所有面板都在 DOM 里"来输出完整清单，**不要**改成条件卸载。
- 跨面板跳转（Beacon → 产检里程碑 / 任务卡自动展开滚动）通过 App 级状态（`openPrenatalIds`、`focusTask`）+ `requestAnimationFrame` 里 `scrollIntoView` 实现，新增类似跳转请沿用此模式。

## 领域模型要点（易错处）

- **孕周计算**：一切以 `PROFILE.lmp`（末次月经 2026-06-29）为锚点，预产期 2027-04-05。改预产期只需改 `PROFILE`。
- **产检里程碑分两类**：
  - 医学节点（`kind` 为空，14 条）：`currentPrenatalIndex` / `nextPrenatalIndex` 只在医学节点里找"当前/下一阶段"；
  - 打卡节点（`kind: 'photo'`，孕肚周记 15 条 + 孕妇照 1 条）：状态独立判断（本周打卡/下次打卡/已拍摄/可补拍），**不计入**首页"产检里程碑"进度。
  - 两类的状态标签分别是 `PRENATAL_STATE_LABELS` / `PHOTO_STATE_LABELS`，不要混用。
- **任务状态机**：`taskStatus` = completed（手动勾选）> overdue（今天 > end）> active（窗口内）> upcoming。任务窗口是闭区间，"硬截止"（`hardDeadline`）只影响 Beacon 的优先级排序。
- **预置完成项**：`storageKeys.ts` 里 `PRESET_COMPLETED` / `PRESET_PRENATAL_COMPLETED` 是真实世界已发生的事（如首次B超），UI 上按钮禁用显示"已确认"，用户无法取消。新增此类节点时加进这两个映射。
- **数组的顺序**：`PRENATAL_MILESTONES` 必须按 `start` 升序（状态推导依赖顺序），`TASKS` 大致按时间排列（只影响展示顺序）。
- `src/data/_generated_*.ts` 是从旧版单文件 HTML 机械提取的原始数据。**小改动直接编辑这两个文件没问题**；它们没有其它构建依赖。

## 存储与迁移（改前必读）

- 当前键 `pregnancy-companion-v3`，值的 shape 见 `storageKeys.ts` 的 `emptyState`。
- `loadState` 内置 v2 → v3、v1 → v3 的自动迁移。**改字段 shape 时**：要么保持向后兼容的合并逻辑，要么升版本号到 v4 并写迁移，禁止直接换 key 丢进度。
- `PRESET_COMPLETED` 每次加载都会重新合并进状态（防止被重置掉）。

## 约定

- **类名即兼容层**：CSS 类名（`task-card`、`rail-chip`、`beacon`…）与旧版一一对应，重命名类名等于重写样式，除非明确要改设计，否则沿用。
- **图标**：一律用 `components/icons.tsx` 里的内联 SVG（描边风格，strokeWidth 1.8/2），**禁止**用 emoji 当图标。
- **可访问性**：`prefers-reduced-motion` 全局禁用动画；交互元素有 aria 属性；`data-testid` 是既有测试钩子（`app-shell`、`gestation-age`、`next-beacon`、`prenatal-timeline`、`emergency-alert`、`hk-transit-mission` 等），重构时保留。
- **视觉基调**：暖米色底 + 鼠尾草绿主色 + 陶土玫瑰（警示）+ 蜜糖金（提醒），新组件从 `:root` 变量取色，不要硬编码颜色（撒花的三个色值是历史例外）。
- 提交信息用中文，首行概括 + 正文列要点（参考 `git log`）。

## 部署

- 推送到 `main` → GitHub Actions（`.github/workflows/deploy.yml`）执行 `npm run build`，部署 `dist/` 到 GitHub Pages。
- **`vite.config.ts` 的 `base: '/pregnancy-companion/'` 不能删**——这是项目站点（非用户站点）的子路径，删了资源 404。
- Pages 的 build_type 已是 `workflow`，不存在"从分支直接部署"的旧通道；如果发现线上是未构建的源码，说明 workflow 没跑或失败，去 Actions 页查日志。
- 本地验证部署效果：`npm run build && npm run preview`，访问 `http://localhost:4173/pregnancy-companion/`。

## 验证方式（目前没有自动化测试）

1. `npm run build` 必须零错误（含 tsc 类型检查）。
2. `npm run preview` + 浏览器过一遍五个标签页；重点看：首页三行进度、产检页"当前/下一阶段"芯片、任务筛选、打卡节点状态。
3. 用 `?today=YYYY-MM-DD` 查询参数可以伪装"今天"来验证未来节点（如 `?today=2027-01-15` 看孕妇照窗口期）。
4. 移动端验证至少看一次 375px 宽（底部标签栏、安全区）。注意 headless Chrome 有 500px 最小窗宽，模拟 375px 需用 `--window-size=750,2800 --force-device-scale-factor=2`。

## 常见任务的落点速查

| 需求 | 改哪里 |
| --- | --- |
| 加/改一条任务 | `src/data/_generated_tasks.ts` |
| 加/改产检里程碑 | `src/data/_generated_prenatal.ts` |
| 调孕肚打卡频率 | `src/data/prenatal.ts` 的 `BELLY_PHOTO_WEEKS` |
| 改预产期/末次月经/赴港日期 | `src/lib/date.ts` 的 `PROFILE`（部分日期也硬编码在数据文件里，需同步搜一遍） |
| 首页倒计时 | `src/data/labels.ts` 的 `COUNTDOWNS` |
| 改颜色/间距/圆角 | `src/styles.css` 的 `:root` |
| 加新图标 | `src/components/icons.tsx`，内联 SVG，与现有描边风格一致 |
