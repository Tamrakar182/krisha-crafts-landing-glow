import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';
import { testimonials } from '@/data';
import { BlurFade } from './magicui/blur-fade';

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
  index: number;
}

function TestimonialCard({
  quote,
  author,
  rating,
  index,
}: TestimonialCardProps) {
  return (
    <BlurFade inView delay={index * 0.3}>
      <Card className="h-full border-0 shadow-md">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? 'fill-[#13273f] text-[#13273f]'
                    : 'fill-muted text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <blockquote className="text-[#65625f] flex-1 mb-4">
            "{quote}"
          </blockquote>
          <footer className="font-medium text-[#13273f]">— {author}</footer>
        </CardContent>
      </Card>
    </BlurFade>
  );
}

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="section-padding bg-krishacraft-beige/30"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#13273f]">
            What Our Customers Say
          </h2>
          <p className="text-[#65625f] max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about Krisha Crafts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              index={index}
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
