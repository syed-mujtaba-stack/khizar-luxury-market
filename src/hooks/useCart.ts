
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Mock cart items for demonstration
const initialCartItems = [
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

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

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
    handleApplyCoupon
  };
}
