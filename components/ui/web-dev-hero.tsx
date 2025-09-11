// components/ui/web-dev-hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

type Props = {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function WebDevHero({ title, subtitle, ctaText = "Get a quote", ctaHref = "/contact" }: Props) {
  return (
    <section className="relative overflow-hidden py-12">
      {/* Decorative gradients */}
      <div aria-hidden className="absolute -left-24 -top-20 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-orange-400/10 to-transparent blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -right-24 -bottom-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-pink-500/6 to-transparent blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-orange-500/8 border border-orange-500/20 mb-3">
            <CheckCircle className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-400">Trusted by local businesses</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {title}
          </h1>

          {subtitle && <p className="mt-4 text-gray-300 max-w-xl">{subtitle}</p>}

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={ctaHref} className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold shadow transform hover:-translate-y-0.5 transition">
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-3 border rounded-lg text-sm text-gray-200">
              See projects
            </a>
          </div>

          {/* Quick bullet benefits */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><span className="text-orange-400">•</span> SEO-first architecture</li>
            <li className="flex items-center gap-2"><span className="text-orange-400">•</span> Fast LCP & low CLS</li>
            <li className="flex items-center gap-2"><span className="text-orange-400">•</span> Local Mawana/Meerut SEO</li>
            <li className="flex items-center gap-2"><span className="text-orange-400">•</span> Analytics & monitoring</li>
          </ul>

          {/* Animated stats */}
          <div className="mt-6 flex gap-6 items-center">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
              <div className="text-2xl font-bold">200+</div>
              <div className="text-xs text-gray-400">Projects delivered</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
              <div className="text-2xl font-bold">4.8★</div>
              <div className="text-xs text-gray-400">Average rating (clients)</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
              <div className="text-2xl font-bold">Mawana / Meerut</div>
              <div className="text-xs text-gray-400">Local focus</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gradient-to-b from-[#070707] to-[#0b0b0b]">
            <div className="relative w-full h-60 md:h-72">
              <Image src="/projects/gyansathi.png" alt="Gyansathi screenshot" fill style={{ objectFit: 'cover' }} priority placeholder="empty" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold">Gyansathi</div>
                  <div className="text-xs text-gray-400">Education portal — student dashboards & SEO</div>
                </div>
                <a href="https://www.gyansathi.com" target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1 rounded bg-orange-500 text-white">
                  Visit
                </a>
              </div>
              <div className="mt-3 text-sm text-gray-300">High-concurrency design, CMS-managed content, and performance tuning for better engagement.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
