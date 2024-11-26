import { Card } from '@/components/ui/card';
import { Heart, Target, Sparkles } from 'lucide-react';

const MissionSection = () => {
  const missions = [
    {
      icon: Heart,
      title: "Autogestión Financiera",
      description: "Brindamos herramientas e ideas para que puedas autogestionar tus finanzas de manera efectiva y segura."
    },
    {
      icon: Target,
      title: "Simplicidad y Claridad",
      description: "Te ayudamos a encontrar la manera más fácil y simple de entender las finanzas para que tomes tus propias decisiones."
    },
    {
      icon: Sparkles,
      title: "Cumplir Sueños",
      description: "Con conocimiento, disciplina y ayuda mutua, te acompañamos a hacer realidad tus sueños financieros."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg font-semibold text-primary mb-3">
            NUESTRA MISIÓN
          </h2>
          <p className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Impulsando tu futuro financiero
          </p>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Creemos en el poder de la educación financiera y el apoyo mutuo para alcanzar la libertad financiera.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission, index) => (
            <Card key={index} className="relative group p-8 rounded-xl bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-primary/20">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="rounded-full bg-shadow p-4">
                  <mission.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{mission.title}</h3>
                <p className="text-muted-foreground">
                  {mission.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;