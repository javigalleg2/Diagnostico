import { Star } from "lucide-react";
import testimonialsImage from "@/assets/testimonials.jpg";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carla",
      profession: "esteticien en Lleida",
      text: "No sabía que mi perfil daba tan mala impresión hasta que vi el informe. Apliqué 2 cosas y me llegaron más mensajes esa semana.",
      rating: 5
    },
    {
      name: "David",
      profession: "tatuador en Barcelona",
      text: "Por 9€ me esperaba poco, pero el informe me dio ideas que no había pensado. Vale mucho más.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ❤️ Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Casos reales de transformación
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-card-foreground mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-card-foreground">— {testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.profession}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
            <img 
              src={testimonialsImage} 
              alt="Clientes satisfechos" 
              className="w-full max-w-md mx-auto rounded-lg shadow-glow mb-6"
            />
            <p className="text-lg text-card-foreground">
              Únete a más de <span className="font-bold text-primary">100+ profesionales</span> que ya han transformado su presencia online
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};