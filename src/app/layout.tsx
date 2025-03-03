import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '现代电商网站',
  description: '使用 Next.js 14 构建的现代电商网站',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={cn(inter.className, 'min-h-screen bg-background')}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
} 