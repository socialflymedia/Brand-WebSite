"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { services } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive AI-powered solutions tailored for your business needs
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeIn("up", index * 0.1 + 0.3)}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 group">
                <CardHeader>
                  <div className="mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <service.icon size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.5)}
          className="mt-20 bg-card p-8 md:p-12 rounded-lg shadow-lg border"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-muted-foreground mb-6">
                We begin by understanding your business needs, challenges, and goals. Our team works closely with you to identify opportunities where AI can drive significant value.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Strategy</h3>
              <p className="text-muted-foreground">
                Based on our discovery findings, we develop a comprehensive strategy that outlines how AI solutions will be implemented to address your specific requirements.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p className="text-muted-foreground mb-6">
                Our experienced team develops and deploys the AI solutions according to the agreed strategy, ensuring seamless integration with your existing systems.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Optimization</h3>
              <p className="text-muted-foreground">
                We continuously monitor and optimize the performance of our AI solutions to ensure they deliver maximum value and adapt to changing business needs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}