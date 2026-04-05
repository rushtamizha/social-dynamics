

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, ChevronRight } from "lucide-react"; // Swapped MessageCircle for Mail
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

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Why Choose Us", href: "#whyus" },
    { name: "Expertise", href: "#expertise" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  // Updated to Gmail Redirection
  const gmailRedirect = () => {
    const email = "team@socialdynamics.cloud";
    const subject = encodeURIComponent("Project Inquiry - Social Dynamics");
    const body = encodeURIComponent("Hi Team,\n\nI would like to discuss a project with you.");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
          : "py-6 bg-transparent"
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
    <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl">
      <img
        src="/logo.jpg"
        alt="Social Dynamics Logo"
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/40";
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
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-slate-600 hover:text-slate-900 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.div
          className="hidden lg:flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <button
            onClick={gmailRedirect}
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200"
          >
            <Mail size={18} className="text-slate-400" />
            Contact Us
          </button>
        </motion.div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-900 bg-slate-50 rounded-lg border border-slate-200 active:scale-90 transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Box-Style Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute top-[160%] right-6 left-6 bg-white border border-slate-200 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] lg:hidden overflow-hidden z-[101]"
            >
              <div className="flex flex-col p-4 gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-4 text-slate-700 font-semibold hover:bg-slate-50 rounded-xl transition-colors group"
                  >
                    {link.name}
                    <ChevronRight
                      size={18}
                      className="text-slate-300 group-hover:text-slate-900 transition-colors"
                    />
                  </motion.a>
                ))}

                <div className="mt-4 p-2">
                  <button
                    onClick={gmailRedirect}
                    className="w-full py-4 bg-slate-900 text-white rounded-xl text-md font-bold flex items-center justify-center gap-3 shadow-lg shadow-slate-200 active:scale-[0.98] transition-all"
                  >
                    <Mail size={20} className="text-slate-400" />
                    Email Us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;