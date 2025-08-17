'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Background Blob */}
          <div className="blob-accent iris -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10" />

          {/* 404 Card */}
          <div className="glass-card rounded-2xl p-12 relative z-10">
            {/* 404 Number */}
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="text-8xl font-display font-bold text-gradient mb-8"
            >
              404
            </motion.h1>

            {/* Error Message */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-display font-bold mb-6"
            >
              Page Not Found
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8"
            >
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved. Let&apos;s get you back to exploring our fragrance
              collection.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/" className="btn-primary text-lg px-8 py-4">
                Go Home
              </Link>
              <Link href="/products" className="btn-outline text-lg px-8 py-4">
                Browse Products
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
