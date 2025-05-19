
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartItemListProps {
  cartItems: CartItem[];
  handleQuantityChange: (id: string, newQuantity: number) => void;
  handleRemoveItem: (id: string) => void;
}

const CartItemList: React.FC<CartItemListProps> = ({
  cartItems,
  handleQuantityChange,
  handleRemoveItem,
}) => {
  return (
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
        <Link to="/shop">
          <Button variant="outline" className="flex items-center gap-2">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartItemList;
