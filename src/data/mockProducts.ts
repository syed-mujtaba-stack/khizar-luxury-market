
import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Leather Jacket',
    description: 'Handcrafted premium leather jacket with a modern fit. Perfect for any occasion.',
    price: 25000,
    discountPrice: 19999,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
    category: 'Clothing',
    subcategory: 'Outerwear',
    stock: 15,
    rating: 4.8,
    reviews: 24,
    featured: true,
    isNew: true,
    isLuxury: false,
    specifications: {
      'Material': 'Full Grain Leather',
      'Lining': 'Polyester',
      'Closure': 'Zipper',
      'Care': 'Professional leather clean only'
    }
  },
  {
    id: '2',
    name: 'Wireless Noise Cancelling Headphones',
    description: 'Experience superior sound quality with these premium wireless noise cancelling headphones.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    category: 'Electronics',
    subcategory: 'Audio',
    stock: 20,
    rating: 4.6,
    reviews: 42,
    featured: true,
    isNew: false,
    isLuxury: false,
    specifications: {
      'Battery Life': 'Up to 30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Noise Cancellation': 'Active',
      'Warranty': '2 years'
    }
  },
  {
    id: '3',
    name: 'Marble Coffee Table',
    description: 'Elegant coffee table with a genuine marble top and solid wood legs.',
    price: 45000,
    discountPrice: 39999,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    category: 'Home Decor',
    subcategory: 'Furniture',
    stock: 8,
    rating: 4.9,
    reviews: 17,
    featured: true,
    isNew: false,
    isLuxury: false,
    specifications: {
      'Material': 'Genuine Marble, Solid Wood',
      'Dimensions': '120cm x 70cm x 45cm',
      'Weight': '35kg',
      'Assembly': 'Required'
    }
  },
  {
    id: '4',
    name: 'Designer Perfume - Luxury Collection',
    description: 'An exquisite fragrance with notes of jasmine, amber, and sandalwood. Long-lasting and perfect for special occasions.',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800',
    category: 'Luxury Corner',
    subcategory: 'Perfumes',
    stock: 12,
    rating: 5.0,
    reviews: 31,
    featured: true,
    isNew: true,
    isLuxury: true,
    specifications: {
      'Volume': '100ml',
      'Type': 'Eau de Parfum',
      'Notes': 'Jasmine, Amber, Sandalwood',
      'Origin': 'France'
    }
  },
  {
    id: '5',
    name: 'Premium Gold Bracelet',
    description: 'Handcrafted 18k gold bracelet with delicate chain links and a secure clasp.',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
    category: 'Luxury Corner',
    subcategory: 'Jewelry',
    stock: 5,
    rating: 4.9,
    reviews: 14,
    featured: false,
    isNew: false,
    isLuxury: true,
    specifications: {
      'Material': '18k Gold',
      'Weight': '12g',
      'Length': '18cm',
      'Clasp': 'Lobster'
    }
  },
  {
    id: '6',
    name: 'Luxury Chronograph Watch',
    description: 'Precision engineered chronograph watch with genuine leather strap and sapphire crystal glass.',
    price: 120000,
    discountPrice: 99999,
    image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&q=80&w=800',
    category: 'Luxury Corner',
    subcategory: 'Watches',
    stock: 7,
    rating: 4.8,
    reviews: 22,
    featured: false,
    isNew: true,
    isLuxury: true,
    specifications: {
      'Movement': 'Automatic',
      'Case Material': 'Stainless Steel',
      'Band': 'Genuine Leather',
      'Water Resistance': '100m'
    }
  },
  {
    id: '7',
    name: 'Casual Cotton T-Shirt',
    description: 'Comfortable and stylish cotton t-shirt perfect for everyday wear.',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    category: 'Clothing',
    subcategory: 'Tops',
    stock: 50,
    rating: 4.5,
    reviews: 65,
    featured: false,
    isNew: false,
    isLuxury: false,
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Regular',
      'Care': 'Machine washable',
      'Origin': 'Pakistan'
    }
  },
  {
    id: '8',
    name: 'Smart LED TV - 55 inch',
    description: 'Ultra HD smart TV with built-in streaming apps and voice control.',
    price: 85000,
    discountPrice: 79999,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800',
    category: 'Electronics',
    subcategory: 'Television',
    stock: 15,
    rating: 4.7,
    reviews: 36,
    featured: false,
    isNew: false,
    isLuxury: false,
    specifications: {
      'Display': '55" LED',
      'Resolution': '4K Ultra HD',
      'Connectivity': 'WiFi, Bluetooth, HDMI x3',
      'Smart Features': 'Voice control, Streaming apps'
    }
  }
];
