"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  // --- WEB DEVELOPMENT & SAAS ---
  {
    question: "Why do you prioritize the MERN stack and Next.js over platforms like WordPress?",
    answer: "Next.js and the MERN stack (MongoDB, Express, React, Node.js) allow us to build high-performance, SEO-first applications that are significantly faster and more secure than traditional CMS platforms. For US businesses, this technical edge leads to better user retention and superior rankings on Google."
  },
  {
    question: "Do I own the source code and intellectual property for my project?",
    answer: "Yes, 100%. Upon project completion and final payment, you hold full ownership of the source code, design assets, and all digital IP. We provide clean, documented codebases that your team can scale or maintain internally if needed."
  },

  // --- DIGITAL MARKETING & SEO ---
  {
    question: "How do you measure the ROI of my marketing campaigns?",
    answer: "We move beyond 'vanity metrics' like likes or impressions. Our primary KPIs are Conversion Rate, Cost Per Acquisition (CPA), and Return on Ad Spend (ROAS). You will receive transparent, data-driven reports every month that tie directly into your bottom-line revenue."
  },
  {
    question: "What is your approach to Technical SEO for the US market?",
    answer: "We focus on a 'Performance-First' SEO strategy. This includes optimizing Core Web Vitals, implementing advanced Schema Markup, and building high-authority backlink profiles that establish your brand as a market leader in your specific niche."
  },

  // --- LOCAL SEO & GOOGLE BUSINESS PROFILE ---
  {
    question: "How does Google Business Profile (GBP) management drive local sales?",
    answer: "For local service-based businesses, the 'Map Pack' is the most valuable real estate on the web. We optimize your profile, manage high-intent reviews, and post consistent updates to ensure you appear in the top 3 results for local searches, where 70% of clicks happen."
  },

  // --- AI & LEAD GENERATION ---
  {
    question: "How can AI Lead Generation reduce my customer acquisition costs?",
    answer: "Our AI tools identify high-intent prospects and automate personalized outreach at scale. This eliminates 'human friction' at the top of your funnel, allowing your sales team to focus exclusively on closing pre-qualified leads rather than cold calling."
  },
  {
    question: "Do you integrate your lead generation systems with existing CRMs?",
    answer: "Absolutely. We specialize in building seamless integrations with popular CRMs like Salesforce, HubSpot, and Pipedrive, as well as custom-built LeadFlow dashboards to ensure your data flows efficiently from lead capture to final sale."
  },

  // --- SOCIAL MEDIA & CONTENT ---
  {
    question: "What makes your content strategy different from a standard social media agency?",
    answer: "We don't just post content; we engineer 'Brand Authority.' Every piece of content is designed to solve a specific client pain point or move a prospect further down the sales funnel, ensuring your social presence actually drives business growth."
  },

  // --- PARTNERSHIP & PROCESS ---
  {
    question: "What does the onboarding and discovery process look like?",
    answer: "It begins with a 15-minute strategy audit where we analyze your current digital presence. From there, we build a custom roadmap with clear milestones, set up dedicated communication channels, and provide a transparent project timeline."
  },
  {
    question: "Do you offer white-label services for other digital agencies?",
    answer: "Yes, we act as a high-end fulfillment partner for several US-based agencies. We provide white-labeled development, SEO, and lead generation services that allow other agencies to scale their offerings without increasing their overhead."
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
        <div className="mt-16 text-center hidden">
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