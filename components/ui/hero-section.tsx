"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/animations";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      {/* <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-background/20 dark:via-background/80 dark:to-background bg-background"></div> */}

      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.h1
          variants={textVariant(0.1)}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl font-thin mb-6 px-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          AI-Powered SaaS Solutions for Your Business
        </motion.h1>
        
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="visible"
          className="relative mb-12 max-w-2xl mx-auto text-center"
        >
          {/* Subtle glow behind subtext */}
          <div className="absolute inset-0 pointer-events-none -translate-y-1/4 blur-3xl">
  <div
    className="w-full h-full rounded-full"
    style={{
      background: "radial-gradient(circle at center, rgba(59,130,246,0.08), rgba(59,130,246,0.01), transparent 80%)",
      maskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
      WebkitMaskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
    }}
  />
</div>

          {/* Animated line above text */}
          <motion.div 
            className="h-px w-24 mx-auto mb-6 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent dark:via-blue-700/50 dark:from-transparent dark:to-transparent"
            animate={{ width: ["0%", "40%", "30%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          ></motion.div>
          
          {/* Enhanced Subtext */}
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl font-light tracking-wider leading-relaxed"
          >
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-blue-600 dark:from-blue-300 dark:via-purple-300 dark:to-blue-300 drop-shadow-sm"
            >
              Building Tomorrow's Brands with Today's Technology.
            </span>
          </motion.p>
          
          {/* Enhanced funnel effect */}
          {/* <div className="absolute inset-x-0 -bottom-8 h-24 bg-gradient-to-t from-white via-gray-200/10 to-transparent dark:from-background dark:via-gray-800/10 dark:to-transparent rounded-t-full opacity-70"></div>
           */}
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-blue-400/40 dark:bg-white/40"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${0 + (i % 3) * 10}%`
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="visible"
        >
          <Link target="_blank" href="https://app.youform.com/forms/hiv3vogo">
            <Button
  size="lg"
  className="bg-white/10 backdrop-blur-md border border-white/20 text-black dark:text-white border-blue-500 hover:bg-white-200/20 hover:border-blue-500/30 rounded-l shadow-md"
>
  Get Started
</Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Animated shapes - visible in both light and dark modes */}
      <div className="absolute inset-0 pointer-events-none">
      <motion.div
  className="absolute top-1/4 left-[-20%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl opacity-50"
  initial={{ x: 0, opacity: 0 }}
  animate={{ x: "140vw", opacity: [0, 0.6, 0] }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>

        <motion.div
          className="absolute bottom-1/3 right-1/5 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 bg-indigo-500/10 blur-3xl"
          animate={{
            x: [0, 70, 0],
            y: [0, 30, 0],
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