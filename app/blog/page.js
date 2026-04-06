"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allBlogs } from "@/constants/blogs";

const BlogArchive = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web Development", "Local SEO", "AI & Automation", "Paid Media"];

  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="bg-white min-h-screen">

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400"
          >
            Social Dynamics Journal
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mt-6 tracking-tight"
          >
            Insights for the <br /> <span className="text-slate-400">Digital Elite.</span>
          </motion.h1>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mt-12 relative"
          >
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search strategies, tech, or case studies..."
              className="w-full pl-16 pr-8 py-6 bg-white border border-slate-200 rounded-[24px] focus:outline-none focus:border-slate-900 transition-all shadow-sm text-slate-900 font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      {/* Filter & Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <Link href={`/blog/${blog.id}`}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] mb-6">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 px-2">
                      <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
                        <span>{blog.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-slate-500 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                        {blog.preview}
                      </p>
                      <div className="pt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:gap-4 transition-all">
                        Read Full Article <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-400 font-bold uppercase tracking-widest">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Ready to scale your <br /> digital legacy?
            </h2>
            <p className="text-slate-400 mt-6 text-lg max-w-xl mx-auto">
              Our strategies are battle-tested in the US market. Let's discuss how we can apply them to your business.
            </p>
            <Link href="/#contact">
              <button className="mt-10 px-10 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-200 transition-all active:scale-95">
                Book a Strategy Call
              </button>
            </Link>
          </div>
          {/* Subtle Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
      </section>
    </main>
  );
};

export default BlogArchive;
