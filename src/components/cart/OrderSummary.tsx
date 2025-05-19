
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

interface OrderSummaryProps {
  subtotal: number;
  discount: number;
  couponCode: string;
  setCouponCode: (code: string) => void;
  handleApplyCoupon: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  discount,
  couponCode,
  setCouponCode,
  handleApplyCoupon,
}) => {
  // Calculate totals
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;
  const shippingFee = subtotal > 50000 ? 0 : 1500;
  const orderTotal = total + shippingFee;

  return (
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
        <Link to="/checkout" className="block w-full mt-6">
          <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 flex items-center justify-center gap-2">
            Proceed to Checkout
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
