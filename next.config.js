/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 关键配置
  images: { unoptimized: true }, // 禁用图片优化
  basePath: '/SerectBites_Portfolio', // 仓库名需匹配
};

module.exports = nextConfig
