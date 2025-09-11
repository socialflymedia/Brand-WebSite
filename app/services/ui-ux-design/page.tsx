// app/services/ui-ux-design/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Feather,
  Layout,
  Layers,
  Pencil,
  Eye,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  Globe,
  Star,
  Monitor,
  FileText,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Product Design & Design Systems | SocialFly Networks",
  description:
    "Elegant, research-driven UI/UX design in Mawana & Meerut. Product design, prototyping, design systems, accessibility and conversion-focused UX for web & mobile.",
  keywords: [
    "UI UX design Meerut",
    "product design Mawana",
    "ux research Mawana",
    "design systems Meerut",
    "Figma designers Meerut",
    "conversion optimisation",
    "mobile UX",
    "web UX"
  ],
  openGraph: {
    title: "UI/UX Design — SocialFly Networks",
    description:
      "Human-centred product design: research, prototypes, high-fidelity UI and design systems that scale.",
    images: ["/services/ui-ux-og.jpg"],
    type: "website",
    locale: "en_IN"
  },
  alternates: { canonical: "https://socialflynetworks.com/services/ui-ux-design" },
  robots: { index: true, follow: true }
};

/* Structured Data (Service + Sample Case Studies) */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "SocialFly Networks - UI/UX Design",
  "description": "Human-centred UI/UX design and product strategy for web & mobile.",
  "url": "https://socialflynetworks.com/services/ui-ux-design",
  "serviceType": "UI/UX Design",
  "areaServed": [{ "@type": "Place", "name": "Mawana" }, { "@type": "Place", "name": "Meerut" }],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Design Offerings",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Design & Prototyping" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Design Systems & Tokens" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UX Research & Testing" } }
    ]
  },
  "mainEntity": [
    { "@type": "CreativeWork", "name": "Studio Archtantra — Portfolio UX", "url": "https://studioarchtantra.com" },
    { "@type": "CreativeWork", "name": "Shas Design Studio — Visual System", "url": "https://shasdesgnstudio.com" },
    { "@type": "CreativeWork", "name": "Gyansathi — Student UX & Dashboard", "url": "https://www.gyansathi.com" }
  ]
};

/* FAQ entries */
const faqList = [
  {
    q: "What is your UI/UX design process?",
    a: "We run discovery and research, rapid ideation, iterative prototyping, usability testing, and then hand off a production-grade design system and assets. Typical engagements run from 4–12 weeks depending on scope."
  },
  {
    q: "Do you provide prototypes that developers can use?",
    a: "Yes — we deliver interactive Figma prototypes, redlines, component libraries and tokens (CSS/JSON) for frictionless developer handoff."
  },
  {
    q: "Can you design for both web and mobile platforms?",
    a: "Absolutely — we produce responsive systems and platform-specific components (iOS/Android patterns) ensuring parity and native feel across devices."
  },
  {
    q: "Do you test with real users?",
    a: "We run moderated and unmoderated usability tests, build test scripts, and produce prioritized findings with recommended fixes that tie back to business metrics."
  }
];

/* Showcase projects (replace images in public/portfolio/) */
const showcase = [
  {
    id: "studioarchtantra",
    title: "Studio Archtantra — Portfolio UX",
    subtitle: "Visual-first portfolio & case study flows",
    image: "/portfolio/studioarchtantra-ux.jpg",
    url: "https://studioarchtantra.com"
  },
  {
    id: "shasdesgnstudio",
    title: "Shas Design Studio — Brand System",
    subtitle: "Comprehensive design system & booking flows",
    image: "/portfolio/shasdesgnstudio-ux.jpg",
    url: "https://shasdesgnstudio.com"
  },
  {
    id: "gyansathi",
    title: "Gyansathi — Education UX",
    subtitle: "Student dashboards, course flows & content UX",
    image: "/portfolio/gyansathi-ux.jpg",
    url: "https://www.gyansathi.com"
  },
  {
    id: "riyamakeupstudio",
    title: "Riya Makeup Studio — Local UX",
    subtitle: "Gallery-first UX and booking micro-interactions",
    image: "/portfolio/riyamakeupstudio-ux.jpg",
    url: "https://riyamakeupstudio.com"
  }
];

export default function UiUxDesignPage() {
  return (
    <>
      {/* structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* HERO */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-black">
        {/* Abstract animated shapes (CSS-driven) */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <svg className="absolute -left-20 -top-20 w-[520px] h-[520px] opacity-30 animate-ux-blob" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#ff7a18" stopOpacity="0.24" />
                <stop offset="100%" stopColor="#ffb03b" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <path d="M450 120C520 220 520 380 430 460C340 540 170 520 80 420C-10 320 30 160 120 90C210 20 360 20 450 120Z" fill="url(#g1)"></path>
          </svg>

          <svg className="absolute right-0 bottom-0 w-[420px] h-[420px] opacity-25 animate-ux-blob animation-delay-2000" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g2" x1="0" x2="1">
                <stop offset="0%" stopColor="#ff7a18" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#ff004d" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <path d="M380 60C470 130 530 260 490 360C450 460 330 520 230 510C130 500 70 400 60 300C50 200 140 90 240 60C340 30 320 -10 380 60Z" fill="url(#g2)"></path>
          </svg>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
                <Feather className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-400">Human-Centred Design</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                UI / UX Design
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">Beautiful. Useful. Human.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                We design products that are delightful to use and tuned to measurable business outcomes — from research to production-grade design systems.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {[
                  { value: "Research-led", label: "Qual & Quant" },
                  { value: "Design Systems", label: "Tokens & Components" },
                  { value: "Prototypes", label: "Clickable UX" },
                  { value: "Accessibility", label: "WCAG-ready" }
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-1">{s.value}</div>
                    <div className="text-sm text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/25 transition-all"
                >
                  <span>Book a Design Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#showcase"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-orange-500/30 text-orange-400 font-semibold rounded-lg hover:bg-orange-500/10 transition-all"
                >
                  <span>View Work</span>
                </Link>
              </div>
            </div>

            {/* Visual / Abstract panel */}
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden border border-orange-500/10 bg-gradient-to-br from-orange-500/6 to-orange-600/5 p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-black/50 p-4 backdrop-blur-sm hover:translate-y-[-6px] transition-transform duration-400">
                    <div className="h-[180px] rounded-lg overflow-hidden relative">
                      <Image src="/services/ui-ux-hero-1.jpg" alt="UX research session" fill style={{ objectFit: "cover" }} placeholder="empty" />
                    </div>
                    <h4 className="text-white mt-3 font-semibold">Research Workshops</h4>
                    <p className="text-gray-400 text-sm mt-1">Moderated interviews, surveys & analytics triangulation.</p>
                  </div>

                  <div className="rounded-xl bg-black/50 p-4 backdrop-blur-sm hover:translate-y-[-6px] transition-transform duration-400">
                    <div className="h-[180px] rounded-lg overflow-hidden relative">
                      <Image src="/services/ui-ux-hero-2.jpg" alt="Prototype preview" fill style={{ objectFit: "cover" }} placeholder="empty" />
                    </div>
                    <h4 className="text-white mt-3 font-semibold">Clickable Prototypes</h4>
                    <p className="text-gray-400 text-sm mt-1">High-fidelity interactions for real user testing.</p>
                  </div>

                  <div className="rounded-xl bg-black/50 p-4 backdrop-blur-sm hover:translate-y-[-6px] transition-transform duration-400">
                    <div className="h-[180px] rounded-lg overflow-hidden relative">
                      <Image src="/services/ui-ux-hero-3.jpg" alt="Design system tokens" fill style={{ objectFit: "cover" }} placeholder="empty" />
                    </div>
                    <h4 className="text-white mt-3 font-semibold">Design Systems</h4>
                    <p className="text-gray-400 text-sm mt-1">Tokens, components and documentation for developers.</p>
                  </div>

                  <div className="rounded-xl bg-black/50 p-4 backdrop-blur-sm hover:translate-y-[-6px] transition-transform duration-400">
                    <div className="h-[180px] rounded-lg overflow-hidden relative">
                      <Image src="/services/ui-ux-hero-4.jpg" alt="Usability testing" fill style={{ objectFit: "cover" }} placeholder="empty" />
                    </div>
                    <h4 className="text-white mt-3 font-semibold">Usability Testing</h4>
                    <p className="text-gray-400 text-sm mt-1">Actionable insights and prioritized fixes.</p>
                  </div>
                </div>
              </div>

              {/* subtle floating CTA */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-400 flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-300">Design excellence</div>
                  <div className="text-white font-semibold">Product & brand aligned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Philosophy */}
      <section className="py-20 bg-gray-950 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Approach</h2>
              <p className="text-gray-400 mb-6">We combine product thinking, user research and polished visual design to create experiences that convert and retain.</p>

              <ul className="space-y-4">
                {[
                  { icon: Users, title: "User-Centered Research", text: "Persona building, journey mapping, moderated testing." },
                  { icon: Pencil, title: "Craft & Interaction", text: "Micro-interactions, motion design and clarity-first UI." },
                  { icon: Layout, title: "Scalable Systems", text: "Design systems, tokens and developer-ready handoffs." }
                ].map((it, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-lg bg-black/40 flex items-center justify-center mt-1">
                      <it.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{it.title}</div>
                      <div className="text-gray-400 text-sm">{it.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Interaction Design */}

              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-orange-400" />
                  <h3 className="text-lg font-semibold text-white">Interaction & Motion</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">Crafted animations and micro-interactions that feel intentional and performant.</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Animation specs & easing tokens</li>
                  <li>• Motion for clarity, not decoration</li>
                </ul>
              </div>

              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-orange-400" />
                  <h3 className="text-lg font-semibold text-white">Visual Design</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">Beautiful, accessible interfaces with a focus on hierarchy and brand coherence.</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Color systems & accessible contrast</li>
                  <li>• Typography, rhythm & component layout</li>
                </ul>
              </div>

              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-orange-400" />
                  <h3 className="text-lg font-semibold text-white">Design Systems</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">Tokenised design systems for consistency and faster delivery.</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Component libraries & documentation</li>
                  <li>• Figma libraries & dev tokens</li>
                </ul>
              </div>

              <div className="bg-black/50 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-orange-400" />
                  <h3 className="text-lg font-semibold text-white">Accessibility</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">Designs built for all users—WCAG-conscious patterns, keyboard & screen reader flows.</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Accessibility audits & remediation</li>
                  <li>• Inclusive interaction design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase / Portfolio */}
      <section id="showcase" className="py-20 bg-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Selected <span className="text-orange-500">Design Work</span></h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Research-driven, pixel-perfect outcomes we shipped with clients.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcase.map((p) => (
              <article
                key={p.id}
                className="group bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition-transform duration-400"
              >
                <div className="relative h-44">
                  <Image src={p.image} alt={`${p.title} screenshot`} fill style={{ objectFit: "cover" }} placeholder="empty" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 opacity-90 group-hover:opacity-30 transition-opacity" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{p.subtitle}</p>
                  <div className="flex items-center gap-3">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-orange-400 text-sm font-semibold underline">
                      View Project
                    </a>
                    <a href="/contact" className="text-sm text-gray-300 underline">Discuss a similar brief</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Design Systems / Handoff */}
      <section className="py-20 bg-gray-950 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Design Systems & Handoff</h2>
              <p className="text-gray-400 mb-6">We deliver production-ready systems — tokens, component libraries, and documentation that help engineering ship faster and keep product polish consistent.</p>

              <ul className="text-gray-300 space-y-3">
                <li>• Token exports (CSS variables / JSON)</li>
                <li>• Figma libraries & versioned components</li>
                <li>• Accessibility annotations & redlines</li>
                <li>• Developer-ready assets and stories</li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-800">
              <Image src="/services/design-system-preview.jpg" alt="Design system preview" width={900} height={600} style={{ objectFit: "cover" }} placeholder="empty" />
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
              mainEntity: faqList.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a }
              }))
            })
          }}
        />
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need design that converts & delights?</h2>
            <p className="text-xl text-gray-300 mb-10">We help Mawana & Meerut companies ship product-grade design — book a discovery call and we’ll audit your product and share quick wins.</p>

            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg">
                Start a Design Audit
              </Link>
              <a href="/resources/ui-ux-checklist" className="inline-flex items-center gap-2 px-8 py-4 border border-orange-500/20 text-orange-400 rounded-lg">
                Download UX Checklist
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
