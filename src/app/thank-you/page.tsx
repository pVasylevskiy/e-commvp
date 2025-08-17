'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Background Blob */}
          <div className="blob-accent iris -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          
          {/* Success Card */}
          <div className="glass-card rounded-2xl p-12 relative z-10">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mx-auto w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-8"
            >
              <CheckCircleIcon className="w-12 h-12 text-accent" />
            </motion.div>

            {/* Success Message */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-display font-bold mb-6"
            >
              Order placed successfully!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              We'll be in touch soon with your order details and tracking information.
            </motion.p>

            {/* Order Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-muted/30 rounded-2xl p-6 mb-8"
            >
              <h2 className="text-lg font-semibold mb-4">What's Next?</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• You'll receive an order confirmation email shortly</p>
                <p>• Your order will be processed within 1-2 business days</p>
                <p>• Shipping confirmation with tracking number will be sent</p>
                <p>• Expected delivery: 3-5 business days</p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/products"
                className="btn-primary text-lg px-8 py-4"
              >
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="btn-outline text-lg px-8 py-4"
              >
                Back to Home
              </Link>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-border/30"
          >
            <p className="text-muted-foreground mb-2">
              Have questions about your order?
            </p>
            <p className="text-sm text-muted-foreground">
              Contact us at{' '}
              <a
                href="mailto:support@moonlight.com"
                className="text-accent hover:underline"
              >
                support@moonlight.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
