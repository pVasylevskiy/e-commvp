'use client';

import { motion } from 'framer-motion';
import { useCartStore } from '@/store/cart';
import { CheckoutForm } from '@/components/CheckoutForm';
import { CartSummary } from '@/components/CartSummary';
import { EmptyState } from '@/components/EmptyState';

export default function CheckoutPage() {
  const { items } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen section-padding">
        <div className="container-width">
          <EmptyState
            type="cart"
            title="Your cart is empty"
            description="You need to add items to your cart before proceeding to checkout."
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
          className="mb-16 text-center"
        >
          <h1 className="text-5xl font-display font-bold mb-4">Checkout</h1>
          <p className="text-xl text-muted-foreground">
            Complete your order with secure checkout
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-display font-semibold mb-8">
                Shipping Information
              </h2>
              <CheckoutForm />
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <CartSummary />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
