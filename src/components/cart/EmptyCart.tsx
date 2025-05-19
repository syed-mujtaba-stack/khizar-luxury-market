
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const EmptyCart: React.FC = () => {
  return (
    <div className="text-center py-16">
      <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
      <p className="text-gray-500 mb-6">Your cart is empty</p>
      <Link to="/shop">
        <Button className="mb-2">
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
