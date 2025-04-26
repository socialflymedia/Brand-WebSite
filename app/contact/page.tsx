"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import ContactSection from "@/components/ui/contact-section";
import { Smartphone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
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
            Get in Touch
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We'd love to hear from you. Contact us using the form below or through our contact details.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.3)}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-card p-6 rounded-lg shadow-sm border flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">socialflymedia2024@gmail.com</p>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+91 8126040011</p>
              <p className="text-muted-foreground">+91 8171254458</p>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Social Media</h3>
              <div className="text-muted-foreground flex space-x-3">
                <a href="https://www.linkedin.com/company/social-flymedia/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/socialflymediaa" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </motion.div>

        <ContactSection />
      </div>
    </div>
  );
}