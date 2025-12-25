"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================================
// CHRISTMAS & NEW YEAR POPUP - RED THEME - SAAS FOCUSED
// Celebrating 2025 → 2026 transition
// ============================================================================

interface Snowflake {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  blur: number;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
}

export default function ChristmasPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  // Generate snowflakes with depth effect
  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 4 + Math.random() * 6,
      size: 3 + Math.random() * 12,
      opacity: 0.3 + Math.random() * 0.7,
      blur: Math.random() > 0.7 ? 2 : 0, // Some blurred for depth
    }));
    setSnowflakes(flakes);

    // Golden sparkles
    const sparks: Sparkle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      size: 2 + Math.random() * 4,
    }));
    setSparkles(sparks);
  }, []);

  // Check localStorage and show popup after delay
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("sfn-christmas-2025");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    localStorage.setItem("sfn-christmas-2025", "true");
  }, []);

  const handleContactClick = useCallback(() => {
    handleClose();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "#contact";
    }
  }, [handleClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop with red tint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9998]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%)",
              backdropFilter: "blur(8px)",
            }}
            onClick={handleClose}
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 60 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 200,
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-xl pointer-events-auto">
              
              {/* Outer Glow - Red/Gold */}
              <div 
                className="absolute -inset-6 rounded-[32px] opacity-60"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(220,38,38,0.4) 0%, rgba(251,191,36,0.2) 50%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              
              {/* Secondary Glow */}
              <motion.div 
                className="absolute -inset-4 rounded-[28px]"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: "linear-gradient(135deg, rgba(220,38,38,0.3) 0%, rgba(185,28,28,0.2) 50%, rgba(251,191,36,0.3) 100%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Main Card */}
              <div 
                className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10"
                style={{
                  background: "linear-gradient(165deg, #dc2626 0%, #b91c1c 25%, #991b1b 50%, #7f1d1d 75%, #450a0a 100%)",
                }}
              >
                {/* Realistic fabric/velvet texture overlay */}
                <div 
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Diagonal gold ribbon effect */}
                <div 
                  className="absolute -right-20 -top-20 w-40 h-40 rotate-45 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent 30%, rgba(251,191,36,0.3) 50%, transparent 70%)",
                  }}
                />

                {/* Snowfall Container */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {snowflakes.map((flake) => (
                    <motion.div
                      key={flake.id}
                      className="absolute text-white/90"
                      style={{
                        left: `${flake.x}%`,
                        fontSize: flake.size,
                        opacity: flake.opacity,
                        filter: flake.blur ? `blur(${flake.blur}px)` : "none",
                        textShadow: "0 0 10px rgba(255,255,255,0.5)",
                      }}
                      initial={{ y: -30, rotate: 0 }}
                      animate={{ 
                        y: "120vh",
                        rotate: 360,
                        x: [0, 10, -10, 5, 0],
                      }}
                      transition={{
                        y: { duration: flake.duration, delay: flake.delay, repeat: Infinity, ease: "linear" },
                        rotate: { duration: flake.duration * 2, repeat: Infinity, ease: "linear" },
                        x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      ❄
                    </motion.div>
                  ))}
                </div>

                {/* Golden Sparkles */}
                {sparkles.map((spark) => (
                  <motion.div
                    key={spark.id}
                    className="absolute pointer-events-none"
                    style={{
                      left: `${spark.x}%`,
                      top: `${spark.y}%`,
                      width: spark.size,
                      height: spark.size,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: spark.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div 
                      className="w-full h-full rounded-full"
                      style={{
                        background: "radial-gradient(circle, #fbbf24 0%, #f59e0b 50%, transparent 70%)",
                        boxShadow: "0 0 10px #fbbf24, 0 0 20px #f59e0b",
                      }}
                    />
                  </motion.div>
                ))}

                {/* Top decorative border - Gold trim */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, #fbbf24 20%, #fcd34d 50%, #fbbf24 80%, transparent 100%)",
                  }}
                />

                {/* Holly decorations - Left */}
                <motion.div
                  className="absolute top-4 left-4 text-3xl"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  🎄
                </motion.div>

                {/* Holly decorations - Right */}
                <motion.div
                  className="absolute top-4 right-14 text-2xl"
                  initial={{ scale: 0, rotate: 45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  🔔
                </motion.div>

                {/* Close Button */}
                <motion.button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-300"
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.5)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>

                {/* Content */}
                <div className="relative z-10 px-8 py-10 text-center">
                  
                  {/* Year Transition Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                  >
                    <div 
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)",
                        border: "1px solid rgba(251,191,36,0.3)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
                      }}
                    >
                      <span className="text-white/80 font-medium">2025</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-amber-400"
                      >
                        →
                      </motion.span>
                      <span 
                        className="font-bold text-transparent bg-clip-text"
                        style={{
                          backgroundImage: "linear-gradient(135deg, #fbbf24 0%, #fcd34d 50%, #fbbf24 100%)",
                        }}
                      >
                        2026
                      </span>
                    </div>
                  </motion.div>

                  {/* Main Heading */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h2 
                      className="text-4xl md:text-5xl font-bold mb-3 text-white"
                      style={{ 
                        fontFamily: "'Poppins', sans-serif",
                        textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                      }}
                    >
                      Season&apos;s Greetings!
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl">🎄</span>
                      <p 
                        className="text-lg font-semibold"
                        style={{
                          background: "linear-gradient(90deg, #fcd34d, #fbbf24, #f59e0b)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Merry Christmas & Happy New Year
                      </p>
                      <span className="text-2xl">🎅</span>
                    </div>
                  </motion.div>

                  {/* Divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="w-32 h-px mx-auto my-5"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(251,191,36,0.6), transparent)",
                    }}
                  />

                  {/* SaaS-focused Message */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/90 mb-6 leading-relaxed max-w-md mx-auto text-base"
                  >
                    Thank you for being part of our journey in 2025! Your trust in our 
                    <span className="text-amber-300 font-semibold"> SaaS solutions </span> 
                    has helped us grow together. Here&apos;s to scaling new heights in 2026!
                  </motion.p>

                  {/* Stats Row - SaaS metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="flex justify-center gap-6 mb-6"
                  >
                    {[
                      { value: "99.9%", label: "Uptime" },
                      { value: "150+", label: "Clients" },
                      { value: "24/7", label: "Support" },
                    ].map((stat, i) => (
                      <div 
                        key={i}
                        className="text-center px-4 py-2 rounded-lg"
                        style={{
                          background: "rgba(0,0,0,0.2)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <div className="text-amber-400 font-bold text-lg">{stat.value}</div>
                        <div className="text-white/60 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Special Offer */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-6"
                  >
                    <div 
                      className="relative inline-block px-6 py-3 rounded-xl overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%)",
                        border: "2px solid rgba(251,191,36,0.5)",
                        boxShadow: "0 0 30px rgba(251,191,36,0.2)",
                      }}
                    >
                      {/* Animated shine */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          background: [
                            "linear-gradient(90deg, transparent 0%, rgba(251,191,36,0.1) 50%, transparent 100%)",
                            "linear-gradient(90deg, transparent 100%, rgba(251,191,36,0.1) 50%, transparent 0%)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="relative flex items-center gap-2">
                        <span className="text-2xl">🎁</span>
                        <div>
                          <p className="text-amber-400 font-bold text-sm">NEW YEAR SPECIAL</p>
                          <p className="text-white font-semibold">
                            Get <span className="text-amber-300 text-xl font-bold">25% OFF</span> on Annual Plans
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-3 justify-center"
                  >
                    <motion.button
                      onClick={handleContactClick}
                      className="group relative px-8 py-4 rounded-xl font-semibold text-slate-900 overflow-hidden shadow-xl"
                      style={{
                        background: "linear-gradient(135deg, #fbbf24 0%, #fcd34d 50%, #fbbf24 100%)",
                        boxShadow: "0 10px 40px rgba(251,191,36,0.3)",
                      }}
                      whileHover={{ scale: 1.03, boxShadow: "0 15px 50px rgba(251,191,36,0.4)" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                        }}
                      />
                      <span className="relative flex items-center justify-center gap-2 font-bold">
                        <span>Claim Your Offer</span>
                        <motion.span
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          🚀
                        </motion.span>
                      </span>
                    </motion.button>

                    <motion.button
                      onClick={handleClose}
                      className="px-8 py-4 rounded-xl font-semibold text-white/90 hover:text-white transition-all duration-300"
                      style={{
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                      whileHover={{ 
                        scale: 1.03, 
                        background: "rgba(0,0,0,0.4)",
                        borderColor: "rgba(255,255,255,0.3)",
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Maybe Later
                    </motion.button>
                  </motion.div>

                  {/* Footer */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6 text-xs text-white/50 flex items-center justify-center gap-2"
                  >
                    <span>✨</span>
                    <span>Offer valid till 15th January 2026</span>
                    <span>✨</span>
                  </motion.p>
                </div>

                {/* Bottom decorative snow mound */}
                <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                  <svg viewBox="0 0 400 50" preserveAspectRatio="none" className="w-full h-12">
                    <defs>
                      <linearGradient id="snowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M0,50 Q40,20 80,40 T160,30 T240,40 T320,25 T400,35 L400,50 L0,50 Z" 
                      fill="url(#snowGradient)"
                    />
                    <path 
                      d="M0,50 Q60,30 100,45 T200,35 T300,45 T400,38 L400,50 L0,50 Z" 
                      fill="rgba(255,255,255,0.08)"
                    />
                  </svg>
                </div>

                {/* Corner gift decoration */}
                <motion.div
                  className="absolute bottom-4 right-4 text-3xl"
                  initial={{ scale: 0, rotate: 20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  🎁
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 text-2xl"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.85, type: "spring" }}
                >
                  ⛄
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}