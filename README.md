# Moonlight Perfume - E-commerce Scaffold

A modern, responsive e-commerce platform for luxury fragrances built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **State Management**: Zustand for cart and theme management with localStorage persistence
- **Form Validation**: Zod schema validation for checkout forms
- **Animations**: Framer Motion for smooth micro-interactions and page transitions
- **Dark Mode**: Class-based dark mode with CSS variables and persistent storage
- **Responsive Design**: Optimized for all devices from 320px to 1440px
- **Accessibility**: ARIA labels, focus management, and AA+ contrast compliance

## 🛍️ E-commerce Features

- **Product Catalog**: Browse and filter products by tags (All, New, Luxury)
- **Shopping Cart**: Add, remove, and adjust quantities with persistent storage
- **Checkout Process**: Multi-step checkout with form validation
- **Order Confirmation**: Success page with order details and next steps
- **Product Details**: Individual product pages with images and descriptions

## 📱 Pages & Routes

- `/` - Home page with hero section and featured products
- `/products` - Product grid with tag filtering
- `/products/[slug]` - Individual product details
- `/cart` - Shopping cart with quantity controls
- `/checkout` - Checkout form with validation
- `/thank-you` - Order confirmation page
- `404` - Custom not found page
- Loading states for all page transitions

## 🎨 Design System

- **Typography**: Inter (body) and Manrope (display) fonts
- **Color Palette**: 
  - Primary: #6E56CF (purple)
  - Secondary: #12B886 (teal)
  - Light theme: #F7F7F8 background, #0B0B0C text
  - Dark theme equivalents via CSS variables
- **Components**: Minimalist design with soft corners (rounded-2xl), subtle shadows
- **Spacing**: Airy, consistent spacing system
- **Animations**: Hover effects, press feedback, scroll reveals

## 🛠️ Components

- **Header**: Sticky navigation with scroll effects and cart count
- **Footer**: Links to GitHub and email
- **ProductCard**: Product display with hover effects and parallax images
- **PriceBadge**: Price display component
- **AddToCartButton**: Interactive add to cart button
- **CartSummary**: Order summary with totals
- **CheckoutForm**: Form with Zod validation
- **EmptyState**: Empty cart and no results states
- **ThemeProvider**: Dark mode management
- **ThemeToggle**: Theme switcher with animations

## 📊 Data Structure

### Products
```typescript
interface Product {
  id: string;
  name: string;
  brand: string;
  slug: string;
  price: number;
  image: string; // Unsplash URLs
  description: string;
  tags: string[]; // ["new", "luxury"]
}
```

### Sample Products
- Dior Sauvage
- Chanel No. 5
- YSL Black Opium
- Gucci Bloom
- Tom Ford Noir
- Versace Eros
- Jo Malone Wood Sage & Sea Salt
- Maison Margiela Jazz Club

## 🔧 Technical Implementation

### State Management
- **Cart Store**: Add, remove, increment, decrement, clear, totals
- **Theme Store**: Light/dark mode toggle with persistence
- **Local Storage**: Automatic persistence for cart and theme preferences

### Form Validation
- **Zod Schemas**: Type-safe validation for checkout forms
- **Error Handling**: Field-level error display and validation
- **Form Submission**: Console logging of order data, cart clearing, redirect

### Animations & Interactions
- **Hover Effects**: Scale (1.02) and shadow changes on ProductCard
- **Image Parallax**: Subtle 2-3px movement on hover
- **Button Feedback**: Press animations (y: 1-2px)
- **Scroll Reveals**: Fade + 10px y animations on scroll
- **Page Transitions**: Smooth loading states and route changes

### Responsive Design
- **Breakpoints**: xs (320px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1440px)
- **Grid Systems**: Adaptive layouts for different screen sizes
- **Typography**: Responsive font sizes and spacing

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── products/          # Product pages
│   ├── cart/              # Cart page
│   ├── checkout/          # Checkout page
│   ├── thank-you/         # Order confirmation
│   ├── loading.tsx        # Loading component
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── ProductCard.tsx    # Product display card
│   ├── PriceBadge.tsx     # Price component
│   ├── AddToCartButton.tsx # Add to cart button
│   ├── CartSummary.tsx    # Cart totals
│   ├── CheckoutForm.tsx   # Checkout form
│   ├── EmptyState.tsx     # Empty states
│   ├── ThemeProvider.tsx  # Theme context
│   └── ThemeToggle.tsx    # Theme switcher
├── store/                 # Zustand stores
│   ├── cart.ts           # Cart state management
│   └── theme.ts          # Theme state management
└── data/                  # Static data
    └── products.ts       # Product catalog
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check Prettier formatting
- `npm run type-check` - Run TypeScript type checking

## 🌐 Browser Support

- Modern browsers with ES6+ support
- Responsive design from 320px to 1440px
- Progressive enhancement for animations
- Accessibility features for screen readers

## 📝 License

MIT License - feel free to use this scaffold for your own e-commerce projects!

## 🤝 Contributing

This is a scaffold project, but contributions are welcome! Feel free to:
- Report bugs or issues
- Suggest new features
- Submit pull requests
- Improve documentation

---

**Built with ❤️ using Next.js 14, TypeScript, Tailwind CSS, and Framer Motion**
