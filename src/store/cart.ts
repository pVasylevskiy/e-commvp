import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  brand: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: product => {
        set(state => {
          const existingItem = state.items.find(i => i.id === product.id);

          if (existingItem) {
            return {
              items: state.items.map(i =>
                i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.image,
                brand: product.brand,
              },
            ],
          };
        });
      },

      removeItem: id => {
        set(state => ({
          items: state.items.filter(item => item.id !== id),
        }));
      },

      incrementQuantity: id => {
        set(state => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }));
      },

      decrementQuantity: id => {
        set(state => {
          const item = state.items.find(i => i.id === id);
          if (!item) return state;

          if (item.quantity <= 1) {
            return {
              items: state.items.filter(i => i.id !== id),
            };
          }

          return {
            items: state.items.map(i =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ),
          };
        });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        set(state => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: 'moonlight-cart-storage',
    }
  )
);
