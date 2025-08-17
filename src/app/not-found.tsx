'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Card */}
            <div className="card-large p-12">
              {/* 404 Number */}
              <h1 className="mb-8 text-6xl font-bold text-accent">404</h1>

              {/* Error Message */}
              <h2 className="mb-6">Page Not Found</h2>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved. Let&apos;s get you back to exploring our fragrance
                collection.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn-primary text-base px-8 py-3">
                  Go Home
                </Link>
                <Link
                  href="/products"
                  className="btn-outline text-base px-8 py-3"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
