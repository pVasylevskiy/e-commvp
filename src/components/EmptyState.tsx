'use client';

import { motion } from 'framer-motion';
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface EmptyStateProps {
  type: 'cart' | 'search';
  title: string;
  description: string;
  actionText: string;
  actionHref: string;
}

export function EmptyState({
  type,
  title,
  description,
  actionText,
  actionHref,
}: EmptyStateProps) {
  const Icon = type === 'cart' ? ShoppingBagIcon : MagnifyingGlassIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20"
    >
      <div className="glass-card rounded-2xl p-12 max-w-md mx-auto">
        <div className="mx-auto w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-8">
          <Icon className="w-12 h-12 text-accent" />
        </div>

        <h3 className="text-3xl font-display font-bold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {description}
        </p>

        <Link href={actionHref} className="btn-primary inline-block">
          {actionText}
        </Link>
      </div>
    </motion.div>
  );
}
