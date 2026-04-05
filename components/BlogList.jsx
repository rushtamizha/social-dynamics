"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { allBlogs } from "@/constants/blogs";

const BlogList = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Insights for <span className="text-slate-400">Growth.</span>
            </h2>
            <p className="mt-6 text-slate-500 text-lg">
              Explore our latest strategies on web tech, SEO, and AI automation 
              designed for the US market.
            </p>
          </div>
          <Link href="/blog">
            <button className="px-8 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-slate-900 transition-all">
              View All Posts
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {blog.readTime}
                  </span>
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {blog.preview}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <Link 
                    href={`/services#${blog.service}`}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    Related Service <ArrowRight size={14} />
                  </Link>
                  <Link href={`/blog/${blog.id}`}>
                    <button className="p-3 bg-slate-900 text-white rounded-xl group-hover:bg-slate-700 transition-all">
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;