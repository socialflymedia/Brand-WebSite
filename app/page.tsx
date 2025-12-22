// app/page.tsx - Server Component (NO "use client" directive)
// This ensures faster initial load with Server-Side Rendering
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Script from "next/script";

// ============================================================================
// PAGE-SPECIFIC METADATA - Override layout defaults for homepage
// ============================================================================
export const metadata: Metadata = {
  title: "SocialFly Networks | #1 Web Development & Digital Marketing in Mawana, Meerut | Since 2020",
  description:
    "Looking for the best website developer in Mawana or Meerut? SocialFly Networks delivers custom websites, mobile apps, SEO & Meta Ads. 100+ happy clients. ₹15,000 onwards. Free consultation: +91-9411978307",
  keywords: [
    "web development mawana",
    "website design meerut",
    "best web developer near me",
    "digital marketing agency meerut",
    "app development mawana",
    "seo services meerut",
    "google business profile mawana",
    "meta ads agency meerut",
    "ecommerce website mawana",
    "socialfly networks",
    "affordable website meerut",
    "mobile app developer ncr",
  ],
  alternates: {
    canonical: "https://socialflynetworks.com",
  },
  openGraph: {
    title: "SocialFly Networks | Mawana & Meerut's #1 Digital Agency",
    description:
      "Transform your business online. Custom websites from ₹15,000, mobile apps, SEO & digital marketing. Trusted by 100+ NCR businesses since 2020.",
    url: "https://socialflynetworks.com",
    images: [
      {
        url: "https://socialflynetworks.com/og-image-optimized.jpg",
        width: 1200,
        height: 630,
        alt: "SocialFly Networks - Web Development & Digital Marketing Agency in Mawana, Meerut",
      },
    ],
  },
  twitter: {
    title: "SocialFly Networks | #1 Digital Agency in Mawana, Meerut",
    description:
      "Custom websites, apps & digital marketing. 100+ happy clients. Call +91-9411978307 for free consultation.",
  },
};

// ============================================================================
// COMPONENT IMPORTS - Optimized Loading Strategy
// ============================================================================

// Critical above-the-fold component - Import directly (no lazy loading)
import HeroSection from "@/components/ui/hero-section";

// Second most important - Import directly for fast LCP
import ServicesSection from "@/components/ui/services-section";

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
    subtitle: "Founder, Local Mart Meerut",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
    quote:
      "Outstanding local SEO and Google Business optimization. We're now the top-ranked store in Mawana area.",
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
      "Their EduFly ERP system streamlined our entire institution. Excellent support team in Meerut!",
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
      "Meta ads campaign brought 200+ new customers to our Mawana showroom. ROI exceeded expectations!",
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
      "Professional team, on-time delivery, and excellent post-launch support. Highly recommend for NCR businesses!",
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
    name: "SocialFly Networks - Web Development, Mobile Apps & Digital Marketing in Mawana, Meerut",
    description:
      "Leading IT company in Mawana, Meerut offering custom web development, mobile apps, ecommerce solutions, Google Business optimization, Meta ads & local SEO.",
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
    specialty: "Digital Services for Local Businesses",
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
        <h2>Web Development Services in Mawana and Meerut</h2>
        <p>
          SocialFly Networks provides professional web development, mobile app
          development, and digital marketing services in Mawana, Meerut, and
          across NCR. Our team of expert developers and marketers help local
          businesses establish a strong online presence.
        </p>
        <h3>Services We Offer:</h3>
        <ul>
          <li>Custom Website Development in Mawana</li>
          <li>Mobile App Development in Meerut</li>
          <li>E-commerce Website Development</li>
          <li>SEO Services in Meerut and NCR</li>
          <li>Google Business Profile Optimization</li>
          <li>Meta Ads (Facebook & Instagram) Management</li>
          <li>Google Ads Campaign Management</li>
          <li>Social Media Marketing</li>
          <li>UI/UX Design Services</li>
          <li>EduFly ERP for Schools and Colleges</li>
        </ul>
        <h3>Areas We Serve:</h3>
        <ul>
          <li>Mawana, Uttar Pradesh</li>
          <li>Meerut, Uttar Pradesh</li>
          <li>Noida, Uttar Pradesh</li>
          <li>Greater Noida</li>
          <li>Ghaziabad</li>
          <li>Delhi NCR</li>
          <li>Hapur</li>
          <li>Muzaffarnagar</li>
        </ul>
        <p>
          Contact SocialFly Networks at +91-9411978307 for a free consultation.
          We offer affordable website packages starting from ₹15,000 with free
          SSL, hosting setup, and 3 months of support.
        </p>
      </div>
    </>
  );
}