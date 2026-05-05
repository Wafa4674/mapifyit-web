"use client";
import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Lazy load heavy visual components
const IsometricMap = dynamic(() => import('./IsometricMap'), { 
  ssr: false,
  loading: () => <div className="mt-12 h-[300px] w-full animate-pulse rounded-2xl bg-slate-800/50" />
});

const PhoneMockup = dynamic(() => import('./PhoneMockup'), { 
  ssr: false,
  loading: () => <div className="h-[600px] w-[300px] animate-pulse rounded-[3rem] bg-slate-800/50 mx-auto" />
});

/**
 * Hero Section: The flagship visual component of the landing page.
 * Uses a split layout on larger screens to showcase both value proposition and visuals.
 */
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-0 pb-2 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        {/* Left Column: Value Proposition */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] md:text-xs font-semibold text-blue-400 mb-2 md:mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            <Zap className="w-3.5 h-3.5 fill-blue-500/50" /> High-Performance Geospatial APIs
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 md:mb-8 leading-[1.1]">
            Best Google Maps & Mapbox  &nbsp;<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              Alternative in the USA – MapifyIt
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed font-light">
            High-performance Maps APIs and advanced GIS routing infrastructure for modern geospatial applications. Deploy in the cloud or air-gapped for secure, scalable location intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#maps-preview"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#03060D] font-bold rounded-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] scroll-smooth"
            >
              Explore Platform
            </a>
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800/40 border border-slate-700 hover:border-slate-500 text-white font-bold rounded-xl hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2 backdrop-blur-md hover:scale-105 active:scale-95 text-sm md:text-base"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400" /> Deploy On-Premise
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Mockup (Landscape Workstation) */}
        <div className="relative group w-full">
          <div className="w-full">
            <div className="relative z-10 w-full transition-all duration-500">
              <PhoneMockup />
            </div>

            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-[120px] -z-10 group-hover:bg-blue-600/15 transition-colors duration-1000" />
          </div>
        </div>
      </div>

      {/* Full-width Map Section (Isometric Preview) */}
      <div className="mt-10 lg:mt-10">
        <div className="text-center mb-12">
          <h2 className="text-[10px] md:text-sm font-bold text-blue-500 uppercase tracking-[0.4em] mb-4">Enterprise Spatial Engine Status</h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <IsometricMap />
        </div>
      </div>
    </section>
  );
}
