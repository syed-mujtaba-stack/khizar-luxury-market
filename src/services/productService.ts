
import { Product } from '@/types/product';
import { mockProducts } from '@/data/mockProducts';

// This service simulates API calls but can be easily modified to use real API endpoints later

/**
 * Get all products
 */
export const getAllProducts = async (): Promise<Product[]> => {
  // In a real app, this would be a fetch call to your API
  // return fetch('/api/products').then(res => res.json());
  
  // For now, return mock data with a slight delay to simulate network
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 300);
  });
};

/**
 * Get a single product by ID
 */
export const getProductById = async (id: string): Promise<Product | null> => {
  // In a real app: return fetch(`/api/products/${id}`).then(res => res.json());
  
  return new Promise(resolve => {
    setTimeout(() => {
      const product = mockProducts.find(p => p.id === id);
      resolve(product || null);
    }, 200);
  });
};

/**
 * Get products by category
 */
export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  // In a real app: return fetch(`/api/products?category=${category}`).then(res => res.json());
  
  return new Promise(resolve => {
    setTimeout(() => {
      const filteredProducts = mockProducts.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
      );
      resolve(filteredProducts);
    }, 300);
  });
};

/**
 * Search for products
 */
export const searchProducts = async (query: string): Promise<Product[]> => {
  // In a real app: return fetch(`/api/products/search?q=${query}`).then(res => res.json());
  
  return new Promise(resolve => {
    setTimeout(() => {
      const lowercaseQuery = query.toLowerCase();
      const results = mockProducts.filter(p => 
        p.name.toLowerCase().includes(lowercaseQuery) || 
        p.description.toLowerCase().includes(lowercaseQuery) ||
        p.category.toLowerCase().includes(lowercaseQuery)
      );
      resolve(results);
    }, 300);
  });
};

/**
 * Get featured products
 */
export const getFeaturedProducts = async (): Promise<Product[]> => {
  // In a real app: return fetch('/api/products/featured').then(res => res.json());
  
  return new Promise(resolve => {
    setTimeout(() => {
      const featuredProducts = mockProducts.filter(p => p.featured);
      resolve(featuredProducts);
    }, 300);
  });
};

/**
 * Get new arrivals
 */
export const getNewArrivals = async (): Promise<Product[]> => {
  // In a real app: return fetch('/api/products/new').then(res => res.json());
  
  return new Promise(resolve => {
    setTimeout(() => {
      const newProducts = mockProducts.filter(p => p.isNew);
      resolve(newProducts);
    }, 300);
  });
};

/**
 * Get luxury products
 */
export const getLuxuryProducts = async (): Promise<Product[]> => {
  // In a real app: return fetch('/api/products/luxury').then(res => res.json());
  
  return new Promise(resolve => {
    setTimeout(() => {
      const luxuryProducts = mockProducts.filter(p => p.isLuxury);
      resolve(luxuryProducts);
    }, 300);
  });
};
