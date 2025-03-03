import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, Zap, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className={cn(
        'group relative block overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/80',
        className
      )}
    >
      <div className="relative aspect-[4/3] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-gray-900 p-6">
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={false}
            className="object-cover opacity-10"
            loading="lazy"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 backdrop-blur-xl">
            {product.platform}
          </div>
          <div className="mt-4 inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400 backdrop-blur-xl">
            {product.activationType}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">
          {product.name}
        </h3>
        <p className="mt-3 text-sm text-gray-300 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center text-sm text-gray-300">
          <Clock className="mr-1.5 h-4 w-4 text-blue-400" />
          <span>服务周期: {product.duration}</span>
        </div>
        <div className="mt-4 space-y-2">
          {product.features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-300">
              <Zap className="mr-1.5 h-4 w-4 text-blue-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-blue-400">
              {formatPrice(product.price)}
            </p>
            <div className="mt-1 flex items-center space-x-1">
              <Star className="h-4 w-4 fill-current text-yellow-400" />
              <span className="text-sm text-gray-300">
                {product.rating} ({product.reviews}条评价)
              </span>
            </div>
          </div>
          <div className="rounded-full bg-blue-500/10 p-2 group-hover:bg-blue-500/20 transition-colors">
            <ChevronRight className="h-5 w-5 text-blue-400" />
          </div>
        </div>
      </div>
      {product.stock < 10 && product.stock > 0 && (
        <div className="absolute top-4 right-4 rounded-full bg-red-500/10 px-3 py-1 backdrop-blur-xl">
          <p className="text-sm font-medium text-red-400">
            仅剩 {product.stock} 个名额
          </p>
        </div>
      )}
      {product.stock === 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90 backdrop-blur-sm">
          <p className="text-xl font-bold text-gray-100">名额已满</p>
        </div>
      )}
    </Link>
  );
} 