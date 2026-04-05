"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Code2, 
  Target, 
  Share2, 
  BarChart3, 
  Mail, 
  ArrowRight,
  Globe,
  Zap
} from "lucide-react";

const allServices = [
  {
    title: "Performance Digital Marketing",
    slug: "digital-marketing",
    description: "Data-driven multi-channel strategies designed to scale your revenue. We manage high-performance Meta and Google Ads campaigns with a strict focus on ROAS and lowering your Customer Acquisition Cost (CAC).",
    features: ["Paid Search & Social", "Conversion Rate Optimization", "Retargeting Funnels", "Detailed ROI Reporting"],
    icon: <BarChart3 size={24} />,
    tag: "ROI Focused"
  },
  {
    title: "Google Business Profile Optimization",
    slug: "gbp-optimization",
    description: "Dominate the local 'Map Pack'. We optimize your Google Business Profile to drive consistent phone calls and walk-in traffic through review velocity systems and local keyword dominance.",
    features: ["Local Map Ranking", "Review Management AI", "Geo-Tagged Content", "Local Citation Building"],
    icon: <Search size={24} />,
    tag: "Local Dominance"
  },
  {
    title: "Social Media Authority & Growth",
    slug: "social-media",
    description: "We don't just post; we build brand authority. Our team handles high-end content creation, short-form video strategy, and community management to turn followers into loyal brand advocates.",
    features: ["Short-form Video Strategy", "Content Calendars", "Engagement Growth", "Influencer Outreach"],
    icon: <Share2 size={24} />,
    tag: "Brand Equity"
  },
  {
    title: "AI-Powered Lead Generation",
    slug: "lead-generation",
    description: "Fill your pipeline with high-intent prospects on autopilot. We build automated cold outreach infrastructure and lead-scoring systems that deliver qualified appointments directly to your CRM.",
    features: ["Automated LinkedIn/Email", "Lead Scoring Systems", "B2B Database Mining", "Appointment Setting"],
    icon: <Target size={24} />,
    tag: "Sales Ready"
  },
  {
    title: "Conversion-Centric Web Development",
    slug: "web-development",
    description: "High-speed, SEO-optimized websites built with Next.js and the MERN stack. We prioritize Core Web Vitals and mobile-first design to ensure your site turns visitors into customers.",
    features: ["Next.js & React", "High-Speed Architecture", "Mobile-First UI/UX", "SEO Infrastructure"],
    icon: <Code2 size={24} />,
    tag: "Tech Excellence"
  },
  {
    title: "SaaS & Product Engineering",
    slug: "saas-development",
    description: "Transform your business logic into a scalable software product. From MVP development to full-scale SaaS platforms, we build robust, secure, and user-friendly applications.",
    features: ["Custom SaaS Architecture", "Cloud Infrastructure", "API Ecosystems", "Subscription Integration"],
    icon: <Zap size={24} />,
    tag: "Scalable Product"
  },
];



const ServicesPage = () => {
  const handleEmailRedirect = (serviceName) => {
    const email = "team@socialdynamics.cloud";
    const subject = encodeURIComponent(`Inquiry for ${serviceName}`);
    const body = encodeURIComponent(`Hi Social Dynamics,\n\nI am interested in your ${serviceName} services. Please send me more information about your process and pricing.`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* SEO Header Section */}
        <header className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 w-fit mb-6"
          >
            <Zap size={14} className="text-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Expert Solutions</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
            Digital Services to <br />
            <span className="text-slate-400">Scale Your Legacy.</span>
          </h1>
          
          <p className="text-xl text-slate-500 leading-relaxed">
            From technical SEO audits to high-conversion Next.js applications, we provide the full-spectrum of digital growth services for modern brands.
          </p>
        </header>

        {/* Services Listing Grid */}
        <div className="grid gap-8">
          {allServices.map((service, index) => (
            <motion.section
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 md:p-12 bg-white border border-slate-100 rounded-[40px] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Text Content */}
                <div className="lg:w-2/3 space-y-6">
                  <div className="w-16 h-16 text-slate-800 bg-slate-100 rounded-[22px] flex items-center justify-center transition-all duration-500 group-hover:bg-slate-900 group-hover:text-white">
                    {service.icon}
                  </div>
                  
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-slate-500 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-x-8 gap-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm font-bold text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Side */}
                <div className="lg:w-1/3 flex flex-col justify-center items-lg-end">
                  <button
                    onClick={() => handleEmailRedirect(service.title)}
                    className="w-full py-5 px-8 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-100"
                  >
                    Discuss this Project
                    <Mail size={18} />
                  </button>
                  <p className="mt-4 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Response time: ~2 Hours
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Global SEO Footer CTA */}
        <section className="mt-32 p-12 md:p-20 bg-slate-900 rounded-[50px] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Globe size={300} className="text-white" />
          </div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Not sure where to start?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Book a free 15-minute digital strategy audit. We’ll look at your current presence and give you 3 actionable steps.
            </p>
            <button 
              onClick={() => handleEmailRedirect("Strategy Audit")}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-100 transition-all"
            >
              Get Free Strategy Audit
              <ArrowRight size={20} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServicesPage;
