'use client';

import { useState } from 'react';
import { useCartStore } from '@/store/cart';
import { Product } from '@/data/products';

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCartStore();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    addItem(product);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAdding(false);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="btn-primary w-full h-10"
    >
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </button>
  );
}
