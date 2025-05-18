
import React from 'react';
import ProductCard from '../products/ProductCard';
import { mockProducts } from '@/data/mockProducts';

export const FeaturedProducts: React.FC = () => {
  // Filter to get only a few products for the featured section
  const featuredProducts = mockProducts.filter(product => product.featured).slice(0, 4);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600">Discover our most popular products, carefully selected for your satisfaction.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
