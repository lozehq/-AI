'use client';

import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-100 mb-4">购物车是空的</h1>
            <p className="text-gray-400 mb-8">快去选购你需要的服务吧！</p>
            <Link
              href="/"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              继续浏览
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-100 mb-8">购物车</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-gray-800/50 rounded-2xl p-6 flex items-center gap-6"
              >
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-100">
                    {item.product.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {item.product.platform} · {item.product.duration}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                        className="p-1 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
                      >
                        <Minus className="h-4 w-4 text-gray-400" />
                      </button>
                      <span className="text-gray-100 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
                      >
                        <Plus className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-blue-400">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-6 h-fit">
            <h3 className="text-xl font-semibold text-gray-100 mb-6">订单摘要</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-400">
                <span>商品总价</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-gray-100">应付总额</span>
                  <span className="text-blue-400">{formatPrice(total)}</span>
                </div>
              </div>
              <button className="w-full py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
                立即结算
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 