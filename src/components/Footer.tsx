
import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-krishacraft-darkbrown text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Information */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Krisha Crafts</h3>
            <p className="text-gray-300 mb-6">
              Handcrafted treasures created with love and attention to detail. Each piece tells a unique story.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/krisha.crafts" target="_blank" rel="noopener noreferrer" className="text-white hover:text-krishacraft-dustyrose transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-krishacraft-dustyrose transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:hello@krishacrafts.com" className="text-white hover:text-krishacraft-dustyrose transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>hello@krishacrafts.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <p className="text-gray-300 mt-4">
                  Business Hours:<br />
                  Monday-Friday: 9am - 5pm<br />
                  Saturday: 10am - 4pm<br />
                  Sunday: Closed
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Krisha Crafts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
