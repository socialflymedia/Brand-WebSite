// /app/services/digital-marketing/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Megaphone,
  BarChart3,
  Zap,
  Search,
  Globe,
  Users,
  Gauge,
  Activity,
  Layers,
  ClipboardCheck,
  ArrowRight,
  TrendingUp,
  MessageCircle,
  Shield,
  Award,
  Calendar
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Agency — SEO, Ads, Social & Growth | SocialFly Networks",
  description:
    "Data-driven digital marketing in Mawana & Meerut. SEO, Google/Meta Ads, social media growth, content strategy, and conversion optimisation for measurable business growth.",
  keywords: [
    "digital marketing Mawana",
    "SEO Meerut",
    "Google Ads management",
    "Meta Ads setup",
    "social media marketing Mawana",
    "content marketing Meerut",
    "local SEO Mawana Meerut",
    "lead generation services"
  ],
  openGraph: {
    title: "Digital Marketing — SocialFly Networks",
    description:
      "Performance marketing, SEO & social growth for businesses in Mawana, Meerut and NCR.",
    images: ["/services/digital-marketing-og.jpg"],
    type: "website",
    locale: "en_IN"
  },
  alternates: {
    canonical: "https://socialflynetworks.com/services/digital-marketing"
  },
  robots: {
    index: true,
    follow: true
  }
};

// Structured data (Service + example campaigns + FAQ)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "SocialFly Networks - Digital Marketing",
  "description": "Full-funnel, data-driven digital marketing services for Mawana, Meerut and beyond.",
  "url": "https://socialflynetworks.com/services/digital-marketing",
  "@id": "https://socialflynetworks.com#digitalmarketing",
  "serviceType": "Digital Marketing",
  "areaServed": ["Mawana", "Meerut", "Noida", "NCR", "India"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO & Content Strategy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google & Meta Ads Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Rate Optimization" } }
    ]
  },
  "mainEntity": [
    {
      "@type": "CreativeWork",
      "name": "Gyansathi — Organic Growth Campaign",
      "url": "https://www.gyansathi.com"
    },
    {
      "@type": "CreativeWork",
      "name": "Zapstracts — Performance Ads & CRO",
      "url": "https://zapstracts.com"
    },
    {
      "@type": "CreativeWork",
      "name": "sdmpublicschools — Local SEO & Admissions Funnel",
      "url": "https://sdmpublicschools.com"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/socialflynetworks",
    "https://www.linkedin.com/company/socialflynetworks"
  ]
};

const campaigns = [
  {
    id: "zapstracts",
    name: "Zapstracts — Performance Ads & CRO",
    type: "Ecommerce Ads (Google + Meta)",
    visual: "/portfolio/zapstracts-marketing.jpg",
    url: "https://zapstracts.com",
    highlights: [
      "Full-funnel paid media strategy",
      "Checkout funnel A/B testing",
      "Regional payment & remarketing setup"
    ]
  },
  {
    id: "gyansathi",
    name: "Gyansathi — Organic Growth",
    type: "SEO & Content Strategy",
    visual: "/portfolio/gyansathi-marketing.jpg",
    url: "https://www.gyansathi.com",
    highlights: ["Curriculum content SEO", "Landing pages for subject queries", "Analytics & funnels"]
  },
  {
    id: "sdmpublicschools",
    name: "SDM Public Schools — Local Admissions",
    type: "Local SEO & Lead-gen",
    visual: "/portfolio/sdm-marketing.jpg",
    url: "https://sdmpublicschools.com",
    highlights: ["Google Business optimization", "Admissions landing funnels", "Review & citation strategy"]
  },
  {
    id: "riyamakeupstudio",
    name: "Riya Makeup Studio — Local Social",
    type: "Instagram & Booking Flows",
    visual: "/portfolio/riya-marketing.jpg",
    url: "https://riyamakeupstudio.com",
    highlights: ["Visual social strategy", "Booking CTA optimization", "Local engagement campaigns"]
  }
];

const channels = [
  {
    title: "Search (SEO & PPC)",
    icon: Search,
    bullets: [
      "Technical SEO audits & remediation",
      "Local SEO for Mawana & Meerut",
      "Google Ads (Search/Shopping) management",
      "Sitemap & structured data strategy"
    ]
  },
  {
    title: "Social & Creative",
    icon: Megaphone,
    bullets: [
      "Instagram & Facebook creative systems",
      "Short-form video strategy (Reels/Shorts)",
      "Community growth & engagement",
      "Influencer partnerships"
    ]
  },
  {
    title: "Content & Growth",
    icon: Layers,
    bullets: [
      "Content calendars & pillar page strategy",
      "Blogging with topic clusters",
      "Lead magnets & gated content",
      "Email nurture sequences"
    ]
  },
  {
    title: "Analytics & Conversion",
    icon: BarChart3,
    bullets: [
      "Full-funnel analytics & dashboards",
      "Heatmaps & session recording",
      "CRO experiments and A/B testing",
      "Attribution modelling"
    ]
  }
];

const faqList = [
  {
    q: "How quickly will I see results from SEO?",
    a: "SEO is a medium-to-long-term channel — foundational improvements and technical fixes can show uplift within 4–8 weeks. Strong organic gains typically compound over 3–6 months with ongoing content and link work."
  },
  {
    q: "Do you manage paid media budgets?",
    a: "Yes — we manage campaigns across Google Ads and Meta Ads and can operate on your account or our managed accounts. We provide transparent reporting tied to conversions and ROI."
  },
  {
    q: "Can you handle local Mawana / Meerut listings?",
    a: "Absolutely — we optimize Google Business Profiles, citation consistency, local landing pages, and review generation to improve local discovery."
  },
  {
    q: "What industries do you specialize in?",
    a: "We work across education, ecommerce, professional services, retail and healthcare — and lean into use-cases where data-driven experiments produce measurable ROI."
  },
  {
    q: "How do you price retainer vs projects?",
    a: "We offer both — performance retainers for ongoing channel management and fixed-scope projects for one-time campaigns or audits. We tailor pricing to channel complexity and deliverables."
  }
];

export default function DigitalMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* HERO */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-orange-500/14 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[360px] h-[360px] bg-orange-600/10 rounded-full blur-[100px] animate-pulse animation-delay-2000" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
                <Megaphone className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-400">Performance Marketing</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Digital Marketing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">That Moves Metrics</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                SEO, Paid Media, Social & Content — integrated, measurable campaigns focused on leads, sales and long-term growth for businesses in Mawana & Meerut.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {[
                  { value: "200+", label: "Campaigns Managed" },
                  { value: "Local Focus", label: "Mawana & Meerut" },
                  { value: "Multi-Channel", label: "SEO • Ads • Social" },
                  { value: "Data-Driven", label: "Attribution & CRO" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5 transition-all"
                >
                  <span>Request a Growth Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#showcase"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-orange-500/30 text-orange-400 font-semibold rounded-lg hover:bg-orange-500/10 transition-all"
                >
                  <span>See Campaign Work</span>
                </Link>
              </div>
            </div>

            {/* Hero visual (image placeholder) */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-orange-500/10 bg-gradient-to-br from-orange-500/10 to-orange-600/5">
                <Image
                  src="/services/digital-marketing-hero.jpg"
                  alt="Digital marketing campaign dashboard"
                  fill
                  style={{ objectFit: "cover", objectPosition: "50% 35%" }}
                  priority
                  placeholder="empty"
                />
                <div className="absolute bottom-6 left-6 p-4 bg-black/60 rounded-lg border border-orange-500/20">
                  <div className="text-xs text-gray-300">Multi-channel dashboard • Live ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-950 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core <span className="text-orange-500">Capabilities</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">End-to-end marketing systems: strategy, creative, measurement and optimisation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((c, idx) => (
              <div key={idx} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{c.title}</h3>
                <ul className="text-gray-300 text-sm space-y-2 mb-4">
                  {c.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-xs text-gray-400">Strategic + Tactical</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Showcase */}
      <section id="showcase" className="py-20 bg-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected <span className="text-orange-500">Campaigns</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Hand-picked examples of campaigns and channel strategies we executed.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaigns.map((c) => (
              <article key={c.id} className="group bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all">
                <div className="relative h-44 bg-gradient-to-br from-orange-500/8 to-orange-600/6">
                  <Image
                    src={c.visual}
                    alt={`${c.name} campaign visual`}
                    fill
                    style={{ objectFit: "cover", objectPosition: "50% 40%" }}
                    placeholder="empty"
                    priority={false}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 text-xs text-gray-300">{c.type}</div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">{c.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{c.highlights.join(" • ")}</p>

                  <div className="flex items-center gap-3">
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm rounded-lg">
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <button className="text-sm text-gray-300 underline">Request similar campaign</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Channels Breakdown */}
      <section className="py-20 bg-gray-950 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services & <span className="text-orange-500">Channels</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Tailored channel strategies and execution playbooks to reach customers at every stage of the funnel.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">SEO & Content</h3>
              <p className="text-gray-400 mb-4">Technical audits, content strategy, topic clusters and editorial execution to drive sustained organic traffic.</p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Technical & on-page SEO</li>
                <li>• Content calendars & long-form SEO pages</li>
                <li>• Internal linking & pillar pages</li>
              </ul>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Paid Media</h3>
              <p className="text-gray-400 mb-4">Strategy, creative testing, bid management and landing page optimization focused on ROI.</p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Google Search & Shopping</li>
                <li>• Meta Ads (Facebook & Instagram)</li>
                <li>• Performance Max & remarketing</li>
              </ul>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Social & Creative</h3>
              <p className="text-gray-400 mb-4">Creative systems, short-form distribution, and community management to build stickiness.</p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Reels & Shorts strategy</li>
                <li>• Creative testing & UGC</li>
                <li>• Influencer coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Reporting */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Analytics & <span className="text-orange-500">Measurement</span></h2>
              <p className="text-xl text-gray-400 mb-6">Everything we do is measurable. We setup tracking, dashboards and experiments so stakeholders can see impact in real-time.</p>

              <ul className="text-gray-300 space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Gauge className="w-5 h-5 text-orange-400 mt-1" />
                  <div>
                    <div className="font-medium">Custom Dashboards</div>
                    <div className="text-sm text-gray-400">Actionable KPIs for acquisition, retention and LTV.</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-orange-400 mt-1" />
                  <div>
                    <div className="font-medium">Experimentation</div>
                    <div className="text-sm text-gray-400">A/B tests with statistical significance and iterative rollouts.</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-orange-400 mt-1" />
                  <div>
                    <div className="font-medium">Privacy-first Tracking</div>
                    <div className="text-sm text-gray-400">Consent and data governance baked into measurement systems.</div>
                  </div>
                </li>
              </ul>

              <div className="flex gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold">
                  Request Analytics Review
                </Link>
                <a href="/resources/marketing-report-template" className="inline-flex items-center gap-2 px-6 py-3 border border-orange-500/20 text-orange-400 rounded-lg">
                  Download Report Template
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-gray-800">
                <Image
                  src="/services/analytics-dashboard.jpg"
                  alt="Marketing analytics dashboard"
                  width={900}
                  height={600}
                  style={{ objectFit: "cover" }}
                  placeholder="empty"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process / Methodology */}
      <section className="py-20 bg-gray-950 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Campaign <span className="text-orange-500">Methodology</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Strategy, rapid execution, measurement and continuous improvement.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Discovery & Strategy</h3>
              <p className="text-gray-400 text-sm mb-4">Market research, funnel mapping and KPI definition.</p>
              <div className="text-xs text-gray-400">Typical: 1–2 weeks</div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Execution & Creative</h3>
              <p className="text-gray-400 text-sm mb-4">Creative production, landing pages and channel activation.</p>
              <div className="text-xs text-gray-400">Typical: 2–6 weeks</div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Measure & Iterate</h3>
              <p className="text-gray-400 text-sm mb-4">Experimentation, scaled rollouts and ROI optimization.</p>
              <div className="text-xs text-gray-400">Ongoing</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (visible + JSON-LD) */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently asked questions</h2>

            {faqList.map((f, i) => (
              <div key={i} className="mb-6">
                <h3 className="text-lg font-semibold text-white">{`${i + 1}. ${f.q}`}</h3>
                <p className="text-gray-300 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqList.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
              }))
            })
          }}
        />
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to grow revenue with predictable marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">Let&apos;s design a performance program tailored to your Mawana / Meerut customers — strategy, execution & measurement.</p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold">
                <span>Request Growth Audit</span>
              </Link>
              <a href="/resources/digital-marketing-playbook" className="inline-flex items-center gap-3 px-6 py-3 border border-orange-500/20 text-orange-400 rounded-lg">
                Download Playbook
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-8 text-gray-500">
              <div className="flex items-center gap-2"><Award className="w-5 h-5" /><span>Certified Partners</span></div>
              <div className="flex items-center gap-2"><Shield className="w-5 h-5" /><span>Privacy-first</span></div>
              <div className="flex items-center gap-2"><Calendar className="w-5 h-5" /><span>Ongoing Support</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
