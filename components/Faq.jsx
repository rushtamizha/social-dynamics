"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";


const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "While we are platform-agnostic, we excel in helping service-based businesses, e-commerce brands, and local enterprises in the real estate, healthcare, and professional services sectors scale their digital legacy."
  },
  {
    question: "How does the AI-powered lead generation work?",
    answer: "We use advanced AI algorithms to analyze market trends, automate personalized outreach, and optimize Meta/Google ad spend in real-time, ensuring you get high-intent leads rather than just 'clicks'."
  },
  {
    question: "Do you offer custom web development for existing brands?",
    answer: "Absolutely. We specialize in the MERN stack (MongoDB, Express, React, Node.js) and Next.js to build high-performance, SEO-optimized websites that are tailored to your specific brand identity."
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a marathon, not a sprint. Typically, our clients see significant movement in rankings and organic traffic within 3 to 6 months, depending on the competitiveness of their industry."
  },
  {
    question: "What is the best way to start a project with you?",
    answer: "The best way is to fill out our enquiry form or email us directly at team@socialdynamics.cloud. We usually respond with a project proposal or a request for a brief discovery call within 4 hours."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50/30">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Common Queries</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-slate-400">Questions.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between p-6 md:p-8 rounded-[24px] text-left transition-all duration-300 border ${
                  activeIndex === index 
                    ? "bg-white border-slate-200 shadow-xl shadow-slate-200/50" 
                    : "bg-transparent border-slate-100 hover:border-slate-300"
                }`}
              >
                <span className={`text-lg font-bold transition-colors ${
                  activeIndex === index ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  activeIndex === index ? "bg-slate-900 text-white rotate-180" : "bg-slate-100 text-slate-400"
                }`}>
                  {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-2 text-slate-500 leading-relaxed text-[16px]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Still have questions?{" "}
            <a href="mailto:team@socialdynamics.cloud" className="text-slate-900 font-bold hover:underline">
              Contact our team directly.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;