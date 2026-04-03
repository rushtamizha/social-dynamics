"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Code2, 
  MapPin, 
  Share2, 
  UserCheck, 
  Search, 
  MessageCircle,
  ArrowUpRight
} from "lucide-react";

const expertiseAreas = [
  {
    title: "Lead Generation",
    description: "Fuel your growth with a strategic influx of quality leads, making us your trusted partner for digital success.",
    icon: <Target size={24} />,
    waMsg: "Hi, I'm interested in your Lead Generation services."
  },
  {
    title: "Web Design & Development",
    description: "Enhance your presence with expert MERN & Next.js solutions tailored to captivate and convert visitors.",
    icon: <Code2 size={24} />,
    waMsg: "Hi, I want to discuss a new Website Design project."
  },
  {
    title: "GMB Optimization",
    description: "Boost local visibility and stand out to potential customers with expert Google My Business management.",
    icon: <MapPin size={24} />,
    waMsg: "Hi, I need help with Google My Business Optimization."
  },
  {
    title: "Social Media Marketing",
    description: "Harness the power of social platforms with high-impact strategies that drive measurable results.",
    icon: <Share2 size={24} />,
    waMsg: "Hi, I'm looking for Social Media Marketing services."
  },
  {
    title: "Social Media Management",
    description: "Expert management that ensures your brand's voice shines across all digital social ecosystems.",
    icon: <UserCheck size={24} />,
    waMsg: "Hi, I'd like to outsource my Social Media Management."
  },
  {
    title: "Commercial Keyword SEO",
    description: "Dominate search rankings and outperform rivals with our specialized commercial-intent SEO strategies.",
    icon: <Search size={24} />,
    waMsg: "Hi, I want to rank for commercial keywords with SEO."
  },
  {
    title: "WhatsApp Marketing",
    description: "Unlock direct communication potential to boost engagement and drive conversions effortlessly.",
    icon: <MessageCircle size={24} />,
    waMsg: "Hi, I'm interested in your WhatsApp Marketing solutions."
  }
];

const Expertise = () => {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/918977055093?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="expertise" className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Centered Header Area */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-slate-200" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Our Expertise Areas</span>
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

        {/* Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onClick={() => handleWhatsApp(item.waMsg)}
              className="group p-10 bg-white border border-slate-100 rounded-[40px] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[380px]"
            >
              <div className="space-y-8">
                {/* Icon Box - Centered in Card */}
                <div className="w-16 h-16 bg-slate-50 rounded-[22px] flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-sm">
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

              {/* Enhanced Interactive Footer */}
              <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">
                  Learn more
                </span>
                <motion.div 
                   whileHover={{ rotate: 45 }}
                   className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;