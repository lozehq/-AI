'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductList from '@/components/ProductList';
import PlatformFilter from '@/components/CategoryFilter';
import { Sliders, ArrowDownWideNarrow } from 'lucide-react';

export default function ServicesPage() {
  const platforms = Array.from(new Set(products.map((p) => p.platform)));
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'price' | 'rating'>('rating');

  const filteredProducts = selectedPlatform
    ? products.filter((p) => p.platform === selectedPlatform)
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    }
    return b.rating - a.rating;
  });

  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            服务套餐
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            我们提供多种专业的流量加速服务套餐，覆盖各大主流平台，
            助您快速提升内容影响力和用户互动。
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <PlatformFilter
            platforms={platforms}
            selectedPlatform={selectedPlatform}
            onSelectPlatform={setSelectedPlatform}
          />

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <Sliders className="h-4 w-4 text-gray-300" />
              <span>排序方式:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'price' | 'rating')}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-2 text-gray-300 focus:outline-none focus:border-blue-500/50 focus:text-blue-400"
            >
              <option value="rating" className="bg-gray-800 text-gray-300">评分最高</option>
              <option value="price" className="bg-gray-800 text-gray-300">价格最低</option>
            </select>
          </div>
        </div>

        <ProductList products={sortedProducts} />
      </div>
    </main>
  );
} 