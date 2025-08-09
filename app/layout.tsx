import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SecretBites - 王雨晴作品集',
  description: '地图产品从 0 到 1 的尝试',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
