import { ArrowRight, BookOpen, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MissionSection from "@/components/MissionSection";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Importamos componentes de carousel

const LandingPage = () => {
  // Array de imágenes para el slider
  const sliderImages = [
    "src/assets/slider1.jpg",
    "src/assets/slider2.jpg",
    "src/assets/slider3.jpg",
    "src/assets/slider4.jpg",
  ];

  const features = [
    {
      name: "Clases Abiertas",
      description:
        "Únete a nuestras sesiones semanales de educación financiera y aprende los fundamentos de las finanzas personales.",
      icon: BookOpen,
    },
    {
      name: "Reuniones Grupales",
      description:
        "Participa en discusiones interactivas sobre estrategias de inversión y análisis de mercado.",
      icon: Users,
    },
    {
      name: "Sesiones Personales",
      description:
        "Obtén asesoramiento financiero personalizado adaptado a tus objetivos y circunstancias específicas.",
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen overflow-y-auto snap-y snap-mandatory">
      {" "}
      {/* Cambiado h-screen por min-h-screen */}
      <section className="relative min-h-screen snap-start snap-always overflow-hidden">
        {" "}
        {/* Ajustado para mobile */}
        <Carousel className="w-full h-full">
          <CarouselContent>
            {sliderImages.map((src, index) => (
              <CarouselItem key={index} className="min-h-screen">
                {" "}
                {/* Ajustado para consistencia */}
                <div className="relative w-full h-full">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center text-white p-4">
                    {" "}
                    {/* Añadido padding */}
                    <div className="text-center">
                      <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                        {" "}
                        {/* Ajustado tamaño responsivo */}
                        Título {index + 1}
                      </h2>
                      <p className="text-base md:text-xl">
                        {" "}
                        {/* Ajustado tamaño responsivo */}
                        Descripción breve {index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-4" />{" "}
          {/* Ajustado posición */}
          <CarouselNext className="right-2 md:right-4" />{" "}
          {/* Ajustado posición */}
        </Carousel>
      </section>
      {/* Sección Hero */}
      <section className="relative h-screen flex items-center snap-start snap-always px-6 overflow-hidden">
        {" "}
        {/* Modificado: h-screen, flex, items-center, snap properties */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20 -z-10" />
        <div className="mx-auto max-w-7xl w-full">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              ¿Queres tomar el control de tus finanzas
              <br />
              pero no sabes por dónde empezar?
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-muted-foreground max-w-2xl mx-auto px-4">
              Nosotros también estuvimos ahí, sintiendo que los números no son
              lo nuestro. Pero venimos a decirte que eso es un mito. Con
              nuestras herramientas, vas a estar lista para tomar decisiones
              financieras con confianza.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-x-6">
              <Button
                asChild
                size="lg"
                className="w-full md:w-auto bg-purple hover:bg-purple/90"
              >
                <Link to="/contact">
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full md:w-auto"
              >
                <Link to="/contact">Conocer Más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="min-h-screen flex items-center snap-start snap-always bg-secondary/30 py-16 md:py-0">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 w-full">
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
          <div className="mx-auto mt-16 max-w-2xl lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative p-8 rounded-2xl bg-background shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="rounded-full bg-shadow p-4">
                      <feature.icon
                        className="h-6 w-6 text-white"
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
      {/* Mission Section */}
      <section className="min-h-screen flex items-center snap-start snap-always">
        <MissionSection />
      </section>
    </div>
  );
};

export default LandingPage;
