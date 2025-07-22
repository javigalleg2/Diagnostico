import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              ¿Tu agenda está medio vacía y tus redes no atraen clientes?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Descubre cómo mejorar tu presencia online, atraer más clientes y aumentar tus reservas…
              <span className="block mt-2 font-semibold">
                con un diagnóstico exprés en menos de 72h — desde solo 9 €.
              </span>
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto animate-pulse hover:animate-none"
              onClick={() => window.open("https://buy.stripe.com/aFa3cx0B4dy17YF1Fe6Zy00", '_blank')}
            >
              💡 Quiero mi Diagnóstico por 9€
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroMockup} 
                alt="Mockup de diagnóstico profesional" 
                className="w-full max-w-lg rounded-lg shadow-intense transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-warning text-warning-foreground px-4 py-2 rounded-full font-bold text-sm shadow-glow">
                ¡NUEVO!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};