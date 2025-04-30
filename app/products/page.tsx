"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h1
            variants={fadeIn("up", 0.1)}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Innovative AI-powered solutions designed to transform your business
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.3)}
          className="mb-20"
        >
          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 mix-blend-overlay"></div>
                <Image
                priority
                src="/lpb.png"
                alt="EduFly"
                className="w-full h-[200px] object-cover opacity-100"
                width={100}
                height={100}
                />
                <div className="absolute inset-0 from-background/100 to-transparent/0"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black dark:text-white">EduFly</h2>
                <p className="text-black/80 dark:text-white/80 text-lg mb-4">Smart School ERP Solution</p>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-semibold mb-4">Transform Your Educational Institution</h3>
                  <p className="text-muted-foreground mb-6">
                    EduFly is an all-in-one School ERP solution designed to transform the way educational institutions operate. From seamless student enrollment to efficient staff management, brings every aspect of school administration under one unified platform, streamlining processes like never before.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    With exciting and interactive activities crafted especially for kids, EduFly makes learning not just effective but fun too! Say goodbye to manual tasks and complex workflows—EduFly automates administrative processes, tracks student performance, and manages extracurricular programs effortlessly.
                  </p>
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    <li>Centralized student and staff database management</li>
                    <li>Automated attendance tracking system</li>
                    <li>Comprehensive academic performance analytics</li>
                    <li>Integrated communication tools for parents and teachers</li>
                    <li>Financial management with fee tracking and reporting</li>
                    <li>Interactive learning tools for enhanced student engagement</li>
                  </ul>
                  <div className="mt-8">
                    <Link href="/contact">
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        Request a Demo
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                  <div className="space-y-4">
                    <div className="bg-card p-4 rounded-md shadow-sm">
                      <h4 className="font-medium mb-2">Time Efficiency</h4>
                      <p className="text-sm text-muted-foreground">Automate routine tasks to free up valuable time for educators and administrators.</p>
                    </div>
                    <div className="bg-card p-4 rounded-md shadow-sm">
                      <h4 className="font-medium mb-2">Enhanced Communication</h4>
                      <p className="text-sm text-muted-foreground">Foster stronger connections between schools, parents, and students.</p>
                    </div>
                    <div className="bg-card p-4 rounded-md shadow-sm">
                      <h4 className="font-medium mb-2">Data-Driven Decisions</h4>
                      <p className="text-sm text-muted-foreground">Gain valuable insights with comprehensive analytics and reporting.</p>
                    </div>
                    <div className="bg-card p-4 rounded-md shadow-sm">
                      <h4 className="font-medium mb-2">Simplified Administration</h4>
                      <p className="text-sm text-muted-foreground">Streamline operations with integrated workflows and centralized management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.4)}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Coming Soon</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're constantly working on new AI-powered products to help businesses thrive in the digital age. Stay tuned for our upcoming releases!
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Get Early Access
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}