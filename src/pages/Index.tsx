import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import InstagramFeed from '@/components/InstagramFeed';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-krishacraft-cream">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <AboutSection />
        <Testimonials />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
