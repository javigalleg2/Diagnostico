import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const TargetSection = () => {
  const targetPoints = [
    "Te cuesta atraer clientes nuevos por redes sociales",
    "No tienes tiempo para pensar en contenido o promociones",
    "Tu perfil no transmite lo profesional que eres",
    "Te sientes estancada con las reservas",
    "Ves a la competencia crecer online y no sabes cómo lo hacen"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🔥 Esto es para ti si...
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Este mini diagnóstico es para ti si:
          </p>
          
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card mb-12">
            <div className="space-y-6">
              {targetPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-success-foreground" />
                    </div>
                  </div>
                  <p className="text-lg text-card-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <Button variant="secondary" size="lg" className="text-lg px-8 py-4 h-auto">
            🎯 Quiero un análisis rápido de mi negocio
          </Button>
        </div>
      </div>
    </section>
  );
};