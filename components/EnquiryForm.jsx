"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // Optimized for latest framer-motion
import { Send, MessageSquare, User, Briefcase, Mail } from "lucide-react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "Web Development",
    message: "",
  });

  const services = [
    "Web Development",
    "SEO Optimization",
    "Lead Generation",
    "Social Media Marketing",
    "GBP Management",
    "WhatsApp Marketing",
    "Ai Automations",
  ];

  // Updated to Gmail Redirection
  const handleSendEmail = (e) => {
    e.preventDefault();
    const email = "team@socialdynamics.cloud";
    const subject = encodeURIComponent(`New Project Enquiry: ${formData.service}`);
    
    // Formatting the email body for clarity
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Interested Service: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Get in Touch</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Ready to scale your <br />
              <span className="text-slate-400">digital presence?</span>
            </h2>

            <p className="text-lg text-slate-500 max-w-md leading-relaxed">
              Fill out the form to start a professional conversation. Our team typically responds via email within 2-4 business hours.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Official Support</p>
                  <p className="text-lg font-bold text-slate-900">team@socialdynamics.cloud</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white border border-slate-100 p-8 md:p-12 rounded-[40px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.05)]"
          >
            <form onSubmit={handleSendEmail} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input
                    required
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-300"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Interested Service</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <select
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900 transition-all outline-none text-slate-900 font-medium appearance-none"
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 text-slate-300" size={18} />
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell us about your project requirements..."
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-300 resize-none"
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all"
              >
                <Send size={18} />
                Send Enquiry via Email
              </motion.button>
              
              <p className="text-center text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                Safe & Secure. No marketing spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;