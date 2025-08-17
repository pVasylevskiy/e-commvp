'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-glass border-b border-border/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-width section-padding">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.h1
              className="text-2xl font-display font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Moonlight
            </motion.h1>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-colors hover:text-accent ${
                  pathname === item.href ? 'text-accent' : 'text-foreground'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <CartIcon />
              <AnimatePresence>
                {getTotalItems() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium"
                  >
                    {getTotalItems()}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
