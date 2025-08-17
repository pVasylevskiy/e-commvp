'use client';

import { useCartStore } from '@/store/cart';
import { CheckoutForm } from '@/components/CheckoutForm';
import { CartSummary } from '@/components/CartSummary';
import { EmptyState } from '@/components/EmptyState';

export default function CheckoutPage() {
  const { items } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <section className="section">
          <div className="container">
            <EmptyState
              type="cart"
              title="Your cart is empty"
              description="You need to add items to your cart before proceeding to checkout."
              actionText="Shop Now"
              actionHref="/products"
            />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4">Checkout</h1>
            <p className="text-muted-foreground">
              Complete your order with secure checkout
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div>
              <div className="card-large p-6 md:p-8">
                <h2 className="mb-8">Shipping Information</h2>
                <CheckoutForm />
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <CartSummary />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
