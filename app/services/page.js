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
    title: "Full-Stack Web Development",
    slug: "web-development",
    description: "High-performance applications built with the MERN stack and Next.js. We prioritize core web vitals, mobile-responsiveness, and conversion-centric UI/UX design.",
    features: ["Next.js & React", "E-commerce Solutions", "Custom Admin Panels", "API Integration"],
    icon: <Code2  size={24} />,
  },
  {
    title: "Search Engine Optimization (SEO)",
    slug: "seo-optimization",
    description: "Dominate search rankings with data-driven strategies. We focus on commercial keywords, technical SEO audits, and high-quality backlink building to drive organic growth.",
    features: ["Keyword Research", "On-Page SEO", "Technical Audits", "Link Building"],
    icon: <Search  size={24} />,
  },
  {
    title: "PPC & Google Ads Management",
    slug: "ppc-management",
    description: "Get immediate traffic and ROI with precision-targeted paid search campaigns. We manage your budget to ensure the lowest cost-per-acquisition (CPA).",
    features: ["Search Ads", "Display Remarketing", "Shopping Ads", "Ad Copy Optimization"],
    icon: <BarChart3  size={24} />,
  },
  {
    title: "AI-Powered Lead Generation",
    slug: "lead-generation",
    description: "Stop chasing leads and start closing them. We use AI automation to identify and reach out to your ideal customer profile across Meta and Google Ads.",
    features: ["Meta Ads Management", "Lead Scoring AI", "CRM Integration", "Conversion Tracking"],
    icon: <Target  size={24} />,
  },
  {
    title: "Email & Newsletter Marketing",
    slug: "email-marketing",
    description: "Nurture your leads into loyal customers. We design automated email sequences and high-converting newsletters that keep your brand top-of-mind.",
    features: ["Drip Campaigns", "A/B Subject Testing", "List Segmentation", "Newsletter Design"],
    icon: <Mail  size={24} />,
  },
  {
    title: "Social Media Management & Growth",
    slug: "social-media",
    description: "Build a loyal community. Our management ensures a consistent voice, high-quality visual content, and measurable engagement across all platforms.",
    features: ["Content Calendar", "Engagement Growth", "Influencer Outreach", "Community Management"],
    icon: <Share2  size={24} />,
  },
  {
    title: "Online Reputation Management (ORM)",
    slug: "reputation-management",
    description: "Protect and enhance your brand's digital image. We help generate positive reviews and manage feedback on Google, Yelp, and industry-specific sites.",
    features: ["Review Generation", "Crisis Management", "Brand Monitoring", "GBP Review Replies"],
    icon: <Zap  size={24} />,
  },
  {
    title: "Content Marketing & Copywriting",
    slug: "content-marketing",
    description: "Tell your brand story with authority. We create SEO-optimized blog posts, whitepapers, and landing page copy that establishes you as a market leader.",
    features: ["Blog Strategy", "Ghostwriting", "Sales Copywriting", "Video Scripting"],
    icon: <Globe  size={24} />,
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