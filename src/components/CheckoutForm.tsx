import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { CreditCard, Shield } from "lucide-react";

export const CheckoutForm = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [formData, setFormData] = useState({
    name: "",
    instagram: "",
    email: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se integraría con Stripe o PayPal
    console.log("Datos del formulario:", { ...formData, plan: selectedPlan });
  };

  return (
    <section className="py-20 bg-background" id="checkout">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
            🛒 Reserva tu diagnóstico
          </h2>
          
          <Card className="p-8 shadow-intense">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selección de plan */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">Elige tu plan:</Label>
                <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 border-2 border-primary rounded-lg">
                      <RadioGroupItem value="basic" id="basic" />
                      <Label htmlFor="basic" className="flex-1 cursor-pointer">
                        <div>
                          <p className="font-semibold text-lg">Diagnóstico Básico - 9€</p>
                          <p className="text-muted-foreground">Informe PDF completo con análisis y mejoras</p>
                        </div>
                      </Label>
                      <div className="text-2xl font-bold text-primary">9€</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 border-2 border-secondary rounded-lg">
                      <RadioGroupItem value="premium" id="premium" />
                      <Label htmlFor="premium" className="flex-1 cursor-pointer">
                        <div>
                          <p className="font-semibold text-lg">Diagnóstico Premium - 17€</p>
                          <p className="text-muted-foreground">PDF + Video explicativo personalizado paso a paso</p>
                        </div>
                      </Label>
                      <div className="text-2xl font-bold text-secondary">17€</div>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Campos del formulario */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Tu nombre y apellidos"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="instagram">Instagram o web (para analizar) *</Label>
                  <Input
                    id="instagram"
                    type="text"
                    value={formData.instagram}
                    onChange={(e) => handleInputChange("instagram", e.target.value)}
                    placeholder="@tu_instagram o www.tuweb.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Información de seguridad */}
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-success" />
                  <p className="font-semibold text-foreground">Pago 100% seguro</p>
                </div>
                <p className="text-muted-foreground text-sm">
                  Procesado por Stripe. No almacenamos tu información de pago.
                </p>
              </div>

              {/* Botón de pago */}
              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full text-xl py-6 h-auto"
              >
                <CreditCard className="w-6 h-6 mr-2" />
                Reservar mi Diagnóstico por {selectedPlan === "basic" ? "9€" : "17€"}
              </Button>

              {/* Información adicional */}
              <div className="text-center text-sm text-muted-foreground">
                <p>Al hacer clic confirmas que has leído nuestra política de privacidad</p>
                <p className="mt-2">✅ Entrega garantizada en 48-72h</p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};