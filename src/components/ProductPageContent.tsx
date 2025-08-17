'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Product } from '@/data/products';
import { PriceBadge } from '@/components/PriceBadge';
import { AddToCartButton } from '@/components/AddToCartButton';

interface ProductPageContentProps {
  product: Product;
}

export function ProductPageContent({ product }: ProductPageContentProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen section-padding">
      <div className="container-width">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Product Image */}
          <motion.div variants={itemVariants} className="relative">
            {/* Background Blob */}
            <div className="blob-accent mint -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

            <div className="glass-card rounded-2xl overflow-hidden p-4">
              <div className="aspect-square rounded-xl overflow-hidden">
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
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <p className="text-lg font-medium text-muted-foreground mb-3">
                {product.brand}
              </p>
              <h1 className="text-5xl font-display font-bold text-foreground mb-6">
                {product.name}
              </h1>
              <div className="mb-6">
                <PriceBadge price={product.price} />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-6">
              <AddToCartButton product={product} />
            </div>

            {/* Additional Info */}
            <div className="pt-8 border-t border-border/30">
              <h3 className="text-xl font-semibold mb-6">Product Details</h3>
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
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Shipping & Returns</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Free shipping on orders over $100</p>
                <p>• 30-day return policy</p>
                <p>• Secure packaging</p>
                <p>• Tracked delivery</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
