import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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
       {/* <head>
  
        <link rel="icon" href="/favicon1.ico" />
        <link rel="apple-touch-icon" href="/favicon1.ico" />
      </head> */}
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
        </ThemeProvider>
      </body>
    </html>
  );
}
