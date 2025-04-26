"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function AboutPage() {
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
  initial="hidden"
  animate="visible"
  className="text-4xl md:text-5xl font-bold gradient-text mb-6"
>
  About Us
</motion.h1>

<motion.p
  variants={fadeIn("up", 0.2)}
  initial="hidden"
  animate="visible"
  className="text-lg text-muted-foreground max-w-2xl mx-auto"
>
            Transforming businesses through cutting-edge AI solutions
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeIn("right", 0.3)}>
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-1 rounded-lg">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Our team"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", 0.3)}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              At SocialFly AI, our mission is to democratize access to advanced AI technologies for businesses of all sizes. We believe that artificial intelligence should be accessible, understandable, and most importantly, actionable.
            </p>
            <p className="text-muted-foreground">
              We're dedicated to helping our clients navigate the complex world of AI and harness its power to achieve tangible business outcomes. Through our SaaS platforms and analytics tools, we enable organizations to streamline operations, gain valuable insights, and drive sustainable growth.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.4)}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly explore new technologies and methodologies to stay at the forefront of AI development and provide cutting-edge solutions to our clients.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with transparency and honesty in all our interactions, building trust with our clients through reliable service and ethical practices.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-muted-foreground">
                We measure our success by the tangible results we deliver for our clients, focusing on solutions that create meaningful business impact.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.5)}
          className="bg-card p-8 md:p-12 rounded-lg shadow-lg border"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-6">
            Founded in 2024, SocialFly AI emerged from a vision to bridge the gap between advanced AI capabilities and practical business applications. Our founders, experienced in both technology development and business operations, recognized that while AI held tremendous potential, many organizations struggled to implement it effectively.
          </p>
          <p className="text-muted-foreground mb-6">
            Starting with a small team of dedicated AI specialists and software engineers, we developed our first SaaS platform aimed at simplifying data analytics for small to medium-sized businesses. The success of this initial offering led to rapid growth and expansion of our service portfolio.
          </p>
          <p className="text-muted-foreground">
            Today, SocialFly AI serves clients across various industries, from education and healthcare to finance and retail. Our team has grown to include experts in machine learning, data science, software development, and business strategy, all united by a common goal: to make AI accessible, understandable, and impactful for our clients.
          </p>
        </motion.div>
      </div>
    </div>
  );
}