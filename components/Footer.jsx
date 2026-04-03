"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    Services: [
      { name: "Web Development", href: "#services" },
      { name: "SEO Optimization", href: "#services" },
      { name: "Lead Generation", href: "#services" },
      { name: "Social Marketing", href: "#services" },
    ],
    Resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#portfolio" },
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
            <motion.a
              href="https://wa.me/918977055093"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-slate-200"
            >
              Start Your Project
              <ArrowUpRight size={20} />
            </motion.a>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="text-slate-900 font-bold text-2xl tracking-tight">Social Dynamics</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-500">
                <MapPin size={18} />
                <span className="text-sm font-medium">Bangalore & Theni, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Phone size={18} />
                <span className="text-sm font-medium">+91 89770 55093</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Mail size={18} />
                <span className="text-sm font-medium">hello@Social Dynamics.com</span>
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
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <span>© {currentYear} Social Dynamics Digital. All Rights Reserved.</span>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;