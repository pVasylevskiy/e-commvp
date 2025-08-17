'use client';

import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

const featuredProducts = products.slice(0, 3);

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative section-padding overflow-hidden"
      >
        {/* Background Blobs */}
        <div className="blob-accent iris top-1/4 left-1/4" />
        <div className="blob-accent mint bottom-1/4 right-1/4" />
        
        <div className="container-width text-center relative z-10">
          <motion.h1
            variants={itemVariants}
            className="text-6xl xs:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
          >
            <span className="block">Minimal scents,</span>
            <span className="block text-gradient">maximum style.</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Luxury perfumes reimagined for the everyday.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ y: 1 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Shop Collection
            </motion.a>
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ y: 1 }}
              className="btn-outline text-lg px-8 py-4"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="section-padding bg-muted/30"
      >
        <div className="container-width">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold mb-6">Featured Fragrances</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular and newest additions to the collection
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={product.id} 
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ y: 1 }}
              className="btn-outline"
            >
              View All Products
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="section-padding"
      >
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl font-display font-bold mb-8">
                Crafted with Passion
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Each fragrance in our collection is carefully selected to represent the finest 
                  in perfumery, combining traditional craftsmanship with modern innovation.
                </p>
                <p>
                  From the first spritz to the lingering dry-down, experience the artistry 
                  and sophistication that makes each scent truly exceptional.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="relative aspect-square rounded-2xl overflow-hidden glass-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl">🌸</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
