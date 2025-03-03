'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeft, Star, Clock, Zap, Shield, CheckCircle, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store/cart';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const product = products.find((p) => p.id === params.id);
  const [selectedDuration, setSelectedDuration] = useState(product?.duration);
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-100 mb-4">服务包未找到</h1>
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 flex items-center justify-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    router.push('/cart');
  };

  return (
    <main className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回首页
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 backdrop-blur-xl">
                {product.platform}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-100 mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-400">
                  {product.rating} ({product.reviews}条评价)
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="ml-1 text-gray-400">服务周期: {product.duration}</span>
              </div>
            </div>

            <p className="text-gray-400 mb-8">{product.description}</p>

            <div className="bg-gray-800/50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">服务特点</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-400">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-3xl font-bold text-blue-400">
                  {formatPrice(product.price)}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  {product.stock > 0 ? `库存: ${product.stock}` : '暂无库存'}
                </p>
              </div>
              <div className="space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="px-6 py-3 rounded-xl bg-gray-800 text-blue-400 font-medium hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  加入购物车
                </button>
                <button
                  disabled={product.stock === 0}
                  className="px-8 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {product.stock > 0 ? '立即购买' : '暂无库存'}
                </button>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">服务保障</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-400 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-100">安全保障</h4>
                    <p className="text-sm text-gray-400">采用银行级安全协议</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-5 w-5 text-blue-400 mr-2 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-100">快速响应</h4>
                    <p className="text-sm text-gray-400">24小时内开始执行</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 