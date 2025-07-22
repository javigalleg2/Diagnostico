import { Card } from "@/components/ui/card";
import { CheckCircle, MessageCircle, Calendar, TrendingUp } from "lucide-react";

export const AfterSaleSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            📲 Qué pasa después de tu compra
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-success-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Confirmación inmediata</h3>
              <p className="text-white/90">
                Recibirás un email de agradecimiento: "Gracias, ya estoy analizando tu perfil"
              </p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-warning-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Tiempo de entrega</h3>
              <p className="text-white/90">
                Te informamos exactamente cuándo recibirás tu diagnóstico personalizado
              </p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-secondary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Opción de upgrade</h3>
              <p className="text-white/90">
                Posibilidad de upgrade a la versión premium con video explicativo personalizado
              </p>
            </Card>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold text-white">Soporte incluido</h3>
            </div>
            <p className="text-white/90 text-lg">
              Después de recibir tu diagnóstico, podrás contactarnos por WhatsApp 
              para resolver cualquier duda sobre la implementación
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};