'use client';

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

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <section className="section">
          <div className="container">
            <EmptyState
              type="cart"
              title="Your cart is empty"
              description="Looks like you haven't added any fragrances to your cart yet. Start exploring our collection to find your perfect scent."
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
          <div className="mb-12">
            <h1 className="mb-4">Shopping Cart</h1>
            <p className="text-muted-foreground">
              You have {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''}{' '}
              in your cart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="card p-4">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={`${item.brand} ${item.name} perfume bottle`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {item.name}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {item.brand}
                            </p>
                          </div>
                          <p className="text-lg font-semibold text-accent">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => decrementQuantity(item.id)}
                              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <MinusIcon className="w-4 h-4" />
                            </button>

                            <span className="w-12 text-center font-semibold">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => incrementQuantity(item.id)}
                              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                              aria-label="Increase quantity"
                            >
                              <PlusIcon className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
                            aria-label="Remove item"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="mt-8 text-center">
                <Link href="/products" className="btn-outline">
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
