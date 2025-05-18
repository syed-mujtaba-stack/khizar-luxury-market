
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between py-16 md:py-24">
          {/* Hero content */}
          <div className="w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              <span className="block">Discover Luxury</span>
              <span className="text-gradient">Beyond Expectations</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg">
              Experience the finest products curated for those who appreciate excellence and sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="btn-luxury">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-brand-skyBlue text-brand-skyBlue hover:bg-brand-skyBlue hover:text-white">
                <Link to="/luxury-corner">Explore Luxury</Link>
              </Button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="w-full lg:w-1/2 relative animate-zoom-in">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-white">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury shopping experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-brand-orange/20 to-brand-skyBlue/20"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-full shadow-lg hidden md:flex items-center justify-center">
              <div className="luxury-gradient p-1 rounded-full">
                <div className="bg-white rounded-full p-2">
                  <div className="text-center px-4">
                    <span className="block font-serif font-bold text-brand-orange">NEW</span>
                    <span className="text-xs text-gray-600">Collection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 70C1248 80 1344 100 1392 110L1440 120V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
