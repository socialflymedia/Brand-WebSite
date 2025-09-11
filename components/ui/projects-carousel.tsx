// components/ui/projects-carousel.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

type Item = { title: string; url: string; img: string; tag?: string };

export default function ProjectsCarousel({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const scroll = (delta: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="relative" id="projects">
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20">
        <button onClick={() => scroll(-420)} className="p-2 rounded-full bg-gray-900/88 border border-gray-800 hover:border-orange-500/30">
          <ChevronLeft className="w-5 h-5 text-orange-400" />
        </button>
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20">
        <button onClick={() => scroll(420)} className="p-2 rounded-full bg-gray-900/88 border border-gray-800 hover:border-orange-500/30">
          <ChevronRight className="w-5 h-5 text-orange-400" />
        </button>
      </div>

      <div ref={ref} className="flex gap-6 overflow-x-auto py-4 px-2 scrollbar-hide" style={{ scrollSnapType: "x mandatory" }}>
        {items.map((it, idx) => (
          <motion.a
            key={idx}
            href={it.url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[360px] max-w-[360px] shrink-0 rounded-2xl overflow-hidden border border-gray-800 hover:scale-[1.02] transition-transform"
            whileHover={{ scale: 1.02 }}
            style={{ scrollSnapAlign: "center" }}
          >
            <div className="relative h-44">
              <Image src={it.img} alt={`${it.title} screenshot`} fill style={{ objectFit: "cover" }} placeholder="empty" />
            </div>
            <div className="p-3 bg-[#0b0b0b]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{it.title}</div>
                  {it.tag && <div className="text-xs text-gray-400">{it.tag}</div>}
                </div>
                <ExternalLink className="w-4 h-4 text-gray-300" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
