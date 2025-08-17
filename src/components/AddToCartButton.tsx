'use client';

import { motion } from 'framer-motion';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Product } from '@/data/products';
import { useCartStore } from '@/store/cart';

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <motion.button
      onClick={handleAddToCart}
      whileHover={{ scale: 1.02 }}
      whileTap={{ y: 1 }}
      className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 px-4 rounded-xl font-medium hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-200"
      aria-label={`Add ${product.name} to cart`}
    >
      <ShoppingCartIcon className="w-4 h-4" />
      Add to Cart
    </motion.button>
  );
}
