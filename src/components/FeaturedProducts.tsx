import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '@/data';

const FeaturedProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="section-padding bg-krishacraft-cream">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-4 text-krishacraft-darkbrown">
            Our Featured Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular handcrafted items, each piece meticulously
            created with attention to detail and a passion for artisanal
            craftsmanship.
          </p>
        </div>

        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'bg-krishacraft-secondary text-white'
                    : 'bg-white text-krishacraft-secondary hover:bg-krishacraft-beige'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              index={index}
              name={product.name}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/krisha.crafts"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View All on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
