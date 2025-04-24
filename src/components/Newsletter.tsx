
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would submit to an API here
      console.log('Subscribed email:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="bg-krishacraft-dustyrose/20 py-14 md:py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-krishacraft-darkbrown">
            Join Our Community
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive updates, special offers, and behind-the-scenes content about our latest handcrafted creations.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="px-4 py-3 flex-grow rounded-md focus:outline-none focus:ring-2 focus:ring-krishacraft-brown"
                required
              />
              <button 
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            
            {isSubmitted && (
              <div className="mt-4 text-green-600 font-medium">
                Thank you for subscribing!
              </div>
            )}
            
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and to receive our marketing emails. You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
