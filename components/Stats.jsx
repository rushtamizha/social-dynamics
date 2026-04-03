"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, Clock, CheckCircle, Users } from "lucide-react";

const stats = [
  {
    label: "Years of Excellence",
    value: "4",
    suffix: "+",
    icon: <Plus size={20} className="text-slate-400" />,
    description: "Proven industry track record.",
    waMsg: "I'm looking for an experienced agency with a 4+ year track record."
  },
  {
    label: "Global Clients",
    value: "80",
    suffix: "+",
    icon: <Users size={20} className="text-slate-400" />,
    description: "Trusted by diverse businesses.",
    waMsg: "I'd like to join your 80+ happy clients list."
  },
  {
    label: "Projects Delivered",
    value: "150",
    suffix: "+",
    icon: <CheckCircle size={20} className="text-slate-400" />,
    description: "Successful digital deployments.",
    waMsg: "I want to start a new project with you."
  },
  {
    label: "Hours of Support",
    value: "19",
    suffix: "K+",
    icon: <Clock size={20} className="text-slate-400" />,
    description: "Dedicated technical assistance.",
    waMsg: "I'm interested in your long-term support plans."
  }
];

const Stats = () => {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/918977055093?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleWhatsApp(stat.waMsg)}
              className="group cursor-pointer p-6 rounded-[24px] hover:bg-slate-50 transition-all duration-500 border border-transparent hover:border-slate-100"
            >
              <div className="flex flex-col gap-2">
                {/* Value & Icon */}
                <div className="flex items-baseline gap-1">
                  <motion.span 
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
                    className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-2xl md:text-3xl font-bold text-slate-400">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <div className="space-y-1 mt-2">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 flex items-center gap-2">
                    {stat.label}
                    <div className="w-0 group-hover:w-8 h-[2px] bg-slate-900 transition-all duration-500" />
                  </h3>
                  <p className="text-xs font-medium text-slate-400 group-hover:text-slate-500 transition-colors">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;