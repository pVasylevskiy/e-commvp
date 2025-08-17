'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { CartIcon } from './CartIcon';
import { useCartStore } from '@/store/cart';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { getTotalItems } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/cart', label: 'Cart' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-card border-b border-border shadow-sm'
          : 'bg-card border-b border-border'
      }`}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-semibold text-foreground">
              Moonlight
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-colors hover:text-accent ${
                  pathname === item.href ? 'text-accent' : 'text-foreground'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <CartIcon />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
