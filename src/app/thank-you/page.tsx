'use client';

import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen">
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Card */}
            <div className="card-large p-12">
              {/* Success Icon */}
              <div className="mx-auto w-24 h-24 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                <CheckCircleIcon className="w-12 h-12 text-accent" />
              </div>

              {/* Success Message */}
              <h1 className="mb-6">Order placed successfully!</h1>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                We&apos;ll be in touch soon with your order details and tracking
                information.
              </p>

              {/* Order Details */}
              <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                <h2 className="mb-4">What&apos;s Next?</h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    • You&apos;ll receive an order confirmation email shortly
                  </p>
                  <p>• Your order will be processed within 1-2 business days</p>
                  <p>
                    • Shipping confirmation with tracking number will be sent
                  </p>
                  <p>• Expected delivery: 3-5 business days</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="btn-primary text-base px-8 py-3"
                >
                  Continue Shopping
                </Link>
                <Link href="/" className="btn-outline text-base px-8 py-3">
                  Back to Home
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-border/30">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
