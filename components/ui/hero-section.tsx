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
          className="text-4xl md:text-5xl lg:text-6xl font-thin gradient-text mb-6 px-4"
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
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full transform -translate-y-1/4 dark:bg-blue-500/5 bg-blue-300/5"></div>
          
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
              className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-black-200 to-purple-700 drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] dark:from-blue-500 dark:via-stone dark:to-purple-700 dark:drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
            >
              Building Tomorrow's Brands with Today's Technology.
            </span>
            </motion.p>
          
          {/* Enhanced funnel effect */}
          <div className="absolute inset-x-0 -bottom-8 h-24 bg-gradient-to-t from-background via-violet-700/25 to-transparent rounded-t-full opacity-70 dark:via-gray-800/10 via-gray-300/10"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-black dark:bg-white"
          style={{
            left: `${20 + i * 15}%`,
            top: `${50 + (i % 3) * 10}%`
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
          <Link  target="_blank" href="https://app.youform.com/forms/hiv3vogo">
          
          {/* <Button size="lg" className="bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-black">
  Get Started
</Button> */}
<Button
  size="lg"
  className="bg-white/10 backdrop-blur-md border border-white/20 text-black dark:text-white border-blue-500 hover:bg-white-200/20 hover:border-blue-500/30 rounded-l shadow-md"
>
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