"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const orgJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SocialFly Networks",
    url: "https://socialflynetworks.com",
    logo: "https://socialflynetworks.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/socialflynetworks/",
      "https://www.instagram.com/socialflynetworks/",
      "https://twitter.com/socialflynetworks",
      "https://www.youtube.com/socialflynetworks",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9411978307",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-gray-300 overflow-hidden">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }}
      />

      {/* Ambient gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Top CTA Section */}
      <div className="relative border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium mb-4">
                <Sparkles className="w-3 h-3" />
                Ready to scale your operations?
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  extraordinary
                </span>
              </h3>
              <p className="mt-2 text-gray-400 max-w-md">
                Join 100+ schools and dairies transforming their operations with our SaaS platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="tel:+919411978307"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02]"
              aria-label="SocialFly Networks Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                
                  <Image
                    src="/icon.png"
                    alt="SocialFly Networks"
                    fill
                    className="object-cover"
                    priority
                    sizes="44px"
                    
                  />
               </div>
              

              <div className="hidden sm:flex flex-col justify-center">
                <span className="text-sm lg:text-base font-bold text-gray-900 dark:text-white leading-tight">
                  SocialFly Networks
                </span>
                <span className="text-[10px] lg:text-xs text-gray-600 dark:text-gray-400 font-medium leading-tight">
                  Digital Excellence
                </span>
              </div>
            </Link>

            <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-sm">
              Enterprise SaaS powering the future of Education and Dairy industries.
              From school ERPs to farm-to-door delivery platforms — we build software
              that scales with your ambition.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/socialflynetworks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-orange-500/10 hover:border-orange-500/20 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/socialflynetworks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-orange-500/10 hover:border-orange-500/20 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/socialflynetworks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-orange-500/10 hover:border-orange-500/20 transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/socialflynetworks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-orange-500/10 hover:border-orange-500/20 transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Products */}
            <div>
              <h5 className="text-xs font-semibold text-white uppercase tracking-wider">
                Products
              </h5>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="https://www.edufly.cloud"
                    target="_blank"
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    EduFly — School ERP
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.milk-track.vercel.app"
                    target="_blank"
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    MilkFly — Dairy Platform
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    API Docs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="text-xs font-semibold text-white uppercase tracking-wider">
                Company
              </h5>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Us
                  </Link>
                </li>
               
                <li>
                  <Link
                    href="/blog"
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="text-xs font-semibold text-white uppercase tracking-wider">
                Get in Touch
              </h5>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="tel:+919411978307"
                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">+91 94119 78307</div>
                      <div className="text-xs text-gray-500">Mon–Fri, 9:30am–6pm IST</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@socialflynetworks.com"
                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">info@socialflynetworks.com</div>
                      <div className="text-xs text-gray-500">We reply within 24 hours</div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-gray-400">
                    <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Meerut, India</div>
                      <div className="text-xs text-gray-500">Uttar Pradesh 250001</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span>© {year} SocialFly Networks</span>
              <span className="hidden sm:inline text-gray-700">•</span>
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
            </div>

            
          </div>
        </div>
      </div>
    </footer>
  );
}