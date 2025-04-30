import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import AboutSection from "@/components/ui/about-section";
import ProductsSection from "@/components/ui/products-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import ContactSection from "@/components/ui/contact-section";
import SplitLayout from "@/components/ui/standoutFeature";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SplitLayout />
      <ProductsSection />
      <TestimonialsSection />
      <ContactSection />

    </>
  );
}