
import React from 'react';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    likes: 124,
    comments: 18
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    likes: 97,
    comments: 12
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    likes: 156,
    comments: 24
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    likes: 88,
    comments: 9
  }
];

const InstagramFeed: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-krishacraft-darkbrown">
            Follow Our Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us on Instagram and be part of our growing community. Tag us in your posts with #KrishaCrafts for a chance to be featured!
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {instagramPosts.map((post) => (
            <a 
              key={post.id}
              href="https://instagram.com/krisha.crafts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img 
                src={post.image} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-krishacraft-darkbrown/0 group-hover:bg-krishacraft-darkbrown/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center">
                      <span className="mr-1">❤️</span>
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1">💬</span>
                      <span>{post.comments}</span>
                    </div>
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
      </div>
    </section>
  );
};

export default InstagramFeed;
