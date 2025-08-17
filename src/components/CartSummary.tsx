'use client';

import { useCartStore } from '@/store/cart';
import Link from 'next/link';

export function CartSummary() {
  const { getTotalItems, getTotalPrice } = useCartStore();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <div className="card-large p-6">
      <h2 className="mb-6">Order Summary</h2>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between py-3 border-b border-border/30">
          <span className="text-muted-foreground">Items ({totalItems})</span>
          <span className="font-semibold">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-3 border-b border-border/30">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-secondary font-medium">Free</span>
        </div>
        <div className="flex justify-between py-3">
          <span className="text-muted-foreground">Tax</span>
          <span className="text-muted-foreground">Calculated at checkout</span>
        </div>
      </div>

      <div className="border-t border-border/30 pt-6">
        <div className="flex justify-between text-xl font-semibold">
          <span>Total</span>
          <span className="text-accent">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="/checkout"
          className="btn-primary w-full text-center text-base py-3"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
