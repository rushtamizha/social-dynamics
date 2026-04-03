"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const reviews = [
  {
    name: "Rajesh Kumar",
    position: "CEO, AK Tours & Travels",
    comment: "The AI strategies implemented by Social Dynamics transformed our lead generation. We saw a 40% increase in bookings within the first three months of launching our new platform.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Meera Reddy",
    position: "Marketing Head, GMR Group",
    comment: "Exceptional UI/UX work. Our bounce rate dropped significantly after the redesign. The team understands enterprise-level requirements perfectly.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Suresh V.",
    position: "Founder, Kleanly",
    comment: "From SEO to custom development, Social Dynamics is our go-to partner in Bangalore. They don't just build websites; they build digital legacies.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-30 bg-white border-y border-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-3 bg-slate-50 rounded-2xl text-slate-900 mb-6"
          >
            <Quote size={24} fill="currentColor" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Trusted by the <br /> 
            <span className="text-slate-400">visionaries of industry.</span>
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative group">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            navigation={{
              nextEl: '.next-btn',
              prevEl: '.prev-btn',
            }}
            className="testimonial-swiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center px-4 md:px-20">
                  {/* Stars */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400" fill="#fbbf24" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed italic mb-10">
                    "{review.comment}"
                  </blockquote>

                  {/* Author Profile */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-4 ring-slate-50">
                      <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{review.name}</h4>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{review.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between z-20 pointer-events-none">
            <button className="prev-btn p-4 rounded-full border border-slate-100 bg-white text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all pointer-events-auto shadow-sm">
              <ArrowLeft size={20} />
            </button>
            <button className="next-btn p-4 rounded-full border border-slate-100 bg-white text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all pointer-events-auto shadow-sm">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Custom Pagination Container */}
        <div className="custom-pagination flex justify-center mt-12 gap-2" />
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #e2e8f0 !important;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #0f172a !important;
          width: 28px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;