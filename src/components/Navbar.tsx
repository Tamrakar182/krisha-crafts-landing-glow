import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-krishacraft-secondary/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/c57a4a59-c622-452f-bdff-4505e68b7927.png"
                alt="Krisha Crafts Logo" 
                className="h-12 w-auto"
              />
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

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md text-krishacraft-primary hover:text-krishacraft-secondary transition-colors"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-4 space-y-1 bg-white">
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
