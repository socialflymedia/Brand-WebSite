"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Squares from './squares';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "This product has completely transformed how we approach our business processes. The level of innovation and attention to detail is absolutely remarkable."
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "CTO, InnovateLab",
      company: "InnovateLab Inc.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I've worked with many solutions in my career, but this stands out for its exceptional quality and seamless integration. Truly game-changing."
    },
    {
      id: 3,
      name: "Emily Zhang",
      role: "Product Manager, DataVision",
      company: "DataVision Analytics",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The user experience is phenomenal. Our team adoption rate was 100% within the first week. It's intuitive, powerful, and beautifully designed."
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder, StartupNext",
      company: "StartupNext Ventures",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Outstanding support and incredible results. This solution has helped us scale faster than we ever imagined possible. Highly recommended."
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Director of Operations",
      company: "GlobalTech Corp",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The ROI has been incredible. We've seen a 300% improvement in efficiency and our customers absolutely love the enhanced experience."
    },
    {
      id: 6,
      name: "Alex Johnson",
      role: "VP Engineering",
      company: "CloudFirst Systems",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Elegant, powerful, and reliable. This is exactly what we needed to take our platform to the next level. The technical excellence is unmatched."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor='rgba(255, 255, 255, 0.1)'
          hoverFillColor='rgba(255, 255, 255, 0.05)'
        />
      </div>

      {/* Gradient Overlay with Orange */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-orange-900/20 to-black/90"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Quote className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-white/80 tracking-wide uppercase">
              What Our Clients Say
            </span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Loved by{' '}
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and innovators 
            have to say about their experience with our platform.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="w-full max-w-7xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <ChevronLeft className="w-6 h-6 mx-auto group-hover:-translate-x-0.5 transition-transform" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <ChevronRight className="w-6 h-6 mx-auto group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`group relative transform transition-all duration-700 ${
                    index === 1 
                      ? 'scale-105 z-20' 
                      : index === 0 
                        ? 'scale-95 md:-rotate-2 opacity-80' 
                        : 'scale-95 md:rotate-2 opacity-80'
                  }`}
                >
                  {/* Card with Orange Theme */}
                  <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-2 group-hover:border-white/30">
                    
                    {/* Quote Icon - Orange */}
                    <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6 mt-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-white/90 text-lg leading-relaxed mb-8 min-h-[120px]">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-white/60 text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-orange-300 text-sm font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Hover Glow Effect - Orange */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots - Orange */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-orange-400 to-red-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA - Orange */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 cursor-pointer">
            <span>Join Our Happy Customers</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;