
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

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

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
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

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;
  const shippingFee = subtotal > 50000 ? 0 : 1500;
  const orderTotal = total + shippingFee;

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-serif font-bold mb-6">
            Your Cart
          </h1>
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-6">Your cart is empty</p>
            <Button as={Link} to="/shop" className="mb-2">
              Continue Shopping
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif font-bold mb-6">
          Your Cart
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items */}
          <div className="w-full lg:w-2/3">
            {/* Cart header */}
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b">
              <div className="col-span-6">
                <span className="font-medium">Product</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium">Price</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium">Quantity</span>
              </div>
              <div className="col-span-2 text-right">
                <span className="font-medium">Subtotal</span>
              </div>
            </div>
            
            {/* Cart items */}
            <div className="space-y-6 mt-6">
              {cartItems.map(item => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b">
                  {/* Product */}
                  <div className="col-span-1 md:col-span-6">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-gray-100 rounded">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/80x80?text=Product";
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <button 
                          className="text-red-500 text-sm flex items-center mt-2"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-center">
                    <span className="md:hidden font-medium">Price:</span>
                    <span>PKR {item.price.toLocaleString()}</span>
                  </div>
                  
                  {/* Quantity */}
                  <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-center">
                    <span className="md:hidden font-medium">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button 
                        className="px-2 py-1"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button 
                        className="px-2 py-1"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Subtotal */}
                  <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end">
                    <span className="md:hidden font-medium">Subtotal:</span>
                    <span className="font-medium">PKR {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Continue shopping */}
            <div className="mt-6">
              <Button variant="outline" as={Link} to="/shop" className="flex items-center gap-2">
                Continue Shopping
              </Button>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-serif font-bold mb-4">
                Order Summary
              </h2>
              
              {/* Summary items */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>PKR {subtotal.toLocaleString()}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-brand-orange">
                    <span>Discount ({discount}%)</span>
                    <span>-PKR {discountAmount.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shippingFee === 0 ? "Free" : `PKR ${shippingFee.toLocaleString()}`}</span>
                </div>
                
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>PKR {orderTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              {/* Coupon code */}
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">
                  Apply Coupon Code
                </label>
                <div className="flex gap-2">
                  <Input
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1"
                  />
                  <Button onClick={handleApplyCoupon}>
                    Apply
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Try "DISCOUNT20" for 20% off
                </p>
              </div>
              
              {/* Checkout button */}
              <Button className="w-full mt-6 bg-brand-orange hover:bg-brand-orange/90 flex items-center justify-center gap-2" asChild>
                <Link to="/checkout">
                  Proceed to Checkout
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
