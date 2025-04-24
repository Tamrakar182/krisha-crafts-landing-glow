import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="/images/product-1.png"
                alt="Krisha crafting handmade items"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-krishacraft-dustyrose/20 rounded-full -z-10"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-krishacraft-dustyrose font-medium">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-krishacraft-darkbrown">
              Crafting Beauty With Passion & Purpose
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At Krisha Crafts, every piece tells a story. Founded with a
                passion for preserving traditional metalcraft, we collaborate
                with skilled artisans who pour their heart and soul into each
                design. Our mission is to bring the beauty of traditional
                craftsmanship into contemporary spaces through carefully crafted
                pieces that celebrate cultural heritage.
              </p>
              <p>
                Each item is meticulously handcrafted using time-honored
                techniques and high-quality materials, ensuring that you receive
                not just a decorative piece, but a work of art that connects you
                to centuries of tradition and will be cherished for generations
                to come.
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
