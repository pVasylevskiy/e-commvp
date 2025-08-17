export interface Product {
  id: string;
  name: string;
  brand: string;
  slug: string;
  price: number;
  image: string;
  description: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Sauvage',
    brand: 'Dior',
    slug: 'dior-sauvage',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop&crop=center',
    description: 'A powerful and fresh fragrance with notes of bergamot, pepper, and ambroxan.',
    tags: ['luxury', 'new'],
  },
  {
    id: '2',
    name: 'No. 5',
    brand: 'Chanel',
    slug: 'chanel-no-5',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac856?w=800&h=800&fit=crop&crop=center',
    description: 'The iconic fragrance with notes of rose, jasmine, and vanilla.',
    tags: ['luxury'],
  },
  {
    id: '3',
    name: 'Black Opium',
    brand: 'YSL',
    slug: 'ysl-black-opium',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1592945403244-b3faa12b3c54?w=800&h=800&fit=crop&crop=center',
    description: 'An addictive gourmand fragrance with coffee, vanilla, and white flowers.',
    tags: ['luxury'],
  },
  {
    id: '4',
    name: 'Bloom',
    brand: 'Gucci',
    slug: 'gucci-bloom',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=800&fit=crop&crop=center',
    description: 'A white floral fragrance with tuberose and jasmine.',
    tags: ['new'],
  },
  {
    id: '5',
    name: 'Noir',
    brand: 'Tom Ford',
    slug: 'tom-ford-noir',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=800&fit=crop&crop=center',
    description: 'A sophisticated oriental fragrance with spices and amber.',
    tags: ['luxury'],
  },
  {
    id: '6',
    name: 'Eros',
    brand: 'Versace',
    slug: 'versace-eros',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop&crop=center',
    description: 'A fresh and sensual fragrance with mint, green apple, and vanilla.',
    tags: ['new'],
  },
  {
    id: '7',
    name: 'Wood Sage & Sea Salt',
    brand: 'Jo Malone',
    slug: 'jo-malone-wood-sage-sea-salt',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1592945403244-b3faa12b3c54?w=800&h=800&fit=crop&crop=center',
    description: 'A fresh and mineral fragrance inspired by the British coast.',
    tags: ['luxury'],
  },
  {
    id: '8',
    name: 'Jazz Club',
    brand: 'Maison Margiela',
    slug: 'maison-margiela-jazz-club',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac856?w=800&h=800&fit=crop&crop=center',
    description: 'A warm and intoxicating fragrance with rum, tobacco, and vanilla.',
    tags: ['luxury', 'new'],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductsByTag = (tag: string): Product[] => {
  if (tag === 'all') return products;
  return products.filter(product => product.tags.includes(tag));
};
