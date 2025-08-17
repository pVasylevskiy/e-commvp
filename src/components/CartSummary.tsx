'use client';

import { useCartStore } from '@/store/cart';

export function CartSummary() {
  const { getTotalItems, getTotalPrice } = useCartStore();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <div className="glass-card rounded-2xl p-8">
      <h3 className="text-2xl font-display font-semibold mb-6">
        Order Summary
      </h3>

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
        <div className="flex justify-between text-xl font-display font-bold">
          <span>Total</span>
          <span className="text-accent">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
