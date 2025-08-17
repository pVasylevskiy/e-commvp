'use client';

import { motion } from 'framer-motion';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/store/cart';

export function CartIcon() {
  const { getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <motion.div className="relative" whileHover={{ scale: 1.05 }}>
      <ShoppingBagIcon className="w-6 h-6" />
      {totalItems > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium"
        >
          {totalItems}
        </motion.div>
      )}
    </motion.div>
  );
}
