"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="order-2 lg:order-1"
          >
            <motion.h2
              variants={fadeIn("right", 0.1)}
              className="text-3xl md:text-4xl font-bold gradient-text mb-6"
            >
              About SocialFly AI
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.2)}
              className="text-lg text-muted-foreground mb-6"
            >
              At SocialFly AI, we harness the power of artificial intelligence to deliver SaaS solutions that transform how businesses operate. Our advanced analytics and automation tools provide actionable insights, optimize workflows, and drive measurable growth.
            </motion.p>
            <motion.p
              variants={fadeIn("right", 0.3)}
              className="text-lg text-muted-foreground mb-8"
            >
              We&apos;re here to simplify complexity and empower you with data-driven strategies. Partner with us to unlock your business&apos;s full potential with AI innovation.
            </motion.p>
            <motion.div variants={fadeIn("right", 0.4)}>
              <Link href="/about">
                <Button variant="secondary" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("left", 0.3)}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-1 overflow-hidden">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Team collaboration"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}