import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            🔐 Garantía sin riesgo
          </h2>
          
          <div className="bg-gradient-card rounded-2xl p-8 shadow-intense border-2 border-success/30">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center">
                <Shield className="w-12 h-12 text-success-foreground" />
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-card-foreground font-semibold mb-8 leading-relaxed">
              💬 "Si después de recibir tu diagnóstico no crees que valió al menos 10 veces su precio, 
              <span className="text-success"> te devolvemos el dinero sin preguntas.</span>"
            </blockquote>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                <p className="text-card-foreground">100% garantía</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                <p className="text-card-foreground">Sin preguntas</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                <p className="text-card-foreground">Reembolso total</p>
              </div>
            </div>
            
            <div className="bg-success/10 rounded-xl p-6 mb-8">
              <p className="text-lg text-card-foreground font-semibold">
                🎯 No pierdes nada, solo puedes ganar
              </p>
              <p className="text-muted-foreground mt-2">
                Estamos tan seguros de la calidad que asumimos todo el riesgo
              </p>
            </div>
            
            <Button variant="success" size="lg" className="text-lg px-8 py-4 h-auto">
              Haz clic aquí, no pierdes nada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};