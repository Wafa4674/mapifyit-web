"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Globe, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "./data/posts";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white pt-32 pb-20 overflow-hidden relative">
            {/* Ambient background effects */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Blog Header */}
                <section className="mb-24 text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-8">
                            <Globe className="w-3.5 h-3.5" /> Industry Insights
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">MapifyIt</span> Blog
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                            Deep dives into mapping infrastructure, GIS intelligence, and the future of location-driven technology.
                        </p>
                    </Reveal>
                </section>

                {/* Single Post Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <Reveal key={post.slug}>
                            <article className="group h-full flex flex-col bg-white/5 p-6 md:p-8 rounded-[32px] border border-white/10 hover:border-blue-500/30 transition-all duration-500 backdrop-blur-xl relative overflow-hidden">
                                {/* Subtle light effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] -mr-16 -mt-16 rounded-full" />

                                {/* Header: Category & Time */}
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-wider text-blue-400">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                                    </div>
                                </div>

                                {/* Content */}
                                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                                    {post.title}
                                </h2>

                                <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-white text-base font-bold hover:gap-4 transition-all duration-300"
                                    >
                                        Read More <ArrowRight className="w-5 h-5 text-blue-400" />
                                    </Link>
                                    <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">{post.date}</span>
                                </div>
                            </article>
                        </Reveal>
                    ))}

                </div>

            </div>
        </main>
    );
}
