"use client";

import React from "react";
import Image from "next/image"; // Re-import if needed for your setup
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Search,
  BarChart3,
  Users,
} from "lucide-react";

const Hero = () => {
  const whatsappRedirect = () => {
    window.open(
      "https://wa.me/918977055093?text=Hi, I want to grow my business with AI strategies.",
      "_blank",
    );
  };

  // Animation variants for standard entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Floating animation for the marketing icons
  const floatAnimation = (delay = 100) => ({
    y: [0, -25, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  });

  const marketingIcons = [
    { icon: TrendingUp, color: "text-slate-500", label: "Lead Gen", delay: 0 },
    { icon: Search, color: "text-slate-500", label: "SEO Focus", delay: 1.5 },
    {
      icon: BarChart3,
      color: "text-amber-500",
      label: "ROI Analytics",
      delay: 3,
    },
    {
      icon: Users,
      color: "text-purple-500",
      label: "Social Reach",
      delay: 4.5,
    },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#FFFFFF]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 w-fit"
            >
              <Sparkles size={16} className="text-slate-900" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                AI-Powered Digital Growth
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.1] tracking-tight"
            >
              Scale your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">
                Digital Legacy.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-500 max-w-xl leading-relaxed"
            >
              Empowering global brands with high-performance web solutions and
              AI-driven marketing strategies. We turn complex challenges into
              seamless digital experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={whatsappRedirect}
                className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <MessageCircle size={22} className="text-slate-400" />
                Schedule Consultation
              </button>

              <button className="flex items-center justify-center gap-2 px-8 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:border-slate-900 transition-all">
                View Portfolio
                <ArrowRight size={20} />
              </button>
            </motion.div>

            {/* Micro Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 mt-4"
            >
              {["4+ Years Experience", "80+ Clients", "150+ Projects"].map(
                (text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-400"
                  >
                    <CheckCircle2 size={16} className="text-slate-900" />
                    {text}
                  </div>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* New Visual Side: Image + Floating Marketing Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="relative hidden lg:block h-[600px]" // Fixed height container
          >
            {/* Main Image Container */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative w-[450px] h-[550px]  rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden p-2">
                <Image
                  src="/digital_marketing_11.jpg"
                  alt="Digital Marketing Dashboard Showcase"
                  fill
                  priority
                  className="object-cover rounded-[32px]"
                  
                />
                {/* Clean overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-[32px]" />
              </div>
            </div>

            {/* Floating Marketing Icons (Distributed) */}

            {/* Top Left - Lead Gen */}
            <motion.div
              animate={floatAnimation(0)}
              className="absolute top-20 left-10 z-20 flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-slate-100"
            >
              <TrendingUp className="text-green-500" size={20} />
              <span className="text-sm font-bold text-slate-900">
                Lead Generation
              </span>
            </motion.div>

            {/* Top Right - SEO */}
            <motion.div
              animate={floatAnimation(1.5)}
              className="absolute top-10 right-10 z-20 flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-slate-100"
            >
              <Search className="text-blue-500" size={20} />
              <span className="text-sm font-bold text-slate-900">
                SEO Focus
              </span>
            </motion.div>

            {/* Bottom Right - ROI */}
            <motion.div
              animate={floatAnimation(3)}
              className="absolute bottom-32 right-0 z-20 flex flex-col items-center gap-1 p-4 bg-slate-900 rounded-3xl shadow-xl"
            >
              <BarChart3 className="text-amber-400" size={28} />
              <span className="text-xs font-bold text-white tracking-wide">
                ROI
              </span>
            </motion.div>

            {/* Bottom Left - Social */}
            <motion.div
              animate={floatAnimation(4.5)}
              className="absolute bottom-20 left-0 z-20 flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-slate-100"
            >
              <Users className="text-purple-500" size={20} />
              <span className="text-sm font-bold text-slate-900">
                Social Expansion
              </span>
            </motion.div>

            {/* Subtle Background Geometric accents (replacing the previous accents) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-slate-100 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
