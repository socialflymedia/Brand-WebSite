// app/layout.tsx - Server Component with Complete SEO Configuration
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ChristmasPopup from "@/components/ui/ChristmasPopup";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

// ============================================================================
// FONT CONFIGURATION - Optimized Loading
// ============================================================================
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

// ============================================================================
// SITE CONFIGURATION - Centralized Constants
// ============================================================================
const SITE_CONFIG = {
  name: "SocialFly Networks",
  shortName: "SFN Digital",
  url: "https://socialflynetworks.com",
  logo: "https://socialflynetworks.com/logosfn.png",
  icon: "https://socialflynetworks.com/icon.png",
  ogImage: "https://socialflynetworks.com/og-image-optimized.jpg",
  phone: "+91-9411978307",
  email: "contact@socialflynetworks.com",
  address: {
    street: "Main Market Road",
    locality: "Mawana",
    region: "Uttar Pradesh",
    postalCode: "250401",
    country: "IN",
  },
  geo: {
    latitude: 29.0961,
    longitude: 77.9191,
  },
  social: {
    facebook: "https://facebook.com/socialflynetworks",
    instagram: "https://instagram.com/socialflynetworks",
    linkedin: "https://linkedin.com/company/socialflynetworks",
    twitter: "https://twitter.com/socialflynet",
  },
  foundingDate: "2020",
  priceRange: "₹₹",
} as const;

// ============================================================================
// VIEWPORT CONFIGURATION
// ============================================================================


// ============================================================================
// METADATA CONFIGURATION - Comprehensive SEO
// ============================================================================
export const metadata: Metadata = {

  viewport: {
       width: "device-width",
       initialScale: 1,
       maximumScale: 5,
       userScalable: true,
     },
     themeColor: [
       { media: "(prefers-color-scheme: light)", color: "#ffffff" },
       { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
     ],
  // Basic Meta
  title: {
    default: "SocialFly Networks | #1 Web Development & Digital Marketing Agency in Mawana, Meerut",
    template: "%s | SocialFly Networks - Mawana, Meerut",
  },
  description:
    "SocialFly Networks is Mawana & Meerut's leading digital agency. We specialize in custom website development, mobile apps, eCommerce, SEO, Google Business Profile optimization & Meta Ads. Trusted by 100+ NCR businesses since 2020. Call +91-9411978307 for free consultation.",
  keywords: [
    // Primary Keywords
    "web development mawana",
    "website design meerut",
    "app development meerut",
    "digital marketing mawana",
    "SEO services meerut",
    // Local Keywords
    "best web developer in mawana",
    "website company near me meerut",
    "mobile app developer meerut",
    "ecommerce website mawana",
    // Service Keywords
    "google business profile optimization meerut",
    "meta ads agency mawana",
    "facebook ads meerut",
    "instagram marketing mawana",
    "local seo meerut",
    // Brand Keywords
    "socialfly networks",
    "socialfly mawana",
    "sfn digital",
    // Product Keywords
    "edufly erp",
    "school management software meerut",
    // Long-tail Keywords
    "affordable website development mawana meerut",
    "best digital marketing agency in ncr",
    "custom web application development up",
  ],
  authors: [{ name: "SocialFly Networks", url: SITE_CONFIG.url }],
  creator: "SocialFly Networks",
  publisher: "SocialFly Networks",
  
  // Indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // URLs
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "hi-IN": "/hi",
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "SocialFly Networks | Web Development, Apps & Digital Marketing in Mawana, Meerut",
    description:
      "Transform your business with Mawana's #1 digital agency. Custom websites, mobile apps, SEO & Meta Ads. 100+ successful projects. Free consultation: +91-9411978307",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "SocialFly Networks - Leading Digital Agency in Mawana, Meerut | Web Development & Marketing",
        type: "image/jpeg",
      },
      {
        url: SITE_CONFIG.logo,
        width: 512,
        height: 512,
        alt: "SocialFly Networks Logo",
        type: "image/png",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@socialflynet",
    creator: "@socialflynet",
    title: "SocialFly Networks | #1 Digital Agency in Mawana, Meerut",
    description:
      "Custom web development, mobile apps, SEO & digital marketing. Trusted by 100+ NCR businesses. Get free consultation today!",
    images: [SITE_CONFIG.ogImage],
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#f97316" },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Verification (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // App Links
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_CONFIG.name,
  },

  // Format Detection
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Category
  category: "technology",

  // Classification
  classification: "Business",

  // Other
  other: {
    "msapplication-TileColor": "#f97316",
    "msapplication-config": "/browserconfig.xml",
    "geo.region": "IN-UP",
    "geo.placename": "Mawana, Meerut",
    "geo.position": `${SITE_CONFIG.geo.latitude};${SITE_CONFIG.geo.longitude}`,
    "ICBM": `${SITE_CONFIG.geo.latitude}, ${SITE_CONFIG.geo.longitude}`,
    "revisit-after": "7 days",
    "rating": "general",
    "distribution": "global",
    "language": "English, Hindi",
  },
};

// ============================================================================
// STRUCTURED DATA - JSON-LD Schemas
// ============================================================================
function generateStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: SITE_CONFIG.logo,
      width: 512,
      height: 512,
    },
    image: SITE_CONFIG.ogImage,
    description: "Leading digital agency in Mawana, Meerut specializing in web development, mobile apps, and digital marketing.",
    foundingDate: SITE_CONFIG.foundingDate,
    founders: [
      {
        "@type": "Person",
        name: "SocialFly Networks Team",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.locality,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phone,
        contactType: "customer service",
        areaServed: ["IN"],
        availableLanguage: ["English", "Hindi"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phone,
        contactType: "sales",
        areaServed: ["IN"],
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: Object.values(SITE_CONFIG.social),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 5,
      maxValue: 15,
    },
    slogan: "Digital Excellence for Local Businesses",
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "Digital Marketing",
      "SEO",
      "Google Ads",
      "Meta Ads",
      "UI/UX Design",
      "E-commerce",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    image: [SITE_CONFIG.ogImage, SITE_CONFIG.logo],
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: SITE_CONFIG.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.locality,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${SITE_CONFIG.geo.latitude},${SITE_CONFIG.geo.longitude}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Mawana" },
      { "@type": "City", name: "Meerut" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "State", name: "Uttar Pradesh" },
      { "@type": "GeoCircle", name: "NCR", geoMidpoint: { "@type": "GeoCoordinates", latitude: 28.6139, longitude: 77.209 }, geoRadius: "100000" },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: SITE_CONFIG.geo.latitude,
        longitude: SITE_CONFIG.geo.longitude,
      },
      geoRadius: "150000",
    },
    sameAs: Object.values(SITE_CONFIG.social),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rajesh Kumar" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Excellent web development services. Transformed our business online presence completely.",
        datePublished: "2024-06-15",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Priya Sharma" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Best digital marketing agency in Meerut. Their Meta ads brought us 200+ new customers.",
        datePublished: "2024-08-20",
      },
    ],
    paymentAccepted: ["Cash", "UPI", "Bank Transfer", "Credit Card", "Debit Card"],
    currenciesAccepted: "INR",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: metadata.description,
    publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    ],
    inLanguage: ["en-IN", "hi-IN"],
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: { "@id": `${SITE_CONFIG.url}/#organization` },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_CONFIG.url}/#service`,
    name: SITE_CONFIG.name,
    image: SITE_CONFIG.ogImage,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    priceRange: SITE_CONFIG.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.locality,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Web Development",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Website Development",
                description: "Modern, responsive websites built with Next.js, React & cutting-edge technologies",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "E-commerce Development",
                description: "Full-featured online stores with payment integration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Application Development",
                description: "Custom SaaS and web applications for business automation",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Mobile App Development",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Android App Development",
                description: "Native Android applications for businesses",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "iOS App Development",
                description: "Native iOS applications for iPhone and iPad",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cross-Platform App Development",
                description: "React Native & Flutter apps for both platforms",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Digital Marketing",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Search Engine Optimization (SEO)",
                description: "Local and national SEO to improve your Google rankings",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Ads Management",
                description: "PPC campaigns for immediate visibility and leads",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Meta Ads (Facebook & Instagram)",
                description: "Social media advertising for brand awareness and conversions",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Business Profile Optimization",
                description: "Local SEO and GMB optimization for local visibility",
              },
            },
          ],
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.url,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does SocialFly Networks offer in Mawana and Meerut?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SocialFly Networks offers comprehensive digital services including custom website development (starting ₹15,000), mobile app development, e-commerce solutions, digital marketing, SEO, Google Business Profile optimization, and Meta Ads management. We serve businesses in Mawana, Meerut, Noida, Delhi, and the entire NCR region.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a website cost from SocialFly Networks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our website packages are designed for every budget: Basic Business Website starts from ₹15,000, Professional Website from ₹25,000, E-commerce Website from ₹35,000, and Custom Web Applications from ₹50,000. All packages include free hosting setup, SSL certificate, and 3 months support. Contact us at +91-9411978307 for a personalized quote.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide on-site services in Mawana and Meerut?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We provide both on-site consultations and remote services. Our team regularly visits clients in Mawana, Meerut, Noida, Ghaziabad, and Delhi NCR for project discussions, training sessions, and support. We believe in building personal relationships with our clients.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to develop a website or mobile app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timeline depends on project complexity: Basic websites take 1-2 weeks, Professional websites 2-3 weeks, E-commerce stores 3-4 weeks, Custom web applications 4-8 weeks, and Mobile apps 8-12 weeks. We provide detailed project timelines during our free consultation call.",
        },
      },
      {
        "@type": "Question",
        name: "What is EduFly ERP and who is it for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EduFly ERP is our flagship cloud-based education management system designed for schools, colleges, and coaching institutes. It handles admissions, fee management, attendance tracking, exam management, report cards, parent communication, and all administrative tasks. It's trusted by 50+ educational institutions across UP.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer post-launch support and maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! All our projects include free support for 3-6 months. After that, we offer affordable maintenance packages starting from ₹3,000/month covering updates, security patches, backups, and technical support. We also offer 24/7 emergency support for critical issues.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help improve my Google Business Profile ranking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We specialize in local SEO and Google Business Profile optimization. Our services include profile setup/optimization, review management, local citation building, and ongoing optimization. Many of our clients have achieved top 3 rankings in Google Maps for their local keywords within 2-3 months.",
        },
      },
      {
        "@type": "Question",
        name: "What makes SocialFly Networks different from other agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We're a local agency with global expertise. Unlike big-city agencies, we offer personalized attention, competitive pricing, and quick turnaround times. We've been serving Mawana and Meerut businesses since 2020 with a 98% client satisfaction rate. Plus, we're always just a phone call away!",
        },
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      websiteSchema,
      professionalServiceSchema,
      breadcrumbSchema,
      faqSchema,
    ],
  };
}

// ============================================================================
// ROOT LAYOUT COMPONENT
// ============================================================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://i.pravatar.cc" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XV583BTF1J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XV583BTF1J', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>

        {/* Google Tag Manager (optional - uncomment if needed) */}
        {/* <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script> */}
      </head>

      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) - uncomment if using GTM */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript> */}

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          <ChristmasPopup />
          {/* Skip to main content - Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-orange-600 focus:text-white focus:rounded-lg focus:outline-none"
          >
            Skip to main content
          </a>

          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}