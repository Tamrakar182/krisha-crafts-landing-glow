
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Krisha crafting handmade items"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-krishacraft-dustyrose/20 rounded-full -z-10"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-krishacraft-dustyrose font-medium">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6 text-krishacraft-darkbrown">
              Crafting Beauty With Passion & Purpose
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At Krisha Crafts, every piece begins with a story. Founded in 2018, our journey started from a small home studio driven by a passion for traditional craftsmanship and sustainable materials.
              </p>
              <p>
                Each item in our collection is thoughtfully designed and meticulously handcrafted by our team of skilled artisans who pour their heart and soul into every creation. We believe in preserving the beauty of handmade traditions while bringing a contemporary twist to our designs.
              </p>
              <p>
                Our commitment goes beyond beautiful products – we're dedicated to sustainable practices, supporting local communities, and bringing the joy of handcrafted art to your everyday life.
              </p>
              <div className="pt-4">
                <a href="#contact" className="btn-primary">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
