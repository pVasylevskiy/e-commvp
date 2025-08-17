'use client';

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
    <div className="text-center py-12">
      <div className="card-large p-12 max-w-md mx-auto">
        <div className="mx-auto w-24 h-24 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
          <Icon className="w-12 h-12 text-accent" />
        </div>

        <h2 className="mb-4">{title}</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {description}
        </p>

        <Link href={actionHref} className="btn-primary inline-block">
          {actionText}
        </Link>
      </div>
    </div>
  );
}
