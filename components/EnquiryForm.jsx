"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, User, Briefcase, Mail, Phone, MapPin, Send } from "lucide-react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    emailAddress: "",
    zipCode: "",
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

  // WhatsApp Submission Handler
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Replace with your company's official phone number (include country code, omit spaces/plus sign)
    const companyPhone = "16474991118"; 
    
    const structuredMessage = 
      `*New Project Enquiry - Social Dynamics*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.emailAddress}\n` +
      `*Zip Code:* ${formData.zipCode}\n` +
      `*Service Required:* ${formData.service}\n\n` +
      `*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(structuredMessage);
    window.open(`https://wa.me/${companyPhone}?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  // Optional Email Fallback Handler
  const handleEmailFallback = () => {
    if (!formData.name || !formData.message) {
      alert("Please fill out at least your Name and Message to send an email.");
      return;
    }
    const email = "team@socialdynamics.cloud";
    const subject = encodeURIComponent(`Project Enquiry: ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.emailAddress}\n` +
      `Zip Code: ${formData.zipCode}\n` +
      `Service: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content Informational Panel */}
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
              Fill out the form to launch a secure connection directly into our chat queue. Our support group responds across active lines within minutes.
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

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Official Line</p>
                  <p className="text-lg font-bold text-slate-900">+1 (647) 499-1118</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white border border-slate-100 p-8 md:p-12 rounded-[40px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.05)]"
          >
            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              
              {/* Name Field */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input
                    required
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-500 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-300"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              {/* Grid Wrapper for Phone and Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Field */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input
                      required
                      type="tel"
                      placeholder="Include country code"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-500 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-300"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email Address Field */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-500 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-300"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Grid Wrapper for Zip Code and Services Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Zip Code Field */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Zip Code</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input
                      required
                      type="text"
                      placeholder="Postal / Zip code"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-500 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-300"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    />
                  </div>
                </div>

                {/* Preferred Service Field */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Preferred Service</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <select
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-500 transition-all outline-none text-slate-900 font-medium appearance-none"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 text-slate-300" size={18} />
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about your project requirements..."
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-500 transition-all outline-none text-slate-900 font-medium placeholder:text-slate-300 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
              </div>

              {/* Submit Buttons Action Block */}
              <div className="space-y-3 pt-2">
                {/* Primary Action: Send to WhatsApp */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-4.5 bg-emerald-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all text-base"
                >
                  <MessageSquare size={18} />
                  Submit via WhatsApp
                </motion.button>

                {/* Secondary Option: Fallback Email Action */}
                <button
                  type="button"
                  onClick={handleEmailFallback}
                  className="w-full py-3 text-slate-500 hover:text-slate-900 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors border border-dashed border-slate-200 hover:border-slate-400"
                >
                  <Send size={12} />
                  Or Send email instead
                </button>
              </div>
              
              <p className="text-center text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                Safe & Secure. Direct chat dispatch.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;