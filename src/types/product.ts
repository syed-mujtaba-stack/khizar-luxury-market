
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  image: string;
  gallery?: string[];
  category: string;
  subcategory?: string;
  stock: number;
  rating: number;
  reviews: number;
  featured: boolean;
  isNew: boolean;
  isLuxury: boolean;
  specifications?: Record<string, string>;
}
