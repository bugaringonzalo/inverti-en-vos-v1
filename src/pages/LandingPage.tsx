import { ArrowRight, BookOpen, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      name: 'Clases Abiertas',
      description:
        'Únete a nuestras sesiones semanales de educación financiera y aprende los fundamentos de las finanzas personales.',
      icon: BookOpen,
    },
    {
      name: 'Reuniones Grupales',
      description:
        'Participa en discusiones interactivas sobre estrategias de inversión y análisis de mercado.',
      icon: Users,
    },
    {
      name: 'Sesiones Personales',
      description:
        'Obtén asesoramiento financiero personalizado adaptado a tus objetivos y circunstancias específicas.',
      icon: Calendar,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sección Hero */}
      <section className="relative flex-grow pt-24 lg:pt-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20 -z-10" />
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-2xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              ¿Queres tomar el control de tus finanzas
              <br />
              pero no sabes por dónde empezar?
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Nosotros también estuvimos ahí, sintiendo que los números no son
              lo nuestro. Pero venimos a decirte que eso es un mito. Con
              nuestras herramientas, vas a estar lista para tomar decisiones
              financieras con confianza.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                size="lg"
                className="bg-purple hover:bg-purple/90"
              >
                <Link to="/contact">
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Conocer Más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-24 sm:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Nuestros Servicios
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Todo lo que necesitás para el éxito financiero
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ofrecemos educación financiera integral y orientación
              personalizada para ayudarte a alcanzar tus metas financieras.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative p-8 rounded-2xl bg-background shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="rounded-full bg-primary/10 p-4">
                      <feature.icon
                        className="h-6 w-6 text-primary"
                        aria-hidden="true"
                      />
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
