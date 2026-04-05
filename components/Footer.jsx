"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Mail, 
  MapPin,
  Globe
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailRedirect = () => {
    const email = "team@socialdynamics.cloud";
    const subject = encodeURIComponent("New Project Inquiry");
    const body = encodeURIComponent("Hi Social Dynamics team,\n\nI'm interested in starting a project with you. Let's discuss the details.");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const footerLinks = {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    Services: [
      { name: "Web Development", href: "#expertise" },
      { name: "SEO Optimization", href: "#expertise" },
      { name: "Lead Generation", href: "#expertise" },
      { name: "SaaS Products", href: "#expertise" },
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "FAQ", href: "#" },
    ],
  };

  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12">
        
        {/* Top Section: CTA & Branding */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 border-b border-slate-50 pb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Let’s build something <br />
              <span className="text-slate-400">extraordinary together.</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-md">
              Transforming businesses with AI-driven marketing and premium digital experiences.
            </p>
          </div>
          <div className="flex lg:justify-end items-center">
            <motion.button
              onClick={handleEmailRedirect}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-slate-200 transition-all hover:bg-slate-800"
            >
              Start Your Project
              <ArrowUpRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              {/* Image Logo to match Navbar */}
              <div className="relative w-10 h-10 overflow-hidden rounded-xl">
                <img 
                  src="/logo.jpg" 
                  alt="Social Dynamics Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/40"; }} 
                />
              </div>
              <span className="text-slate-900 font-bold text-2xl tracking-tight">Social Dynamics</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-500">
                <MapPin size={18} className="text-slate-400" />
                <span className="text-sm font-medium">Bangalore & Theni, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Mail size={18} className="text-slate-400" />
                <span className="text-sm font-medium">team@socialdynamics.cloud</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Globe size={18} className="text-slate-400" />
                <span className="text-sm font-medium">socialdynamics.cloud</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <span>© {currentYear} Social Dynamics. All Rights Reserved.</span>
            <a href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;