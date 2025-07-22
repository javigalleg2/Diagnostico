import { HeroSection } from "@/components/HeroSection";
import { TargetSection } from "@/components/TargetSection";
import { ValueSection } from "@/components/ValueSection";
import { ExamplesSection } from "@/components/ExamplesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { EducationalSection } from "@/components/EducationalSection";
import { UrgencySection } from "@/components/UrgencySection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { CheckoutForm } from "@/components/CheckoutForm";
import { AfterSaleSection } from "@/components/AfterSaleSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TargetSection />
      <ValueSection />
      <ExamplesSection />
      <TestimonialsSection />
      <EducationalSection />
      <UrgencySection />
      <GuaranteeSection />
      <CheckoutForm />
      <AfterSaleSection />
    </div>
  );
};

export default Index;
