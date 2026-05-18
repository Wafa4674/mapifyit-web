"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Map, Menu, X, ChevronRight, ChevronDown, ShieldCheck, Truck, LogIn, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';

const MobileMenu = dynamic(() => import('./MobileMenu'), { ssr: false });

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const router = useRouter();

  // Handle navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // PROGRAMMATIC SMOOTH SCROLL HANDLER
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    // If we're not on the home page, let the standard Link navigation handle it
    if (pathname !== '/') return;

    // If we are on home, intercept for a "Pro" smooth scroll with custom offset
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 100; // Offset to account for the sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setMobileMenuOpen(false);
      setSolutionsOpen(false);
    }
  };

  // Lock body scroll ONLY on mobile when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full transition-all duration-300 z-[500] ${isScrolled || mobileMenuOpen ? 'bg-[#03060D]/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-[510]">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer bg-transparent relative">
            <div className="h-10 flex items-center justify-center">
              <img src="/mapify-white-bg.png" alt="Mapifyit Logo" className="h-10 w-auto object-contain" />
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-md">
            <Link
              href="/"
              onClick={(e) => { if (pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setSolutionsOpen(false); } }}
              className={`text-sm font-medium transition-colors ${pathname === '/' ? 'text-white font-bold text-lg' : 'text-slate-300 hover:text-white'}`}
            >
              Home
            </Link>

            <Link
              href="/maps"
              className={`text-sm font-medium transition-colors ${pathname === '/maps' ? 'text-white font-bold text-lg' : 'text-slate-300 hover:text-white'}`}
            >
              Maps
            </Link>

            <Link
              href="/gis"
              className={`text-sm font-medium transition-colors ${pathname === '/gis' ? 'text-white font-bold text-lg' : 'text-slate-300 hover:text-white'}`}
            >
              GIS
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative group"
              ref={dropdownRef}
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${solutionsOpen || pathname?.includes('/fleet-management-system') ? 'text-white font-bold text-lg  underline' : 'text-slate-300 hover:text-white'}`}
              >
                Solutions <ChevronDown size={14} className={`transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* invisible bridge to prevent closing when moving mouse */}
              <div className="absolute top-full left-0 w-full h-4 bg-transparent" />

              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-[#0B0F17]/95 border border-white/10 rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl z-[700] transition-all duration-300 ${solutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}>
                <Link href="https://ngekyc.mapifyit.com/" target="_blank" rel="noopener noreferrer" onClick={() => setSolutionsOpen(false)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group/item">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500 group-hover/item:text-white">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">NG eKYC</p>
                    <p className="text-[10px] text-slate-400">Identity Verification</p>
                  </div>
                </Link>
                <Link href="/fleet-management-system" onClick={() => setSolutionsOpen(false)} className={`flex items-start gap-3 p-3 rounded-xl transition-all group/item ${pathname === '/fleet-management-system' ? 'bg-white/10' : 'hover:bg-white/5'}`}>
                  <div className={`w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover/item:bg-indigo-500 group-hover/item:text-white ${pathname === '/fleet-management-system' ? 'bg-indigo-500 text-white' : ''}`}>
                    <Truck size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">FMS</p>
                    <p className="text-[10px] text-slate-400">Fleet Management</p>
                  </div>
                </Link>
                <Link href="/field-force-tracking" onClick={() => setSolutionsOpen(false)} className={`flex items-start gap-3 p-3 rounded-xl transition-all group/item ${pathname === '/field-force-tracking' ? 'bg-white/10' : 'hover:bg-white/5'}`}>
                  <div className={`w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover/item:bg-indigo-500 group-hover/item:text-white ${pathname === '/field-force-tracking' ? 'bg-indigo-500 text-white' : ''}`}>
                    <Users size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">FFT</p>
                    <p className="text-[10px] text-slate-400">Field Force Tracking</p>
                  </div>
                </Link>
                <Link href="https://famsentry.com/" target="_blank" rel="noopener noreferrer" onClick={() => setSolutionsOpen(false)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group/item">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-500 group-hover/item:text-white">
                    <img src="/small-logo.png" alt="Logo" className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Famsentry</p>
                    {/* <p className="text-[10px] text-slate-400">Identity Verification</p> */}
                  </div>
                </Link>
              </div>
            </div>

            <Link
              href="https://dev.mapifyit.com/documentation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Documentation
            </Link>

            {/* <Link
              href="/blog"
              className={`text-sm font-medium transition-colors ${pathname === '/blog' ? 'text-white font-bold text-lg' : 'text-slate-300 hover:text-white'}`}
            >
              Blog
            </Link> */}

            <Link
              href="/pricing"
              className={`text-sm font-medium transition-colors ${pathname === '/pricing' ? 'text-white font-bold text-lg' : 'text-slate-300 hover:text-white'}`}
            >
              Pricing
            </Link>

            <Link
              href="/contact-us"
              className={`text-sm font-medium transition-colors ${pathname === '/contact-us' ? 'text-white' : 'text-slate-300 hover:text-white'}`}
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors" onClick={() => window.open("https://dev.mapifyit.com/login", "_blank")}>Log in</button>
            <Link
              href="https://maps.mapifyit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-medium text-white rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2"
            >
              Try Maps <ChevronRight size={14} />
            </Link>
            <button className="px-5 py-2.5 text-sm font-medium text-white rounded-xl bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20" onClick={() => window.open("https://dev.mapifyit.com/register", "_blank")}>
              Start Free
            </button>
          </div>

          <button
            className="md:hidden relative z-[600] p-2 text-white bg-white/5 rounded-xl border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          pathname={pathname || ""}
        />
      )}
    </>
  );
}
