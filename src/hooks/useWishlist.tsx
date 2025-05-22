
import { useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Product } from '@/types/product';

// Wishlist item extends Product with an addedOn date
export interface WishlistItem extends Product {
  addedOn: string;
}

// Local storage key
const WISHLIST_STORAGE_KEY = 'khizar-luxury-market-wishlist';

// Function to get initial wishlist items from localStorage
const getInitialWishlistItems = (): WishlistItem[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (savedWishlist) {
      return JSON.parse(savedWishlist);
    }
  } catch (error) {
    console.error('Failed to parse wishlist data from localStorage:', error);
    localStorage.removeItem(WISHLIST_STORAGE_KEY);
  }
  
  // Return empty array if no saved wishlist or error parsing
  return [];
};

export function useWishlist() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(getInitialWishlistItems());

  // Save wishlist items to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems));
    }
  }, [wishlistItems]);

  const addToWishlist = (product: Product) => {
    setWishlistItems(prev => {
      // Check if product already exists in wishlist
      const exists = prev.some(item => item.id === product.id);
      
      if (exists) {
        toast({
          title: "Already in Wishlist",
          description: "This product is already in your wishlist",
        });
        return prev;
      }
      
      // Add new item to wishlist with current date
      toast({
        title: "Added to Wishlist",
        description: "Product added to your wishlist",
      });
      
      return [
        ...prev, 
        { 
          ...product, 
          addedOn: new Date().toISOString() 
        }
      ];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Removed from Wishlist",
      description: "Product removed from your wishlist",
    });
  };

  const isInWishlist = (id: string): boolean => {
    return wishlistItems.some(item => item.id === id);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    localStorage.removeItem(WISHLIST_STORAGE_KEY);
    toast({
      title: "Wishlist Cleared",
      description: "All products have been removed from your wishlist",
    });
  };

  return {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist
  };
}
