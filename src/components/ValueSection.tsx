import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export const ValueSection = () => {
  const features = [
    "Mini-auditoría de tu perfil de Instagram / Google Business / web",
    "1 reel viral personalizado (lista la idea, solo copia/pega)",
    "Rediseño rápido de portada de perfil o feed",
    "Promoción lista para lanzar esta semana",
    "Documento PDF con 3 mejoras clave para tener más reservas YA",
    "Bonus: plantilla para pedir reseñas por WhatsApp"
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            📦 Qué incluye exactamente
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Lo que obtienes por solo 9-17 €:
          </p>

          <div className="bg-card rounded-2xl p-8 shadow-intense border-2 border-primary/20">
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-success-foreground" />
                    </div>
                  </div>
                  <p className="text-lg text-card-foreground leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-primary rounded-xl p-6 text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-300 fill-current" />
                <Star className="w-6 h-6 text-yellow-300 fill-current" />
                <Star className="w-6 h-6 text-yellow-300 fill-current" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                Entrega en 48-72h
              </p>
              <p className="text-white/90 text-xl">
                <span className="line-through opacity-70">Valor real: +120€</span>
                <span className="block text-2xl font-bold mt-2">hoy desde solo 9€</span>
              </p>
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto"
                onClick={() => window.open("https://buy.stripe.com/aFa3cx0B4dy17YF1Fe6Zy00", '_blank')}
              >
                🚀 Quiero potenciar mi imagen ya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};