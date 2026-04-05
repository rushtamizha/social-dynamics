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
  // --- TECH & SAAS (Silicon Valley / Seattle) ---
  {
    name: "Marcus Thorne",
    role: "VP of Engineering, CloudScale AI (San Francisco)",
    comment: "Finding a MERN stack partner who understands scalable architecture is rare. Social Dynamics delivered our MVP ahead of schedule with incredibly clean, documented code.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Stealth Stealth SaaS (Austin)",
    comment: "The Next.js performance optimization they performed on our platform was a game-changer. Our Core Web Vitals are now in the green, and our organic conversions have spiked 35%.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
  },

  // --- REAL ESTATE & PROPTCH (New York / Miami) ---
  {
    name: "David Sterling",
    role: "Principal, Sterling Heights Realty (NYC)",
    comment: "Their AI lead generation funnel is the most efficient I've seen in my 20 years in Manhattan real estate. We're getting high-intent buyers without the usual cold-calling grind.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "CEO, LuxStay Rentals (Miami)",
    comment: "The SEO strategy for our luxury rental portfolio was flawless. We're now outranking major national competitors for localized 'high-end' keywords.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
  },

  // --- HEALTHCARE & BIOTECH (Boston / San Diego) ---
  {
    name: "Dr. James Wilson",
    role: "Director, Boston Health Systems",
    comment: "The HIPAA-compliant patient portal Social Dynamics developed is both secure and incredibly user-friendly. Their technical depth is impressive.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Linda Chen",
    role: "Marketing Director, BioPure Labs",
    comment: "Exceptional content marketing. They turned our complex technical whitepapers into engaging, SEO-optimized blog content that drives real B2B leads.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
  },

  // --- E-COMMERCE & DTC (Los Angeles / Chicago) ---
  {
    name: "Chloe Vonn",
    role: "Founder, Vonn Beauty (LA)",
    comment: "The Meta Ads strategy Social Dynamics executed for our spring launch resulted in a 4.5x ROAS. They are experts at scaling DTC brands quickly.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Robert Black",
    role: "Operations, GearBox Supply (Chicago)",
    comment: "Seamless Shopify integration and custom app development. They solved our inventory syncing issues that three other agencies couldn't fix.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
  },

  // --- LEGAL & FINANCIAL SERVICES (Charlotte / DC) ---
  {
    name: "Jonathan Wright",
    role: "Managing Partner, Wright & Co Law",
    comment: "In the legal world, reputation is everything. Their ORM (Online Reputation Management) strategy helped us clean up our digital footprint and build massive trust.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Sarah Miller",
    role: "CFO, Miller Financial Group",
    comment: "The automation tools they built for our client onboarding have saved us hundreds of hours in manual data entry. Truly an ROI-positive investment.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop"
  },

  // --- PROFESSIONAL SERVICES & CONSULTING ---
  {
    name: "Kevin Hart",
    role: "Founder, Hart Strategy Group",
    comment: "Social Dynamics isn't just an agency; they are a growth partner. Their high-end web design gave us the premium look we needed to close Fortune 500 clients.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Emily Watson",
    role: "Head of Growth, TalentSource HR",
    comment: "Their LinkedIn automation and lead scoring system revolutionized our recruitment pipeline. We're now reaching the top 1% of talent effortlessly.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop"
  },

  // --- HOME SERVICES & FRANCHISE ---
  {
    name: "Bill Thompson",
    role: "Owner, Precision Plumbing (Texas)",
    comment: "Our Google Local Services Ads are finally working. Social Dynamics optimized our profile and now our phones don't stop ringing during peak hours.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Stacy Lane",
    role: "CEO, CleanSlate Franchises",
    comment: "Managing 15 different local SEO profiles was a nightmare until we partnered with Social Dynamics. Their dashboard makes tracking performance simple.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
  },

  // --- NON-PROFIT & PUBLIC SECTOR ---
  {
    name: "Dr. Rachel Green",
    role: "Director, OceanGuard Foundation",
    comment: "The donor management system and custom blog they built helped us increase our annual fundraising goals by 25% this year.",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&h=200&auto=format&fit=crop"
  },

  // --- ADDITIONAL US PROFESSIONALS ---
  {
    name: "Alex Reed",
    role: "Creative Director, Vivid Media (Portland)",
    comment: "Their video scripting and content strategy have given our YouTube channel the professional edge we were missing. Engagement is up across the board.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Monica G.",
    role: "Founder, The G-Suite Consulting",
    comment: "Technical SEO was a black box to me until I worked with this team. They explained the 'why' and delivered the 'how'. Brilliant work.",
    image: "https://images.unsplash.com/photo-1531746020798-e7953e3e83b8?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Thomas Drake",
    role: "CTO, Drake FinTech",
    comment: "Security and speed were our top priorities. They built our financial dashboard using Next.js with military-grade encryption and sub-second load times.",
    image: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Sophia Rossi",
    role: "Owner, Rossi Interior Design",
    comment: "The portfolio site they built is a work of art. It’s won us several high-end residential contracts in the first month alone.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Greg Stevens",
    role: "Marketing Manager, Peak Performance",
    comment: "The email automation sequences Social Dynamics built have a 45% open rate. Our lead nurturing is now completely hands-off.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&h=200&auto=format&fit=crop"
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