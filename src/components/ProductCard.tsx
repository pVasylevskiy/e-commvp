'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { PriceBadge } from './PriceBadge';
import { AddToCartButton } from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl glass-card hover:shadow-glass transition-all duration-300"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            <Image
              src={product.image}
              alt={`${product.brand} ${product.name} perfume bottle`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4">
            <PriceBadge price={product.price} />
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
      
      <div className="p-6">
        <div className="mb-3">
          <p className="text-sm font-medium text-muted-foreground mb-1">{product.brand}</p>
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Add to Cart Button - Full Width */}
        <div className="w-full">
          <AddToCartButton product={product} />
        </div>
        
        {/* View Details Link - Hidden by default, shown on hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="mt-3 text-center"
        >
          <Link
            href={`/products/${product.slug}`}
            className="text-sm text-secondary hover:text-secondary/80 transition-colors font-medium"
          >
            View details →
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
