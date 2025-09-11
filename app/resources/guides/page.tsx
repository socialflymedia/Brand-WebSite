// app/resources/guides/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides — How-to & Tutorials | SocialFly Networks",
  description: "Actionable guides on web development, app launches, marketing and product strategy for growing businesses in Mawana & Meerut.",
  alternates: { canonical: "https://socialflynetworks.com/resources/guides" },
  openGraph: { images: ["/resources/guides-og.jpg"], locale: "en_IN" },
  robots: { index: true, follow: true }
};

const GUIDES = [
  { slug: "seo-technical-checklist", title: "Technical SEO Checklist for Next.js", excerpt: "Checklist to make your Next.js site crawlable and fast (sitemaps, SSR, structured data)." },
  { slug: "pwa-guide", title: "Progressive Web Apps: A Practical Guide", excerpt: "Make your site feel like an app — offline, speed and discoverability best practices." },
  { slug: "ads-setup", title: "Google & Meta Ads Setup for Indian SMEs", excerpt: "Step-by-step ad account setup, budgets, creative testing and regional targeting." },
];

export default function GuidesPage() {
  return (
    <section className="pt-28 pb-12 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Guides & Tutorials</h1>
          <p className="text-gray-300">Practical guides you can follow step-by-step. Updated regularly.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {GUIDES.map((g) => (
            <article key={g.slug} className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition">
              <h2 className="text-xl font-semibold text-white">{g.title}</h2>
              <p className="text-gray-400 mt-2">{g.excerpt}</p>
              <div className="mt-4">
                <Link href={`/resources/guides/${g.slug}`} className="text-orange-400 font-semibold">Read guide →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
