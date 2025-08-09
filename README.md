# SecretBites 作品集

王雨晴的秋招作品集 - 地图产品从 0 到 1 的尝试

## 项目简介

SecretBites 是一款基于地图标记的私人及好友专属餐厅记录分享工具。它既是你的私人餐厅数据库，也是你与好友共享美食乐趣的秘密基地。

## 技术栈

- **前端框架**: Next.js 14 + React 18
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **UI 组件**: Radix UI
- **开发语言**: TypeScript

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 项目结构

```
serectbites_portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # React 组件
│   └── ui/               # UI 组件库
│       └── accordion.tsx  # 手风琴组件
├── lib/                  # 工具函数
│   └── utils.ts          # 通用工具函数
├── package.json          # 项目配置
├── tailwind.config.js    # Tailwind 配置
├── tsconfig.json         # TypeScript 配置
└── README.md             # 项目说明
```

## 功能特性

- 📍 地图主视图展示餐厅位置
- 🔍 餐厅搜索功能
- ⭐ 四级评分系统
- 👥 好友系统与共享功能
- 📊 数据统计与分析
- 🎨 现代化 UI 设计

## 版本演进

1. **版本一**: 收藏点 MVP - 基础地图功能
2. **版本二**: 打分点 + 信息面板 - 评分系统
3. **版本三**: 登录功能 + 云数据库 - 用户系统
4. **版本四**: 好友系统 + 共享功能 - 社交功能

## 联系方式

- 求职人：王雨晴
- 目标岗位：地图 / 产品
