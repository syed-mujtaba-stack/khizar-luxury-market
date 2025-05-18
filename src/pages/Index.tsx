
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import LuxurySection from '@/components/home/LuxurySection';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <LuxurySection />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
};

export default Index;
