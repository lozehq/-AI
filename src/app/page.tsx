'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductList from '@/components/ProductList';
import PlatformFilter from '@/components/CategoryFilter';
import { Zap, Globe, Cpu, Shield } from 'lucide-react';

export default function Home() {
  const platforms = Array.from(new Set(products.map((p) => p.platform)));
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const filteredProducts = selectedPlatform
    ? products.filter((p) => p.platform === selectedPlatform)
    : products;

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>
        <div className="relative z-10 text-center space-y-6 px-4 max-w-5xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="relative w-20 h-20 rounded-2xl bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 flex items-center justify-center animate-pulse">
              <Zap className="h-10 w-10 text-blue-400" />
            </div>
          </div>
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            智能流量加速服务
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            采用先进的AI算法为您的社交媒体内容提供专业的流量推广服务，
            覆盖抖音、小红书、B站等主流平台，快速提升播放量、互动量和粉丝数。
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {platforms.slice(0, 4).map((platform) => (
              <div
                key={platform}
                className="group relative px-8 py-4 bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/80"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <p className="text-lg font-medium relative z-10">{platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              精选服务套餐
            </h2>
            <PlatformFilter
              platforms={platforms}
              selectedPlatform={selectedPlatform}
              onSelectPlatform={setSelectedPlatform}
            />
          </div>
          <ProductList products={filteredProducts} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            核心技术优势
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gray-800/30 border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50">
              <div className="mb-6 p-4 rounded-xl bg-blue-500/10 w-fit">
                <Cpu className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                AI智能分发
              </h3>
              <p className="text-gray-400 leading-relaxed">
                采用先进的算法确保内容最优分发和互动，
                服务开通后24小时内即可见效。
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gray-800/30 border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50">
              <div className="mb-6 p-4 rounded-xl bg-blue-500/10 w-fit">
                <Globe className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                全球流量网络
              </h3>
              <p className="text-gray-400 leading-relaxed">
                接入全球真实用户网络，确保真实有效的互动，
                提升账号权重和自然流量。
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gray-800/30 border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50">
              <div className="mb-6 p-4 rounded-xl bg-blue-500/10 w-fit">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                企业级安全
              </h3>
              <p className="text-gray-400 leading-relaxed">
                采用银行级安全协议和合规措施，
                确保您的账号安全和数据保护。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 