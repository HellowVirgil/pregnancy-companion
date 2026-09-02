# 孕期同行手册

为准爸爸准妈妈打造的孕期同行手册：产检里程碑、全孕期任务时间线、孕肚周记打卡、澳洲旅行行程与香港待产专题，进度自动保存在本机浏览器。

线上地址：<https://hellowvirgil.github.io/pregnancy-companion/>

## 技术栈

- React 18 + TypeScript
- Vite 构建，纯 CSS 设计令牌（无 UI 框架依赖）
- 数据与视图分离：`src/data/` 存放全部孕期数据，改数据不需要动组件

## 本地开发

```bash
npm install
npm run dev        # 本地开发，默认 http://localhost:5173
npm run build      # 类型检查 + 产线构建到 dist/
npm run preview    # 本地预览构建产物
```

## 部署

推送到 `main` 分支后，GitHub Actions（`.github/workflows/deploy.yml`）自动执行 `npm run build` 并部署 `dist/` 到 GitHub Pages。

## 目录结构

```
src/
  data/        # 任务、产检里程碑、孕肚周记、标签等全部数据
  lib/         # 日期/孕周计算、localStorage 存储、撒花动效
  hooks/       # useAppState：完成状态与备注的持久化
  components/  # Header、TabBar、五个面板与 SOS 弹窗
```

## 常用定制

- 调整孕肚打卡频率：改 `src/data/prenatal.ts` 里的 `BELLY_PHOTO_WEEKS`
- 调整首页倒计时：改 `src/data/labels.ts` 里的 `COUNTDOWNS`
- 预产期/末次月经等个人资料：改 `src/lib/date.ts` 里的 `PROFILE`

## 数据说明

完成状态和备注保存在浏览器 `localStorage`（键 `pregnancy-companion-v3`），可随时通过"重置进度"清空。支持 `?today=YYYY-MM-DD` 查询参数预览指定日期的界面。
