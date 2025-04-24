import React from 'react';
import { BlurFade } from './magicui/blur-fade';

interface ProductCardProps {
  name: string;
  image: string;
  category: string;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  category,
  index,
}) => {
  return (
    <BlurFade inView delay={index * 0.3}>
      <div className="card-hover group rounded-lg overflow-hidden bg-white">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
          <div className="absolute top-3 left-3">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-krishacraft-cream text-krishacraft-darkbrown rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-krishacraft-darkbrown font-medium">{name}</h3>
        </div>
      </div>
    </BlurFade>
  );
};

export default ProductCard;
