"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  Target,
  Code2,
  MapPin,
  Share2,
  UserCheck,
  Search,
  Mail, // Changed from MessageCircle
  LayoutGrid, // For SaaS products
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const expertiseAreas = [
  {
    title: "Lead Generation",
    description: "Fuel your growth with a strategic influx of quality leads, making us your trusted partner for digital success.",
    icon: <Target size={24} />,
    emailSubject: "Inquiry: Lead Generation Services",
  },
  {
    title: "GBP Optimization",
    description: "Boost local visibility and stand out to potential customers with expert Google My Business management.",
    icon: <MapPin size={24} />,
    emailSubject: "Inquiry: GBP Optimization",
  },
  {
    title: "Social Media Marketing",
    description: "Harness the power of social platforms with high-impact strategies that drive measurable results.",
    icon: <Share2 size={24} />,
    emailSubject: "Inquiry: Social Media Marketing",
  },
  {
    title: "Business Solutions (SaaS)",
    description: "custom sass products for your business need ",
    icon: <UserCheck size={24}  />,
    emailSubject: "Product Inquiry: OmniPost Scheduler",
  },
  {
    title: "Web Design & Development",
    description: "Enhance your presence with expert MERN & Next.js solutions tailored to captivate and convert visitors.",
    icon: <Code2 size={24} />,
    emailSubject: "Inquiry: Web Design & Development",
  },
];

const Expertise = () => {
  const handleEmail = (subject) => {
    const email = "team@socialdynamics.cloud";
    const formattedSubject = encodeURIComponent(subject);
    const body = encodeURIComponent("Hi Team,\n\nI'm interested in this specific solution. Please provide more details on how we can get started.");
    window.location.href = `mailto:${email}?subject=${formattedSubject}&body=${body}`;
  };

  return (
    <section id="expertise" className="py-24 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-slate-200" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              Our Expertise Areas
            </span>
            <div className="w-8 h-[1px] bg-slate-200" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] max-w-3xl"
          >
            Comprehensive digital <br />
            <span className="text-slate-400">solutions for growth.</span>
          </motion.h2>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="relative ">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            grabCursor={true}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ 
              el: '.exp-pagination',
              clickable: true, 
              dynamicBullets: true 
            }}
            navigation={{ nextEl: '.exp-next', prevEl: '.exp-prev' }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="expertise-swiper !pb-20"
          >
            {expertiseAreas.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <motion.div
                  onClick={() => handleEmail(item.emailSubject)}
                  whileHover="hovered"
                  initial={false}
                  className="h-full group p-10 bg-white border border-slate-100 rounded-[40px] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[420px]"
                >
                  <div className="space-y-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-[22px] flex items-center justify-center group-hover:bg-slate-900 text-slate-900 group-hover:text-white transition-all duration-500 shadow-sm">
                      {item.icon}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">
                      Get Started
                    </span>
                    <motion.div
                      variants={{
                        hovered: { rotate: 45, backgroundColor: "#0f172a", color: "#ffffff", borderColor: "#0f172a" }
                      }}
                      className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-900 transition-all"
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-[calc(100%+100px)] -left-[50px] justify-between z-10 pointer-events-none">
            <button className="exp-prev p-4 rounded-full border border-slate-100 bg-white text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all pointer-events-auto shadow-sm">
              <ArrowLeft size={20} />
            </button>
            <button className="exp-next p-4 rounded-full border border-slate-100 bg-white text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all pointer-events-auto shadow-sm">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Pagination container */}
        <div className="exp-pagination flex justify-center items-center h-10 mt-10" />
      </div>

      <style jsx global>{`
        .exp-pagination.swiper-pagination-bullets {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative !important;
          bottom: 0 !important;
        }

        .exp-pagination .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #cbd5e1 !important;
          opacity: 1 !important;
          margin: 0 6px !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .exp-pagination .swiper-pagination-bullet-active {
          background: #0f172a !important;
          width: 35px !important;
          border-radius: 12px !important;
        }
      `}</style>
    </section>
  );
};

export default Expertise;