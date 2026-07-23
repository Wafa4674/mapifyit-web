"use client";
import React, { useEffect, useRef } from 'react';
import { Activity, BarChart3, Gauge, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Lazy load heavy visual components
const IsometricMap = dynamic(() => import('./IsometricMap'), {
  ssr: false,
  loading: () => <div className="mt-12 h-[300px] w-full animate-pulse rounded-2xl bg-slate-800/50" />
});

const PhoneMockup = dynamic(() => import('./PhoneMockup'), {
  ssr: false,
  loading: () => <div className="h-[500px] w-[300px] animate-pulse rounded-[3rem] bg-slate-800/50 mx-auto" />
});

type BusinessPlatform = {
  name: string;
  type: string;
  logo: string;
  logoClassName?: string;
  itemClassName?: string;
  lightenWordmark?: boolean;
};

const businessPlatforms: BusinessPlatform[] = [
  { name: 'SAP', type: 'ERP', logo: '/platform-logos/sap.svg', logoClassName: 'h-14 w-20' },
  { name: 'Oracle NetSuite', type: 'ERP', logo: '/platform-logos/oracle-netsuite.svg', logoClassName: 'h-3 w-20' },
  {
    name: 'Microsoft Dynamics 365',
    type: 'ERP + CRM',
    logo: '/platform-logos/dynamics-365.svg',
    logoClassName: 'h-10 w-26',
    lightenWordmark: true,
  },
  { name: 'Odoo', type: 'ERP', logo: '/platform-logos/odoo.svg', logoClassName: 'h-15 w-20' },
  { name: 'Sage', type: 'ERP', logo: '/platform-logos/sage.svg', logoClassName: 'h-12 w-20' },
  { name: 'Salesforce', type: 'CRM', logo: '/platform-logos/salesforce.svg', logoClassName: 'h-12 w-20' },
  { name: 'HubSpot', type: 'CRM', logo: '/platform-logos/hubspot.svg', logoClassName: 'h-10 w-20' },
  { name: 'Zoho CRM', type: 'CRM', logo: '/platform-logos/zoho.svg', logoClassName: 'h-14 w-[100px]' },
  { name: 'Freshsales', type: 'CRM', logo: '/platform-logos/freshsales.svg', logoClassName: 'h-14 w-[150px]' },
];

const heroStats = [
  {
    label: 'Map load',
    value: '12 ms',
    detail: 'Tile latency',
    icon: Gauge,
    color: 'text-cyan-400',
  },
  {
    label: 'API usage',
    value: 'High-volume',
    detail: 'Built to scale',
    icon: BarChart3,
    color: 'text-blue-400',
  },
  {
    label: 'Uptime',
    value: '99.9%',
    detail: 'Platform status',
    icon: Activity,
    color: 'text-emerald-400',
  },
];

type SatelliteProvider = {
  name: string;
  logo: string;
  detail: string;
  category: string;
  badge: string;
};

const satelliteProviders: SatelliteProvider[] = [
  { name: 'Maxar', logo: '/satellite-logos/maxar.svg', detail: 'WorldView / Legion', category: 'Optical', badge: '~30cm' },
  { name: 'Airbus', logo: '/satellite-logos/airbus.svg', detail: 'Pleiades Neo', category: 'Optical', badge: '30cm' },
  { name: 'Planet', logo: '/satellite-logos/planet.svg', detail: 'SkySat + PlanetScope', category: 'Optical', badge: 'Daily' },
  { name: 'BlackSky', logo: '/satellite-logos/blacksky.svg', detail: 'Fast tasking', category: 'Optical', badge: 'Revisit' },
  // { name: 'SI Imaging Services', logo: '/satellite-logos/siis.svg', detail: 'KOMPSAT series', category: 'Optical', badge: 'Sub-1m' },
  { name: '21AT', logo: '/satellite-logos/21at.svg', detail: 'BJ3 / TripleSat', category: 'Optical', badge: '~30cm' },
  // { name: 'Satellogic', logo: '/satellite-logos/satellogic.svg', detail: 'NewSat constellation', category: 'Optical', badge: 'VHR' },
  { name: 'EOI Space', logo: '/satellite-logos/eoi-space.svg', detail: 'Ultra-high-res', category: 'Optical', badge: '~15cm' },
  // { name: 'Capella Space', logo: '/satellite-logos/capella.svg', detail: 'SAR monitoring', category: 'SAR', badge: 'Night' },
  { name: 'ICEYE', logo: '/satellite-logos/iceye.svg', detail: 'Flood + disaster', category: 'SAR', badge: 'Cloud' },
  // { name: 'TerraSAR-X', logo: '/satellite-logos/terrasar-x.svg', detail: 'Airbus radar', category: 'SAR', badge: 'Radar' },
  // { name: 'Synspective', logo: '/satellite-logos/synspective.svg', detail: 'SAR constellation', category: 'SAR', badge: 'Radar' },
  { name: 'Landsat 8/9', logo: '/satellite-logos/landsat.svg', detail: 'USGS / NASA', category: 'Open Data', badge: 'Free' },
  // { name: 'Sentinel-1/2', logo: '/satellite-logos/sentinel.svg', detail: 'ESA / Copernicus', category: 'Open Data', badge: 'Free' },
  { name: 'MODIS', logo: '/satellite-logos/modis.svg', detail: 'NASA monitoring', category: 'Open Data', badge: 'Global' },
];

function PlatformCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animationFrame: number;
    let previousTime = performance.now();

    const getLoopPoint = () => {
      const firstItem = carousel.children[0] as HTMLElement | undefined;
      const firstDuplicate = carousel.children[businessPlatforms.length] as HTMLElement | undefined;

      return firstItem && firstDuplicate
        ? firstDuplicate.offsetLeft - firstItem.offsetLeft
        : carousel.scrollWidth / 3;
    };

    const normalizeScroll = () => {
      const loopPoint = getLoopPoint();
      if (!loopPoint) return;

      if (carousel.scrollLeft >= loopPoint * 3) carousel.scrollLeft -= loopPoint;
      if (carousel.scrollLeft <= loopPoint) carousel.scrollLeft += loopPoint;
    };

    requestAnimationFrame(() => {
      carousel.scrollLeft = getLoopPoint() * 2;
    });

    const moveCarousel = (currentTime: number) => {
      const elapsed = Math.min(currentTime - previousTime, 50);
      carousel.scrollLeft += elapsed * 0.03;
      normalizeScroll();
      previousTime = currentTime;
      animationFrame = window.requestAnimationFrame(moveCarousel);
    };

    animationFrame = window.requestAnimationFrame(moveCarousel);
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative mt-12 lg:mt-16">
      <div className="mb-5 flex items-center justify-center">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          Built to connect with leading ERP &amp; CRM platforms
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/55 px-6 py-5 backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent" />
        <div
          ref={carouselRef}
          aria-label="Supported ERP and CRM platforms"
          className="platform-carousel flex h-20 touch-pan-x items-center gap-4 overflow-x-auto overflow-y-hidden overscroll-y-none"
        >
          {[...businessPlatforms, ...businessPlatforms, ...businessPlatforms, ...businessPlatforms, ...businessPlatforms].map((platform, index) => (
            <div
              key={`${platform.name}-${index}`}
              aria-hidden={index < businessPlatforms.length * 2 || index >= businessPlatforms.length * 3}
              className={`relative flex h-16 min-w-[180px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/45 px-5 py-3 ${platform.itemClassName ?? ''}`}
            >
              <Image
                src={platform.logo}
                alt={index < businessPlatforms.length ? `${platform.name} logo` : ''}
                width={180}
                height={64}
                unoptimized
                className={`${platform.logoClassName ?? 'h-10 w-36'} max-h-16 max-w-[220px] object-contain`}
              />
              {platform.lightenWordmark && (
                <Image
                  src={platform.logo}
                  alt=""
                  width={180}
                  height={64}
                  unoptimized
                  aria-hidden="true"
                  className={`pointer-events-none absolute ${platform.logoClassName ?? ''} max-h-14 max-w-[180px] object-contain brightness-0 invert [clip-path:inset(0_0_0_28%)]`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .platform-carousel {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scrollbar-gutter: auto;
        }
        .platform-carousel::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none;
        }
      `}</style>
    </div>
  );
}

function SatelliteSources() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animationFrame: number;
    let previousTime = performance.now();

    const getLoopPoint = () => {
      const firstItem = carousel.children[0] as HTMLElement | undefined;
      const firstDuplicate = carousel.children[satelliteProviders.length] as HTMLElement | undefined;

      return firstItem && firstDuplicate
        ? firstDuplicate.offsetLeft - firstItem.offsetLeft
        : carousel.scrollWidth / 3;
    };

    const normalizeScroll = () => {
      const loopPoint = getLoopPoint();
      if (!loopPoint) return;

      if (carousel.scrollLeft >= loopPoint * 3) carousel.scrollLeft -= loopPoint;
      if (carousel.scrollLeft <= loopPoint) carousel.scrollLeft += loopPoint;
    };

    requestAnimationFrame(() => {
      carousel.scrollLeft = getLoopPoint() * 2;
    });

    const moveCarousel = (currentTime: number) => {
      const elapsed = Math.min(currentTime - previousTime, 50);
      carousel.scrollLeft += elapsed * 0.025;
      normalizeScroll();
      previousTime = currentTime;
      animationFrame = window.requestAnimationFrame(moveCarousel);
    };

    animationFrame = window.requestAnimationFrame(moveCarousel);
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative mt-10 lg:mt-12">
      <div className="mb-5 flex items-center justify-center">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          Satellite imagery &amp; earth observation sources
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/55 px-6 py-5 backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent" />
        <div
          ref={carouselRef}
          aria-label="Satellite imagery sources"
          className="platform-carousel flex h-20 touch-pan-x items-center gap-4 overflow-x-auto overflow-y-hidden overscroll-y-none"
        >
          {[...satelliteProviders, ...satelliteProviders, ...satelliteProviders, ...satelliteProviders, ...satelliteProviders].map((provider, index) => (
            <div
              key={`${provider.name}-${index}`}
              aria-hidden={index < satelliteProviders.length * 2 || index >= satelliteProviders.length * 3}
              className="flex h-16 min-w-[270px] shrink-0 items-center gap-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/45 px-4 py-3"
            >
              <div className="flex h-11 w-32 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 px-3">
                <Image
                  src={provider.logo}
                  alt={index < satelliteProviders.length ? `${provider.name} logo` : ''}
                  width={144}
                  height={42}
                  unoptimized
                  className="max-h-8 max-w-[122px] object-contain opacity-95"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <span className="shrink-0 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cyan-300">
                    {provider.badge}
                  </span>
                  <span className="truncate text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    {provider.category}
                  </span>
                </div>
                <p className="truncate text-xs text-slate-400">{provider.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 pt-4 md:mb-8 leading-[1.1]">
            Enterprise Maps, GIS &&nbsp;<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              Tracking Solutions
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed font-light">
            High-performance Maps APIs and advanced GIS routing infrastructure for modern geospatial applications. Deploy in the cloud or air-gapped for secure, scalable location intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#maps-preview"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#03060D] font-bold rounded-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] scroll-smooth"
            >
              Explore Platform
            </a>
            <Link
              href="/contact-us"
              prefetch={false}
              className="w-full sm:w-auto px-8 py-4 bg-slate-800/40 border border-slate-700 hover:border-slate-500 text-white font-bold rounded-xl hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2 backdrop-blur-md hover:scale-105 active:scale-95 text-sm md:text-base"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400" /> Deploy On-Premise
            </Link>
          </div>

          <div
            className="mt-8 grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/45 text-left backdrop-blur-sm"
            aria-label="Platform performance statistics"
          >
            {heroStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`relative px-3 py-4 sm:px-4 ${index > 0 ? 'border-l border-slate-800' : ''}`}
                >
                  <div className="mb-2 flex items-center gap-1.5">
                    <Icon className={`size-3.5 ${stat.color}`} aria-hidden="true" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-[10px]">
                      {stat.label}
                    </span>
                  </div>
                  <div className={`text-sm font-bold sm:text-lg ${stat.color}`}>{stat.value}</div>
                  <div className="mt-0.5 text-[9px] text-slate-600 sm:text-[10px]">{stat.detail}</div>
                  <div className="absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-70" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Visual Mockup (Landscape Workstation) */}
        <div className="relative group w-full">
          <div className="w-full">
            <div className="relative z-10 w-full transition-all duration-500">
              <PhoneMockup compact />
            </div>

            {/* Background Decorative Glow */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-[120px] -z-10 group-hover:bg-blue-600/15 transition-colors duration-1000" />
          </div>
        </div>
      </div>

      <PlatformCarousel />

      <SatelliteSources />

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
