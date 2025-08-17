'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cart';
import { CartSummary } from '@/components/CartSummary';
import { EmptyState } from '@/components/EmptyState';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

export default function CartPage() {
  const {
    items,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    getTotalItems,
  } = useCartStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen section-padding">
        <div className="container-width">
          <EmptyState
            type="cart"
            title="Your cart is empty"
            description="Looks like you haven't added any fragrances to your cart yet. Start exploring our collection to find your perfect scent."
            actionText="Shop Now"
            actionHref="/products"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-display font-bold mb-4">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground text-lg">
            You have {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in
            your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="relative w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={`${item.brand} ${item.name} perfume bottle`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                            {item.name}
                          </h3>
                          <p className="text-muted-foreground">{item.brand}</p>
                        </div>
                        <p className="text-2xl font-bold text-accent">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => decrementQuantity(item.id)}
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <MinusIcon className="w-4 h-4" />
                          </motion.button>

                          <span className="w-16 text-center font-semibold text-lg">
                            {item.quantity}
                          </span>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => incrementQuantity(item.id)}
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                            aria-label="Increase quantity"
                          >
                            <PlusIcon className="w-5 h-5" />
                          </motion.button>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600 transition-colors p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20"
                          aria-label="Remove item"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Continue Shopping */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <Link href="/products" className="btn-outline">
                ← Continue Shopping
              </Link>
            </motion.div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <CartSummary />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Link
                  href="/checkout"
                  className="btn-primary w-full text-center text-lg py-4"
                >
                  Proceed to Checkout
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
