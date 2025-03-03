'use client';

import { Zap, Users, TrendingUp, Shield, BarChart, Clock } from 'lucide-react';
import Image from 'next/image';

const platforms = [
  {
    name: '抖音',
    description: '国内最大的短视频平台，日活跃用户超过6亿',
    features: ['智能流量分发', '精准用户定向', '数据实时监控', '互动数据优化'],
    image: 'https://picsum.photos/id/1/400',
    stats: {
      users: '6亿+',
      avgViews: '100万+',
      successRate: '95%',
    },
  },
  {
    name: '小红书',
    description: '年轻人的生活方式平台，种草社区第一选择',
    features: ['笔记曝光提升', '用户精准触达', '热门榜单优化', '互动率提升'],
    image: 'https://picsum.photos/id/2/400',
    stats: {
      users: '2亿+',
      avgViews: '50万+',
      successRate: '92%',
    },
  },
  {
    name: '哔哩哔哩',
    description: '国内最大的年轻人文化社区和视频平台',
    features: ['视频流量加速', '粉丝增长优化', '排名权重提升', '互动指数优化'],
    image: 'https://picsum.photos/id/3/400',
    stats: {
      users: '3亿+',
      avgViews: '80万+',
      successRate: '94%',
    },
  },
  {
    name: '微信视频号',
    description: '微信生态内的短视频平台，私域流量的重要入口',
    features: ['粉丝快速增长', '播放量提升', '互动率优化', '直播引流'],
    image: 'https://picsum.photos/id/4/400',
    stats: {
      users: '4亿+',
      avgViews: '60万+',
      successRate: '93%',
    },
  },
];

export default function PlatformsPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            支持平台
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            我们支持主流社交媒体平台的流量加速服务，
            通过专业的技术和策略，帮助您在各个平台获得更好的曝光和互动。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={platform.image}
                  alt={platform.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h2 className="text-2xl font-bold text-gray-100">{platform.name}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-400 mb-6">{platform.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {platform.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-400">
                      <Zap className="h-4 w-4 text-blue-400 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-900/50 rounded-xl">
                  <div className="text-center">
                    <Users className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-100">
                      {platform.stats.users}
                    </div>
                    <div className="text-xs text-gray-400">日活用户</div>
                  </div>
                  <div className="text-center">
                    <BarChart className="h-5 w-5 text-purple-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-100">
                      {platform.stats.avgViews}
                    </div>
                    <div className="text-xs text-gray-400">平均播放</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-5 w-5 text-green-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-100">
                      {platform.stats.successRate}
                    </div>
                    <div className="text-xs text-gray-400">成功率</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-2xl p-6 text-center">
            <Shield className="h-8 w-8 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">安全可靠</h3>
            <p className="text-gray-400">
              采用银行级安全协议，确保账号安全和数据保护
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-6 text-center">
            <Clock className="h-8 w-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">快速响应</h3>
            <p className="text-gray-400">
              服务开通后24小时内开始执行，实时监控数据变化
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-6 text-center">
            <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">效果显著</h3>
            <p className="text-gray-400">
              平均提升300%以上的内容曝光量和互动量
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 