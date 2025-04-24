import React, { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Golden Decorative Turtle",
    image: "/lovable-uploads/b4cf7ec6-cead-4479-be78-05959e651783.png",
    category: "Decorative"
  },
  {
    id: 2,
    name: "Brass Ceremonial Lamp",
    image: "/lovable-uploads/90761da7-592d-4843-ae56-1d0df690afb7.png",
    category: "Traditional"
  },
  {
    id: 3,
    name: "Copper Ceremonial Vase",
    image: "/lovable-uploads/625f31c7-9dae-4216-9204-bd19e257e432.png",
    category: "Traditional"
  }
];

const categories = ["All", "Decorative", "Traditional"];

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
