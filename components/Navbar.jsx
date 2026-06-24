"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, ChevronRight, MessageSquare } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fixed hrefs with "/#" to ensure they work from subpages like /blog
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Expertise", href: "/services" },
    { name: "Why Us", href: "/#whyus" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Blog", href: "/blog" },
  ];

  // Added missing function that was causing the crash/error
  const handleEmailRedirect = () => {
    const email = "team@socialdynamics.cloud";
    const subject = encodeURIComponent("Project Inquiry - Social Dynamics");
    const body = encodeURIComponent("Hi Team,\n\nI would like to discuss a project with you.");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  // WhatsApp Redirect Function
  const handleWhatsAppRedirect = () => {
    // Replace with your actual company phone number (include country code, no + or spaces)
    const phoneNumber = "16474991118"; 
    const text = encodeURIComponent("Hi Social Dynamics team, I would like to discuss a project with you.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
          : "py-6 bg-transparent "
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        
        {/* Logo Area */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl shadow-sm">
              <img
                src="/logo.jpg"
                alt="Social Dynamics Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target );
                }}
              />
            </div>
            <span className="text-slate-900 font-bold text-2xl tracking-tight hidden sm:block">
              Social Dynamics
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-slate-600 hover:text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.div
          className="hidden lg:flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/#contact">
            <button
              className="flex items-center gap-2 px-7 py-3 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200"
            >
              Contact Us
            </button>
          </Link>
        </motion.div>

        {/* Mobile Toggle - Button now fully functional */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 text-slate-900 bg-slate-50 rounded-xl border border-slate-200 active:scale-90 transition-all"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className="absolute top-[160%] right-0 left-0 bg-white border border-slate-100 rounded-[32px] shadow-sm lg:hidden overflow-hidden z-[101] mx-4"
              >
                <div className="flex flex-col p-6 gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between p-4 text-slate-700 font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50 rounded-2xl transition-all group"
                      >
                        {link.name}
                        <ChevronRight size={16} className="text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}

                  <div className="mt-4 grid grid-cols-2 gap-3 p-2">
                    {/* Updated WhatsApp Button */}
                    <button 
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleWhatsAppRedirect();
                      }}
                      className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-emerald-100 transition-all"
                    >
                      <MessageSquare size={14} />
                      WhatsApp
                    </button>
                    
                    <button
                      onClick={handleEmailRedirect}
                      className="w-full py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      <Mail size={14} />
                      Email
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;