
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">Our Story</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Discover the journey behind Khizar Luxury Market, where passion for quality meets exceptional customer experience.
          </p>
        </div>
      </div>

      {/* Mission section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Our Mission" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
              <p className="text-gray-600">
                At Khizar Luxury Market, our mission is to provide discerning customers with a curated selection of high-quality products that embody elegance, craftsmanship, and exclusivity. We aim to create a shopping experience that is as luxurious as the products we offer.
              </p>
              <p className="text-gray-600">
                Founded in 2022, we've rapidly grown from a small boutique to one of Pakistan's premier online luxury retailers, all while maintaining our commitment to exceptional service and product quality.
              </p>
              <Button className="btn-luxury mt-4">
                <Link to="/shop">Discover Our Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-brand-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We believe in offering only the finest products that meet our stringent quality standards, ensuring customer satisfaction with every purchase.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-brand-skyBlue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-skyBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously strive to enhance our platform and services, embracing new technologies and ideas to improve the luxury shopping experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-brand-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We foster a sense of belonging among our customers, employees, and partners, valuing relationships and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            The passionate individuals behind Khizar Luxury Market who work tirelessly to bring you the best in luxury shopping.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Team member 1 */}
            <div className="text-center">
              <div className="mb-4 aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                  alt="Ali Khizar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-serif font-bold">Ali Khizar</h3>
              <p className="text-brand-orange">Founder & CEO</p>
            </div>
            {/* Team member 2 */}
            <div className="text-center">
              <div className="mb-4 aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                  alt="Aisha Khan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-serif font-bold">Aisha Khan</h3>
              <p className="text-brand-skyBlue">Creative Director</p>
            </div>
            {/* Team member 3 */}
            <div className="text-center">
              <div className="mb-4 aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
                  alt="Faisal Ahmed"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-serif font-bold">Faisal Ahmed</h3>
              <p className="text-brand-orange">Operations Manager</p>
            </div>
            {/* Team member 4 */}
            <div className="text-center">
              <div className="mb-4 aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                  alt="Sara Malik"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-serif font-bold">Sara Malik</h3>
              <p className="text-brand-skyBlue">Customer Experience</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
