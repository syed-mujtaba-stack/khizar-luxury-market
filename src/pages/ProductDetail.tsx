
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, ShoppingCart, Heart, Volume2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { mockProducts } from '@/data/mockProducts';
import { Product } from '@/types/product';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);
  
  useEffect(() => {
    // Find product by id
    const foundProduct = mockProducts.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.image);
    }
  }, [id]);
  
  // Handle quantity changes
  const incrementQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  // Add to cart
  const handleAddToCart = () => {
    if (product) {
      toast({
        title: "Added to Cart",
        description: `${quantity} x ${product.name} has been added to your cart`,
      });
    }
  };
  
  // Add to wishlist
  const handleAddToWishlist = () => {
    if (product) {
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist`,
      });
    }
  };
  
  // Text-to-speech functionality
  const speakDescription = () => {
    if (!product) return;
    
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    
    const text = `${product.name}. ${product.description}`;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthRef.current = utterance;
    
    utterance.onend = () => {
      setIsSpeaking(false);
    };
    
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };
  
  // Clean up speech synthesis when component unmounts
  useEffect(() => {
    return () => {
      if (speechSynthRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <p>Product not found</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product images */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4 aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div 
                className={`aspect-square bg-gray-100 rounded cursor-pointer ${selectedImage === product.image ? 'ring-2 ring-brand-orange' : ''}`}
                onClick={() => setSelectedImage(product.image)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              {product.gallery?.map((img, index) => (
                <div 
                  key={index}
                  className={`aspect-square bg-gray-100 rounded cursor-pointer ${selectedImage === img ? 'ring-2 ring-brand-orange' : ''}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} - view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product info */}
          <div className="w-full lg:w-1/2">
            {product.isLuxury && (
              <div className="inline-block mb-4 bg-brand-gold/10 text-brand-gold px-3 py-1 rounded font-medium text-sm">
                Luxury Item
              </div>
            )}
            
            <h1 className="text-3xl font-serif font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={i < Math.floor(product.rating) ? "fill-brand-orange text-brand-orange" : "text-gray-300"} 
                    size={18} 
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-500">{product.reviews} reviews</span>
              
              <Button
                variant="ghost"
                size="sm"
                className="ml-6 flex items-center gap-1 text-brand-skyBlue"
                onClick={speakDescription}
              >
                <Volume2 size={18} />
                {isSpeaking ? "Stop" : "Listen to Description"}
              </Button>
            </div>
            
            <div className="mb-6">
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-brand-orange">PKR {product.discountPrice.toLocaleString()}</span>
                  <span className="ml-3 text-lg text-gray-500 line-through">PKR {product.price.toLocaleString()}</span>
                  <span className="ml-3 bg-brand-orange/10 text-brand-orange px-2 py-1 rounded text-sm">
                    {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold">PKR {product.price.toLocaleString()}</span>
              )}
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <span className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
              </span>
            </div>
            
            {product.stock > 0 && (
              <div className="flex items-center mb-8">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    className="px-3 py-2 border-r border-gray-300"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button 
                    className="px-3 py-2 border-l border-gray-300"
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="btn-luxury flex-1 flex items-center gap-2"
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                <ShoppingCart size={18} />
                Add to Cart
              </Button>
              
              <Button 
                variant="outline"
                className="flex-1 border-gray-300 flex items-center gap-2"
                onClick={handleAddToWishlist}
              >
                <Heart size={18} />
                Add to Wishlist
              </Button>
            </div>
            
            {/* Additional info */}
            <Tabs defaultValue="specifications">
              <TabsList className="w-full">
                <TabsTrigger value="specifications" className="flex-1">Specifications</TabsTrigger>
                <TabsTrigger value="shipping" className="flex-1">Shipping</TabsTrigger>
                <TabsTrigger value="returns" className="flex-1">Returns</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specifications" className="mt-4">
                <div className="space-y-3">
                  {product.specifications ? (
                    Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex border-b pb-2">
                        <span className="w-1/3 font-medium">{key}</span>
                        <span className="w-2/3 text-gray-600">{value}</span>
                      </div>
                    ))
                  ) : (
                    <p>No specifications available</p>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="shipping" className="mt-4">
                <div className="space-y-3">
                  <p className="text-gray-700">Delivery within 3-5 business days across Pakistan.</p>
                  <p className="text-gray-700">Free shipping on orders above PKR 5,000.</p>
                  <p className="text-gray-700">Express shipping available for an additional fee.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="returns" className="mt-4">
                <div className="space-y-3">
                  <p className="text-gray-700">30-day return policy for unused products in original packaging.</p>
                  <p className="text-gray-700">Please contact customer service to initiate a return.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
