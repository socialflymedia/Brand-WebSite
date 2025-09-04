import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Analytics } from '@vercel/analytics/next';
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SocialFly Networks | Website, App & SaaS Development | Social Media & Google/Meta Business Setup",
  description:
    "Boost your business with custom website & mobile app development, SaaS platforms, ecommerce solutions, social media marketing & management, Instagram ad optimization, Google Business Profile & Meta Ads setup.",
     keywords: [
    "website development in Meerut",
    "app development Noida",
    "ecommerce Mawana",
    "SaaS platforms NCR",
    "digital marketing Meerut",
    "Google Business setup Noida",
    "Meta Ads management NCR",
    "Social media marketing Meerut",
    "SocialFly Networks"
  ],
  metadataBase: new URL("https://socialflynetworks.com"),
   alternates: {
    canonical: "https://socialflynetworks.com",
  },
  openGraph: {
    title: "SocialFly Networks | App & Web Development in Meerut, Mawana, Noida, NCR",
    description:
      "We provide powerful digital solutions including website & app development, SaaS products, digital marketing & business setup in Meerut, Noida, Mawana, and NCR.",
    url: "https://socialflynetworks.com",
    siteName: "SocialFly Networks",
    images: [
      {
        url: "/SFN_black_transparent_logo.png", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "SocialFly Networks - Web & App Development Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
    icons: {
    icon: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }
    ]
  }
};




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
  
        <link rel="icon" href="/favicon1.ico" />
        <link rel="apple-touch-icon" href="/favicon1.ico" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
             <Analytics />
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "SocialFly Networks",
                image: "https://socialflynetworks.com/logosfn.png", // Replace with your logo
                "@id": "https://socialflynetworks.com",
                url: "https://socialflynetworks.com",
                telephone: "+91-8126040011", // Replace with your number
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Mawana Road",
                  addressLocality: "Meerut",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "250401",
                  addressCountry: "IN",
                },
                sameAs: [
                  "https://www.instagram.com/socialflynetworks",
                  "https://www.linkedin.com/company/socialflynetworks"
                ],
                openingHours: "Mo-Fr 10:00-18:00",
                areaServed: [
                  { "@type": "Place", name: "Meerut" },
                  { "@type": "Place", name: "Mawana" },
                  { "@type": "Place", name: "Noida" },
                  { "@type": "Place", name: "NCR" }
                ],
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
