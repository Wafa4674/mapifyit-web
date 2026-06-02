"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Twitter,
    Linkedin,
    Facebook,
    Instagram,
    Github,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    ChevronRight
} from 'lucide-react';

export default function Footer() {
    const pathname = usePathname();

    const handleLogoClick = (e: React.MouseEvent) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const socialLinks = [
        // { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "https://linkedin.com/company/mapifyit", label: "LinkedIn" },
        { icon: Facebook, href: "https://www.facebook.com/share/1BUY6FUDwd/?mibextid=wwXIfr", label: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/mapifyit_?igsh=NjZ2aGN2M214Nnk=", label: "Instagram" },
        // { icon: Github, href: "#", label: "GitHub" },
    ];

    const footerLinks = {
        Products: [
            { name: "Maps", href: "/maps" },
            { name: "GIS", href: "/gis" },
            // { name: "Fleet Management", href: "/fms" },
            // { name: "Identity Verification", href: "https://ngekyc.mapifyit.com/" },
        ],
        Solutions: [
            { name: "NG eKYC", href: "https://ngekyc.mapifyit.com/" },
            { name: "Fleet Management System", href: "/fleet-management-system" },
            { name: "Field Force Tracking", href: "/field-force-tracking" },
        ],
        Company: [
            { name: "Pricing", href: "/pricing" },
            { name: "Documentation", href: "https://dev.mapifyit.com/documentation" },
            { name: "Contact Us", href: "/contact-us", prefetch: false },
            { name: "About Us", href: "#" },
            { name: "Sitemap", href: "/sitemap.xml" },
            { name: "Blog", href: "/blog" }
        ]
    };

    return (
        <footer className="relative border-t border-white/5 bg-[#030712] pt-24 pb-12 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mb-8">
                            <Link href="/" onClick={handleLogoClick}>
                                <img src="/mapify-white-bg.png" alt="Mapifyit Logo" className="h-10 w-auto object-contain cursor-pointer" />
                            </Link>
                        </div>
                        <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
                            The enterprise-grade location intelligence platform for modern organizations. Build sovereign, high-performance geospatial applications with 100% on-premise security.
                        </p>
                    </div>

                    {/* Link Columns */}
                    <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">{title}</h4>
                                <ul className="space-y-4">
                                    {links.map((link) => {
                                        const isInternal = link.href.startsWith('/');
                                        return (
                                            <li key={link.name}>
                                                {isInternal ? (
                                                    <Link
                                                        href={link.href}
                                                        className="text-slate-400 hover:text-cyan-400 text-[14px] transition-all flex items-center group relative pl-0 hover:pl-5"
                                                    >
                                                        <ChevronRight className="w-3 h-3 absolute left-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                                        {link.name}
                                                    </Link>
                                                ) : (
                                                    <a
                                                        href={link.href}
                                                        target='_blank'
                                                        rel="noopener noreferrer"
                                                        className="text-slate-400 hover:text-cyan-400 text-[14px] transition-all flex items-center group relative pl-0 hover:pl-5"
                                                    >
                                                        <ChevronRight className="w-3 h-3 absolute left-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                                        {link.name}
                                                    </a>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Connect Section */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Connect</h4>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-400 hover:text-slate-200 transition-colors text-sm group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                                    <Mail className="w-4 h-4 text-cyan-500" />
                                </div>
                                <span>hi@mapifyit.com</span>
                            </div>
                            <div className="space-y-3">
                                {/* <div className="flex items-center gap-4 text-slate-400 hover:text-slate-200 transition-colors text-sm group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                                        <Phone className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <span>+971 4 442 9622</span>
                                </div> */}
                                {/* <div className="flex items-center gap-4 text-slate-400 hover:text-slate-200 transition-colors text-sm group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                                        <Phone className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <span>+966 53 540 5691</span>
                                </div> */}
                                <div className="flex items-center gap-4 text-slate-400 hover:text-slate-200 transition-colors text-sm group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                                        <Phone className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <span>+1 281 980 2206 <br /> +1 888 980 7422</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Unified Social & App Link Flight Row */}
                <div className="pt-5  flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    {/* Social Icons - Left Side */}
                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        ))}
                    </div>

                    {/* App Links - Right Side */}
                    <div className="flex flex-row items-center gap-4">
                        <div className="flex flex-row items-center gap-4 flex-nowrap">
                            <a
                                href="https://apps.apple.com/pk/app/mapifyit-maps/id6761619329"
                                target='_blank'
                                className="group relative flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.08] hover:border-blue-500/50 transition-all duration-500 overflow-hidden min-w-[170px]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex items-center gap-3">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white group-hover:scale-110 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-white/50 font-medium leading-none mb-1">Download on the</span>
                                        <span className="text-[14px] font-bold text-white leading-none tracking-tight">App Store</span>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://play.google.com/store/apps/details?id=com.mapifyit.maps&pli=1"
                                target='_blank'
                                className="group relative flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.08] hover:border-emerald-500/50 transition-all duration-500 overflow-hidden min-w-[170px]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex items-center gap-3">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white group-hover:scale-110 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.05,15.81C19.72,16.74 20.44,18.52 20.44,18.52C20.44,18.52 17.65,13.96 14.4,12.74L16.81,15.12M14.4,11.26C17.65,10.04 20.44,5.48 20.44,5.48C20.44,5.48 19.72,7.26 18.05,8.19L16.81,8.88L14.4,11.26M15.1,12L18.74,15.39L21.46,13.88C22.42,13.34 22.42,12.63 22.42,12C22.42,11.37 22.42,10.66 21.46,10.12L18.74,8.61L15.1,12Z" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-white/50 font-medium leading-none mb-1">Get it on</span>
                                        <span className="text-[14px] font-bold text-white leading-none tracking-tight">Google Play</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-slate-500 text-xs tracking-wide">
                        &copy; {new Date().getFullYear()} <Link href="/" onClick={handleLogoClick} className="text-slate-300 font-medium cursor-pointer">Mapifyit</Link>. All rights reserved.
                    </div>
                    <div className="flex gap-8">
                        {[
                            { name: "Privacy Policy", href: "/privacy-policy" },
                            { name: "Terms of Service", href: "/terms-of-service" },
                            { name: "Compliance", href: "/compliance" },
                            { name: "DPA", href: "/data-processing-agreement" },
                            { name: "FAQs", href: "/faqs" },
                        ].map((item) => (
                            <Link key={item.name} href={item.href} className="text-slate-500 hover:text-slate-300 text-xs transition-colors">{item.name}</Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">System Pulse: Stable</span>
                    </div>
                </div>
            </div>

            {/* Subtle Gradient Trace */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </footer>
    );
}
