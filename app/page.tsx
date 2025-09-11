// "use client" must be the very first token in a client component file
"use client";

import React from "react";
import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import ProductsSection from "@/components/ui/products-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import ContactSection from "@/components/ui/ContactUs";
import Technologies from "@/components/ui/tech-stack-strip";
import AboutSection from "@/components/ui/AboutUsSection";
import ChromaGrid from "@/components/ChromaGrid";

type Item = {
  image: string;
  title: string;
  subtitle?: string;
  handle?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
  quote?: string;
};

const items: Item[] = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
    quote: "Working with this product accelerated our front-end delivery by weeks.",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
    quote: "Backend robustness improved and our deployments became predictable.",
  },
  // add more items...
];

export default function Home(): JSX.Element {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Technologies />
      <AboutSection />
      <ProductsSection />
      <TestimonialsSection
        items={items}
        height={680}
        ChromaGridComponent={
          <div style={{ height: "100%", position: "relative" }}>
            <ChromaGrid
              items={items}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        }
      />
      <ContactSection />
    </>
  );
}
