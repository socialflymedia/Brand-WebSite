"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Sparkles, Award, Globe, Link } from 'lucide-react';
import Aurora from './Aurora';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  { 
    title: 'Strategic Design Excellence', 
    description: 'Award-winning design systems that elevate brand presence and drive conversion.',
    icon: <Award className="w-5 h-5" />
  },
  { 
    title: 'Enterprise-Grade Performance', 
    description: 'Optimized architectures delivering sub-second load times at global scale.',
    icon: <Globe className="w-5 h-5" />
  },
  { 
    title: 'Innovation Partnership', 
    description: 'End-to-end product development with Fortune 500 quality standards.',
    icon: <Sparkles className="w-5 h-5" />
  }
];

const metrics = [
  { value: '25+', label: 'Premium Projects', sublabel: 'Delivered globally' },
  { value: '98%', label: 'Client Retention', sublabel: 'Long-term partnerships' },
  { value: '24h', label: 'Response Time', sublabel: 'Executive support' },
  { value: '100%', label: 'On-Time Delivery', sublabel: 'Every Project' }
];

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent py-24 lg:py-32">
      {/* Subtle Aurora background with Orange colors */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Aurora colorStops={["#f97316","#fb923c","#f97316"]} amplitude={0.6} blend={0.35} />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-red-900/10" />
      </div>

      {/* Floating orbs for premium effect - Orange theme */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-orange-500/15 to-amber-500/15 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-r from-red-500/15 to-orange-500/15 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/10">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              <span className="text-white/90 font-medium tracking-wide">ABOUT SOCIALFLY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] text-white max-w-5xl mx-auto">
              We Are Digital 
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-red-400 bg-clip-text text-transparent"> Innovators</span>
              <br />Shaping Tomorrow&apos;s Web
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Founded on the belief that exceptional digital experiences drive business success, we combine strategic thinking with cutting-edge technology to deliver solutions that don&apos;t just meet expectations—they redefine them.
            </p>

           
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Features Card - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-to-br from-white/8 to-white/4 border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 h-full">
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">Why Industry Leaders Choose Us</h3>
                </div>
                
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  We don&apos;t just build products—we architect digital ecosystems that scale with your ambitions and exceed market expectations.
                </p>

                <div className="grid grid-cols-1 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="group flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">{feature.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                        <p className="text-white/70 leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-orange-400" />
                    <span className="text-white/80 font-medium">Trusted by Fortune 500 companies worldwide</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/10 group"
                  >
                    Explore Case Studies
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Metrics Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-white/6 to-white/3 border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">Impact by Numbers</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="text-2xl lg:text-3xl font-black text-white mb-1">{metric.value}</div>
                      <div className="text-xs font-semibold text-white/90 mb-1">{metric.label}</div>
                      <div className="text-xs text-white/60">{metric.sublabel}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card with Orange theme */}
            <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-500/20 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-6 lg:p-8 text-center">
                <h4 className="text-xl font-bold text-white mb-3">Ready to Scale?</h4>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Join the ranks of industry leaders who&apos;ve transformed their digital presence with our expertise.
                </p>
                <a href="/contact">
                <Button 
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Begin Your Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Trust Indicators with Orange theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-orange-400" />
              <span className="text-white/80 text-sm font-medium">Industry Recognition</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber-400" />
              <span className="text-white/80 text-sm font-medium">Global Reach</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-white/80 text-sm font-medium">Innovation Leaders</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
