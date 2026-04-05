"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star, ArrowUpRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "CEO, AK Tours & Travels",
    comment: "The AI strategies implemented by Fareworks transformed our lead generation. We saw a 40% increase in bookings within the first three months.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Meera Reddy",
    role: "Marketing Head, GMR Group",
    comment: "Exceptional UI/UX work. Our bounce rate dropped significantly after the redesign. The team understands enterprise-level requirements perfectly.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Suresh V.",
    role: "Founder, Kleanly",
    comment: "From SEO to custom development, Fareworks is our go-to partner in Bangalore. They don't just build websites; they build digital legacies.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Suresh V.",
    role: "Founder, Kleanly",
    comment: "From SEO to custom development, Fareworks is our go-to partner in Bangalore. They don't just build websites; they build digital legacies.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header - Matching Expertise UI */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-slate-200" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Client Success</span>
            <div className="w-8 h-[1px] bg-slate-200" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] max-w-3xl"
          >
            Trusted by the <br />
            <span className="text-slate-400">visionaries of industry.</span>
          </motion.h2>
        </div>

        {/* Slidable Card Style Grid */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            grabCursor={true}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper !pb-20"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="group h-full p-10 bg-white border border-slate-100 rounded-[40px] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col justify-between min-h-[420px]">
                  <div className="space-y-8">
                    {/* Top Row: Profile & Stars */}
                    <div className="flex items-center justify-between">
                        <div className="relative w-16 h-16 bg-slate-50 rounded-[22px] overflow-hidden border border-slate-100 shadow-sm">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                <Quote size={20} className="text-white" />
                            </div>
                        </div>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className="text-amber-400" fill="currentColor" />
                            ))}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                        {item.name}
                        <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">
                            {item.role}
                        </span>
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-[15px] italic">
                        "{item.comment}"
                      </p>
                    </div>
                  </div>

                  {/* Footer - Matching Expertise Action UI */}
                  <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">
                      Full Case Study
                    </span>
                    <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #e2e8f0 !important;
          opacity: 1;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #0f172a !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;