
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '../ui/use-toast';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    id,
    name,
    price,
    discountPrice,
    image,
    category,
    isNew,
    isLuxury,
  } = product;

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Added to Wishlist",
      description: `${name} has been added to your wishlist`,
    });
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Added to Cart",
      description: `${name} has been added to your cart`,
    });
  };

  const discount = discountPrice ? Math.round(((price - discountPrice) / price) * 100) : 0;

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="card-luxury h-full flex flex-col">
        {/* Product image */}
        <div className="relative overflow-hidden aspect-square bg-gray-100">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {isNew && <Badge className="bg-brand-skyBlue hover:bg-brand-skyBlue/90">New</Badge>}
            {discountPrice && <Badge className="bg-brand-orange hover:bg-brand-orange/90">{discount}% OFF</Badge>}
            {isLuxury && (
              <Badge className="bg-brand-gold text-black hover:bg-brand-gold/90">Luxury</Badge>
            )}
          </div>
          
          {/* Wishlist button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white h-8 w-8 rounded-full"
            onClick={handleAddToWishlist}
          >
            <Heart className="h-4 w-4" />
          </Button>
          
          {/* Quick add to cart (visible on hover) */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button 
              className="w-full btn-luxury"
              size="sm"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
        
        {/* Product details */}
        <div className="p-4 flex flex-col flex-grow">
          <span className="text-sm text-gray-500 mb-1">{category}</span>
          <h3 className="font-medium text-lg mb-1 line-clamp-2">{name}</h3>
          <div className="mt-auto">
            <div className="flex items-center gap-2">
              {discountPrice ? (
                <>
                  <span className="font-bold text-brand-orange">PKR {discountPrice.toLocaleString()}</span>
                  <span className="text-gray-500 line-through text-sm">PKR {price.toLocaleString()}</span>
                </>
              ) : (
                <span className="font-bold">PKR {price.toLocaleString()}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
