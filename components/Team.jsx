"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MessageCircleCheck } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Eswaran",
    role: "Founder & Full-Stack Developer",
    experience: "4+ Years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "Expert in MERN stack and AI-driven digital architecture."
  },
  {
    name: "Arun Kumar",
    role: "Lead SEO Strategist",
    experience: "3+ Years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: "Specializing in commercial keyword ranking and local GMB growth."
  },
  {
    name: "Sarah Jen",
    role: "UI/UX Designer",
    experience: "5+ Years",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    bio: "Crafting premium, conversion-focused digital interfaces."
  },
  {
    name: "Vikram S.",
    role: "Marketing Operations",
    experience: "4+ Years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    bio: "Driving automated lead generation and WhatsApp marketing."
  },
];

const Team = () => {
  return (
    <section id="team" className=" bg-white overflow-hidden py-30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">The Innovators</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Meet the minds <br />
            <span className="text-slate-400 font-medium">behind your growth.</span>
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative pt-10 pb-20">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="team-swiper !pb-16"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="group relative bg-white rounded-[32px] border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-100"
                >
                  {/* Image Container */}
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                    />
                    
                    {/* Social Overlay */}
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <button className="p-3 bg-white rounded-full text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                            <MessageCircleCheck size={20} />
                        </button>
                        <button className="p-3 bg-white rounded-full text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                            <MessageCircleCheck size={20} />
                        </button>
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{member.experience} Exp</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">
                        {member.name}
                    </h3>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                        {member.role}
                    </p>
                    <div className="h-[1px] w-full bg-slate-50 mb-4" />
                    <p className="text-slate-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {member.bio}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper Styles for the White Theme */}
      <style jsx global>{`
        .team-swiper .swiper-pagination-bullet {
          background: #cbd5e1 !important;
          opacity: 1;
        }
        .team-swiper .swiper-pagination-bullet-active {
          background: #0f172a !important;
          width: 24px !important;
          border-radius: 5px !important;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Team;