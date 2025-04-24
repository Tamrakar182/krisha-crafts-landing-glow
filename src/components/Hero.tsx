import React from 'react';
import { GridPattern } from './magicui/grid-pattern';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container-custom section-padding z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-6 mb-8 md:mb-0">
            <span className="inline-block text-krishacraft-dustyrose font-medium">
              Handcrafted with love
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-krishacraft-secondary">
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
                src="/images/hero.jpg"
                alt="Krisha Crafts Handmade Products"
                className="rounded-lg w-full max-w-md shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [15, 10],
          [15, 10],
        ]}
        strokeDasharray={'4 2'}
        className={cn(
          '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      />
    </section>
  );
};

export default Hero;
