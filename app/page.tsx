import React from 'react';
import Image from 'next/image';
import { MapPin, Search, Star, Users, Share2, User, BarChart3, Filter, Utensils, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* 美食背景 */}
      <div className="absolute inset-0 pointer-events-none" style={{ 
        opacity: 0.15,
        backgroundImage: `url('/美食背景.jpg')`,
        backgroundSize: '1836px 1560px',
        backgroundRepeat: 'repeat'
      }}>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm relative border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <h1 className="text-lg font-semibold text-[#1e3e87]">王雨晴</h1>
          <p className="text-sm text-gray-600">地图产品从 0 到 1 的尝试</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 relative">
        {/* 首页版头 */}
        <section className="min-h-screen flex items-center justify-center relative" style={{ marginTop: '-80px' }}>
          <div className="text-center max-w-4xl mx-auto px-4">
            {/* 主标题 */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl font-bold text-[#1e3e87] mb-2">
                SecretBites
              </h1>
              <div className="w-24 h-1 bg-[#f1875f] mx-auto"></div>
            </div>
            
            {/* 副标题 */}
            <div className="mb-10">
              <p className="text-2xl md:text-3xl text-[#1e3e87] mb-4 font-medium leading-relaxed">
                把最爱的餐厅，分享给最亲密的朋友
              </p>
              <div className="w-16 h-0.5 bg-[#ede4db] mx-auto"></div>
            </div>
            
            {/* 产品描述 */}
            <div className="mb-16">
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                一款基于地图标记的私人及好友专属餐厅记录分享工具
              </p>
            </div>
            
            {/* 个人信息卡片 */}
            <div className="bg-white rounded-2xl shadow-xl border border-[#ede4db] p-8 mb-16 max-w-md mx-auto">
              {/* 上半部分：头像、名字和学校专业（左对齐） */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
                  <Image 
                    src="/我的照片.jpg" 
                    alt="王雨晴照片" 
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-[#1e3e87] mb-1">王雨晴</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    中国科学院大学 地图学与地理信息系统 硕士 2026届
                  </p>
                </div>
              </div>
              
              {/* 分隔线 */}
              <div className="w-full h-px bg-[#ede4db] mb-6"></div>
              
              {/* 下半部分：目标岗位（居中） */}
              <div className="bg-[#ede4db] rounded-lg p-4 text-center">
                <p className="text-gray-700 font-medium">
                  目标岗位：<span className="text-[#1e3e87] font-semibold">地图 / 产品</span>
                </p>
              </div>
            </div>
            
            {/* 体验按钮 */}
            <div className="relative">
              <a 
                href="https://aiiyoq.github.io/SecretBites/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-5 bg-[#1e3e87] hover:bg-[#f1875f] text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                现在试试
              </a>
            </div>
          </div>
        </section>

        {/* 一、出发点 */}
        <section className="mb-16 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4">
              <div className="w-8 h-8 bg-[#1e3e87] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">01</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1e3e87]">出发点</h2>
            </div>
            <div className="w-20 h-0.5 bg-[#f1875f] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 font-medium">寻找求职方向，探索“产品”的可能性</p>
          </div>

          {/* 单一面板 */}
          <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db]">
            <h3 className="text-xl font-semibold text-[#1e3e87] mb-4">我能做什么？适合做什么？能力边界在哪里？</h3>
            <p className="text-gray-700 font-semibold mb-2">AI 编程的发展让我有机会从 0 到 1 开发一款产品：</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>探索自己的能力边界</li>
              <li>在秋招中展示产品构建与执行力</li>
            </ul>
            <p className="text-gray-700 font-semibold">产品的最初设想：结合自身 GIS 专业背景，围绕地理位置的实际问题展开</p>
          </div>
        </section>

        {/* 二、需求洞察 */}
        <section className="mb-16 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4">
              <div className="w-8 h-8 bg-[#1e3e87] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">02</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1e3e87]">需求洞察</h2>
            </div>
            <div className="w-20 h-0.5 bg-[#f1875f] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 font-medium">从“今天吃什么”的灵魂问题中挖掘痛点</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db]">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#f1875f] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-lg font-bold">!</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1e3e87]">痛点分析</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#f1875f] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700"><span className="font-semibold text-[#1e3e87]">记不住好餐厅：</span>突然想换换口味，却想不起曾经惊艳的那家小店</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#f1875f] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700"><span className="font-semibold text-[#1e3e87]">想推荐却没场合：</span>发朋友圈太打扰，私下又总错过合适的时机</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#f1875f] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700"><span className="font-semibold text-[#1e3e87]">点评平台不可信：</span>优惠换好评、刷单泛滥，真实评价难觅</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db]">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#1e3e87] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-lg font-bold">*</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1e3e87]">核心需求</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#1e3e87] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700"><span className="font-semibold text-[#1e3e87]">记录：</span>记录自己真实的用餐体验</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#1e3e87] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700"><span className="font-semibold text-[#1e3e87]">分享：</span>与好友进行可信的推荐与避雷</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 三、产品定位 */}
        <section className="mb-16 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4">
              <div className="w-8 h-8 bg-[#1e3e87] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">03</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1e3e87]">产品定位</h2>
            </div>
            <div className="w-20 h-0.5 bg-[#f1875f] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 font-medium">基于地图标记的私人及好友专属餐厅记录分享工具</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md relative border border-[#ede4db]">
            <div className="flex items-center mb-5">
              <div className="w-10 h-10 bg-[#f1875f] rounded-full flex items-center justify-center mr-3">
                <Utensils className="text-white w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-[#1e3e87]">产品名称：SecretBites</h3>
            </div>
            <ul className="list-disc pl-8 text-gray-700 space-y-2">
              <li><strong>Slogan：把最爱的餐厅，分享给最亲密的朋友</strong></li>
              <li>大众点评 + 朋友圈 + 地图</li>
              <li>它既是你的私人餐厅数据库，也是你与好友共享美食乐趣的秘密基地</li>
            </ul>
          </div>
        </section>

        {/* 四、原型设计 */}
        <section className="mb-16 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4">
              <div className="w-8 h-8 bg-[#1e3e87] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">04</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1e3e87]">原型设计</h2>
            </div>
            <div className="w-20 h-0.5 bg-[#f1875f] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 font-medium">地图主视图与信息面板的双重呈现</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f1875f] rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3e87]">首页</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">展示用户评分记录过的餐厅位置</p>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/原型-首页.png" 
                  alt="首页原型设计" 
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#1e3e87] rounded-full flex items-center justify-center mr-4">
                  <Search className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3e87]">搜索页</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">根据关键字查找餐厅</p>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/原型-搜索页.png" 
                  alt="搜索页原型设计" 
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f1875f] rounded-full flex items-center justify-center mr-4">
                  <Star className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3e87]">餐厅详情页</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">餐厅信息 + 用户与好友的评分</p>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/原型-详情页.png" 
                  alt="详情页原型设计" 
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 五、版本演进 */}
        <section className="mb-16 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4">
              <div className="w-8 h-8 bg-[#1e3e87] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">05</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1e3e87]">版本演进</h2>
            </div>
            <div className="w-20 h-0.5 bg-[#f1875f] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 font-medium">从本地收藏到云端共享的逐步实现路径</p>
          </div>
          
          <div className="relative">
            {/* 时间轴线 */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#ede4db] rounded-full"></div>
            
            <Accordion type="multiple" className="space-y-8">
              {/* 版本一 */}
              <AccordionItem value="item-1" className="relative pl-16 bg-white rounded-xl shadow-lg border border-[#ede4db]">
                <div className="absolute left-0 top-4 w-12 h-12 rounded-full bg-[#1e3e87] flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <AccordionTrigger className="hover:no-underline p-6">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-[#1e3e87] mb-2">版本一：收藏点 MVP</h3>
                    <p className="text-gray-700 leading-relaxed">实现了最小可用版本，完成了 "地图 + 收藏点 + 本地存储" 的基础功能</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="bg-[#ede4db] rounded-lg p-4">
                    <ul className="list-disc pl-6 text-gray-700 space-y-3">
                      <li>使用原生 HTML/CSS + JavaScript 设计了以地图为主体的前端界面</li>
                      <li>接入百度地图 API，实现地图初始化</li>
                      <li>实现 POI 搜索，获取经纬度坐标</li>
                      <li>实现 POI 信息窗口收藏，并设计 SVG 图标实现收藏点的自定义可视化</li>
                      <li>将收藏信息写入本地 localStorage</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              {/* 版本二 */}
              <AccordionItem value="item-2" className="relative pl-16 bg-white rounded-xl shadow-lg border border-[#ede4db]">
                <div className="absolute left-0 top-4 w-12 h-12 rounded-full bg-[#f1875f] flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <AccordionTrigger className="hover:no-underline p-6">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-[#1e3e87] mb-2">版本二：打分点 + 信息面板</h3>
                    <p className="text-gray-700 leading-relaxed">在收藏基础上升级为打分功能，整合多类信息至统一信息面板</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="bg-[#ede4db] rounded-lg p-4">
                    <ul className="list-disc pl-6 text-gray-700 space-y-3">
                      <li>收藏点升级为四级评分系统（超爱、喜欢、一般、不会再去了）</li>
                      <li>信息面板集成餐厅详情、评分信息、搜索结果与筛选功能</li>
                      <li>餐厅列表可按评分偏好排序，并支持按评分筛选</li>
                      <li>支持地图与信息面板的双向联动交互</li>
                      <li>优化地图缩放、展示与信息面板的自适应收缩效果</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              {/* 版本三 */}
              <AccordionItem value="item-3" className="relative pl-16 bg-white rounded-xl shadow-lg border border-[#ede4db]">
                <div className="absolute left-0 top-4 w-12 h-12 rounded-full bg-[#1e3e87] flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <AccordionTrigger className="hover:no-underline p-6">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-[#1e3e87] mb-2">版本三：登录功能 + 云数据库</h3>
                    <p className="text-gray-700 leading-relaxed">接入登录系统，使用 Supabase 管理用户与餐厅评分数据</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="bg-[#ede4db] rounded-lg p-4">
                    <ul className="list-disc pl-6 text-gray-700 space-y-3">
                      <li>支持用户注册与登录</li>
                      <li>构建 Supabase 数据库，包含用户管理表与餐厅评分数据表</li>
                      <li>实现用户评分筛选功能</li>
                      <li>优化数据刷新与展示逻辑</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              {/* 版本四 */}
              <AccordionItem value="item-4" className="relative pl-16 bg-white rounded-xl shadow-lg border border-[#ede4db]">
                <div className="absolute left-0 top-4 w-12 h-12 rounded-full bg-[#f1875f] flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <AccordionTrigger className="hover:no-underline p-6">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-[#1e3e87] mb-2">版本四：好友系统 + 共享功能</h3>
                    <p className="text-gray-700 leading-relaxed">构建好友系统，支持好友打分的展示与筛选，实现 "共享餐厅数据库" 的核心目标</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="bg-[#ede4db] rounded-lg p-4">
                    <ul className="list-disc pl-6 text-gray-700 space-y-3">
                      <li>实现前端好友系统界面</li>
                      <li>构建好友关系数据库结构</li>
                      <li>后端实现好友添加、删除、请求与评分获取等 API</li>
                      <li>展示好友评分并支持按好友筛选</li>
                      <li>扩展餐厅评分详情，支持展示用户打分与好友打分</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* 六、功能展示 */}
        <section className="mb-16 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4">
              <div className="w-8 h-8 bg-[#1e3e87] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">06</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1e3e87]">功能展示</h2>
            </div>
            <div className="w-20 h-0.5 bg-[#f1875f] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 font-medium">核心功能模块与界面展示</p>
          </div>
          
          <div className="space-y-12">
            {/* 1. 注册登录功能 */}
            <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f1875f] rounded-full flex items-center justify-center mr-4">
                  <User className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3e87]">注册登录功能</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">用户注册、登录及身份验证系统</p>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/注册登录页.png" 
                  alt="注册登录界面" 
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* 2. 首页及基础功能 */}
            <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#1e3e87] rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3e87]">首页及基础功能</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">登陆后的主界面，在地图和信息面板展示已评分餐厅，以及其他基础功能</p>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/首页.png" 
                  alt="首页界面" 
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* 3. 搜索功能 */}
            <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f1875f] rounded-full flex items-center justify-center mr-4">
                  <Search className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3e87]">搜索功能</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">根据关键词查找餐厅，在地图和信息面板同时显示</p>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/搜索功能.png" 
                  alt="搜索功能界面" 
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* 4. 评分功能 */}
            <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#1e3e87] rounded-full flex items-center justify-center mr-4">
                  <Star className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3e87]">评分功能</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">通过点选餐厅，进行四级喜爱度评分，地图和信息面板同步显示评分记录</p>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/评分功能.png" 
                  alt="评分功能界面" 
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* 5. 信息面板 */}
            <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f1875f] rounded-full flex items-center justify-center mr-4">
                  <Filter className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3e87]">信息面板</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">集成评分统计、餐厅列表、餐厅详情等信息</p>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/信息面板.png" 
                  alt="信息面板界面" 
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* 6. 个人信息与好友管理 */}
            <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db] hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#1e3e87] rounded-full flex items-center justify-center mr-4">
                  <Users className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3e87]">个人信息与好友管理</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">查看个人信息，并通过唯一ID进行好友添加、删除等操作</p>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/个人信息与好友管理.png" 
                  alt="个人信息与好友管理界面" 
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 七、产品思考 */}
        <section className="mb-16 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4">
              <div className="w-8 h-8 bg-[#1e3e87] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">07</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1e3e87]">产品思考</h2>
            </div>
            <div className="w-20 h-0.5 bg-[#f1875f] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 font-medium">借助 AI 工具从 0 到 1 的产品实践路径与体会</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db] hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f1875f] rounded-full flex items-center justify-center mr-4">
                  <BarChart3 className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3e87]">目前使用的工作流</h3>
              </div>
              <div className="bg-white rounded-lg p-6 flex-1">
                <div className="flex flex-col items-center text-center text-gray-800 max-w-md mx-auto">
                  <div className="w-full bg-[#ede4db] rounded-md px-4 py-3 font-semibold">明确开发需求</div>
                  <ChevronDown className="w-4 h-4 my-3 text-[#1e3e87]/60" />
                  <div className="w-full bg-[#ede4db] rounded-md px-4 py-3 font-semibold">与 AI 对话，确定实现逻辑，将需求拆解为小块</div>
                  <ChevronDown className="w-4 h-4 my-3 text-[#1e3e87]/60" />
                  <div className="w-full bg-[#ede4db] rounded-md px-4 py-3 font-semibold">提供上下文信息及参考资料，小步地让 AI 实现</div>
                  <ChevronDown className="w-4 h-4 my-3 text-[#1e3e87]/60" />
                  <div className="w-full bg-[#ede4db] rounded-md px-4 py-3 font-semibold">检查生成结果，提供具体线索给 AI debug</div>
                  <ChevronDown className="w-4 h-4 my-3 text-[#1e3e87]/60" />
                  <div className="w-full bg-[#ede4db] rounded-md px-4 py-3 font-semibold">评估效果，git 保存，记录开发日志</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db] hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#1e3e87] rounded-full flex items-center justify-center mr-4">
                  <Share2 className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3e87]">与 AI Coding 合作的实践经验</h3>
              </div>
              <div className="bg-[#ede4db] rounded-lg p-6 flex-1">
                <ul className="list-disc pl-6 text-gray-700 space-y-3">
                  <li><span className="font-semibold">掌握基础开发语言</span>，理解了逻辑才更容易与 AI 沟通，也能独立判断 debug 方向。</li>
                  <li><span className="font-semibold">一定要看开发文档</span>，要对自己需要调用什么接口心里有数，把做网页看成搭积木，再小的功能也能切分成更小的逻辑单元，这样和 cursor 沟通才更流畅。</li>
                  <li>
                    <span className="font-semibold">描述 bug 的技巧：</span>
                    <div className="pl-4 mt-1 text-gray-700">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>增加控制台输出帮助 AI 推理问题；</li>
                        <li>精确说明现象（如 "下方多出颜色为 #f0f0f0 的白边"）；</li>
                        <li>添加对比说明（如 "只有收起时出现，展开时没有"）。</li>
                      </ul>
                    </div>
                  </li>
                  <li>如果多轮对话未能解决问题，尝试 <span className="font-semibold">"从头思考"</span>，让 AI 从逻辑上重构思路；避免反复修补、治标不治本。</li>
                  <li>学会用 <span className="font-semibold">git</span> 管理代码版本，<span className="font-semibold">随时记录</span>开发进展、待处理任务以及经验教训。</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg relative border border-[#ede4db] hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#f1875f] rounded-full flex items-center justify-center mr-4">
                <User className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e3e87]">产品岗位与 AI Coding 的思考</h3>
            </div>
            <div className="bg-[#ede4db] rounded-lg p-8 border border-[#ede4db]">
              <ul className="list-disc pl-6 space-y-2 text-gray-800 leading-relaxed font-medium text-lg">
                <li>
                AI Coding 与产品经理的工作是相似的，需要
                  <span className="font-semibold text-[#1e3e87]">把握总体目标，有拆分需求的能力，对技术有理解，对新事物有好奇心，能把控项目进程</span>
                </li>
                <li>
                AI Coding 是产品经理的得力助手，帮助更流畅的与技术交流，对技术实现更有自己的理解
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white shadow-sm relative border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <h1 className="text-lg font-semibold text-[#1e3e87]">王雨晴</h1>
          <p className="text-sm text-gray-600">地图产品从 0 到 1 的尝试</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
