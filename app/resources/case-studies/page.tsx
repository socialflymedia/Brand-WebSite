// app/resources/case-studies/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Studies — Web & App Projects | SocialFly Networks",
  description: "Detailed case studies (Gyansathi, Zapstracts, SDM Public Schools and more) — problem, approach, solution and outcomes.",
  alternates: { canonical: "https://socialflynetworks.com/resources/case-studies" },
  openGraph: {
    title: "Case Studies — SocialFly Networks",
    description: "Outcomes and technical breakdowns from real client projects.",
    images: ["/resources/case-studies-og.jpg"],
    locale: "en_IN"
  },
  robots: { index: true, follow: true },
};

const CASES = [
  {
    id: "gyansathi",
    title: "Gyansathi — Education portal & student dashboard",
    summary: "Full-stack solution with course pages, dashboards and analytics to manage high concurrency.",
    image: "/portfolio/education-platform.png",
    url: "https://www.gyansathi.com",
    highlights: [
      "Server-side rendering for SEO & speed",
      "Student dashboard with role-based access",
      "Structured data for course schemas"
    ],
    metrics: [
      { label: "Page speed improvement", value: "2.1s → 0.9s LCP" },
      { label: "Organic traffic", value: "↑ 45% in 4 months" }
    ]
  },
  {
    id: "zapstracts",
    title: "Zapstracts — Ecommerce platform & app",
    summary: "Headless e-commerce site with optimized checkout and payment flows for Indian payments.",
    image: "/portfolio/zapstracts.png",
    url: "https://zapstracts.com",
    highlights: ["Secure checkout", "SEO product pages", "Payment gateway integrations"],
    metrics: [{ label: "Conversion uplift", value: "↑ 28% after CRO" }]
  },
  {
    id: "sdmpublicschools",
    title: "SDM Public Schools — Admissions & CMS",
    summary: "Accessible, mobile-first site tailored for admission inquiries and staff content management.",
    image: "/portfolio/sdmpublic.png",
    url: "https://sdmpublicschools.com",
    highlights: ["Admission funnels", "Lightweight CMS", "Accessibility improvements"],
    metrics: [{ label: "Admissions form conversions", value: "↑ 18%" }]
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": CASES.map((c, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "url": `https://socialflynetworks.com/resources/case-studies#${c.id}`,
    "name": c.title
  }))
};

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="pt-28 pb-12 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-gray-300">In-depth writeups of problems we solved, the technical approach and measurable outcomes.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {CASES.map((c) => (
              <article key={c.id} className="group bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition">
                <div className="relative h-56">
                  <Image src={c.image} alt={c.title} fill style={{ objectFit: "cover" }} placeholder="empty" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white">{c.title}</h2>
                  <p className="text-gray-400 mt-2">{c.summary}</p>

                  <ul className="mt-3 text-sm text-gray-300 space-y-1">
                    {c.highlights.map((h, i) => <li key={i}>• {h}</li>)}
                  </ul>

                  {/* <div className="mt-4 flex items-center justify-between">
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-orange-400 font-semibold">Visit project</a>
                    <Link href={`/resources/case-studies/${c.id}`} className="text-sm px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg">
                      Read case study
                    </Link>
                  </div> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
