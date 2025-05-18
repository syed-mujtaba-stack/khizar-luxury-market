
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
    link: '/category/clothing'
  },
  {
    id: 2,
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800',
    link: '/category/electronics'
  },
  {
    id: 3,
    name: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=800',
    link: '/category/home-decor'
  },
  {
    id: 4,
    name: 'Luxury Corner',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=800',
    link: '/luxury-corner'
  }
];

export const FeaturedCategories: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Shop By Category</h2>
          <p className="text-gray-600">Browse our handpicked collections designed to meet your every need and desire.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link to={category.link} key={category.id} className="group relative block overflow-hidden rounded-lg">
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              
              {/* Image */}
              <div className="h-60 w-full overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white font-serif font-medium text-lg mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm">View Collection</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
