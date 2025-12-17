// components/ui/testimonials-section.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Squares from "./squares";
import type { ChromaItem } from "@/components/ChromaGrid";

type Props = {
  items?: ChromaItem[];
  height?: number;
  ChromaGridComponent?: React.ReactNode;
};

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
};

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Ramit Raman Rastogi",
    role: "Founder",
    company: "Gyansathi",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text:
      "Working with this team has been an exceptional experience. Their strategic clarity and execution helped us strengthen our digital presence and scale with confidence.",
  },
  {
    id: 2,
    name: "Abhay Chauhan",
    role: "Founder",
    company: "Studio Arch Tantra",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text:
      "The attention to detail and design-first approach truly stood out. The results aligned perfectly with our brand vision and business goals.",
  },
  {
    id: 3,
    name: "Manik Chaudhary",
    role: "Founder",
    company: "MilkFly",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text:
      "A highly professional and reliable team. Their solutions significantly improved our operational efficiency and customer engagement.",
  },
  {
    id: 4,
    name: "Shahista",
    role: "Founder",
    company: "Shas Design Studio",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text:
      "The collaboration was smooth and productive. The creativity, execution, and support exceeded expectations at every stage.",
  },
  {
    id: 5,
    name: "Naman Bansal",
    role: "Founder",
    company: "WeltBridge",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text:
      "Exceptional quality and timely delivery. The impact on our brand positioning and digital growth has been remarkable.",
  },
];


export default function TestimonialsSection({
  items,
  height = 680,
  ChromaGridComponent,
}: Props): JSX.Element {
  const testimonials = (items && items.length > 0 ? items : undefined)
    ? // if items provided are ChromaItem[], but we need Testimonial[], map lightly
      (items as unknown as ChromaItem[]) // keep type flow; we will use quotes/profile from ChromaItem in the grid only
    : undefined;

  // We'll still use the internal testimonialsData for the card carousel
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const intervalRef = useRef<number | null>(null);

  // next / prev for internal testimonial cards
  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  const prevTestimonial = () =>
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));

  useEffect(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (isAutoPlaying) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
      }, 4000);
    }
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevTestimonial();
      if (e.key === "ArrowRight") nextTestimonial();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const getVisibleTestimonials = () => {
    const visible: Testimonial[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonialsData.length;
      visible.push(testimonialsData[index]);
    }
    return visible;
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-600"}`}
        aria-hidden
      />
    ));

  return (
    <section className="relative w-full" style={{ minHeight: height }} aria-label="Testimonials">
      <div className="absolute inset-0 z-0">
        {(Squares as any) && (
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="rgba(255, 255, 255, 0.1)"
            hoverFillColor="rgba(255, 255, 255, 0.05)"
          />
        )}
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-orange-900/20 to-black/90" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Quote className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-white/80 tracking-wide uppercase">What Our Clients Say</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Loved by{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>

          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders and innovators have to say about their experience with our platform.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="relative">
            <button onClick={prevTestimonial} aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white">
              <ChevronLeft className="w-6 h-6 mx-auto" />
            </button>
            <button onClick={nextTestimonial} aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white">
              <ChevronRight className="w-6 h-6 mx-auto" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
              {getVisibleTestimonials().map((t, idx) => (
                <div key={t.id} className={`group relative transform transition-all duration-700 ${idx === 1 ? "scale-105 z-20" : idx === 0 ? "scale-95 md:-rotate-2 opacity-80" : "scale-95 md:rotate-2 opacity-80"}`}>
                  <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-2 group-hover:border-white/30">
                    <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>

                    <div className="flex items-center gap-1 mb-6 mt-4">{renderStars(t.rating)}</div>

                    <p className="text-white/90 text-lg leading-relaxed mb-8 min-h-[120px]">&quot;{t.text}&quot;</p>

                    <div className="flex items-center gap-4">
                     

                      <div>
                        <h4 className="font-semibold text-white text-lg">{t.name}</h4>
                        <p className="text-white/60 text-sm">{t.role}</p>
                        <p className="text-orange-300 text-sm font-medium">{t.company}</p>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-12">
            {testimonialsData.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentIndex(idx)} aria-label={`Go to ${idx + 1}`} className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-gradient-to-r from-orange-400 to-red-400 scale-125" : "bg-white/30 hover:bg-white/50"}`} />
            ))}
          </div>
        </div>

             <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 cursor-pointer">
            <span>Join Our Happy Customers</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
