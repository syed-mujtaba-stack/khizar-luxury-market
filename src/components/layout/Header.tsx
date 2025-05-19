
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Mock cart count for demonstration
  const cartCount = 2;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Top bar with info and account links */}
        <div className="hidden md:flex justify-between items-center py-2 border-b text-sm">
          <div className="flex items-center gap-4">
            <span>Welcome to Khizar Luxury Market</span>
            <span>|</span>
            <span>Customer Service: +92 300 1234567</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/track" className="hover:text-brand-orange transition-colors">Track Order</Link>
            <span>|</span>
            <Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
            <span>|</span>
            <Link to="/faq" className="hover:text-brand-orange transition-colors">FAQs</Link>
          </div>
        </div>

        {/* Main header with logo, search and icons */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
                <Menu />
              </Button>
            )}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-serif font-bold">
                <span className="text-brand-orange">Khizar</span>
                <span className="text-brand-skyBlue">Luxury</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-brand-orange transition-colors">Home</Link>
            <Link to="/shop" className="font-medium hover:text-brand-orange transition-colors">Shop</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium text-base hover:text-brand-orange transition-colors">
                Categories
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/category/clothing" className="w-full">Clothing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/category/electronics" className="w-full">Electronics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/category/home-decor" className="w-full">Home Decor</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/luxury-corner" className="font-medium text-brand-gold hover:text-brand-orange transition-colors">
              Luxury Corner
            </Link>
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-2">
            {!isMobile && (
              <div className="relative hidden md:block">
                <Input 
                  type="search" 
                  placeholder="Search products..." 
                  className="pr-10 w-64"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
            )}
            
            <div className="flex items-center space-x-1">
              <Link to="/wishlist">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                </Button>
              </Link>
              <Link to="/account">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        {isMobile && (
          <div className="px-4 pb-4">
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Search products..." 
                className="pr-10 w-full"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white h-full w-4/5 max-w-sm animate-slide-in">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-bold text-lg">Menu</span>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <span className="text-2xl">&times;</span>
              </Button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              <Link to="/" className="py-2 border-b" onClick={toggleMenu}>Home</Link>
              <Link to="/shop" className="py-2 border-b" onClick={toggleMenu}>Shop</Link>
              <Link to="/luxury-corner" className="py-2 border-b text-brand-gold" onClick={toggleMenu}>
                Luxury Corner
              </Link>
              <Link to="/category/clothing" className="py-2 border-b" onClick={toggleMenu}>Clothing</Link>
              <Link to="/category/electronics" className="py-2 border-b" onClick={toggleMenu}>Electronics</Link>
              <Link to="/category/home-decor" className="py-2 border-b" onClick={toggleMenu}>Home Decor</Link>
              <Link to="/cart" className="py-2 border-b" onClick={toggleMenu}>Cart</Link>
              <Link to="/wishlist" className="py-2 border-b" onClick={toggleMenu}>Wishlist</Link>
              <Link to="/account" className="py-2 border-b" onClick={toggleMenu}>My Account</Link>
              <Link to="/track" className="py-2 border-b" onClick={toggleMenu}>Track Order</Link>
              <Link to="/about" className="py-2 border-b" onClick={toggleMenu}>About Us</Link>
              <Link to="/contact" className="py-2 border-b" onClick={toggleMenu}>Contact</Link>
              <Link to="/faq" className="py-2 border-b" onClick={toggleMenu}>FAQs</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
