import { Button } from "@/components/ui/button";
import beforeAfter from "@/assets/before-after.jpg";

export const ExamplesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            💡 Antes y después
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Mira la transformación que conseguimos
          </p>

          <div className="bg-gradient-card rounded-2xl p-8 shadow-card mb-12">
            <img 
              src={beforeAfter} 
              alt="Antes y después de perfiles transformados" 
              className="w-full rounded-lg shadow-glow mb-8"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Perfil Optimizado</h3>
                <p className="text-muted-foreground">Transformación completa de imagen profesional</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎬</span>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Contenido Viral</h3>
                <p className="text-muted-foreground">Ideas de reels que funcionan en tu sector</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Informe Detallado</h3>
                <p className="text-muted-foreground">PDF con análisis y mejoras específicas</p>
              </div>
            </div>
          </div>

          <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
            📊 Ver ejemplo de diagnóstico
          </Button>
        </div>
      </div>
    </section>
  );
};