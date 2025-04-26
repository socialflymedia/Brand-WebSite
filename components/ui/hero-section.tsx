"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/animations";
import Link from "next/link";

export default function HeroSection(this: any) {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      
      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.h1
          variants={textVariant(0.1)}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6"
        >
          AI-Powered SaaS Solutions for Your Business
        </motion.h1>
        
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Leverage cutting-edge AI to streamline operations, unlock actionable
          insights, and drive exponential growth with our SaaS platforms and
          analytics tools.
        </motion.p>
        
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="visible"
        >
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: this?.repeate ? 8 : 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>
    </section>
  );
}