// "use client";

// import { services } from "@/lib/constants";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { staggerContainer, fadeIn } from "@/lib/animations";

// export default function ServicesSection() {
//   return (
//     <section className="py-20 bg-background">
//       <div className="container">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//           className="text-center mb-16"
//         >
//           <motion.h2 
//             variants={fadeIn("up", 0.1)}
//             className="text-3xl md:text-4xl font-bold gradient-text mb-4"
//           >
//             Our AI-Driven Services
//           </motion.h2>
//           <motion.p
//             variants={fadeIn("up", 0.2)} 
//             className="text-lg text-muted-foreground max-w-2xl mx-auto"
//           >
//             Comprehensive solutions powered by artificial intelligence
//           </motion.p>
//         </motion.div>

//         <motion.div
//           variants={staggerContainer(0.1, 0.2)}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {services.map((service, index) => (
//             <motion.div key={index} variants={fadeIn("up", index * 0.1 + 0.3)}>
//               <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 group">
//                 <CardHeader>
//                   <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
//                     <service.icon size={24} />
//                   </div>
//                   <CardTitle>{service.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">{service.description}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useRef, useEffect, useMemo, useCallback, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import {
  Globe,
  Code,
  Megaphone,
  Palette,
  Zap,
  ArrowRight,
  Star,
  Brain,
  Rocket,
  BarChart,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

type IconComponent = React.ComponentType<any>;
type CaseStudy = { name: string; impact: string };
type Service = {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  icon: IconComponent;
  features: string[];
  highlighted?: boolean;
  stats?: string;
  image: string;
  enterprise?: boolean;
  compliance?: string[];
  sla?: string;
  pricingTier?: string;
  caseStudies?: CaseStudy[];
};

/* =========================
   Services data
   (keep this array as you provided)
   ========================= */
const services: Service[] = [
  {
    id: 1,
    title: "Enterprise AI & Automation",
    subtitle: "AI-Powered Transformation",
    description:
      "End-to-end AI strategy, MLOps and bespoke large-scale automation that convert complex data into competitive advantage — from prototype to production with enterprise-grade governance.",
    icon: Brain,
    features: ["Generative AI", "MLOps & ModelOps", "Automation & RPA", "AI Governance"],
    highlighted: true,
    stats: "Deployed across 30+ Enterprises",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=1400&q=80",
    enterprise: true,
    compliance: ["SOC2", "ISO27001"],
    sla: "99.95% uptime",
    pricingTier: "Enterprise",
    caseStudies: [
      { name: "Retail demand forecasting", impact: "35% inventory reduction" },
      { name: "Automated claims triage", impact: "70% processing speed-up" }
    ]
  },
  {
    id: 2,
    title: "Blockchain & Web3 Infrastructure",
    subtitle: "Secure, Compliant Decentralisation",
    description:
      "Design and deploy permissioned and public-chain solutions, token economics and smart-contract systems with enterprise-grade audits, legal advisory integration and scalable layer-2 strategies.",
    icon: Globe,
    features: ["Smart Contracts", "Layer-2 Scaling", "Token Design", "On-chain Identity"],
    highlighted: true,
    stats: "100M+ Transactions Secured",
    image: "https://images.unsplash.com/photo-1611078480014-6f7f7b8b0a3f?w=1400&q=80",
    enterprise: true,
    compliance: ["GDPR-ready", "KYC/AML integrations"],
    sla: "Dedicated node & monitoring",
    pricingTier: "Enterprise",
    caseStudies: [
      { name: "Supply chain provenance", impact: "Verified 10k+ items on-chain" },
      { name: "Tokenized loyalty platform", impact: "2x engagement lift" }
    ]
  },
  {
    id: 3,
    title: "Cloud Architecture & Site Reliability",
    subtitle: "Resilient Global Platforms",
    description:
      "Design and run mission-critical cloud-native platforms with cost-optimized multi-cloud architectures, infrastructure-as-code, and SRE practices to guarantee scale and performance.",
    icon: BarChart,
    features: ["Multi-Cloud", "Kubernetes & Serverless", "IaC (Terraform)", "SRE & Observability"],
    stats: "100s TB Processed Monthly",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1400&q=80",
    enterprise: true,
    sla: "24/7 run & response",
    pricingTier: "Enterprise",
    caseStudies: [{ name: "Global SaaS scale-up", impact: "10x concurrent users" }]
  },
  {
    id: 4,
    title: "Cybersecurity & Zero Trust",
    subtitle: "Proactive Threat Resilience",
    description:
      "Proactive security engineering: end-to-end risk assessments, zero-trust architecture, secure SDLC, and formal pen tests to harden platforms and protect customer data.",
    icon: Palette,
    features: ["Zero Trust", "Threat Modeling", "Penetration Testing", "Secure SDLC"],
    stats: "99.9% Risk Coverage",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1400&q=80",
    enterprise: true,
    compliance: ["SOC2", "ISO27001", "PCI-DSS"],
    pricingTier: "Enterprise",
    caseStudies: [{ name: "Fintech secure rollout", impact: "PCI-DSS compliant launch" }]
  },
  {
    id: 5,
    title: "Advanced Data & Analytics",
    subtitle: "Predictive Intelligence",
    description:
      "From lakehouse design and real-time streaming to causal inference and predictive modeling — we convert complex data into clear strategic signals for executive decision-making.",
    icon: BarChart,
    features: ["Data Lakehouse", "Real-time Dashboards", "Predictive ML", "Causal Analytics"],
    stats: "1B+ Processed Events",
    image: "https://images.unsplash.com/photo-1560757212-1a2d4b3f8f41?w=1400&q=80",
    enterprise: true,
    sla: "Real-time SLA options",
    pricingTier: "Enterprise",
    caseStudies: [
      { name: "Churn prediction engine", impact: "Reduced churn by 18%" },
      { name: "Dynamic pricing", impact: "8% margin improvement" }
    ]
  },
  {
    id: 6,
    title: "Digital Transformation & Strategy",
    subtitle: "Boardroom to Backlog",
    description:
      "Strategy-led transformation: product roadmaps, operating model redesign, and capability uplift that align executive vision with rapid engineering delivery.",
    icon: Globe,
    features: ["C-level Advisory", "Transformation Roadmaps", "Operating Model Design", "Change Management"],
    stats: "50+ Strategic Programs",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80",
    enterprise: true,
    pricingTier: "Custom",
    caseStudies: [{ name: "Global business unit redesign", impact: "Scaled new product line in 9 months" }]
  },
  {
    id: 7,
    title: "Web Engineering — Platform & SaaS",
    subtitle: "Next-Gen Product Engineering",
    description:
      "Design and build robust, secure and extensible web platforms using React/Next.js, cutting-edge frontend frameworks and composable backend services for rapid global rollouts.",
    icon: Globe,
    features: ["React/Next.js", "Composable APIs", "Performance Engineering", "Accessibility & SEO"],
    stats: "200+ Projects Delivered",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",
    highlighted: false,
    enterprise: false,
    pricingTier: "Professional",
    caseStudies: [{ name: "Marketplace platform", impact: "50% faster time-to-market" }]
  },
  {
    id: 8,
    title: "Mobile Experiences",
    subtitle: "Device-Native Delight",
    description:
      "Premium cross-platform and native mobile experiences that combine refined UX, offline-first reliability, and deep native integrations for high-retention apps.",
    icon: Code,
    features: ["iOS & Android", "Flutter & Native", "Offline & Sync", "Performance Tuning"],
    stats: "150+ Apps Launched",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=80",
    highlighted: false,
    enterprise: false,
    pricingTier: "Professional",
    caseStudies: [{ name: "Native commerce app", impact: "3x engagement uplift" }]
  },
  {
    id: 9,
    title: "Brand, Growth & Performance Marketing",
    subtitle: "Data-Driven Brand Acceleration",
    description:
      "Integrated brand strategy, creative systems, and ROI-driven performance marketing powered by ML-backed media optimization to scale sustainably.",
    icon: Megaphone,
    features: ["Growth Marketing", "Creative Systems", "Programmatic Media", "Marketing Analytics"],
    stats: "500% Avg ROI (selected clients)",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1400&q=80",
    highlighted: false,
    enterprise: false,
    pricingTier: "Growth",
    caseStudies: [{ name: "Performance-led rebrand", impact: "2.4x conversion gain" }]
  }
];

/* =========================
   ServiceCard - memoized & optimized
   ========================= */
const ServiceCard: React.FC<{ service: Service; onExplore?: (s: Service) => void }> = React.memo(
  ({ service, onExplore }) => {
    const Icon = service.icon;
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
      <article
        className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl"
        style={{
          width: "520px",
          height: "720px",
          willChange: "transform, opacity"
        }}
        aria-label={service.title}
      >
        {/* subtle single-color glow */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 8%, rgba(249,115,22,0.08), rgba(249,115,22,0.02) 30%, transparent 55%)",
            filter: "blur(16px)"
          }}
        />

        {/* image top (approx 60%) */}
        <div className="relative w-full" style={{ height: "60%" }}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 360px, (max-width: 1024px) 420px, 520px"
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            priority={false}
            quality={75}
            placeholder="empty"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,8,12,0.14), rgba(8,8,12,0.64))" }} />
          <div className="absolute inset-3 flex justify-between items-start">
            {service.highlighted ? (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full shadow-sm">
                <Star className="w-3 h-3" />
                FEATURED
              </div>
            ) : (
              <div />
            )}
            {service.stats && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 text-xs text-orange-300 rounded-full border border-orange-500/10">
                {service.stats}
              </div>
            )}
          </div>
        </div>

        {/* content below image */}
        <div className="bg-black/94 backdrop-blur-sm px-6 py-5 flex flex-col justify-between" style={{ height: "40%" }}>
          <div>
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center shadow"
                style={{ background: "linear-gradient(180deg, rgba(249,115,22,1), rgba(249,115,22,0.94))" }}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight">{service.title}</h3>
                <p className="text-sm md:text-base text-orange-300 font-medium">{service.subtitle}</p>
              </div>
            </div>

            <p
              className="mt-3 text-sm md:text-base text-gray-200 leading-relaxed"
              style={{ maxHeight: expanded ? 300 : 140, overflow: "hidden" }}
            >
              {service.description}
              {service.caseStudies?.length ? (
                <span className="block mt-2 text-gray-300 text-sm">
                  Case examples: {service.caseStudies.map((c) => `${c.name} (${c.impact})`).join(" • ")}
                </span>
              ) : null}
              {service.compliance?.length ? (
                <span className="block mt-2 text-gray-300 text-sm">Compliance: {service.compliance.join(", ")}</span>
              ) : null}
              {service.sla ? <span className="block mt-2 text-gray-300 text-sm">SLA: {service.sla}</span> : null}
            </p>

            {(service.description.length > 160 || service.caseStudies?.length || service.compliance?.length) && (
              <button
                onClick={() => setExpanded((s) => !s)}
                className="mt-2 text-sm text-orange-300 font-medium underline decoration-transparent hover:decoration-orange-400"
                aria-expanded={expanded}
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            )}

            <div className="mt-3 flex flex-wrap gap-2">
              {service.features.map((f, i) => (
                <span key={i} className="text-xs md:text-sm px-2 py-1 rounded-md bg-black/45 border border-gray-700/30 text-gray-200">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => onExplore?.(service)}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold shadow"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-xs text-gray-400">{service.enterprise ? "Enterprise" : "Professional"}</div>
          </div>
        </div>
      </article>
    )
  }
);

ServiceCard.displayName = "ServiceCard";

/* =========================
   NavButton
   ========================= */
const NavButton: React.FC<{ direction?: "left" | "right"; onClick?: () => void }> = ({ direction = "left", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-3 rounded-full bg-gray-900/88 border border-gray-800 hover:border-orange-500/30 transition"
      aria-label={`carousel-${direction}`}
    >
      {direction === "left" ? <ChevronLeft className="w-6 h-6 text-orange-400" /> : <ChevronRight className="w-6 h-6 text-orange-400" />}
    </button>
  );
};

/* =========================
   Main ServicesSection
   - infinite auto-scroll (RAF + refs)
   - increased gap: 64px
   - no nav dots
   - optimized
   ========================= */
export default function ServicesSection(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isAutoRef = useRef<boolean>(true);
  const speedRef = useRef<number>(90); // px/sec - adjust to taste
  const prefersReduced = useReducedMotion();

  // doubled for seamless loop
  const doubled = useMemo(() => [...services, ...services], []);

  // RAF auto-scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const shouldAuto = () => el.scrollWidth > el.clientWidth + 4;

    let rafId = 0;
    let last = performance.now();

    // ensure we start at small offset to smoothen first frames
    if (el.scrollLeft <= 0) el.scrollLeft = 0;

    const step = (now: number) => {
      const dt = now - last;
      last = now;

      if (isAutoRef.current && !prefersReduced && shouldAuto()) {
        const delta = (speedRef.current * dt) / 1000;
        el.scrollLeft = el.scrollLeft + delta;

        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft = el.scrollLeft - half;
        }
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [prefersReduced, doubled.length]);

  // pause/resume helpers
  const pauseAuto = useCallback(() => {
    isAutoRef.current = false;
  }, []);
  const resumeAuto = useCallback(() => {
    isAutoRef.current = true;
  }, []);

  // manual scroll by card
  const scrollByCard = useCallback((direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = window.innerWidth < 640 ? 360 : window.innerWidth < 1024 ? 420 : 520;
    const gap = 64; // increased gap
    const delta = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
    isAutoRef.current = false;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  // go to index in primary set (keeps loop consistent)
  const goToIndex = useCallback((index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = window.innerWidth < 640 ? 360 : window.innerWidth < 1024 ? 420 : 520;
    const gap = 64;
    const pos = index * (cardWidth + gap);
    const half = el.scrollWidth / 2;
    isAutoRef.current = false;
    el.scrollTo({ left: pos % half, behavior: "smooth" });
  }, []);

  // pause on focusin/out for keyboard users
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onFocusIn = () => (isAutoRef.current = false);
    const onFocusOut = () => (isAutoRef.current = true);
    el.addEventListener("focusin", onFocusIn);
    el.addEventListener("focusout", onFocusOut);
    return () => {
      el.removeEventListener("focusin", onFocusIn);
      el.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      aria-label="Premium services"
      style={{
        // warmer orange gradient + dark center for depth
        background:
          "linear-gradient(180deg, rgba(255,160,70,0.06) 0%, rgba(12,12,12,0.7) 48%), radial-gradient(circle at 10% 20%, rgba(249,115,22,0.04), transparent 18%), radial-gradient(circle at 90% 80%, rgba(249,115,22,0.02), transparent 25%)"
      }}
    >
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/8 border border-orange-500/20 mb-3">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-400">AI-Powered Solutions</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white">
            Discover Our{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Premium Services</span>
          </h2>

          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
            Curated enterprise-grade services — from AI & blockchain to secure cloud platforms — engineered to scale.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30">
            <NavButton direction="left" onClick={() => scrollByCard("left")} />
          </div>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30">
            <NavButton direction="right" onClick={() => scrollByCard("right")} />
          </div>

          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide py-6 px-6 lg:px-8"
            onMouseEnter={pauseAuto}
            onMouseLeave={resumeAuto}
            onFocus={pauseAuto}
            onBlur={resumeAuto}
            style={{ gap: "64px", scrollbarWidth: "none", msOverflowStyle: "none" }}
            aria-label="Services carousel"
          >
            {doubled.map((svc, i) => (
              <div key={`${svc.id}-${i}`} className="flex-shrink-0">
                <ServiceCard service={svc} onExplore={() => goToIndex(i % services.length)} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition">
            <span>Get Started Today</span>
            <Rocket className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
