'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ProductsPage() {
  const [selectedTag, setSelectedTag] = useState('all');
  const tags = ['all', 'luxury', 'new'];

  const filteredProducts =
    selectedTag === 'all'
      ? products
      : products.filter(product => product.tags.includes(selectedTag));

  return (
    <div className="min-h-screen">
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="mb-4">Our Collection</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our curated selection of luxury fragrances. Each scent
              tells a unique story and offers an unforgettable experience.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-2 p-1 bg-card border border-border rounded-xl">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-accent text-accent-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tag === 'all'
                    ? 'All Products'
                    : tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid-responsive">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mt-12 text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>
      </section>
    </div>
  );
}
