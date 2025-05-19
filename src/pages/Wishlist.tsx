
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { mockProducts } from '@/data/mockProducts';

// Mock wishlist items - use a subset of mockProducts
const initialWishlistItems = mockProducts.slice(0, 4).map(product => ({
  ...product,
  addedOn: new Date().toISOString()
}));

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  const handleRemoveItem = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Item Removed",
      description: "Item removed from your wishlist",
    });
  };

  const handleAddToCart = (id: string) => {
    // In a real app, this would add to cart state or API
    toast({
      title: "Added to Cart",
      description: "Item added to your cart",
    });
  };

  const handleClearWishlist = () => {
    setWishlistItems([]);
    toast({
      title: "Wishlist Cleared",
      description: "All items have been removed from your wishlist",
    });
  };

  if (wishlistItems.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-serif font-bold mb-6">
            Your Wishlist
          </h1>
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-6">Your wishlist is empty</p>
            <Button as={Link} to="/shop" className="mb-2">
              Start Shopping
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold">
            Your Wishlist
          </h1>
          <Button 
            variant="outline" 
            className="text-red-500 border-red-500 hover:bg-red-50" 
            onClick={handleClearWishlist}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Clear Wishlist
          </Button>
        </div>
        
        {/* Wishlist items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map(item => (
            <div key={item.id} className="border rounded-lg overflow-hidden bg-white">
              {/* Product image */}
              <Link to={`/product/${item.id}`} className="block relative">
                <div className="aspect-square bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x400?text=Product";
                    }}
                  />
                </div>
                
                {/* Remove button */}
                <button 
                  className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white p-1.5 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemoveItem(item.id);
                  }}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </button>
              </Link>
              
              {/* Product details */}
              <div className="p-4">
                <Link to={`/product/${item.id}`} className="block">
                  <h3 className="font-medium text-lg mb-1 line-clamp-2">{item.name}</h3>
                  <p className="text-brand-orange font-bold mb-3">
                    PKR {(item.discountPrice || item.price).toLocaleString()}
                  </p>
                </Link>
                
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleAddToCart(item.id)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
