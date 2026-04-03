"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BadgePercent, 
  Award, 
  Layers, 
  TrendingUp, 
  ArrowUpRight 
} from "lucide-react";

const reasons = [
  {
    title: "Budget-Friendly Solutions",
    description: "Affordable digital marketing strategies in Bangalore without compromising on enterprise-grade quality.",
    icon: <BadgePercent size={24} />,
    waMsg: "I'm looking for budget-friendly digital marketing solutions."
  },
  {
    title: "Proven Expertise",
    description: "Years of hands-on experience as a top-tier agency delivering measurable growth for diverse industries.",
    icon: <Award size={24} />,
    waMsg: "I want to work with an expert team for my digital growth."
  },
  {
    title: "Comprehensive Services",
    description: "Your preferred choice for end-to-end solutions, covering everything from SEO to high-end web design.",
    icon: <Layers size={24} />,
    waMsg: "Tell me about your end-to-end digital marketing services."
  },
  {
    title: "Results-Driven",
    description: "We don't just deliver reports; we deliver success. Committed to hitting your specific business KPIs.",
    icon: <TrendingUp size={24} />,
    waMsg: "I want to start a results-driven marketing campaign."
  }
];

const WhyChooseUs = () => {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/918977055093?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="whyus"  className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400"
          >
            Why Partner With Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 tracking-tight"
          >
            The Social Dynamics <span className="text-slate-400">Advantage.</span>
          </motion.h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleWhatsApp(item.waMsg)}
              className="group relative p-10 bg-white border border-slate-100 rounded-[32px] hover:border-slate-900 transition-all duration-500 cursor-pointer flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Icon Container with the hover color change logic */}
              <div className="p-4 bg-slate-50 rounded-2xl text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 flex-shrink-0">
                {item.icon}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <ArrowUpRight 
                    size={20} 
                    className="text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                  />
                </div>
                <p className="text-slate-500 leading-relaxed text-md max-w-sm">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decoration - Subtle Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-slate-900 group-hover:w-1/2 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;