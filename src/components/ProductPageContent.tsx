'use client';

import Image from 'next/image';
import { Product } from '@/data/products';
import { AddToCartButton } from '@/components/AddToCartButton';

interface ProductPageContentProps {
  product: Product;
}

export function ProductPageContent({ product }: ProductPageContentProps) {
  return (
    <div className="min-h-screen">
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="card-large p-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.brand} ${product.name} perfume bottle`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-2 mt-6">
                {product.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-xl border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <p className="text-lg font-medium text-muted-foreground mb-3">
                  {product.brand}
                </p>
                <h1 className="mb-6">{product.name}</h1>
                <div className="mb-6">
                  <span className="text-3xl font-semibold text-accent">
                    ${product.price}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Add to Cart Button */}
              <div className="pt-6">
                <AddToCartButton product={product} />
              </div>

              {/* Additional Info */}
              <div className="pt-8 border-t border-border">
                <h2 className="mb-6">Product Details</h2>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span>Brand:</span>
                    <span className="text-foreground font-medium">
                      {product.brand}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span>Category:</span>
                    <span className="text-foreground font-medium">
                      Luxury Fragrance
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span>Volume:</span>
                    <span className="text-foreground font-medium">100ml</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Type:</span>
                    <span className="text-foreground font-medium">
                      Eau de Parfum
                    </span>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="card p-6">
                <h2 className="font-semibold mb-4">Shipping & Returns</h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• Free shipping on orders over $100</p>
                  <p>• 30-day return policy</p>
                  <p>• Secure packaging</p>
                  <p>• Tracked delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
