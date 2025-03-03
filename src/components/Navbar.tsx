'use client';

import Link from 'next/link';
import { Zap, ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
              <Zap className="h-5 w-5 text-blue-400" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              流量加速
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              服务套餐
            </Link>
            <Link
              href="/platforms"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              支持平台
            </Link>
            <Link
              href="/cases"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              成功案例
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              关于我们
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="p-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Link
              href="/account"
              className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all"
            >
              <User className="h-4 w-4" />
              <span>控制台</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-xl',
          isMobileMenuOpen ? 'block' : 'hidden'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/services"
            className="block px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors"
          >
            服务套餐
          </Link>
          <Link
            href="/platforms"
            className="block px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors"
          >
            支持平台
          </Link>
          <Link
            href="/cases"
            className="block px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors"
          >
            成功案例
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors"
          >
            关于我们
          </Link>
          <Link
            href="/account"
            className="block px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors"
          >
            控制台
          </Link>
        </div>
      </div>
    </nav>
  );
} 