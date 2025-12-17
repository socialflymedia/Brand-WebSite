"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Users,
  Calendar,
  Route,
  BarChart3,
  GraduationCap,
  Truck,
  TrendingUp,
  Milk,
  Brain,
  Video,
  FileText,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Image Carousel Component
function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative group">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <Image
                src={src}
                alt={`${alt} - ${i + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductSection() {
  return (
    <section className="relative w-full py-24 bg-[#030303] overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-orange-500 text-sm font-medium tracking-wider uppercase mb-3">
            Our Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for scale. Designed for you.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three powerful platforms for education, dairy operations, and online learning.
          </p>
        </motion.div>

        {/* Product 1: EduFly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">EduFly</h3>
                <p className="text-orange-400 text-sm">School ERP & Management</p>
              </div>
            </div>

            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Complete school management system with automated attendance, learning management, 
              fee collection, and real-time parent communication. Trusted by 250+ schools.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="text-white font-medium">Smart Attendance</div>
                  <div className="text-gray-500 text-sm">RFID & Geo-fence tracking</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="text-white font-medium">LMS Built-in</div>
                  <div className="text-gray-500 text-sm">Classes, tests & grades</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="text-white font-medium">Parent Portal</div>
                  <div className="text-gray-500 text-sm">Real-time updates</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="text-white font-medium">Analytics</div>
                  <div className="text-gray-500 text-sm">Performance insights</div>
                </div>
              </div>
            </div>

            <a
              href="https://edufly.cloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                Explore EduFly <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl blur-2xl" />
            <div className="relative">
              <ImageCarousel
                images={[
                  "/edufly-1.png",
                  "/edufly-2.png"
                ]}
                alt="EduFly Dashboard"
              />
            </div>
          </div>
        </motion.div>

        {/* Product 2: MilkFly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          {/* Image Carousel - Left on desktop */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
            <div className="relative">
              <ImageCarousel
                images={[
                  "/milkfly-1.png",
                  "/milkfly-2.png",
                  "/milkfly-3.png",
                ]}
                alt="MilkFly Platform"
              />
            </div>
          </div>

          {/* Content - Right on desktop */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">MilkFly</h3>
                <p className="text-blue-400 text-sm">Dairy Operations Platform</p>
              </div>
            </div>

            <p className="text-gray-300 text-base leading-relaxed mb-8">
              End-to-end dairy management from farm to doorstep. Handle subscriptions, 
              optimize delivery routes, manage inventory, and process farmer payouts seamlessly.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <div className="text-white font-medium">Subscriptions</div>
                  <div className="text-gray-500 text-sm">Recurring billing</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Route className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <div className="text-white font-medium">Route Optimization</div>
                  <div className="text-gray-500 text-sm">Smart delivery paths</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Milk className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <div className="text-white font-medium">Inventory Sync</div>
                  <div className="text-gray-500 text-sm">Real-time tracking</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <div className="text-white font-medium">Farmer Portal</div>
                  <div className="text-gray-500 text-sm">Transparent payouts</div>
                </div>
              </div>
            </div>

            <a
              href="https://milkfly.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                Explore MilkFly <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Product 3: Gyansathi LMS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Gyansathi LMS</h3>
                <p className="text-emerald-400 text-sm">AI-Powered Learning Platform</p>
              </div>
              <span className="ml-2 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/30">
                NEW
              </span>
            </div>

            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Next-generation learning management system with AI-powered tutoring, 
              live HD video classes, adaptive assessments, and verifiable digital credentials.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <Video className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <div className="text-white font-medium">Live Classes</div>
                  <div className="text-gray-500 text-sm">HD video streaming</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <div className="text-white font-medium">AI Tutor</div>
                  <div className="text-gray-500 text-sm">Personalized learning</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <div className="text-white font-medium">Smart Assessments</div>
                  <div className="text-gray-500 text-sm">Auto-graded quizzes</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <div className="text-white font-medium">Certificates</div>
                  <div className="text-gray-500 text-sm">Digital credentials</div>
                </div>
              </div>
            </div>

            <a
              href="https://gyansathi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8">
                Explore Gyansathi <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-2xl" />
            <div className="relative">
              <ImageCarousel
                images={[
                  "/gyansathi-1.png",
                  "/gyansathi-2.png",
                  "/gyansathi-3.png",
                ]}
                alt="Gyansathi LMS Dashboard"
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-gray-400 mb-6">
            Need a custom solution? We build tailored platforms for your specific needs.
          </p>
          <a href="/contact">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8">
              Contact Sales <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}