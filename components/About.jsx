"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Zap, Target } from "lucide-react";

const About = () => {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/918977055093?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const pillars = [
    {
      icon: <Target className="text-slate-900" size={20} />,
      title: "Strategic Lead Maxima",
      desc: "Innovative AI-driven strategies to outperform market rivals."
    },
    {
      icon: <Zap className="text-slate-900" size={20} />,
      title: "Rapid Market Force",
      desc: "4+ years of industry-leading growth and technical excellence."
    },
    {
      icon: <ShieldCheck className="text-slate-900" size={20} />,
      title: "Comprehensive Solutions",
      desc: "From SEO to custom Web Design, built for commercial success."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">About Social Dynamics</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight"
            >
              Your Trusted Digital <br />
              <span className="text-slate-400 font-medium italic">Marketing Partner.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 leading-relaxed max-w-xl"
            >
              Based in Bangalore, India, we are a leading force in the digital landscape. 
              Our mission is to guide organizations of all sizes toward high-performance 
              online strategies, ensuring they maximize leads and outperform competitors 
              through innovative AI-powered marketing.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={() => handleWhatsApp("Hi, I'd like a free quote for my project.")}
                className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold transition-all hover:bg-slate-800 active:scale-95"
              >
                Get Free Quote
                <MessageCircle size={18} className="text-slate-400 group-hover:rotate-12 transition-transform" />
              </button>
              
              <button 
                className="flex items-center gap-2 px-8 py-4  border-2 border-slate-200 text-slate-900 rounded-2xl font-bold hover:border-slate-500 hover:border-2 transition-all bg-slate-50    justify-center  group-hover:bg-slate-900 group-hover:text-white  duration-500 "
              >
                Know More
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

          {/* Right Side: Visual Pillars */}
          <div className="lg:w-1/2 relative">
            {/* Background Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 rounded-full blur-3xl -z-10 opacity-60" />

            <div className="grid gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: -10 }}
                  className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] flex items-start gap-6 group cursor-default"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900   transition-all duration-500 shadow-sm">
                    {pillar.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">{pillar.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;