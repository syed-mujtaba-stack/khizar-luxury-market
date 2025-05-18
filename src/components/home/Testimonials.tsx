
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "I was amazed by the quality of products and the excellent customer service. Truly a luxury experience from start to finish.",
    author: "Sarah Ahmed",
    location: "Lahore",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    id: 2,
    content: "The Luxury Corner offers a selection that rivals international outlets. I've purchased multiple luxury watches and couldn't be happier.",
    author: "Imran Khan",
    location: "Islamabad",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    id: 3,
    content: "Fast delivery and the packaging was exquisite. It felt like I was unwrapping a gift to myself. Will shop again!",
    author: "Ayesha Malik",
    location: "Karachi",
    avatar: "/placeholder.svg",
    rating: 4
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg 
          key={index} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill={index < rating ? "#F97316" : "#E2E8F0"} 
          className="h-5 w-5"
        >
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">Read testimonials from our satisfied customers who have experienced the luxury difference.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-gray-700 italic">"{testimonial.content}"</p>
                <div className="mt-6 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
