"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Github,
  Phone,
  Mail,
  MapPin,
  Globe,
  Award,
  ShieldCheck,
  Users,
  Briefcase,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const year = new Date().getFullYear();

  // Basic subscribe handler (replace endpoint)
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Subscription failed. Try again later.");
      }

      setStatus("success");
      setEmail("");
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
      setStatus("error");
    } finally {
      setTimeout(() => {
        if (status !== "success") setStatus("idle");
      }, 3000);
    }
  };

  // JSON-LD for SEO (organization + website + sameAs)
  const orgJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SocialFly Networks",
    url: "https://socialflynetworks.com",
    logo: "https://socialflynetworks.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/socialflynetworks/",
      "https://www.instagram.com/socialflynetworks/",
      "https://www.facebook.com/socialflynetworks/",
      "https://twitter.com/socialflynetworks",
      "https://www.youtube.com/socialflynetworks",
      "https://github.com/socialflynetworks",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9368088418",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  return (
    <footer className="bg-[#050505] text-gray-200 border-t border-gray-800">
      {/* structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }} />

      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Top area: brand + CTA + social */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                SocialFly
              </span>{" "}
              <span className="text-gray-300 font-semibold">Networks</span>
            </Link>

            <p className="mt-4 text-sm text-gray-300 max-w-md leading-relaxed">
              Enterprise SaaS for Education & Dairy — secure school ERPs (LMS), farm-to-door platforms, route optimization,
              subscription billing and analytics. Trusted by schools and cooperatives across India.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 items-center">
              <a
                href="https://www.linkedin.com/company/socialflynetworks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-md hover:bg-gray-800 transition"
              >
                <Linkedin className="w-5 h-5 text-gray-100" />
              </a>

              <a
                href="https://www.instagram.com/socialflynetworks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-md hover:bg-gray-800 transition"
              >
                <Instagram className="w-5 h-5 text-gray-100" />
              </a>

              <a
                href="https://www.facebook.com/socialflynetworks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-md hover:bg-gray-800 transition"
              >
                <Facebook className="w-5 h-5 text-gray-100" />
              </a>

              <a
                href="https://twitter.com/socialfly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-md hover:bg-gray-800 transition"
              >
                <Twitter className="w-5 h-5 text-gray-100" />
              </a>

              <a
                href="https://www.youtube.com/socialflynetworks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-md hover:bg-gray-800 transition"
              >
                <Youtube className="w-5 h-5 text-gray-100" />
              </a>

              <a
                href="https://github.com/socialflynetworks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-md hover:bg-gray-800 transition"
              >
                <Github className="w-5 h-5 text-gray-100" />
              </a>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                aria-label="Request a demo"
              >
                Request Demo
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="tel:+919368088418"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-800 hover:bg-gray-800 text-sm"
                aria-label="Call enterprise sales"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                Enterprise Sales
              </a>
            </div>

            {/* trust badges */}
            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheck className="w-5 h-5 text-orange-400" />
                <div>
                  <div className="font-medium text-sm text-white">SOC2 Ready</div>
                  <div className="text-xs text-gray-400">Security & compliance</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-300">
                <Award className="w-5 h-5 text-orange-400" />
                <div>
                  <div className="font-medium text-sm text-white">Trusted by 100+ clients</div>
                  <div className="text-xs text-gray-400">Schools & dairies</div>
                </div>
              </div>
            </div>
          </div>

          {/* navigation columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h5 className="text-sm font-semibold text-white">Products</h5>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="https://www.edufly.cloud" target="_blank" className="flex items-center gap-2 hover:text-white transition">
                    <ChevronRight className="w-4 h-4 text-orange-400" /> EduFly — School ERP
                  </Link>
                </li>
                <li>
                  <Link href="https://www.milk-track.vercel.app" target="_blank" className="flex items-center gap-2 hover:text-white transition">
                    <ChevronRight className="w-4 h-4 text-orange-400" /> MilkFly — Dairy Ops
                  </Link>
                </li>

              </ul>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-white">Solutions</h5>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="https://www.edufly.cloud" target="_blank" className="flex items-center gap-2 hover:text-white transition">
                    <ChevronRight className="w-4 h-4 text-orange-400" /> K-12 Schools
                  </Link>
                </li>
                <li>
                  <Link href="https://www.milk-track.vercel.app" target="_blank" className="flex items-center gap-2 hover:text-white transition">
                    <ChevronRight className="w-4 h-4 text-orange-400" /> Dairies & Cooperatives
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="flex items-center gap-2 hover:text-white transition">
                    <ChevronRight className="w-4 h-4 text-orange-400" /> Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-white">Resources</h5>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/blog" className="flex items-center gap-2 hover:text-white transition">
                    <ChevronRight className="w-4 h-4 text-orange-400" /> Blog
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="flex items-center gap-2 hover:text-white transition">
                    <ChevronRight className="w-4 h-4 text-orange-400" /> Documentation / API
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="flex items-center gap-2 hover:text-white transition">
                    <ChevronRight className="w-4 h-4 text-orange-400" /> Support & Knowledge Base
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="flex items-center gap-2 hover:text-white transition">
                    <ChevronRight className="w-4 h-4 text-orange-400" /> System Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-white">Company</h5>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/about" className="flex items-center gap-2 hover:text-white transition">
                    <ChevronRight className="w-4 h-4 text-orange-400" /> About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="flex items-center gap-2 hover:text-white transition">
                    <ChevronRight className="w-4 h-4 text-orange-400" /> Careers
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="flex items-center gap-2 hover:text-white transition">
                    <ChevronRight className="w-4 h-4 text-orange-400" /> Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="flex items-center gap-2 hover:text-white transition">
                    <ChevronRight className="w-4 h-4 text-orange-400" /> Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* newsletter & quick contact */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 bg-[#080808] border border-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white">Stay updated — product news & growth insights</h4>
            <p className="mt-2 text-sm text-gray-300 max-w-2xl">
              Monthly updates with product releases, route optimization case studies and dairy industry best practices.
            </p>

            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row gap-3" aria-label="Subscribe to newsletter">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="min-w-0 w-full bg-[#060606] border border-gray-800 rounded-md px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className={cn(
                  "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold",
                  status === "loading" ? "bg-orange-300 text-black" : "bg-orange-500 hover:bg-orange-600 text-black"
                )}
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>

            {status === "success" && <p className="mt-3 text-sm text-green-400">Thanks — you’ve been subscribed!</p>}
            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          </div>

          <div className="bg-[#080808] border border-gray-800 rounded-lg p-6">
            <h4 className="text-sm font-semibold text-white">Quick Contact</h4>
            <p className="mt-2 text-sm text-gray-300">Sales, partnerships, press & support — pick the right channel.</p>

            <div className="mt-4 space-y-3 text-sm text-gray-200">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+918126040011" className="text-gray-300 hover:text-white">+91 81260 40011</a>
                  <div className="text-xs text-gray-400">Mon–Fri, 9:30am–6:00pm IST</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:support@socialflynetworks.com" className="text-gray-300 hover:text-white">support@socialflynetworks.com</a>
                  <div className="text-xs text-gray-400">Typical response within 24 hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="font-medium">Head Office</div>
                  <div className="text-gray-300">Advika Dairy Farm, Mawana, Meerut, Uttar Pradesh, India</div>
                </div>
              </div>

              <div className="mt-3">
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300">
                  Contact Page
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* lower area: sitemap, partners, payments */}
        <div className="mt-10 border-t border-gray-800 pt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-4">
            {/* Placeholder partner logos (replace with <Image /> as needed) */}
            <div className="h-10 w-24 rounded-md bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center text-xs text-gray-300">Client A</div>
            <div className="h-10 w-24 rounded-md bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center text-xs text-gray-300">Client B</div>
            <div className="h-10 w-24 rounded-md bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center text-xs text-gray-300">Client C</div>
            <div className="h-10 w-24 rounded-md bg-gradient-to-r from-gray-800 to-gray-900 hidden md:flex items-center justify-center text-xs text-gray-300">Client D</div>
          </div>

          <div className="text-sm text-gray-400">
            <Link href="/sitemap.xml" className="hover:text-white transition mr-4">Sitemap</Link>
            <Link href="/privacy" className="hover:text-white transition mr-4">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
          </div>

          <div className="flex items-center justify-end gap-3">
            {/* Payment icons placeholder */}
            <div className="h-8 w-12 rounded-md bg-[#0d0d0d] flex items-center justify-center text-xs text-gray-300">Visa</div>
            <div className="h-8 w-12 rounded-md bg-[#0d0d0d] flex items-center justify-center text-xs text-gray-300">MC</div>
            <div className="h-8 w-12 rounded-md bg-[#0d0d0d] flex items-center justify-center text-xs text-gray-300">UPI</div>
          </div>
        </div>

        {/* SEO paragraph */}
        <div className="mt-6 text-xs text-gray-500 max-w-4xl">
          SocialFly Networks builds cloud-first, secure and scalable SaaS for school management systems (ERP), learning management systems (LMS),
          subscription-based dairy delivery platforms, route optimization, farmer payouts and analytics. We provide integration-first products,
          white-glove enterprise onboarding and developer APIs to automate operations for educational institutions and dairy businesses.
        </div>

        {/* copyright & small print */}
        <div className="mt-6 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500">© {year} SocialFly Networks — All rights reserved.</div>
          <div className="text-xs text-gray-500">Made with ❤️ · Accessibility statement · Cookie preferences</div>
        </div>
      </div>
    </footer>
  );
}
