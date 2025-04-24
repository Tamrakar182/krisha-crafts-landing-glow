import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { data } from '@/data';
import { BlurFade } from './magicui/blur-fade';

function ContactForm() {
  return (
    <div className="bg-neutral-50 p-6 rounded-lg">
      <form className="space-y-4">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input id="name" placeholder="Your name" required />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="Your email" required />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Your message"
              required
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-krishacraft-primary hover:bg-krishacraft-primary/90 text-white"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#13273f]">
            Get In Touch
          </h2>
          <p className="text-[#65625f] max-w-2xl mx-auto">
            Have questions or special requests? We'd love to hear from you!
          </p>
        </div>

        <BlurFade inView>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#13273f] mt-1" />
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-[#65625f]">{data.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#13273f] mt-1" />
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-[#65625f]">{data.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#13273f] mt-1" />
                <div>
                  <h3 className="font-medium">Visit Our Shop</h3>
                  <p className="text-[#65625f]">
                    {data.address}, {data.city}
                  </p>
                  <p className="text-[#65625f] text-sm">
                    Open {data.openDays}, {data.openTime}
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-medium mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href={data.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href={data.facebook}
                    className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

export default Contact;
