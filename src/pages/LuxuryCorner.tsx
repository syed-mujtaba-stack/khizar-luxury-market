
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { mockProducts } from '@/data/mockProducts';

const LuxuryCorner = () => {
  // Filter only luxury products
  const luxuryProducts = mockProducts.filter(product => product.isLuxury);
  
  // Group products by subcategory
  const perfumes = luxuryProducts.filter(p => p.subcategory === 'Perfumes');
  const jewelry = luxuryProducts.filter(p => p.subcategory === 'Jewelry');
  const watches = luxuryProducts.filter(p => p.subcategory === 'Watches');

  return (
    <Layout>
      {/* Luxury hero section */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h5 className="text-brand-gold font-medium mb-4">PREMIUM COLLECTION</h5>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">The Luxury Corner</h1>
            <p className="text-xl text-white/80 mb-8">
              Discover our exclusive collection of high-end perfumes, exquisite jewelry, and prestigious watches. 
              Indulge in luxury that speaks to your refined taste.
            </p>
            <div className="space-x-4">
              <Button 
                className="bg-brand-gold hover:bg-brand-gold/90 text-black"
              >
                Explore Collection
              </Button>
              <Button 
                variant="outline"
                className="border-white/60 hover:bg-white/10"
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Luxury features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14.5-7.5-7.5L3 12V3h9l-4.5 1.5L15 12Z"/><path d="m16 19-4-4 1.5-1.5L19 19Z"/><path d="M21 21v-9l-4.5 4.5L21 21Z"/></svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Our luxury items are sourced from the finest brands and manufacturers worldwide.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Limited Editions</h3>
              <p className="text-gray-600">Many of our luxury products are available in limited quantities for exclusivity.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Your luxury purchases are protected with our secure payment systems.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Perfumes section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold">Luxury Perfumes</h2>
              <p className="text-gray-600">Discover exquisite fragrances from renowned perfumers</p>
            </div>
            <Link to="/shop?category=Luxury Corner" className="mt-4 md:mt-0 text-brand-orange font-medium hover:underline">
              View All Perfumes
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perfumes.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Jewelry section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold">Fine Jewelry</h2>
              <p className="text-gray-600">Exquisite craftsmanship and timeless elegance</p>
            </div>
            <Link to="/shop?category=Luxury Corner" className="mt-4 md:mt-0 text-brand-orange font-medium hover:underline">
              View All Jewelry
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jewelry.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Watches section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold">Prestigious Watches</h2>
              <p className="text-gray-600">Precision engineering and sophisticated design</p>
            </div>
            <Link to="/shop?category=Luxury Corner" className="mt-4 md:mt-0 text-brand-orange font-medium hover:underline">
              View All Watches
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {watches.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LuxuryCorner;
