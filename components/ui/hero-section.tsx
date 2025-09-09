"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/animations";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Proper Overlays */}
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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {mounted && (
          <>
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -100, -20],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            
            {/* Gradient Orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 text-center mt-48">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-0 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
              AI-Powered SaaS Solutions
            </span>
            <br />
            <span className="text-orange-400">for Ambitious Teams</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="inline-block p-6 rounded-2xl">
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
                Build faster, convert better, and scale with{" "}
                <span className="text-cyan-400 font-semibold">data-driven automations</span>{" "}
                — all in one elegant platform designed for growth.
              </p>
            </div>
          </motion.div>

          
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-15"></div>
      
      {/* Scroll Indicator */}
     
    </section>
  );
}