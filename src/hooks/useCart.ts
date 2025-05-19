
import { useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Initial cart items are now loaded from localStorage if available
const getInitialCartItems = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  
  const savedCart = localStorage.getItem('cart');
  
  // If there's saved cart data, parse and return it
  if (savedCart) {
    try {
      return JSON.parse(savedCart);
    } catch (error) {
      console.error('Failed to parse cart data from localStorage:', error);
      return [];
    }
  }
  
  // Fall back to demo items if no saved cart
  return [
    {
      id: '1',
      name: 'Premium Leather Handbag',
      price: 75000,
      image: '/images/products/bag.jpg',
      quantity: 1
    },
    {
      id: '2',
      name: 'Luxury Watch',
      price: 120000,
      image: '/images/products/watch.jpg',
      quantity: 1
    }
  ];
};

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(getInitialCartItems());
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

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
    addToCart
  };
}
