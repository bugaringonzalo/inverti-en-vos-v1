import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20 rounded-3xl -z-10" />
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to take control of your financial future? Send us a message to schedule your consultation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { icon: Mail, title: 'Email', info: 'contact@financeguide.com' },
              { icon: Phone, title: 'Phone', info: '+1 (555) 123-4567' },
              { icon: MessageSquare, title: 'Live Chat', info: 'Available 9am-5pm EST' },
            ].map((item) => (
              <div key={item.title} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg -z-10" />
                <div className="flex flex-col items-center p-6 rounded-lg bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
                  <item.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-2 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-6 p-8 rounded-xl bg-background/50 backdrop-blur-sm shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-background"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="bg-background"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your financial goals..."
                rows={5}
                required
                className="bg-background"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;