"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { products } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ProductsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn("up", 0.1)}
            className="text-3xl md:text-4xl font-bold gradient-text mb-4"
          >
            Our Products
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-12"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3)}
              className="flex flex-col lg:flex-row gap-8 items-center"
            >
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <Card className="overflow-hidden border-0 shadow-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] object-cover"
                  />
                </Card>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <Link href="/products">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}