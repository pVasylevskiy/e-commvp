'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useCartStore } from '@/store/cart';

const checkoutSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  zip: z.string().min(5, 'Please enter a valid ZIP code'),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export function CheckoutForm() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [errors, setErrors] = useState<Partial<CheckoutFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      zip: formData.get('zip') as string,
    };

    try {
      const validatedData = checkoutSchema.parse(data);

      // Log the checkout data as requested
      console.log({
        customer: validatedData,
        items: items,
        total: getTotalPrice(),
      });

      // Clear cart and redirect
      clearCart();
      router.push('/thank-you');
    } catch (error) {
      // Simple error handling
      console.error('Validation error:', error);
      setErrors({ name: 'Please check all fields and try again' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-3">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`input-field ${
              errors.name ? 'border-red-500 ring-red-500' : ''
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-2">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-3">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`input-field ${
              errors.email ? 'border-red-500 ring-red-500' : ''
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-3">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className={`input-field ${
              errors.phone ? 'border-red-500 ring-red-500' : ''
            }`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-3">
            Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            className={`input-field ${
              errors.address ? 'border-red-500 ring-red-500' : ''
            }`}
            placeholder="123 Main St"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-2">{errors.address}</p>
          )}
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium mb-3">
            City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className={`input-field ${
              errors.city ? 'border-red-500 ring-red-500' : ''
            }`}
            placeholder="New York"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-2">{errors.city}</p>
          )}
        </div>

        <div>
          <label htmlFor="zip" className="block text-sm font-medium mb-3">
            ZIP Code *
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            required
            className={`input-field ${
              errors.zip ? 'border-red-500 ring-red-500' : ''
            }`}
            placeholder="10001"
          />
          {errors.zip && (
            <p className="text-red-500 text-sm mt-2">{errors.zip}</p>
          )}
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ y: 1 }}
        className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Processing...' : 'Complete Order'}
      </motion.button>
    </motion.form>
  );
}
