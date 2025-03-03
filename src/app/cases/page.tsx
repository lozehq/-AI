'use client';

import Image from 'next/image';
import { Star, TrendingUp, Users, Play } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: '美妆博主短视频爆红案例',
    platform: '抖音',
    description: '通过我们的服务，客户在一个月内粉丝量从5000增长到50万+，单条视频最高播放量达到500万',
    image: 'https://picsum.photos/id/11/400',
    stats: {
      followers: '50万+',
      views: '500万+',
      engagement: '8.5%',
    },
    testimonial: {
      content: '没想到效果这么好！不仅涨粉快，互动质量也特别高，推荐给同行都说好。',
      author: 'Sarah',
      role: '美妆博主',
    },
  },
  {
    id: 2,
    title: '生活方式种草账号增长案例',
    platform: '小红书',
    description: '帮助客户的笔记多次登上热门榜单，月度涨粉20万+，笔记平均收藏率达到15%',
    image: 'https://picsum.photos/id/12/400',
    stats: {
      followers: '20万+',
      views: '300万+',
      engagement: '15%',
    },
    testimonial: {
      content: '数据增长非常稳定，最重要的是带来了很多精准粉丝，转化率很高。',
      author: 'Linda',
      role: '生活方式博主',
    },
  },
  {
    id: 3,
    title: '游戏实况UP主成长案例',
    platform: '哔哩哔哩',
    description: '通过精准的内容推广，帮助UP主在3个月内实现粉丝突破100万，多个视频登上排行榜',
    image: 'https://picsum.photos/id/13/400',
    stats: {
      followers: '100万+',
      views: '1000万+',
      engagement: '12%',
    },
    testimonial: {
      content: '从小UP主到百万粉丝博主，感谢团队的专业支持和建议！',
      author: 'Jack',
      role: '游戏UP主',
    },
  },
  {
    id: 4,
    title: '企业品牌号成长案例',
    platform: '视频号',
    description: '帮助某美妆品牌视频号实现月度涨粉15万+，平均观看完成率达到85%，带货转化率显著提升',
    image: 'https://picsum.photos/id/14/400',
    stats: {
      followers: '15万+',
      views: '200万+',
      engagement: '6.5%',
    },
    testimonial: {
      content: '专业的运营团队，帮我们打造了一个高质量的私域流量池。',
      author: 'Emma',
      role: '品牌总监',
    },
  },
];

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            成功案例
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            我们帮助众多创作者和品牌实现快速增长，
            通过专业的流量优化服务，让优质内容获得更多关注。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((case_) => (
            <div
              key={case_.id}
              className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={case_.image}
                  alt={case_.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 backdrop-blur-xl mb-2">
                    {case_.platform}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-100">{case_.title}</h2>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-400 mb-8">{case_.description}</p>

                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-900/50 rounded-xl mb-8">
                  <div className="text-center">
                    <Users className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-100">
                      {case_.stats.followers}
                    </div>
                    <div className="text-xs text-gray-400">粉丝增长</div>
                  </div>
                  <div className="text-center">
                    <Play className="h-5 w-5 text-purple-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-100">
                      {case_.stats.views}
                    </div>
                    <div className="text-xs text-gray-400">播放量</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-5 w-5 text-green-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-100">
                      {case_.stats.engagement}
                    </div>
                    <div className="text-xs text-gray-400">互动率</div>
                  </div>
                </div>

                <div className="bg-gray-900/30 rounded-xl p-4">
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-400 italic mb-4">"{case_.testimonial.content}"</p>
                  <div className="text-sm">
                    <span className="text-gray-100 font-medium">
                      {case_.testimonial.author}
                    </span>
                    <span className="text-gray-400"> · {case_.testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 