import { Button } from "@/components/ui/button";
import { Clock, Users, Zap } from "lucide-react";

export const UrgencySection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            💸 ¡Plazas Limitadas!
          </h2>
          
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 shadow-intense mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-warning" />
              <p className="text-xl text-white font-semibold">
                Solo aceptamos 5 diagnósticos nuevos por semana para asegurar calidad.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <p className="text-white text-lg font-semibold">5 plazas/semana</p>
                <p className="text-white/80">Atención personalizada</p>
              </div>
              
              <div className="text-center">
                <Zap className="w-12 h-12 text-warning mx-auto mb-4" />
                <p className="text-white text-lg font-semibold">48-72h entrega</p>
                <p className="text-white/80">Resultados rápidos</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">€</span>
                </div>
                <p className="text-white text-lg font-semibold">Desde 9€</p>
                <p className="text-white/80">Precio especial</p>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-2xl text-white font-bold mb-4">
                Haz clic y reserva el tuyo por solo 9 €
              </p>
              <p className="text-lg text-white/90">
                (o 17 € con video explicado paso a paso)
              </p>
            </div>

            <Button variant="cta" size="lg" className="text-xl px-12 py-6 h-auto animate-pulse hover:animate-none">
              ✅ Quiero reservar mi Diagnóstico ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};