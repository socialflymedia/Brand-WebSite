// // "use client" must be the very first token in a client component file
// "use client";

// import React from "react";
// import Head from "next/head";
// import Script from "next/script";

// import HeroSection from "@/components/ui/hero-section";
// import ServicesSection from "@/components/ui/services-section";
// import ProductsSection from "@/components/ui/products-section";
// import TestimonialsSection from "@/components/ui/testimonials-section";
// import ContactSection from "@/components/ui/ContactUs";
// import Technologies from "@/components/ui/tech-stack-strip";
// import AboutSection from "@/components/ui/AboutUsSection";
// import ChromaGrid from "@/components/ChromaGrid";

// type Item = {
//   image: string;
//   title: string;
//   subtitle?: string;
//   handle?: string;
//   borderColor?: string;
//   gradient?: string;
//   url?: string;
//   quote?: string;
// };

// const items: Item[] = [
//   {
//     image: "https://i.pravatar.cc/300?img=1",
//     title: "Sarah Johnson",
//     subtitle: "Frontend Developer",
//     handle: "@sarahjohnson",
//     borderColor: "#3B82F6",
//     gradient: "linear-gradient(145deg, #3B82F6, #000)",
//     url: "https://github.com/sarahjohnson",
//     quote: "Working with this product accelerated our front-end delivery by weeks.",
//   },
//   {
//     image: "https://i.pravatar.cc/300?img=2",
//     title: "Mike Chen",
//     subtitle: "Backend Engineer",
//     handle: "@mikechen",
//     borderColor: "#10B981",
//     gradient: "linear-gradient(180deg, #10B981, #000)",
//     url: "https://linkedin.com/in/mikechen",
//     quote: "Backend robustness improved and our deployments became predictable.",
//   },
//   // add more items...
// ];

// export default function Home(): JSX.Element {
//   const pageTitle = "SocialFly Networks — Mawana, Meerut | Web, App & Marketing";
//   const pageDescription =
//     "SocialFly Networks (Mawana, Meerut) — custom web & mobile apps, SaaS, ecommerce, and local digital marketing. Book a free consultation.";
//   const canonical = "https://socialflynetworks.com/";
//   const ogImage = "https://socialflynetworks.com/SFN_black_transparent_logo.png";

//   const breadcrumbLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       { "@type": "ListItem", position: 1, name: "Home", item: canonical },
//       { "@type": "ListItem", position: 2, name: "Services", item: `${canonical}#services` },
//       { "@type": "ListItem", position: 3, name: "Contact", item: `${canonical}#contact` },
//     ],
//   };

//   const faqLd = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: [
//       {
//         "@type": "Question",
//         name: "Do you serve local businesses in Mawana and Meerut?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes — we provide on-site and remote services for Mawana, Meerut, Noida and the greater NCR area.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "How can I get a quote for a website?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Use our contact form or call +91 81260 40011 for a fast estimate and free consultation.",
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <Head>
//         <title>{pageTitle}</title>
//         <meta name="description" content={pageDescription} />
//         <meta name="robots" content="index,follow" />
//         <link rel="canonical" href={canonical} />

//         {/* Open Graph */}
//         <meta property="og:title" content={pageTitle} />
//         <meta property="og:description" content={pageDescription} />
//         <meta property="og:image" content={ogImage} />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={canonical} />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={pageTitle} />
//         <meta name="twitter:description" content={pageDescription} />
//         <meta name="twitter:image" content={ogImage} />
//       </Head>

//       {/* JSON-LD for Breadcrumb and FAQ (invisible to users, helps search engines) */}
//       <Script id="breadcrumb-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
//       <Script id="faq-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

//       {/* invisible H1 for SEO only — uses a utility class so it does NOT affect design */}
//       {/* If you don't have .sr-only in your CSS, this simple inline style hides it visually */}
//       <h1
//         style={{
//           position: "absolute",
//           width: "1px",
//           height: "1px",
//           padding: 0,
//           margin: "-1px",
//           overflow: "hidden",
//           clip: "rect(0, 0, 0, 0)",
//           whiteSpace: "nowrap",
//           border: 0,
//         }}
//       >
//         SocialFly Networks — Mawana, Meerut: Web & App Development, Digital Marketing
//       </h1>

//       {/* original UI/components — left exactly as-is so design remains unchanged */}
//       <HeroSection />
//       <ServicesSection />
//       <Technologies />
//       <AboutSection />
//       <ProductsSection />
//       <TestimonialsSection
//         items={items}
//         height={680}
//         ChromaGridComponent={
//           <div style={{ height: "100%", position: "relative" }}>
//             <ChromaGrid
//               items={items}
//               radius={300}
//               damping={0.45}
//               fadeOut={0.6}
//               ease="power3.out"
//             />
//           </div>
//         }
//       />
//       <ContactSection />
//     </>
//   );
// }

// "use client" must be the very first token in a client component file
"use client";

import React, { Suspense, lazy } from "react";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";

// Priority components - loaded immediately
import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";

// Lazy load non-critical components for better performance
const ProductsSection = lazy(() => import("@/components/ui/products-section"));
const TestimonialsSection = lazy(() => import("@/components/ui/testimonials-section"));
const ContactSection = lazy(() => import("@/components/ui/ContactUs"));
const Technologies = lazy(() => import("@/components/ui/tech-stack-strip"));
const AboutSection = lazy(() => import("@/components/ui/AboutUsSection"));
const ServicesShowcase = lazy(() => import("@/components/ui/serivces-showcase-section"));

// Dynamic import for ChromaGrid with no SSR
const ChromaGrid = dynamic(() => import("@/components/ChromaGrid"), {
  ssr: false,
  loading: () => <div className="h-full bg-gray-50 dark:bg-gray-900 animate-pulse" />
});

// Types
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

// Testimonial data
const testimonialItems: Item[] = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "CEO, TechStartup Inc.",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
    quote: "SocialFly Networks transformed our digital presence. Their web development expertise helped us achieve 3x growth in just 6 months.",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Founder, Local Mart Meerut",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
    quote: "Outstanding local SEO and Google Business optimization. We're now the top-ranked store in Mawana area.",
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Priya Sharma",
    subtitle: "Director, EduTech Solutions",
    handle: "@priyasharma",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://linkedin.com/in/priyasharma",
    quote: "Their EduFly ERP system streamlined our entire institution. Excellent support team in Meerut!",
  },
  {
    image: "https://i.pravatar.cc/300?img=4",
    title: "Rajesh Kumar",
    subtitle: "Owner, Kumar Electronics",
    handle: "@rajeshkumar",
    borderColor: "#EF4444",
    gradient: "linear-gradient(180deg, #EF4444, #000)",
    url: "https://linkedin.com/in/rajeshkumar",
    quote: "Meta ads campaign brought 200+ new customers to our Mawana showroom. ROI exceeded expectations!",
  },
  {
    image: "https://i.pravatar.cc/300?img=5",
    title: "Anita Verma",
    subtitle: "Marketing Head, Fashion Hub",
    handle: "@anitaverma",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://linkedin.com/in/anitaverma",
    quote: "Professional team, on-time delivery, and excellent post-launch support. Highly recommend for NCR businesses!",
  },
];

// Loading component for lazy loaded sections
const SectionLoader = () => (
  <div className="w-full h-96 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse" />
);

export default function Home(): JSX.Element {
  // SEO Meta Data
  const pageTitle = "SocialFly Networks - Web Development, Mobile Apps & Digital Marketing in Mawana, Meerut";
  const pageDescription = "Leading IT company in Mawana, Meerut offering custom web development, mobile apps, ecommerce solutions, Google Business optimization, Meta ads & local SEO. Serving NCR since 2020. Call +91 81260 40011 for free consultation.";
  const canonical = "https://socialflynetworks.com/";
  const ogImage = "https://socialflynetworks.com/og-image-optimized.jpg";
  const keywords = "web development mawana, app development meerut, digital marketing ncr, seo services meerut, google business mawana, meta ads meerut, website design mawana, ecommerce development, socialfly networks";

  // Enhanced Organization Schema
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SocialFly Networks",
    alternateName: "SFN Digital",
    url: canonical,
    logo: "https://socialflynetworks.com/icon.png",
    foundingDate: "2020",
    founders: [
      {
        "@type": "Person",
        name: "SocialFly Networks Team"
      }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Market Road",
      addressLocality: "Mawana",
      addressRegion: "Uttar Pradesh",
      postalCode: "250401",
      addressCountry: "IN"
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-81260-40011",
        contactType: "customer service",
        contactOption: "TollFree",
        areaServed: ["IN"],
        availableLanguage: ["en", "hi"]
      }
    ],
    sameAs: [
      "https://facebook.com/socialflynetworks",
      "https://twitter.com/socialflynet",
      "https://linkedin.com/company/socialflynetworks",
      "https://instagram.com/socialflynetworks"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127"
    }
  };

  // Local Business Schema
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": canonical,
    name: "SocialFly Networks",
    image: ogImage,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Market Road",
      addressLocality: "Mawana",
      addressRegion: "UP",
      postalCode: "250401",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "29.0961",
      longitude: "77.9191"
    },
    url: canonical,
    telephone: "+918126040011",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00"
      }
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Mawana"
      },
      {
        "@type": "City",
        name: "Meerut"
      },
      {
        "@type": "City",
        name: "Noida"
      },
      {
        "@type": "State",
        name: "NCR"
      }
    ]
  };

  // Service Schema
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: ["Web Development", "Mobile App Development", "Digital Marketing", "SEO Services"],
    provider: {
      "@type": "Organization",
      name: "SocialFly Networks"
    },
    areaServed: {
      "@type": "State",
      name: "Uttar Pradesh"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom website development using Next.js, React, and modern technologies"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Native and cross-platform mobile app development"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing",
            description: "SEO, Google Ads, Meta Ads, and social media marketing"
          }
        }
      ]
    }
  };

  // Enhanced Breadcrumb Schema
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonical
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${canonical}services`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Products",
        item: `${canonical}products`
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "About",
        item: `${canonical}about`
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: `${canonical}contact`
      }
    ]
  };

  // Enhanced FAQ Schema
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does SocialFly Networks offer in Mawana and Meerut?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer comprehensive digital services including custom web development, mobile app development, ecommerce solutions, digital marketing, SEO, Google Business optimization, and Meta ads management for businesses in Mawana, Meerut, and the entire NCR region."
        }
      },
      {
        "@type": "Question",
        name: "How much does a website cost from SocialFly Networks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website costs vary based on requirements. Basic business websites start from ₹15,000, while custom web applications and ecommerce sites begin at ₹35,000. Contact us at +91 81260 40011 for a free quote tailored to your needs."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide on-site services in Mawana and Meerut?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide both on-site consultations and remote services for clients in Mawana, Meerut, Noida, and throughout the NCR region. Our team can visit your business for initial discussions and project planning."
        }
      },
      {
        "@type": "Question",
        name: "How long does it take to develop a website or app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Development time depends on project complexity. Basic websites take 2-3 weeks, custom web applications 4-8 weeks, and mobile apps 8-12 weeks. We provide detailed timelines during the consultation phase."
        }
      },
      {
        "@type": "Question",
        name: "What is EduFly ERP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EduFly ERP is our flagship education management system that handles admissions, fees, attendance, exams, and all administrative tasks for schools and colleges. It's cloud-based and accessible from anywhere."
        }
      },
      {
        "@type": "Question",
        name: "Do you offer post-launch support and maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide comprehensive post-launch support including bug fixes, updates, hosting management, and ongoing maintenance. Support packages start from ₹5,000/month."
        }
      }
    ]
  };

  // WebSite Schema for Sitelinks Search Box
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${canonical}#website`,
    url: canonical,
    name: "SocialFly Networks",
    description: pageDescription,
    publisher: {
      "@id": `${canonical}#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${canonical}search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    inLanguage: "en-IN"
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="SocialFly Networks" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <link rel="canonical" href={canonical} />

        {/* Viewport for Responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SocialFly Networks - Digital Excellence" />
        <meta property="og:site_name" content="SocialFly Networks" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonical} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="SocialFly Networks - Digital Excellence" />
        <meta name="twitter:site" content="@socialflynet" />
        <meta name="twitter:creator" content="@socialflynet" />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.pravatar.cc" />

        {/* Alternate URLs for language/region */}
        <link rel="alternate" hrefLang="en-in" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />

        {/* Additional SEO Tags */}
        <meta property="article:publisher" content="https://facebook.com/socialflynetworks" />
        <meta property="article:author" content="SocialFly Networks" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Mawana, Meerut" />
        <meta name="geo.position" content="29.0961;77.9191" />
        <meta name="ICBM" content="29.0961, 77.9191" />
      </Head>

      {/* JSON-LD Structured Data */}
      <Script
        id="organization-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        strategy="afterInteractive"
      />
      <Script
        id="local-business-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        strategy="afterInteractive"
      />
      <Script
        id="service-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        strategy="afterInteractive"
      />

      {/* Hidden H1 for SEO - Screen Reader Only */}
      <h1 className="sr-only">
        SocialFly Networks - Leading Web Development, Mobile Apps & Digital Marketing Company in Mawana, Meerut | Serving NCR Since 2020
      </h1>

      {/* Main Content Sections */}
      <main className="min-h-screen overflow-x-hidden">
        {/* Priority sections - loaded immediately */}
        <section id="hero" className="w-full">
          <HeroSection />
        </section>

        <section id="services" className="w-full">
          <ServicesSection />
        </section>

        <section id="services-section" className="w-full">
          <ServicesShowcase />
        </section>

        {/* Lazy loaded sections with Suspense for better performance */}
        <Suspense fallback={<SectionLoader />}>
          <section id="technologies" className="w-full">
            <Technologies />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="about" className="w-full">
            <AboutSection />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="products" className="w-full">
            <ProductsSection />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section 
            id="testimonials" 
            className="w-full"
            aria-label="Customer Testimonials"
          >
            <TestimonialsSection
              items={testimonialItems}
              height={680}
              ChromaGridComponent={
                <div className="h-full relative w-full max-w-full overflow-hidden">
                  <ChromaGrid
                    items={testimonialItems}
                    radius={300}
                    damping={0.45}
                    fadeOut={0.6}
                    ease="power3.out"
                  />
                </div>
              }
            />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="contact" className="w-full">
            <ContactSection />
          </section>
        </Suspense>
      </main>

      {/* Responsive CSS Utilities */}
      <style jsx global>{`
        /* Screen reader only class */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        /* Ensure full width sections on mobile */
        @media (max-width: 640px) {
          section {
            padding-left: 0;
            padding-right: 0;
            margin-left: 0;
            margin-right: 0;
          }
        }

        /* Prevent horizontal scroll */
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        /* Responsive container */
        .container-responsive {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 640px) {
          .container-responsive {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .container-responsive {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .container-responsive {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </>
  );
}