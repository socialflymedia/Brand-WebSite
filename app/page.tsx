// app/page.tsx - Server Component (NO "use client" directive)
// This ensures faster initial load with Server-Side Rendering
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Script from "next/script";

// ============================================================================
// PAGE-SPECIFIC METADATA - Override layout defaults for homepage
// ============================================================================
export const metadata: Metadata = {
  title: "SocialFly Networks | Best Agentic AI & Web Development Company",
  description:
    "Looking for the best agentic AI company or a top web development company? SocialFly Networks builds AI agents, custom websites, mobile apps, SaaS platforms and growth marketing programs. 100+ projects delivered. Free consultation: +91-9411978307",
  keywords: [
    "best agentic ai company",
    "agentic ai company",
    "agentic ai development company",
    "ai agent development company",
    "ai automation company",
    "enterprise ai company",
    "web development company",
    "best web development company",
    "custom web development company",
    "mobile app development company",
    "saas development company",
    "ecommerce development company",
    "digital marketing company",
    "seo company",
    "ui ux design company",
    "blockchain development company",
    "cloud architecture company",
    "socialfly networks",
  ],
  alternates: {
    canonical: "https://socialflynetworks.com",
  },
  openGraph: {
    title: "SocialFly Networks | Best Agentic AI & Web Development Company",
    description:
      "Build agentic AI products, custom web platforms, mobile apps and SaaS with SocialFly Networks. 100+ projects delivered worldwide.",
    url: "https://socialflynetworks.com",
    images: [
      {
        url: "https://socialflynetworks.com/og-image-optimized.jpg",
        width: 1200,
        height: 630,
        alt: "SocialFly Networks - Agentic AI & Web Development Company",
      },
    ],
  },
  twitter: {
    title: "SocialFly Networks | Best Agentic AI & Web Development Company",
    description:
      "Agentic AI agents, custom web & app development, SaaS and growth marketing. 100+ projects delivered. Call +91-9411978307.",
  },
};

// ============================================================================
// COMPONENT IMPORTS - Optimized Loading Strategy
// ============================================================================

// Critical above-the-fold component - Import directly (no lazy loading)
import HeroSection from "@/components/ui/hero-section";

// Below-the-fold - lazy loaded for faster initial paint
const ServicesSection = dynamic(
  () => import("@/components/ui/services-section"),
  {
    loading: () => <SectionSkeleton height="500px" />,
  }
);

// Below-the-fold components - Dynamic imports with loading states
const ServicesShowcase = dynamic(
  () => import("@/components/ui/serivces-showcase-section"),
  {
    loading: () => <SectionSkeleton height="600px" />,
  }
);

const Technologies = dynamic(
  () => import("@/components/ui/tech-stack-strip"),
  {
    loading: () => <SectionSkeleton height="200px" />,
  }
);

const AboutSection = dynamic(
  () => import("@/components/ui/AboutUsSection"),
  {
    loading: () => <SectionSkeleton height="500px" />,
  }
);

const ProductsSection = dynamic(
  () => import("@/components/ui/products-section"),
  {
    loading: () => <SectionSkeleton height="600px" />,
  }
);

const TestimonialsSection = dynamic(
  () => import("@/components/ui/testimonials-section"),
  {
    loading: () => <SectionSkeleton height="680px" />,
  }
);

const ContactSection = dynamic(
  () => import("@/components/ui/ContactUs"),
  {
    loading: () => <SectionSkeleton height="500px" />,
  }
);

// Client-only component (uses browser APIs like mouse events)
const ChromaGrid = dynamic(
  () => import("@/components/ChromaGrid"),
  {
    ssr: false, // Disable SSR for this component
    loading: () => (
      <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 animate-pulse rounded-2xl" />
    ),
  }
);

// ============================================================================
// TESTIMONIAL DATA
// ============================================================================
const testimonialItems = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "CEO, TechStartup Inc.",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
    quote:
      "SocialFly Networks transformed our digital presence. Their web development expertise helped us achieve 3x growth in just 6 months.",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Founder, Local Mart",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
    quote:
      "Their AI agent built on top of our catalog automated 60% of customer queries within weeks. Outstanding engineering.",
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Priya Sharma",
    subtitle: "Director, EduTech Solutions",
    handle: "@priyasharma",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://linkedin.com/in/priyasharma",
    quote:
      "Their EduFly ERP system streamlined our entire institution. Reliable team and excellent post-launch support.",
  },
  {
    image: "https://i.pravatar.cc/300?img=4",
    title: "Rajesh Kumar",
    subtitle: "Owner, Kumar Electronics",
    handle: "@rajeshkumar",
    borderColor: "#EF4444",
    gradient: "linear-gradient(180deg, #EF4444, #000)",
    url: "https://linkedin.com/in/rajeshkumar",
    quote:
      "Their performance marketing program brought 200+ new customers in a quarter. ROI exceeded expectations!",
  },
  {
    image: "https://i.pravatar.cc/300?img=5",
    title: "Anita Verma",
    subtitle: "Marketing Head, Fashion Hub",
    handle: "@anitaverma",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://linkedin.com/in/anitaverma",
    quote:
      "Professional team, on-time delivery, and excellent post-launch support. Highly recommended.",
  },
];

// ============================================================================
// LOADING SKELETON COMPONENT
// ============================================================================
function SectionSkeleton({ height = "400px" }: { height?: string }) {
  return (
    <div
      className="w-full bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 animate-pulse"
      style={{ height }}
      aria-hidden="true"
    />
  );
}

// ============================================================================
// HOMEPAGE-SPECIFIC STRUCTURED DATA
// ============================================================================
function HomePageStructuredData() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://socialflynetworks.com/#webpage",
    url: "https://socialflynetworks.com",
    name: "SocialFly Networks - Best Agentic AI & Web Development Company",
    description:
      "Agentic AI and web development company building AI agents, custom web platforms, mobile apps, SaaS products, ecommerce, and growth marketing programs.",
    isPartOf: { "@id": "https://socialflynetworks.com/#website" },
    about: { "@id": "https://socialflynetworks.com/#organization" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://socialflynetworks.com/og-image-optimized.jpg",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://socialflynetworks.com",
        },
      ],
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".hero-text"],
    },
    specialty: "Agentic AI & Custom Software Engineering",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get Started with SocialFly Networks",
    description: "Simple steps to transform your business with our digital services",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Free Consultation",
        text: "Call us at +91-9411978307 or fill our contact form for a free consultation",
        url: "https://socialflynetworks.com/contact",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Discuss Requirements",
        text: "Share your business goals and requirements with our expert team",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Get Custom Proposal",
        text: "Receive a detailed proposal with timeline and transparent pricing",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Project Kickoff",
        text: "Start your project with our dedicated team and regular updates",
      },
    ],
    totalTime: "PT30M",
  };

  return (
    <>
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function HomePage() {
  return (
    <>
      {/* Homepage-specific structured data */}
      <HomePageStructuredData />

      {/* Main content wrapper */}
      <div className="min-h-screen overflow-x-hidden">
        {/* 
          HERO SECTION 
          - Critical for LCP (Largest Contentful Paint)
          - Loaded immediately, not lazy loaded
          - Contains primary H1 for SEO
        */}
        <section
          id="hero"
          className="relative w-full"
          aria-label="Welcome to SocialFly Networks"
        >
          <HeroSection />
        </section>

        {/* 
          SERVICES OVERVIEW 
          - Important for user journey
          - Loaded immediately for fast interaction
        */}
        <section
          id="services"
          className="relative w-full"
          aria-label="Our Services"
        >
          <ServicesSection />
        </section>

        {/* 
          SERVICES SHOWCASE 
          - Detailed service information
          - Lazy loaded but important for conversions
        */}
        <section
          id="services-showcase"
          className="relative w-full"
          aria-label="Services Details"
        >
          <ServicesShowcase />
        </section>

        {/* 
          TECHNOLOGY STACK 
          - Trust signals
          - Shows technical expertise
        */}
        <section
          id="technologies"
          className="relative w-full"
          aria-label="Technologies We Use"
        >
          <Technologies />
        </section>

        {/* 
          ABOUT SECTION 
          - Company information
          - Builds trust and credibility
        */}
        <section
          id="about"
          className="relative w-full"
          aria-label="About SocialFly Networks"
        >
          <AboutSection />
        </section>

        {/* 
          PRODUCTS SECTION 
          - Showcases EduFly ERP and other products
          - Revenue generation
        */}
        <section
          id="products"
          className="relative w-full"
          aria-label="Our Products"
        >
          <ProductsSection />
        </section>

        {/* 
          TESTIMONIALS 
          - Social proof
          - Critical for conversions
        */}
        <section
          id="testimonials"
          className="relative w-full"
          aria-label="Customer Testimonials and Reviews"
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

        {/* 
          CONTACT SECTION 
          - Final CTA
          - Lead generation
        */}
        <section
          id="contact"
          className="relative w-full"
          aria-label="Contact Us"
        >
          <ContactSection />
        </section>
      </div>

      {/* 
        HIDDEN SEO CONTENT 
        - Additional keyword-rich content for search engines
        - Visually hidden but accessible to screen readers
      */}
      <div className="sr-only" aria-hidden="false">
        <h2>Best Agentic AI & Web Development Company</h2>
        <p>
          SocialFly Networks is an agentic AI and web development company
          building AI agents, custom websites, mobile apps, SaaS products,
          ecommerce platforms and growth marketing programs for businesses
          worldwide. Our team of AI engineers, full-stack developers and
          designers ships production-grade systems end to end.
        </p>
        <h3>Services We Offer:</h3>
        <ul>
          <li>Agentic AI Development Company</li>
          <li>AI Agent & Automation Engineering</li>
          <li>Generative AI & LLM Application Development</li>
          <li>MLOps & AI Platform Engineering</li>
          <li>Custom Web Development Company</li>
          <li>SaaS &amp; Web Application Development</li>
          <li>Mobile App Development Company</li>
          <li>E-commerce Development</li>
          <li>Cloud Architecture &amp; DevOps</li>
          <li>Cybersecurity &amp; Zero Trust</li>
          <li>Blockchain &amp; Web3 Engineering</li>
          <li>Data Engineering &amp; Analytics</li>
          <li>UI/UX Design</li>
          <li>SEO &amp; Digital Marketing</li>
          <li>EduFly ERP for Schools and Colleges</li>
        </ul>
        <h3>Why teams choose SocialFly Networks</h3>
        <ul>
          <li>Best agentic AI company for production-ready AI agents</li>
          <li>Top web development company for custom platforms and SaaS</li>
          <li>End-to-end engineering: strategy, build, scale and operate</li>
          <li>100+ projects delivered worldwide with a 98% satisfaction rate</li>
        </ul>
        <p>
          Contact SocialFly Networks at +91-9411978307 for a free consultation
          on your agentic AI, web, or app project.
        </p>
      </div>
    </>
  );
}