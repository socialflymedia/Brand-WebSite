// app/layout.tsx (server component) — Local SEO tuned for Mawana, Meerut
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const SITE_URL = "https://socialflynetworks.com";
const OG_IMAGE = `${SITE_URL}/SFN_black_transparent_logo.png`;
const LOGO = `${SITE_URL}/logosfn.png`;

// Replace with accurate coordinates for your Mawana office if available
const GEO_LAT = 29.0350; // example: Meerut / Mawana area latitude
const GEO_LON = 77.7080; // example longitude

export const metadata: Metadata = {
  title:
    "SocialFly Networks | Mawana, Meerut — Website, App & Digital Marketing",
  description:
    "SocialFly Networks (Mawana, Meerut): website & mobile app development, SaaS, ecommerce, and local digital marketing services — Google Business & Meta Ads setup for Meerut/NCR businesses.",
  keywords: [
    "website development Mawana",
    "app development Meerut",
    "digital marketing Mawana Meerut",
    "SEO Meerut",
    "Google Business Profile Meerut",
    "Meta Ads Mawana",
    "SocialFly Networks Mawana",
    "web development near me",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "SocialFly Networks — Mawana & Meerut Web/App Development",
    description:
      "Local digital agency in Mawana (Meerut): websites, mobile apps, SaaS & marketing to help local businesses grow online.",
    url: SITE_URL,
    siteName: "SocialFly Networks",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "SocialFly Networks - Mawana, Meerut Digital Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    ],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: "SocialFly Networks",
        url: SITE_URL,
        logo: LOGO,
        sameAs: [
          "https://www.instagram.com/socialflynetworks",
          "https://www.linkedin.com/company/socialflynetworks",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: "SocialFly Networks",
        publisher: { "@id": `${SITE_URL}#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}#localbusiness`,
        name: "SocialFly Networks",
        image: LOGO,
        url: SITE_URL,
        telephone: "+91-9411978307",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mawana Road",
          addressLocality: "Mawana",
          addressRegion: "Uttar Pradesh",
          postalCode: "250401",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: GEO_LAT,
          longitude: GEO_LON,
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${GEO_LAT},${GEO_LON}`,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            opens: "10:00",
            closes: "18:00"
          }
        ],
        areaServed: ["Mawana", "Meerut", "Noida", "NCR"],
        sameAs: [
          "https://www.instagram.com/socialflynetworks",
          "https://www.linkedin.com/company/socialflynetworks",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "18"
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon1.ico" />
      </head>

      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localLd) }} />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
