# 本地图片使用指南

## 方法一：使用 Next.js Image 组件（推荐）

### 1. 创建图片文件夹
在 `public` 文件夹下创建 `images` 文件夹：
```
public/
└── images/
    ├── homepage.jpg
    ├── user-profile.png
    ├── friend-management.jpg
    ├── search-interface.jpg
    ├── rating-system.jpg
    └── statistics.jpg
```

### 2. 在代码中使用
```tsx
import Image from 'next/image';

// 在组件中使用
<Image 
  src="/images/homepage.jpg" 
  alt="首页界面" 
  width={800}
  height={400}
  className="w-full h-auto object-cover"
/>
```

### 3. Next.js Image 组件的优势
- 自动优化图片大小和格式
- 懒加载
- 防止布局偏移
- 更好的性能

## 方法二：使用普通 img 标签

```tsx
<img 
  src="/images/homepage.jpg" 
  alt="首页界面" 
  className="w-full h-auto object-cover"
/>
```

## 方法三：使用 CSS 背景图片

```tsx
// 在 CSS 中
.background-image {
  background-image: url('/images/homepage.jpg');
  background-size: cover;
  background-position: center;
}

// 在 JSX 中
<div className="background-image w-full h-64"></div>
```

## 图片文件建议

### 支持的格式
- JPG/JPEG - 适合照片
- PNG - 适合需要透明背景的图片
- WebP - 现代格式，体积更小
- SVG - 矢量图形，适合图标

### 文件命名建议
- 使用小写字母
- 用连字符分隔单词
- 描述性名称
- 例如：`homepage-screenshot.jpg`, `user-profile-avatar.png`

### 图片尺寸建议
- 首页截图：800x400 或 1200x600
- 用户头像：200x200
- 功能截图：800x600
- 统计图表：600x400

## 示例：替换所有功能展示图片

```tsx
// 首页功能
<Image 
  src="/images/homepage.jpg" 
  alt="首页界面" 
  width={800}
  height={400}
  className="w-full h-auto object-cover"
/>

// 用户管理功能
<Image 
  src="/images/user-profile.jpg" 
  alt="用户管理界面" 
  width={800}
  height={400}
  className="w-full h-auto object-cover"
/>

// 好友管理功能
<Image 
  src="/images/friend-management.jpg" 
  alt="好友管理界面" 
  width={800}
  height={400}
  className="w-full h-auto object-cover"
/>

// 筛选功能
<Image 
  src="/images/filter-options.jpg" 
  alt="筛选功能界面" 
  width={800}
  height={400}
  className="w-full h-auto object-cover"
/>

// 搜索界面
<Image 
  src="/images/search-interface.jpg" 
  alt="搜索界面" 
  width={800}
  height={400}
  className="w-full h-auto object-cover"
/>

// 评分界面
<Image 
  src="/images/rating-system.jpg" 
  alt="评分界面" 
  width={800}
  height={400}
  className="w-full h-auto object-cover"
/>

// 统计界面
<Image 
  src="/images/statistics.jpg" 
  alt="统计界面" 
  width={800}
  height={400}
  className="w-full h-auto object-cover"
/>
```

## 注意事项

1. **文件路径**：图片路径以 `/` 开头，表示从 `public` 文件夹开始
2. **文件大小**：建议单张图片不超过 1MB
3. **备用方案**：如果本地图片不存在，可以保留在线图片作为备用
4. **SEO 优化**：为每张图片添加有意义的 `alt` 属性
