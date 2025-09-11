// "use client" must be the very first token in a client component file
"use client";

import React from "react";
import Head from "next/head";
import Script from "next/script";

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
  const pageTitle = "SocialFly Networks — Mawana, Meerut | Web, App & Marketing";
  const pageDescription =
    "SocialFly Networks (Mawana, Meerut) — custom web & mobile apps, SaaS, ecommerce, and local digital marketing. Book a free consultation.";
  const canonical = "https://socialflynetworks.com/";
  const ogImage = "https://socialflynetworks.com/SFN_black_transparent_logo.png";

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonical },
      { "@type": "ListItem", position: 2, name: "Services", item: `${canonical}#services` },
      { "@type": "ListItem", position: 3, name: "Contact", item: `${canonical}#contact` },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you serve local businesses in Mawana and Meerut?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we provide on-site and remote services for Mawana, Meerut, Noida and the greater NCR area.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get a quote for a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use our contact form or call +91 81260 40011 for a fast estimate and free consultation.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      {/* JSON-LD for Breadcrumb and FAQ (invisible to users, helps search engines) */}
      <Script id="breadcrumb-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* invisible H1 for SEO only — uses a utility class so it does NOT affect design */}
      {/* If you don't have .sr-only in your CSS, this simple inline style hides it visually */}
      <h1
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        SocialFly Networks — Mawana, Meerut: Web & App Development, Digital Marketing
      </h1>

      {/* original UI/components — left exactly as-is so design remains unchanged */}
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
