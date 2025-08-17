'use client';

import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-card">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6">Discover Your Signature Scent</h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Explore our curated collection of luxury fragrances. From classic
              elegance to modern sophistication, find the perfect scent that
              tells your story.
            </p>
            <Link href="/products" className="btn-primary text-base px-8 py-3">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Fragrances</h2>
            <p className="text-muted-foreground">
              Handpicked selections from our premium collection
            </p>
          </div>

          <div className="grid-responsive">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Moonlight</h2>
            <p className="text-muted-foreground">
              Premium quality and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">
                Authentic luxury fragrances from world-renowned brands
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Free shipping on orders over $100 with secure packaging
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">30-Day Returns</h3>
              <p className="text-muted-foreground text-sm">
                Hassle-free returns if you&apos;re not completely satisfied
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
