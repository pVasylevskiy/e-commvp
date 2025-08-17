'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, getProductsByTag } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { EmptyState } from '@/components/EmptyState';

const tags = ['all', 'new', 'luxury'];

export default function ProductsPage() {
  const [selectedTag, setSelectedTag] = useState('all');
  const filteredProducts = getProductsByTag(selectedTag);

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

  return (
    <div className="min-h-screen section-padding">
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-display font-bold mb-6">Our Collection</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of luxury fragrances, each crafted to tell a unique story
            and become your personal signature scent.
          </p>
        </motion.div>

        {/* Tag Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="glass-card rounded-2xl p-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-accent text-accent-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={selectedTag}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <EmptyState
                type="search"
                title="No products found"
                description={`No products match the "${selectedTag}" filter. Try selecting a different tag or browse our full collection.`}
                actionText="View All Products"
                actionHref="/products"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 text-muted-foreground"
        >
          Showing {filteredProducts.length} of {products.length} products
        </motion.div>
      </div>
    </div>
  );
}
