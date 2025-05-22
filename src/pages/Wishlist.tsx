
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (id: string) => {
    const item = wishlistItems.find(item => item.id === id);
    if (item) {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.discountPrice || item.price,
        image: item.image
      });
    }
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
            <Link to="/shop">
              <Button className="mb-2">
                Start Shopping
              </Button>
            </Link>
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
            className="text-red-500 border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20" 
            onClick={clearWishlist}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Clear Wishlist
          </Button>
        </div>
        
        {/* Wishlist items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map(item => (
            <div key={item.id} className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800 dark:border-gray-700">
              {/* Product image */}
              <Link to={`/product/${item.id}`} className="block relative">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700">
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
                  className="absolute top-2 right-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 p-1.5 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromWishlist(item.id);
                  }}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </button>
              </Link>
              
              {/* Product details */}
              <div className="p-4">
                <Link to={`/product/${item.id}`} className="block">
                  <h3 className="font-medium text-lg mb-1 line-clamp-2 dark:text-white">{item.name}</h3>
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
