'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { AddToCartButton } from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card p-4 group">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl mb-4">
          <Image
            src={product.image}
            alt={`${product.brand} ${product.name} perfume bottle`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">
            {product.brand}
          </p>
          <h3 className="font-semibold text-foreground line-clamp-2 leading-tight">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-accent">
              ${product.price}
            </span>
          </div>
        </div>
      </Link>

      <div className="mt-4">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
