
import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-krishacraft-cream bg-opacity-95 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-krishacraft-darkbrown font-serif font-bold text-xl md:text-2xl">
              Krisha Crafts
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-krishacraft-darkbrown hover:text-krishacraft-brown transition-colors">
              Home
            </a>
            <a href="#products" className="text-krishacraft-darkbrown hover:text-krishacraft-brown transition-colors">
              Products
            </a>
            <a href="#about" className="text-krishacraft-darkbrown hover:text-krishacraft-brown transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-krishacraft-darkbrown hover:text-krishacraft-brown transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-krishacraft-darkbrown hover:text-krishacraft-brown transition-colors">
              Contact
            </a>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center">
            <a href="#" className="p-2 text-krishacraft-darkbrown hover:text-krishacraft-brown transition-colors">
              <ShoppingBag size={20} />
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="ml-2 p-2 rounded-md text-krishacraft-darkbrown md:hidden"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-4 space-y-1 bg-krishacraft-cream">
              <a href="#" className="block px-4 py-2 text-krishacraft-darkbrown hover:bg-krishacraft-beige">
                Home
              </a>
              <a href="#products" className="block px-4 py-2 text-krishacraft-darkbrown hover:bg-krishacraft-beige">
                Products
              </a>
              <a href="#about" className="block px-4 py-2 text-krishacraft-darkbrown hover:bg-krishacraft-beige">
                About
              </a>
              <a href="#testimonials" className="block px-4 py-2 text-krishacraft-darkbrown hover:bg-krishacraft-beige">
                Testimonials
              </a>
              <a href="#contact" className="block px-4 py-2 text-krishacraft-darkbrown hover:bg-krishacraft-beige">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
