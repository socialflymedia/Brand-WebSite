"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  CheckCircle,
  TrendingUp,
  Milk,
} from "lucide-react";
import CardSwapComp, { Card as StackCard } from "./CardSwap";
import Iphone15Pro from "./Iphone15Pro";

export default function ProductSection() {
  return (
    <section className="relative w-full py-20 bg-black">
      {/* Strong orange blobs / shadows over pure black background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top-left hot orange blob */}
        <div
          className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[640px] h-[640px] rounded-full blur-[80px] opacity-95"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,120,20,0.95) 0%, rgba(255,140,40,0.78) 22%, rgba(255,170,70,0.48) 44%, rgba(255,140,40,0.18) 65%, transparent 85%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Bottom-right deep amber blob */}
        <div
          className="absolute bottom-0 right-0 translate-x-1/6 translate-y-1/6 w-[600px] h-[600px] rounded-full blur-[72px] opacity-95"
          style={{
            background:
              "radial-gradient(circle at 80% 80%, rgba(255,160,60,0.92) 0%, rgba(255,125,30,0.68) 26%, rgba(255,95,0,0.36) 52%, transparent 78%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Small warm accents to remove any cold cast */}
        <div
          className="absolute top-12 right-12 w-[220px] h-[220px] rounded-full blur-[36px] opacity-90"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,150,40,0.36) 0%, rgba(255,120,20,0.14) 52%, transparent 76%)",
            mixBlendMode: "screen",
          }}
        />
        <div
          className="absolute bottom-16 left-10 w-[180px] h-[180px] rounded-full blur-[32px] opacity-88"
          style={{
            background:
              "radial-gradient(circle at 45% 55%, rgba(255,130,30,0.34) 0%, rgba(255,100,20,0.12) 56%, transparent 80%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Subtle inner-vignette so edges remain deep black */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 35%, rgba(0,0,0,0.26) 100%)",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0b0b] border border-[#1f1f1f] mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-gray-300 font-medium text-xs">OUR PRODUCTS</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight mb-3">
            Two industries. <span className="text-orange-500">One platform.</span>
          </h2>

          <p className="text-sm lg:text-base text-gray-400 max-w-2xl mx-auto">
            Purpose-built, enterprise-ready solutions for education and dairy — crafted for long-term reliability and delightful UX.
          </p>
        </motion.div>

        {/* Card stack section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold text-white">Transforming industries with smart solutions</h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              We combine product design, resilient engineering and domain expertise to deliver platforms that reduce operational cost and increase engagement.
            </p>

            <div className="space-y-2">
              {["Industry-specific features", "Seamless integrations", "Scalable & secure architecture"].map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium text-sm">{t}</div>
                    <div className="text-gray-500 text-xs">
                      {i === 0 ? "Designed for education and dairy operations" : i === 1 ? "APIs, webhooks and sync" : "Cloud-first, role-based access and monitoring"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 px-4">
                Explore Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-[#0d0d0d] text-sm py-2 px-4">
                View Demo
              </Button>
            </div>
          </motion.div>

          {/* Right: CardSwap preview */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div style={{ height: "420px", position: "relative" }}>
              <CardSwapComp cardDistance={50} verticalDistance={60} delay={3800} pauseOnHover={true}>
                <StackCard
                  customClass="max-w-[340px] w-[320px] h-[430px] rounded-2xl overflow-hidden transform-gpu hover:scale-[1.03] transition-transform duration-300 shadow-[0_30px_80px_rgba(255,120,20,0.12)] border border-transparent box-border"
                >
                  {/* IMAGE (fixed aspect) */}
                  <div className="w-full h-40 relative flex-shrink-0">
                    <img
                      src="/school.png"
                      alt="EduFly screenshot"
                      className="w-full h-full object-cover block"
                      style={{ display: "block" }}
                    />

                    {/* warm tint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-[rgba(255,120,20,0.06)] to-transparent pointer-events-none" />

                    {/* badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">Education</Badge>
                    </div>

                    {/* stat */}
                    <div className="absolute top-3 right-3 bg-black/40 border border-white/6 text-xs text-gray-200 px-2 py-1 rounded-md backdrop-blur-sm">
                      <span className="font-medium">4.9</span> <span className="text-[11px] text-gray-300">• 250+</span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 flex flex-col flex-1 min-h-0" style={{ boxSizing: "border-box" }}>
                    <div className="backdrop-blur-sm bg-white/3 rounded-lg p-2 mb-2 border border-white/6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-white leading-tight truncate">EduFly</h4>
                        <div className="text-[11px] text-gray-300">School ERP</div>
                      </div>
                      <p className="text-[12px] text-gray-300 mt-2 leading-snug line-clamp-3">
                        Complete school management — attendance automation, LMS and parent engagement.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-3 text-[11px]">
                      <div className="flex flex-col">
                        <div className="text-orange-400 font-semibold">Attendance</div>
                        <div className="text-gray-400 text-[10px] truncate">RFID & Geo</div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-orange-400 font-semibold">LMS</div>
                        <div className="text-gray-400 text-[10px] truncate">Assessments</div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-orange-400 font-semibold">Parents</div>
                        <div className="text-gray-400 text-[10px] truncate">Messaging</div>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-2 border-t border-white/6">
                      <div>
                        <div className="text-sm font-semibold text-white">₹499</div>
                        <div className="text-[11px] text-gray-400">per month / seat</div>
                      </div>
                      <button className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 rounded-md text-xs font-medium text-white shadow">
                        Learn
                      </button>
                    </div>
                  </div>
                </StackCard>

                {/* MilkFly */}
                <StackCard
                  customClass="max-w-[340px] w-[320px] h-[430px] rounded-2xl overflow-hidden transform-gpu hover:scale-[1.03] transition-transform duration-300 shadow-[0_36px_100px_rgba(255,140,30,0.10)] border border-transparent box-border"
                >
                  <div className="w-full h-40 relative flex-shrink-0">
                    <img
                      src="/milk.png"
                      alt="MilkFly screenshot"
                      className="w-full h-full object-cover block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-[rgba(255,100,10,0.04)] to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">Dairy</Badge>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/40 border border-white/6 text-xs text-gray-200 px-2 py-1 rounded-md backdrop-blur-sm">
                      <span className="font-medium">4.8</span> <span className="text-[11px] text-gray-300">• 80+</span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1 min-h-0" style={{ boxSizing: "border-box" }}>
                    <div className="backdrop-blur-sm bg-white/3 rounded-lg p-2 mb-2 border border-white/6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-white leading-tight truncate">MilkFly</h4>
                        <div className="text-[11px] text-gray-300">Dairy Ops</div>
                      </div>
                      <p className="text-[12px] text-gray-300 mt-2 leading-snug line-clamp-3">
                        Manage subscriptions, routes and farmer payouts with real-time inventory sync.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-3 text-[11px]">
                      <div className="flex flex-col">
                        <div className="text-blue-400 font-semibold">Subs</div>
                        <div className="text-gray-400 text-[10px] truncate">Recurring</div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-blue-400 font-semibold">Routes</div>
                        <div className="text-gray-400 text-[10px] truncate">Optimized</div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-blue-400 font-semibold">Portal</div>
                        <div className="text-gray-400 text-[10px] truncate">Farmer Payouts</div>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-2 border-t border-white/6">
                      <div>
                        <div className="text-sm font-semibold text-white">₹999</div>
                        <div className="text-[11px] text-gray-400">per month / location</div>
                      </div>
                      <button className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-md text-xs font-medium text-white shadow">
                        Learn
                      </button>
                    </div>
                  </div>
                </StackCard>

                {/* Integrations */}
                <StackCard
                  customClass="max-w-[340px] w-[320px] h-[430px] rounded-2xl overflow-hidden transform-gpu hover:scale-[1.03] transition-transform duration-300 shadow-[0_30px_80px_rgba(200,80,255,0.03)] border border-transparent box-border"
                >
                  <div className="w-full h-40 relative flex-shrink-0">
                    <img
                      src="/payment.png"
                      alt="Integrations screenshot"
                      className="w-full h-full object-cover block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-[rgba(255,110,30,0.03)] to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">Connect</Badge>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/40 border border-white/6 text-xs text-gray-200 px-2 py-1 rounded-md backdrop-blur-sm">
                      <span className="font-medium">Live</span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1 min-h-0" style={{ boxSizing: "border-box" }}>
                    <div className="backdrop-blur-sm bg-white/3 rounded-lg p-2 mb-2 border border-white/6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-white leading-tight truncate">Integrations</h4>
                        <div className="text-[11px] text-gray-300">Payments & APIs</div>
                      </div>
                      <p className="text-[12px] text-gray-300 mt-2 leading-snug line-clamp-3">
                        Connect payments, messaging and analytics with secure webhooks and first-class SDKs.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-3 text-[11px]">
                      <div className="flex flex-col">
                        <div className="text-purple-400 font-semibold">Razorpay</div>
                        <div className="text-gray-400 text-[10px] truncate">Payment</div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-purple-400 font-semibold">Twilio</div>
                        <div className="text-gray-400 text-[10px] truncate">SMS</div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-purple-400 font-semibold">Analytics</div>
                        <div className="text-gray-400 text-[10px] truncate">Events</div>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-2 border-t border-white/6">
                      <div>
                        <div className="text-sm font-semibold text-white">Custom</div>
                        <div className="text-[11px] text-gray-400">pricing</div>
                      </div>
                      <button className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 rounded-md text-xs font-medium text-white shadow">
                        Explore
                      </button>
                    </div>
                  </div>
                </StackCard>
              </CardSwapComp>
            </div>
          </motion.div>
        </div>

        {/* ===== Alternating product + device sections ===== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12"
        >
          <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
            <div className="max-w-[360px] w-full">
              <Iphone15Pro
                className="w-[280px] h-auto"
                videoSrc="/milkTrack.mp4"
                poster="/milkTrack-poster.jpg"
                variant="titanium"
                fit="cover"
                shadow={0.6}
              />
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="bg-gradient-to-br from-[#0b0b0b]/70 to-[#0b0b0b]/60 border border-[#171717] rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-inner">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">MilkFly</h3>
                  <p className="text-orange-400 text-xs">Farm-to-door dairy operations</p>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-4">
                Manage subscriptions, optimize delivery routes and run transparent farmer payouts — a platform built to scale from one town to many regions.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { icon: Users, title: "Subscriptions", desc: "Recurring customer flows" },
                  { icon: Route, title: "Route Planning", desc: "Delivery optimization & KPIs" },
                  { icon: Milk, title: "Inventory Sync", desc: "Batch & tray-level tracking" },
                  { icon: TrendingUp, title: "Farmer Portal", desc: "Transparent earnings & reports" }
                ].map((f, i) => (
                  <div key={i} className="bg-[#0f0f0f] rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <f.icon className="w-4 h-4 text-blue-400" />
                      <span className="text-white font-medium text-sm">{f.title}</span>
                    </div>
                    <p className="text-gray-400 text-xs">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#151515]">
                <div>
                  <div className="text-xl font-semibold text-white">₹999</div>
                  <div className="text-xs text-gray-500">per month / location</div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-[#0d0d0d] text-sm py-2 px-4">Request Demo</Button>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* EduFly block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12"
        >
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-[#0b0b0b]/70 to-[#0b0b0b]/60 border border-[#171717] rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-inner">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">EduFly</h3>
                  <p className="text-orange-400 text-xs">Enterprise School ERP & Learning Platform</p>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-4">
                A single-pane admin platform for student lifecycle, curriculum, assessments and parent engagement — built for security, compliance and scale.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { icon: Calendar, title: "Automated Attendance", desc: "RFID / Geo-fence & smart rules" },
                  { icon: BookOpen, title: "LMS Integration", desc: "Live classes, assessments & analytics" },
                  { icon: Users, title: "Parent Portal", desc: "Two-way communication & fee receipts" },
                  { icon: BarChart3, title: "Analytics", desc: "Custom reports & insights" }
                ].map((f, i) => (
                  <div key={i} className="bg-[#0f0f0f] rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <f.icon className="w-4 h-4 text-orange-400" />
                      <span className="text-white font-medium text-sm">{f.title}</span>
                    </div>
                    <p className="text-gray-400 text-xs">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#151515]">
                <div>
                  <div className="text-xl font-semibold text-white">₹499</div>
                  <div className="text-xs text-gray-500">per month / seat</div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-[#0d0d0d] text-sm py-2 px-4">Request Demo</Button>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 px-4">Get Started</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="max-w-[360px] w-full scale-150">
              <Image
                src="./macbook.png"
                alt="EduFly MacBook Mock"
                width={720}
                height={480}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
