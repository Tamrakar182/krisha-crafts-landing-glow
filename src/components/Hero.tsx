import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-krishacraft-beige via-krishacraft-cream to-white">
        <div className="container-custom section-padding">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0">
              <span className="inline-block text-krishacraft-dustyrose font-medium">
                Handcrafted with love
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-krishacraft-darkbrown">
                Unique Handmade Crafts For Your Home
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Discover beautifully handcrafted treasures that bring warmth and
                personality to your space. Each piece tells a story of artisanal
                skill and passion.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a href="#products" className="btn-primary">
                  Shop Collection
                </a>
                <a href="#about" className="btn-secondary">
                  Our Story
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-krishacraft-dustyrose/20 absolute -z-10 -top-6 -left-6"></div>
                <img
                  src="/hero.jpg"
                  alt="Krisha Crafts Handmade Products"
                  className="rounded-lg w-full max-w-md shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-krishacraft-cream to-transparent"></div>
    </section>
  );
};

export default Hero;
