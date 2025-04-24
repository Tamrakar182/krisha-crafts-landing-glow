import React from 'react';
import Logo from './Logo';
import { data } from '@/data';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 px-4 md:px-6 bg-krishacraft-primary text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="text-lg font-semibold tracking-tight">
                Krisha Crafts
              </span>
            </a>
            <p className="text-sm text-white/70">
              Exquisite metalcraft handcrafted with tradition and passion.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-white">Quick Links</h3>

            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-white">Visit Us</h3>
            <p className="text-sm text-white/70 mb-2">
              {data.address}
              <br />
              {data.city}
            </p>
            <p className="text-sm text-white/70">
              Open {data.openDays}
              <br />
              {data.openTime}
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p>© {currentYear} Krisha Crafts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
