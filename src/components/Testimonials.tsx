
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, NY",
    text: "The quality of Krisha's handmade products is exceptional! I've purchased multiple items and each one has exceeded my expectations. The attention to detail is remarkable.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    location: "San Francisco, CA",
    text: "I ordered a custom piece for my wife's birthday, and it was absolutely perfect. The personal touch and craftmanship made it such a special gift.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "Chicago, IL",
    text: "Not only are the products beautiful, but the customer service is outstanding. Krisha was so helpful in helping me choose the right items for my home.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-krishacraft-beige/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-krishacraft-darkbrown">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to have created beautiful handcrafted pieces for wonderful customers around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md card-hover"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <h4 className="font-medium text-krishacraft-darkbrown">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="mb-4 text-yellow-400">
                ★★★★★
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
