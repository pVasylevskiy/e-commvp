'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Moonlight
                </h3>
              </Link>
              <p className="text-muted-foreground mb-4 max-w-md">
                Discover your signature scent with our curated collection of
                luxury fragrances. Each scent tells a unique story and offers an
                unforgettable experience.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/products"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/checkout"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:support@moonlight.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground">Shipping Info</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Returns</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2024 Moonlight. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
