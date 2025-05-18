
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-brand-skyBlue/10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 pr-0 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get early access to new arrivals, sales, exclusive content, events and much more!
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow" 
                  required
                />
                <Button className="btn-luxury whitespace-nowrap">
                  Subscribe Now
                </Button>
              </form>
            </div>
            <div className="w-full md:w-1/3">
              <div className="aspect-square relative rounded-full overflow-hidden bg-gradient-to-br from-brand-orange/20 to-brand-skyBlue/20 p-6">
                <img 
                  src="/placeholder.svg" 
                  alt="Newsletter"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
