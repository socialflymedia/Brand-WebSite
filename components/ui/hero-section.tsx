"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background with Proper Overlays - EXACT SAME */}
      <div className="absolute inset-0 z-0">
        {/* Video Element */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Primary Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
        
        {/* Brand Color Accents */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-cyan-500/10"></div>
        
        {/* Radial Gradient for Focus */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"></div>
      </div>

      {/* Static Background Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Static Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Main Content - Static */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-7xl mt-32 sm:mt-40 md:mt-48">
          <div className="max-w-5xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-0 leading-tight">
              <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                AI-Powered SaaS Solutions
              </span>
              <br />
              <span className="text-orange-400">for Ambitious Teams</span>
            </h1>

            {/* Subtitle */}
            <div className="mb-10">
              <div className="inline-block p-4 sm:p-6 rounded-2xl">
                <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
                  Build faster, convert better, and scale with{" "}
                  <span className="text-cyan-400 font-semibold">data-driven automations</span>{" "}
                  — all in one elegant platform designed for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-15"></div>
    </section>
  );
}