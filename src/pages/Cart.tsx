
import React from 'react';
import Layout from '@/components/layout/Layout';
import EmptyCart from '@/components/cart/EmptyCart';
import CartItemList from '@/components/cart/CartItemList';
import OrderSummary from '@/components/cart/OrderSummary';
import { useCart } from '@/hooks/useCart';

const Cart = () => {
  const {
    cartItems,
    couponCode,
    setCouponCode,
    discount,
    subtotal,
    handleQuantityChange,
    handleRemoveItem,
    handleApplyCoupon
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-serif font-bold mb-6">
            Your Cart
          </h1>
          <EmptyCart />
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
          <CartItemList 
            cartItems={cartItems}
            handleQuantityChange={handleQuantityChange}
            handleRemoveItem={handleRemoveItem}
          />
          
          <OrderSummary
            subtotal={subtotal}
            discount={discount}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            handleApplyCoupon={handleApplyCoupon}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
