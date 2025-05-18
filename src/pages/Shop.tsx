
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { mockProducts } from '@/data/mockProducts';

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 150000]);
  const [sortBy, setSortBy] = useState<string>('featured');
  
  // Get all unique categories
  const categories = Array.from(new Set(mockProducts.map(product => product.category)));
  
  // Filter products
  const filteredProducts = mockProducts.filter(product => {
    // Price filter
    const meetsPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // Category filter
    const meetsCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(product.category);
    
    return meetsPrice && meetsCategory;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (a.discountPrice || a.price) - (b.discountPrice || b.price);
      case 'price-high':
        return (b.discountPrice || b.price) - (a.discountPrice || a.price);
      case 'newest':
        return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1;
      default: // featured
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    }
  });
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };
  
  return (
    <Layout>
      {/* Hero section with title */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-center">Shop Our Collection</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className="w-full lg:w-1/4 space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryChange(category)}
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Price Range</h3>
              <Slider
                defaultValue={[priceRange[0], priceRange[1]]}
                min={0}
                max={150000}
                step={1000}
                onValueChange={handlePriceChange}
                className="my-6"
              />
              <div className="flex justify-between items-center">
                <span>PKR {priceRange[0].toLocaleString()}</span>
                <span>PKR {priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </aside>
          
          {/* Product grid */}
          <div className="w-full lg:w-3/4">
            {/* Sort controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Showing {sortedProducts.length} products
              </p>
              <div className="flex items-center">
                <span className="mr-2">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-brand-orange"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
            
            {/* Products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Empty state */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 mb-4">No products found matching your filters.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 150000]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
