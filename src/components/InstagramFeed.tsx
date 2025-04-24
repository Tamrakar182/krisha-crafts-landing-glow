import React from 'react';
import { Instagram } from 'lucide-react';
import { instagramPosts } from '@/data';
import { BlurFade } from './magicui/blur-fade';

const InstagramFeed: React.FC = () => {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-4 text-krishacraft-secondary">
            Follow Our Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest creations and behind-the-scenes moments
            on Instagram.
          </p>
        </div>

        <BlurFade inView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {instagramPosts.map(post => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <div className="flex items-center justify-center">
                      <Instagram className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://instagram.com/krisha.crafts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <Instagram size={18} />
              <span>Follow @krisha.crafts</span>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default InstagramFeed;
