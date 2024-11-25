import { ArrowRight, BookOpen, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      name: 'Open Classes',
      description: 'Join our weekly financial literacy sessions and learn the fundamentals of personal finance.',
      icon: BookOpen,
    },
    {
      name: 'Group Meetings',
      description: 'Participate in interactive group discussions about investment strategies and market analysis.',
      icon: Users,
    },
    {
      name: 'Personal Sessions',
      description: 'Get personalized financial guidance tailored to your specific goals and circumstances.',
      icon: Calendar,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex-grow pt-24 lg:pt-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20 -z-10" />
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Master Your Finances<br />
              Shape Your Future
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Expert financial guidance to help you make informed decisions. Join our community of successful investors and learn proven strategies for wealth building.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Book a Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to succeed financially
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We offer comprehensive financial education and personalized guidance to help you achieve your financial goals.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="relative p-8 rounded-2xl bg-background shadow-lg hover:shadow-xl transition-shadow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="rounded-full bg-primary/10 p-4">
                      <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <dt className="mt-4 text-center text-lg font-semibold leading-7">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 text-center text-base leading-7 text-muted-foreground">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;