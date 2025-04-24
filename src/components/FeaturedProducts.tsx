import React, { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Handwoven Basket",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Home Decor"
  },
  {
    id: 2,
    name: "Ceramic Plant Pot",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Pottery"
  },
  {
    id: 3,
    name: "Macrame Wall Hanging",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Wall Decor"
  },
  {
    id: 4,
    name: "Handmade Soap Set",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Bath & Body"
  },
];

const categories = ["All", "Home Decor", "Pottery", "Wall Decor", "Bath & Body"];

const FeaturedProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="section-padding bg-krishacraft-cream">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-krishacraft-darkbrown">
            Our Featured Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular handcrafted items, each piece meticulously created with attention to detail and a passion for artisanal craftsmanship.
          </p>
        </div>

        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-krishacraft-brown text-white"
                    : "bg-white text-krishacraft-darkbrown hover:bg-krishacraft-beige"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
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
