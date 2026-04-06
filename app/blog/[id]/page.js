"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, ChevronRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allBlogs } from "@/constants/blogs";

const BlogPreview = () => {
  const params = useParams();
  const router = useRouter();
  
  // Find the blog post that matches the ID in the URL
  const blog = allBlogs.find((item) => item.id === parseInt(params.id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Article Not Found</h1>
        <Link href="/blog" className="text-slate-500 hover:text-slate-900 underline">Back to Archive</Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.button
            onClick={() => router.back()}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 mb-12 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Insights
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 pt-4 border-b border-slate-100 pb-10">
              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                <Calendar size={14} /> {blog.date}
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                <Clock size={14} /> {blog.readTime}
              </div>
              <button className="ml-auto p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors">
                <Share2 size={16} className="text-slate-600" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content Body */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-[40px] overflow-hidden mb-16 shadow-2xl shadow-slate-200"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover" />
          </motion.div>

          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
              {blog.preview}
            </p>
            
            {/* Placeholder for real content body */}
            <div className="text-slate-700 leading-relaxed space-y-6">
              <p>
                In the rapidly evolving US market, staying ahead of digital trends isn't just an advantage—it's a requirement for survival. 
                Whether you are scaling a SaaS platform or optimizing local search dominance, the technical foundation of your brand 
                determines your long-term success.
              </p>
              <h2 className="text-2xl font-black text-slate-900 pt-8 uppercase tracking-tight">The Strategy for 2026</h2>
              <p>
                Our approach at Social Dynamics focuses on high-velocity growth. By leveraging the MERN stack for speed 
                and AI-driven lead generation for scale, we bridge the gap between traditional marketing and modern 
                engineering. This article explores how these elements converge to create a "Digital Legacy."
              </p>
            </div>
          </div>

          {/* Related Service CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 p-10 bg-slate-900 rounded-[32px] text-white flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Related Expertise</p>
              <h3 className="text-2xl font-bold">Ready to implement these strategies?</h3>
            </div>
            <Link href={`/services#${blog.service}`}>
              <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all flex items-center gap-2">
                Explore Service <ChevronRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BlogPreview;
