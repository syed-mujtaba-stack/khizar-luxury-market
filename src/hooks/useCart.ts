
import { useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Constants for localStorage keys
const CART_STORAGE_KEY = 'khizar-luxury-market-cart';
const COUPON_STORAGE_KEY = 'khizar-luxury-market-coupon';

// Function to get initial cart items from localStorage
const getInitialCartItems = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error('Failed to parse cart data from localStorage:', error);
    // Clear corrupted data
    localStorage.removeItem(CART_STORAGE_KEY);
  }
  
  // Return empty array if no saved cart or error parsing
  return [];
};

// Function to get initial coupon from localStorage
const getInitialCoupon = (): string => {
  if (typeof window === 'undefined') return '';
  
  try {
    const savedCoupon = localStorage.getItem(COUPON_STORAGE_KEY);
    return savedCoupon || '';
  } catch (error) {
    console.error('Failed to get coupon from localStorage:', error);
    return '';
  }
};

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(getInitialCartItems());
  const [couponCode, setCouponCode] = useState(getInitialCoupon());
  const [discount, setDiscount] = useState(0);

  // Initialize discount from coupon if exists
  useEffect(() => {
    if (couponCode === 'discount20') {
      setDiscount(20);
    }
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Save coupon to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COUPON_STORAGE_KEY, couponCode);
    }
  }, [couponCode]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Item Removed",
      description: "Item removed from your cart",
    });
  };

  const handleApplyCoupon = () => {
    // In a real app, this would validate against backend
    if (couponCode.toLowerCase() === 'discount20') {
      setDiscount(20);
      toast({
        title: "Coupon Applied",
        description: "20% discount applied to your order",
      });
    } else {
      setDiscount(0);
      toast({
        title: "Invalid Coupon",
        description: "The coupon code is invalid or expired",
        variant: "destructive"
      });
    }
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem(CART_STORAGE_KEY);
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart",
    });
  };

  // Add item to cart functionality
  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      // Check if item already exists in cart
      const existingItemIndex = prev.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex >= 0) {
        // If item exists, increase quantity
        return prev.map((cartItem, index) => 
          index === existingItemIndex 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...prev, { ...item, quantity: 1 }];
      }
    });

    toast({
      title: "Item Added",
      description: "Item added to your cart",
    });
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return {
    cartItems,
    couponCode,
    setCouponCode,
    discount,
    subtotal,
    handleQuantityChange,
    handleRemoveItem,
    handleApplyCoupon,
    addToCart,
    clearCart
  };
}
