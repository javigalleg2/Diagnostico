export const EducationalSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            🧠 ¿Por qué necesitas esto?
          </h2>
          
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
            <div className="space-y-6 text-lg text-card-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-primary">Tu talento no basta</span> si tu presencia online no lo refleja.
              </p>
              <p>
                En el mundo digital de hoy, los perfiles que comunican bien… <span className="font-bold text-secondary">venden más</span>.
              </p>
              <p className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
                Este diagnóstico es el primer paso para convertir tu presencia en reservas reales.
              </p>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Análisis Preciso</h3>
                <p className="text-muted-foreground text-sm">Identificamos exactamente qué falla</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Acción Rápida</h3>
                <p className="text-muted-foreground text-sm">Cambios que puedes aplicar hoy mismo</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Resultados</h3>
                <p className="text-muted-foreground text-sm">Más visibilidad, más clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};