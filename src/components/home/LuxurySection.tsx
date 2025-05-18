
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const LuxurySection: React.FC = () => {
  return (
    <section className="bg-slate-900 py-16 md:py-24 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="1" fill="rgba(255, 255, 255, 0.2)"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
            <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold mb-6">
                Discover Our Luxury Corner
              </h2>
              <p className="text-white/80 text-lg mb-6">
                Indulge in exceptional luxury with our premium collection of high-end perfumes, exquisite jewelry, and prestigious watches.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-brand-gold mr-3"></span>
                  <span className="text-white/80">Exclusive designer fragrances</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-brand-gold mr-3"></span>
                  <span className="text-white/80">Handcrafted fine jewelry</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-brand-gold mr-3"></span>
                  <span className="text-white/80">Premium timepieces</span>
                </li>
              </ul>
              <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-black">
                <Link to="/luxury-corner">Explore Luxury Corner</Link>
              </Button>
            </div>
          </div>
          
          {/* Right showcase */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {/* Perfume image */}
              <div className="rounded-lg overflow-hidden group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=600" 
                    alt="Luxury Perfume" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-3">
                  <h4 className="text-white font-medium">Premium Perfumes</h4>
                </div>
              </div>
              
              {/* Watch image */}
              <div className="rounded-lg overflow-hidden group">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&q=80&w=600" 
                    alt="Luxury Watch" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-3">
                  <h4 className="text-white font-medium">Prestigious Watches</h4>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              {/* Jewelry image */}
              <div className="rounded-lg overflow-hidden group h-full">
                <div className="relative aspect-[3/5] overflow-hidden h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600" 
                    alt="Luxury Jewelry" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-3">
                  <h4 className="text-white font-medium">Exquisite Jewelry</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxurySection;
