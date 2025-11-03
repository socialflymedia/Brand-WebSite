"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Code,
  Megaphone,
  Palette,
  Brain,
  BarChart,
  Shield,
  Database,
  Layers,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Users,
  Briefcase,
  PenTool,
  FileText,
  ArrowRight
} from "lucide-react";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  href: string;
};

// Compact services data - all 16 services
const services: Service[] = [
  {
    id: 1,
    title: "AI & Automation",
    description: "Enterprise AI solutions & intelligent automation",
    icon: Brain,
    color: "from-purple-500 to-purple-600",
    href: "/services/ai-automation"
  },
  {
    id: 2,
    title: "Blockchain & Web3",
    description: "Smart contracts & decentralized solutions",
    icon: Layers,
    color: "from-blue-500 to-blue-600",
    href: "/services/blockchain"
  },
  {
    id: 3,
    title: "Cloud Architecture",
    description: "Scalable cloud infrastructure & DevOps",
    icon: Globe,
    color: "from-cyan-500 to-cyan-600",
    href: "/services/cloud"
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Advanced security & threat protection",
    icon: Shield,
    color: "from-red-500 to-red-600",
    href: "/services/security"
  },
  {
    id: 5,
    title: "Data & Analytics",
    description: "Big data platforms & predictive insights",
    icon: Database,
    color: "from-green-500 to-green-600",
    href: "/services/data-analytics"
  },
  {
    id: 6,
    title: "Digital Transformation",
    description: "End-to-end business modernization",
    icon: TrendingUp,
    color: "from-indigo-500 to-indigo-600",
    href: "/services/digital-transformation"
  },
  {
    id: 7,
    title: "Web Development",
    description: "Modern web apps & progressive solutions",
    icon: Code,
    color: "from-orange-500 to-orange-600",
    href: "/services/web-development"
  },
  {
    id: 8,
    title: "Mobile Apps",
    description: "iOS, Android & cross-platform apps",
    icon: Smartphone,
    color: "from-pink-500 to-pink-600",
    href: "/services/mobile-apps"
  },
  {
    id: 9,
    title: "E-commerce",
    description: "Online stores & marketplace solutions",
    icon: ShoppingCart,
    color: "from-yellow-500 to-yellow-600",
    href: "/services/ecommerce"
  },
  {
    id: 10,
    title: "Digital Marketing",
    description: "SEO, PPC & social media marketing",
    icon: Megaphone,
    color: "from-teal-500 to-teal-600",
    href: "/services/digital-marketing"
  },
  {
    id: 11,
    title: "UI/UX Design",
    description: "User-centered design & prototyping",
    icon: Palette,
    color: "from-violet-500 to-violet-600",
    href: "/services/ui-ux-design"
  },
  {
    id: 12,
    title: "Brand Strategy",
    description: "Brand identity & positioning",
    icon: PenTool,
    color: "from-rose-500 to-rose-600",
    href: "/services/brand-strategy"
  },
  {
    id: 13,
    title: "ERP Solutions",
    description: "Enterprise resource planning systems",
    icon: Briefcase,
    color: "from-amber-500 to-amber-600",
    href: "/services/erp"
  },
  {
    id: 14,
    title: "CRM Systems",
    description: "Customer relationship management",
    icon: Users,
    color: "from-emerald-500 to-emerald-600",
    href: "/services/crm"
  },
  {
    id: 15,
    title: "SaaS Development",
    description: "Scalable software-as-a-service platforms",
    icon: BarChart,
    color: "from-sky-500 to-sky-600",
    href: "/services/saas"
  },
  {
    id: 16,
    title: "Content Marketing",
    description: "Strategic content creation & distribution",
    icon: FileText,
    color: "from-lime-500 to-lime-600",
    href: "/services/content"
  }
];

// Compact Service Card
const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const Icon = service.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={service.href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block"
    >
      <div className="relative h-full p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300">
        {/* Hover glow */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(249,115,22,0.1), transparent 70%)`
          }}
        />

        {/* Icon */}
        <div className={`relative inline-flex p-2.5 rounded-lg bg-gradient-to-r ${service.color} mb-3`}>
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-orange-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed">
          {service.description}
        </p>

        {/* Arrow indicator on hover */}
        <motion.div 
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
          animate={{ x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-4 h-4 text-orange-400" />
        </motion.div>
      </div>
    </motion.a>
  );
};

// Main Compact Services Section
export default function CompactServicesSection(): JSX.Element {
  return (
    <section className="relative py-16 lg:py-20 bg-black overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-gray-900/50" />
      
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-3"
          >
            Our Complete{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Service Suite
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            From enterprise solutions to digital marketing, we deliver excellence across all domains
          </motion.p>
        </div>

        {/* Compact Grid - 4x4 on desktop, responsive on smaller screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-gray-400 text-sm mb-4">
            Need something specific? We create custom solutions too.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all">
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}