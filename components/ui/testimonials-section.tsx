"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-muted/30">
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
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Hear from businesses transformed by our AI solutions
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: index === current ? 1 : 0,
                x: index === current ? 0 : 100,
              }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`${
                index === current ? "block" : "hidden"
              } bg-card rounded-lg p-8 shadow-lg relative min-h-[300px] flex flex-col justify-between`}
            >
              <div>
                <div className="text-4xl text-primary/20 font-serif absolute top-4 left-4">"</div>
                <p className="text-lg text-card-foreground mb-8 relative z-10 mt-8">
                  {testimonial.content}
                </p>
              </div>
              <div className="flex items-center mt-4">
                <Avatar className="h-12 w-12 mr-4 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full mx-1 transition-colors ${
                  index === current
                    ? "bg-primary"
                    : "bg-primary/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}