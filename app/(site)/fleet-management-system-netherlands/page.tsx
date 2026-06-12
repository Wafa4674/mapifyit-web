"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Map, Navigation, Activity, Bell, Smartphone, Shield,
    Truck, BarChart3, AlertTriangle, Route, Settings,
    Globe, Cpu, Zap, CheckCircle2, ArrowRight, Menu, X,
    MapPin, Battery, Gauge, Power, Phone
} from 'lucide-react';

// --- Global Theme Colors ---
const theme = {
    bg: '#0B0F14',
    section: '#0F141A',
    primary: '#2F80FF',
    secondary: '#4DA3FF',
    textPrimary: '#FFFFFF',
    textSecondary: '#A0A8B3',
    border: '#1F2933'
};

// --- Reusable UI Components ---

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode, delay?: number, className?: string, direction?: "up" | "down" | "left" | "right" }) => {
    const directions = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: 30, y: 0 },
        right: { x: -30, y: 0 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const Button = ({ children, primary, className = "", icon, ...props }: { children: React.ReactNode, primary?: boolean, className?: string, icon?: React.ReactNode, [key: string]: any }) => {
    return (
        <button
            className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300
        ${primary
                    ? 'bg-[#2F80FF] text-white hover:bg-[#4DA3FF] shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_30px_rgba(77,163,255,0.5)]'
                    : 'bg-[#0F141A] text-white border border-[#1F2933] hover:border-[#4DA3FF] hover:bg-[#151C24]'
                } ${className}`}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
            </span>
            {primary && (
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
            )}
        </button>
    );
};

// --- Page Sections ---


const Hero = () => {
    return (
        <section className="relative pt-20 pb-10 md:pt-22 md:pb-18 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[#2F80FF]/20 opacity-50 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="max-w-2xl">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2F80FF]/30 bg-[#2F80FF]/10 text-[#4DA3FF] text-xs font-semibold uppercase tracking-wider mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4DA3FF] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4DA3FF]"></span>
                            </span>
                            MapifyIt FMS 2.0 is Live
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                            Fleet Management System<p><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F80FF] to-[#4DA3FF]">with Real-Time GPS Tracking Netherlands</span></p>
                        </h1>
                        <p className="text-lg md:text-xl text-[#A0A8B3] mb-8 leading-relaxed max-w-xl">
                            MapifyIt’s Fleet Management System (FMS) is an enterprise-grade solution for organizations managing large-scale vehicle fleets, logistics operations, and mission-critical transportation. The platform combines real-time GPS vehicle tracking, AI-driven route optimization, predictive maintenance, fuel monitoring, and driver behavior analytics into a secure, sovereign dashboard with zero third-party data exposure. Fleet operators gain complete visibility and control across vehicles, drivers, routes, and assets, enabling smarter fleet decisions, lower operational costs, and safer operations.
                        </p>
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact-us"
                                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 bg-[#2F80FF] text-white hover:bg-[#4DA3FF] shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_30px_rgba(77,163,255,0.5)]"
                            >
                                <Phone className="w-4 h-4" /> Contact Our Team
                                <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowRight className="w-4 h-4" /></span>
                            </Link>
                            <Link
                                href="/contact-us"
                                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 bg-[#0F141A] text-white border border-[#1F2933] hover:border-[#4DA3FF] hover:bg-[#151C24]"
                            >
                                Request a Demo
                            </Link>
                        </div>
                    </FadeIn>
                </div>

                {/* Mock Fleet Dashboard UI Card */}
                <FadeIn direction="left" delay={0.2} className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl border border-[#1F2933] bg-[#0F141A] shadow-[0_0_50px_-12px_rgba(47,128,255,0.25)] flex flex-col overflow-hidden group">

                    {/* Dashboard Header */}
                    <div className="h-12 border-b border-[#1F2933] flex items-center justify-between px-4 bg-[#0B0F14]/50">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="text-xs text-[#A0A8B3] font-mono bg-[#1F2933]/50 px-2 py-1 rounded">Live Telemetry</div>
                    </div>

                    <div className="flex-1 flex relative bg-[#0B0F14]">
                        {/* Sidebar */}
                        <div className="w-16 md:w-48 border-r border-[#1F2933] p-3 flex flex-col gap-2 bg-[#0F141A]/50">
                            {[Truck, Route, Activity, Settings].map((Icon, i) => (
                                <div key={i} className={`p-2 rounded-lg flex items-center gap-3 ${i === 0 ? 'bg-[#2F80FF]/10 text-[#4DA3FF]' : 'text-[#A0A8B3] hover:bg-[#1F2933]'}`}>
                                    <Icon className="w-5 h-5 shrink-0" />
                                    <span className="hidden md:block text-xs font-medium">
                                        {['Fleet', 'Routes', 'Analytics', 'Settings'][i]}
                                    </span>
                                </div>
                            ))}

                            <div className="mt-auto hidden md:block">
                                <div className="text-[10px] text-[#A0A8B3] uppercase tracking-wider mb-2">Active Vehicles</div>
                                <div className="flex flex-col gap-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex items-center gap-2 text-xs text-white">
                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                            Vehicle-{1040 + i}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Map Area */}
                        <div className="flex-1 relative overflow-hidden">
                            {/* Fake Map Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F2933_1px,transparent_1px),linear-gradient(to_bottom,#1F2933_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                            {/* Route Line SVG */}
                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                <motion.path
                                    d="M 50,200 Q 150,150 200,250 T 350,150"
                                    fill="none"
                                    stroke="#2F80FF"
                                    strokeWidth="3"
                                    strokeDasharray="5,5"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>

                            {/* Vehicle Markers */}
                            <motion.div
                                animate={{ x: [50, 100, 150, 200, 250, 300, 350], y: [200, 175, 150, 200, 250, 200, 150] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute w-8 h-8 -ml-4 -mt-4 bg-[#2F80FF]/20 rounded-full flex items-center justify-center border border-[#2F80FF]/50 shadow-[0_0_15px_#2F80FF]"
                            >
                                <Truck className="w-4 h-4 text-[#4DA3FF]" />
                            </motion.div>

                            {/* Stats Overlay */}
                            <div className="absolute top-4 right-4 flex gap-2">
                                <div className="bg-[#0F141A]/90 backdrop-blur border border-[#1F2933] rounded-lg p-2 flex items-center gap-2 shadow-lg">
                                    <Activity className="w-4 h-4 text-green-400" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-[#A0A8B3]">Fleet Health</span>
                                        <span className="text-xs font-bold text-white">98.4%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Border Glow on Hover */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#4DA3FF]/50 transition-colors duration-500 pointer-events-none" />
                </FadeIn>
            </div>
        </section>
    );
};

const FeatureGridSection = ({ title, tag, features, id }: { title: string, tag: string, features: any[], id?: string }) => {
    return (
        <section className="py-10 overflow-hidden border-y border-[#1F2933] bg-[#0B0F14]" id={id}>
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-12 max-w-2xl mx-auto">
                        <div className="text-[#2F80FF] font-semibold tracking-wider uppercase text-sm mb-4 flex items-center justify-center gap-2">
                            <span className="w-6 h-[1px] bg-[#2F80FF]" /> {tag} <span className="w-6 h-[1px] bg-[#2F80FF]" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className="group relative p-6 rounded-2xl bg-[#0F141A] border border-[#1F2933] hover:border-[#2F80FF]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(47,128,255,0.15)] flex flex-col h-full">
                                <div className="w-12 h-12 rounded-xl bg-[#0B0F14] border border-[#1F2933] flex items-center justify-center text-[#2F80FF] mb-5 group-hover:scale-110 group-hover:bg-[#2F80FF] group-hover:text-white transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg text-white font-bold mb-2">{feature.title}</h4>
                                {feature.desc && <p className="text-sm text-[#A0A8B3] leading-relaxed">{feature.desc}</p>}
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

const FeatureSection = ({ title, tag, features, visual, reverse, id }: { title: string, tag: string, features: any[], visual: React.ReactNode, reverse?: boolean, id?: string }) => {
    return (
        <section className="py-10 overflow-hidden border-y border-[#1F2933] bg-[#0F141A]/30" id={id}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`grid lg:grid-cols-2 gap-16 items-center`}>

                    <div className={`order-2 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                        <FadeIn>
                            <div className="text-[#2F80FF] font-semibold tracking-wider uppercase text-sm mb-4 flex items-center gap-2">
                                <span className="w-6 h-[1px] bg-[#2F80FF]" /> {tag}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">{title}</h3>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {features.map((feature, i) => (
                                    <div key={i} className="group relative p-6 rounded-2xl bg-[#0F141A] border border-[#1F2933] hover:border-[#2F80FF]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(47,128,255,0.15)] flex flex-col h-full">
                                        <div className="w-12 h-12 rounded-xl bg-[#0B0F14] border border-[#1F2933] flex items-center justify-center text-[#2F80FF] mb-5 group-hover:scale-110 group-hover:bg-[#2F80FF] group-hover:text-white transition-all duration-300">
                                            {feature.icon}
                                        </div>
                                        <h4 className="text-lg text-white font-bold mb-2">{feature.title}</h4>
                                        {feature.desc && <p className="text-sm text-[#A0A8B3] leading-relaxed">{feature.desc}</p>}
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    <div className={`order-1 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                        <FadeIn direction={reverse ? 'right' : 'left'} delay={0.2}>
                            {visual}
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};

// --- Custom Visuals for Feature Sections ---

const RoutingVisual = () => (
    <div className="relative aspect-[4/3] w-full max-w-md mx-auto rounded-3xl border border-[#1F2933] bg-[#0F141A] overflow-hidden p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start z-10">
            <div className="bg-[#0B0F14] border border-[#1F2933] px-3 py-1.5 rounded-lg text-xs font-mono text-[#A0A8B3]">AI Optimizer Running</div>
            <div className="text-right">
                <div className="text-xs text-[#A0A8B3]">Est. Time Saved</div>
                <div className="text-green-400 font-bold">2h 15m</div>
            </div>
        </div>

        <div className="relative h-48 w-full mt-4">
            {/* Nodes and Lines */}
            <svg className="absolute inset-0 w-full h-full" overflow="visible">
                <motion.path
                    d="M 20,150 L 100,50 L 200,100 L 300,20 L 380,120"
                    fill="none" stroke="#1F2933" strokeWidth="2" strokeDasharray="4,4"
                />
                <motion.path
                    d="M 20,150 L 100,50 L 200,100 L 300,20 L 380,120"
                    fill="none" stroke="#2F80FF" strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                {/* Connection points */}
                <circle cx="20" cy="150" r="6" fill="#0B0F14" stroke="#4DA3FF" strokeWidth="3" />
                <circle cx="100" cy="50" r="6" fill="#0B0F14" stroke="#4DA3FF" strokeWidth="3" />
                <circle cx="200" cy="100" r="6" fill="#0B0F14" stroke="#4DA3FF" strokeWidth="3" />
                <circle cx="300" cy="20" r="6" fill="#0B0F14" stroke="#4DA3FF" strokeWidth="3" />
                <circle cx="380" cy="120" r="6" fill="#0B0F14" stroke="#4DA3FF" strokeWidth="3" />
            </svg>

            {/* Moving Vehicle */}
            <motion.div
                animate={{
                    x: [20, 100, 200, 300, 380],
                    y: [150, 50, 100, 20, 120]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute w-6 h-6 -ml-3 -mt-3 bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_white]"
            >
                <Navigation className="w-3 h-3 text-[#0B0F14] rotate-45" />
            </motion.div>
        </div>

        <div className="bg-[#0B0F14] border border-[#1F2933] rounded-xl p-3 mt-4 flex gap-4 z-10">
            <div className="flex-1">
                <div className="text-[10px] text-[#A0A8B3] uppercase">Current Route</div>
                <div className="text-sm text-white font-medium truncate">Warehouse A → Port Terminal</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
            </div>
        </div>
    </div>
);

const TelematicsVisual = () => (
    <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl border border-[#1F2933] bg-[#0F141A] p-6 grid grid-cols-2 gap-4">
        {/* Fuel Gauge Card */}
        <div className="col-span-2 bg-[#0B0F14] border border-[#1F2933] rounded-2xl p-4 flex items-center justify-between">
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <Battery className="w-4 h-4 text-[#A0A8B3]" />
                    <span className="text-xs font-medium text-[#A0A8B3] uppercase">Fleet Fuel Efficiency</span>
                </div>
                <div className="text-3xl font-bold text-white">8.4 <span className="text-sm font-normal text-[#A0A8B3]">L/100km</span></div>
            </div>
            <div className="w-16 h-16 rounded-full border-[4px] border-[#1F2933] border-t-[#2F80FF] border-r-[#2F80FF] border-b-[#2F80FF] flex items-center justify-center transform -rotate-45">
                <span className="transform rotate-45 text-sm font-bold text-white">75%</span>
            </div>
        </div>

        {/* Small Metric Cards */}
        <div className="bg-[#0B0F14] border border-[#1F2933] rounded-2xl p-4">
            <Gauge className="w-5 h-5 text-yellow-500 mb-2" />
            <div className="text-xs text-[#A0A8B3] mb-1">Avg RPM</div>
            <div className="text-xl font-bold text-white">2,140</div>
            <motion.div
                className="h-1 bg-[#1F2933] mt-3 rounded-full overflow-hidden"
            >
                <motion.div
                    animate={{ width: ['40%', '70%', '50%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-full bg-yellow-500"
                />
            </motion.div>
        </div>

        <div className="bg-[#0B0F14] border border-[#1F2933] rounded-2xl p-4">
            <Shield className="w-5 h-5 text-green-500 mb-2" />
            <div className="text-xs text-[#A0A8B3] mb-1">Safety Score</div>
            <div className="text-xl font-bold text-white">94/100</div>
            <motion.div
                className="h-1 bg-[#1F2933] mt-3 rounded-full overflow-hidden"
            >
                <motion.div
                    animate={{ width: ['90%', '95%', '94%'] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="h-full bg-green-500"
                />
            </motion.div>
        </div>

        {/* Chart Mockup */}
        <div className="col-span-2 bg-[#0B0F14] border border-[#1F2933] rounded-2xl p-4 h-24 flex items-end justify-between gap-2">
            {[40, 70, 45, 90, 65, 80, 55, 100, 75, 85].map((height, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="w-full bg-gradient-to-t from-[#2F80FF]/20 to-[#2F80FF] rounded-t-sm opacity-80"
                />
            ))}
        </div>
    </div>
);

const AlertsVisual = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const alertsData = [
        {
            id: 1,
            icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
            title: 'Geofence Breach',
            tag: 'Critical',
            tagColor: 'text-red-400 bg-red-500/10 border-red-500/20',
            bgIcon: 'bg-red-500/10 border-red-500/20 shadow-[inset_0_0_10px_rgba(239,68,68,0.2)]',
            desc: <span className="text-white font-medium">Vehicle-402 has exited the secured perimeter.</span>,
            color: '#ef4444',
            accent: 'border-red-500/30'
        },
        {
            id: 2,
            icon: <Gauge className="w-5 h-5 text-yellow-500" />,
            title: 'Over-speed Alert',
            tag: 'Warning',
            tagColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
            bgIcon: 'bg-yellow-500/10 border-yellow-500/20 shadow-[inset_0_0_10px_rgba(234,179,8,0.2)]',
            desc: <span className="text-white font-medium">Vehicle-108 is exceeding 75mph on highway.</span>,
            color: '#eab308',
            accent: 'border-yellow-500/30'
        },
        {
            id: 3,
            icon: <Settings className="w-5 h-5 text-[#0ea5e9]" />,
            title: 'Maintenance Due',
            tag: 'Info',
            tagColor: 'text-[#0ea5e9] bg-[#0ea5e9]/10 border-[#0ea5e9]/20',
            bgIcon: 'bg-[#0ea5e9]/10 border-[#0ea5e9]/20 shadow-[inset_0_0_10px_rgba(14,165,233,0.2)]',
            desc: <span className="text-white font-medium">Group A scheduled for upcoming maintenance.</span>,
            color: '#0ea5e9',
            accent: 'border-[#0ea5e9]/30'
        },
        {
            id: 4,
            icon: <Shield className="w-5 h-5 text-[#8b5cf6]" />,
            title: 'Unauthorized Start',
            tag: 'Alert',
            tagColor: 'text-[#8b5cf6] bg-[#8b5cf6]/10 border-[#8b5cf6]/20',
            bgIcon: 'bg-[#8b5cf6]/10 border-[#8b5cf6]/20 shadow-[inset_0_0_10px_rgba(139,92,246,0.2)]',
            desc: <span className="text-white font-medium">Vehicle-312 engine started outside hours.</span>,
            color: '#8b5cf6',
            accent: 'border-[#8b5cf6]/30'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % alertsData.length);
        }, 3500); // Transitions every 3.5 seconds
        return () => clearInterval(interval);
    }, [alertsData.length]);

    return (
        <div className="relative aspect-[4/3] md:aspect-square w-full max-w-md mx-auto rounded-3xl border border-[#1F2933] bg-[#0B0F14] overflow-hidden p-6 flex flex-col justify-end pb-8">
            {/* Background Map & Geofence Elements */}
            <div className="absolute inset-0 bg-[#0B0F14] overflow-hidden z-0">
                {/* Fake Grid Map Base */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F2933_1px,transparent_1px),linear-gradient(to_bottom,#1F2933_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

                {/* Subtle Sky Blue Glow Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#0ea5e9]/10 blur-[80px] rounded-full pointer-events-none" />

                {/* Geofence Zone - Sky Blue */}
                <div className="absolute top-[40%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-[3rem] border-2 border-dashed border-[#0ea5e9]/60 bg-[#0ea5e9]/10 flex flex-col items-center justify-center shadow-[inset_0_0_30px_rgba(14,165,233,0.15)]">
                    <span className="text-xs text-[#0ea5e9] font-bold tracking-widest uppercase mb-16 opacity-70">Secured Zone</span>
                </div>

                {/* Highway Line for Speeding Vehicle */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                    <path d="M -50,300 Q 150,280 450,200" fill="none" stroke="#eab308" strokeWidth="8" strokeLinecap="round" className="opacity-20" />
                    <path d="M -50,300 Q 150,280 450,200" fill="none" stroke="#1F2933" strokeWidth="2" strokeDasharray="10,10" />
                </svg>

                {/* --- Animations --- */}

                {/* Animation 1: Normal Patrolling Vehicle (Sky Blue) - Stays inside geofence */}
                <svg className="absolute inset-0 w-full h-full">
                    <motion.path
                        d="M 60,150 Q 120,200 150,150 T 120,80 T 60,150"
                        fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="3,3"
                        className="opacity-40"
                    />
                </svg>
                <motion.div
                    animate={{
                        x: [60, 120, 150, 120, 60],
                        y: [150, 200, 150, 80, 150]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute w-6 h-6 -ml-3 -mt-3 bg-[#0B0F14] rounded-full flex items-center justify-center border-2 border-[#0ea5e9] shadow-[0_0_15px_rgba(14,165,233,0.4)] z-10"
                >
                    <Truck className="w-3 h-3 text-[#0ea5e9]" />
                </motion.div>

                {/* Animation 2: Over-speeding Vehicle (Yellow) - Driving fast on highway */}
                <motion.div
                    animate={{
                        x: [-50, 450],
                        y: [300, 200]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute w-7 h-7 -ml-3.5 -mt-3.5 bg-[#0B0F14] rounded-full flex items-center justify-center border-2 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.5)] z-10"
                >
                    <Navigation className="w-3 h-3 text-yellow-500 rotate-45" />
                    <span className="absolute -top-6 whitespace-nowrap text-[9px] font-bold text-yellow-500 bg-yellow-500/20 px-1.5 py-0.5 rounded border border-yellow-500/30">75 MPH</span>
                </motion.div>

                {/* Animation 3: Breaching Vehicle (Red) - Leaving the geofence */}
                <svg className="absolute inset-0 w-full h-full">
                    <motion.path
                        d="M 160,100 Q 250,80 350,40"
                        fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4"
                        className="opacity-50"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeIn" }}
                    />
                </svg>
                <motion.div
                    initial={{ x: 160, y: 100 }}
                    animate={{ x: 350, y: 40 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeIn" }}
                    className="absolute w-8 h-8 -ml-4 -mt-4 bg-[#0B0F14] rounded-full flex items-center justify-center border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)] z-10"
                >
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    {/* Ping Effect */}
                    <motion.span
                        animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inline-flex h-full w-full rounded-full bg-red-500"
                    />
                </motion.div>

                {/* Stationary Pulse (Maintenance Ping - Blue) */}
                <div className="absolute top-[70%] right-[20%] w-4 h-4 bg-[#4DA3FF] rounded-full shadow-[0_0_15px_#4DA3FF]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4DA3FF] opacity-50"></span>
                </div>
            </div>

            {/* Alert Cards Stack Dynamic Loop */}
            <div className="relative z-20 w-full h-[140px] flex flex-col items-center justify-end mt-auto perspective-[500px]">
                <AnimatePresence>
                    {alertsData.map((alert, index) => {
                        const relIndex = (index - activeIndex + alertsData.length) % alertsData.length;

                        const isTop = relIndex === 0;
                        const isSecond = relIndex === 1;
                        const isThird = relIndex === 2;
                        const isHidden = relIndex === 3;

                        // Compute dynamic styles based on position in stack
                        const yPos = isTop ? 0 : isSecond ? -15 : isThird ? -30 : -45;
                        const scale = isTop ? 1 : isSecond ? 0.95 : isThird ? 0.9 : 0.85;
                        const opacity = isTop ? 1 : isSecond ? 0.7 : isThird ? 0.3 : 0;
                        const zIndex = isTop ? 30 : isSecond ? 20 : isThird ? 10 : 0;
                        const width = isTop ? '105%' : isSecond ? '95%' : '85%';

                        if (isHidden) return null; // Don't render the 4th hidden element to save DOM space

                        return (
                            <motion.div
                                key={alert.id}
                                layout
                                initial={false}
                                animate={{
                                    y: isTop ? 0 : (isSecond ? 12 : 24),
                                    scale: isTop ? 1 : (isSecond ? 0.95 : 0.9),
                                    opacity: isTop ? 1 : (isSecond ? 0.7 : 0.4),
                                    zIndex
                                }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                                className={`absolute bottom-0 bg-[#0F141A]/95 backdrop-blur-md border ${alert.accent} rounded-xl p-4 shadow-xl flex gap-4 items-start w-[${width}]`}
                                style={{
                                    width: isTop ? '105%' : isSecond ? '95%' : '85%'
                                }}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${alert.bgIcon}`}>
                                    {alert.icon}
                                </div>

                                {isTop ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex-1 overflow-hidden"
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-semibold text-white truncate pr-2">{alert.title}</span>
                                            <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${alert.tagColor}`}>{alert.tag}</span>
                                        </div>
                                        <p className="text-xs text-[#A0A8B3] leading-relaxed mb-2">
                                            {alert.desc}
                                        </p>
                                        <div className="w-full h-1 bg-[#1F2933] rounded-full overflow-hidden">
                                            <div
                                                className="h-full animate-[pulse_2s_ease-in-out_infinite]"
                                                style={{ backgroundColor: alert.color, width: '100%' }}
                                            />
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="flex h-10 items-center overflow-hidden">
                                        <div className="text-sm font-medium text-white truncate text-opacity-90">{alert.title}</div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
};

// --- Content Data ---

const feature1 = [
    { icon: <MapPin />, title: "Sub-meter Accuracy", desc: "Pinpoint assets with ultra-precise GNSS technology." },
    { icon: <Activity />, title: "1-Second Updates", desc: "Live telemetry streaming without delays." },
    { icon: <BarChart3 />, title: "Live Dashboards", desc: "Visualize your entire fleet operations globally." },
    { icon: <Route />, title: "Historical Playback", desc: "Review past routes and stops effortlessly." }
];

const feature2 = [
    { icon: <Navigation />, title: "Multi-stop Optimization", desc: "Calculate the most efficient sequence for hundreds of stops." },
    { icon: <Globe />, title: "Traffic-Aware", desc: "Dynamic rerouting based on live congestion data." },
    { icon: <Zap />, title: "Instant Recalculation", desc: "Instantly adapt to missed stops or new pickups." },
    { icon: <Truck />, title: "Dispatch Planning", desc: "Assign vehicles based on capacity and proximity." }
];

const feature3 = [
    { icon: <Gauge />, title: "Engine & RPM Monitoring", desc: "Track engine health to prevent sudden breakdowns." },
    { icon: <Battery />, title: "Fuel Consumption", desc: "Identify inefficiencies and reduce fuel costs." },
    { icon: <AlertTriangle />, title: "Harsh Braking", desc: "Detect unsafe driving patterns automatically." },
    { icon: <Shield />, title: "Safety Scoring", desc: "Rank drivers based on objective telemetry data." }
];

const feature4 = [
    { icon: <AlertTriangle />, title: "Over-speed Alerts", desc: "Instant notifications for policy violations." },
    { icon: <Map />, title: "Geofence Breaches", desc: "Know exactly when vehicles enter or leave zones." },
    { icon: <Power />, title: "Unauthorized Movement", desc: "Anti-theft alerts outside of working hours." },
    { icon: <Settings />, title: "Maintenance Alerts", desc: "Predictive warnings based on odometer and engine hours." }
];

const MobileAppsSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-[#0B0F14] to-[#0F141A] border-t border-[#1F2933]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Phones Mockup */}
                    <div className="relative h-[450px] sm:h-[500px] md:h-[600px] w-full flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center scale-[0.75] sm:scale-[0.85] md:scale-100 origin-center transition-transform duration-300">
                            {/* Background Glow */}
                            <div className="absolute w-[300px] h-[300px] bg-[#2F80FF]/20 blur-[100px] rounded-full pointer-events-none" />

                            {/* Phone 1 (Back) */}
                            <motion.div
                                initial={{ x: -50, y: 20, rotate: -5, opacity: 0 }}
                                whileInView={{ x: -40, y: 20, rotate: -5, opacity: 0.6 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="absolute w-[260px] h-[540px] rounded-[3rem] border-[8px] border-[#1F2933] bg-[#0B0F14] shadow-2xl overflow-hidden"
                            >
                                <div className="absolute top-0 inset-x-0 h-6 bg-[#1F2933] rounded-b-xl w-32 mx-auto z-20" />
                                {/* Fake UI */}
                                <div className="p-4 pt-10">
                                    <div className="w-full h-32 bg-[#1F2933] rounded-xl mb-4" />
                                    <div className="space-y-3">
                                        {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-16 bg-[#1F2933] rounded-xl" />)}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone 2 (Front) */}
                            <motion.div
                                initial={{ x: 50, y: 0, rotate: 5, opacity: 0 }}
                                whileInView={{ x: 20, y: 0, rotate: 5, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="absolute w-[280px] h-[580px] rounded-[3rem] border-[8px] border-[#2F80FF]/30 bg-[#0F141A] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col pt-[35px]"
                            >
                                <div className="absolute top-0 inset-x-0 h-7 bg-[#0F141A] border-b border-[#2F80FF]/30 rounded-b-2xl w-36 mx-auto z-20 flex justify-center">
                                    <div className="w-12 h-1 bg-[#1F2933] rounded-full mt-2" />
                                </div>

                                {/* Fake App UI */}
                                <div className="flex-1 bg-[#0B0F14] relative flex flex-col rounded-b-[2rem] overflow-hidden">
                                    <div className="bg-[#2F80FF] h-48 p-6 pt-12 relative overflow-hidden rounded-b-[2rem]">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                        <h4 className="text-white font-semibold text-lg">Active Fleet</h4>
                                        <div className="text-3xl font-bold text-white mt-2">1,248</div>
                                        <div className="text-white/80 text-sm">Vehicles Online</div>
                                    </div>

                                    <div className="flex-1 p-4 -mt-6">
                                        <div className="bg-[#0F141A] rounded-xl p-4 shadow-lg border border-[#1F2933] mb-4 flex gap-4 relative z-10">
                                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-white">All Systems Normal</div>
                                                <div className="text-xs text-[#A0A8B3]">Last sync: Just now</div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="text-xs font-semibold text-[#A0A8B3] uppercase tracking-wider pl-1">Recent Alerts</div>
                                            {[
                                                { t: 'Route Deviation', v: 'Veh-84', c: 'text-yellow-500' },
                                                { t: 'Fuel Critical', v: 'Veh-12', c: 'text-red-500' },
                                                { t: 'Arrived at Depot', v: 'Veh-99', c: 'text-green-500' }
                                            ].map((item, i) => (
                                                <div key={i} className="bg-[#0F141A] rounded-xl p-3 border border-[#1F2933] flex justify-between items-center">
                                                    <div className="flex flex-col">
                                                        <span className={`text-sm font-medium ${item.c}`}>{item.t}</span>
                                                        <span className="text-xs text-[#A0A8B3]">{item.v}</span>
                                                    </div>
                                                    <Smartphone className="w-4 h-4 text-[#A0A8B3]" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="h-16 border-t border-[#1F2933] bg-[#0F141A] flex justify-around items-center px-4 mt-auto">
                                        <Map className="w-6 h-6 text-[#2F80FF]" />
                                        <ListIcon className="w-6 h-6 text-[#A0A8B3]" />
                                        <Bell className="w-6 h-6 text-[#A0A8B3]" />
                                        <Settings className="w-6 h-6 text-[#A0A8B3]" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <FadeIn direction="left">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Mobile Fleet Management Apps</h2>
                        <p className="text-lg text-[#A0A8B3] mb-8 leading-relaxed">
                            Our native iOS and Android apps allow fleet managers to track vehicles in real time, receive instant alerts, monitor driver behavior, view routes and analytics, and manage fleets remotely from anywhere.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Track vehicles in real time globally",
                                "Receive instant push notifications for fleet alerts",
                                "Monitor driver behavior and safety scores",
                                "View historical routes and detailed analytics",
                                "Manage fleets remotely with full administrative control"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <div className="w-6 h-6 rounded-full bg-[#2F80FF]/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-[#4DA3FF]" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4">
                            <Button primary>Download iOS</Button>
                            <Button>Download Android</Button>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};

// Helper for mobile app icons
const ListIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg>
);

const Industries = () => {
    const industries = [
        { icon: <Truck />, title: "Logistics & Delivery", desc: "Optimize last-mile delivery and long-haul logistics routes." },
        { icon: <Globe />, title: "Transportation Networks", desc: "Manage massive, distributed public and private transit fleets." },
        { icon: <Shield />, title: "Government Fleets", desc: "Secure, sovereign tracking for municipal and federal vehicles." },
        { icon: <Settings />, title: "Field Service Operations", desc: "Dispatch technicians dynamically based on live location." },
        { icon: <Cpu />, title: "Construction Fleets", desc: "Track heavy machinery, utilization rates, and theft prevention." },
        { icon: <Smartphone />, title: "Ride-hailing Platforms", desc: "Provide accurate ETAs and dispatch closest available drivers." }
    ];

    return (
        <section className="py-24 bg-[#0B0F14]" id="industries">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for Every Industry</h2>
                        <p className="text-[#A0A8B3] text-lg">
                            Scalable fleet architecture designed to meet the rigorous demands of specialized enterprise operations.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="group relative p-8 rounded-2xl bg-[#0F141A] border border-[#1F2933] hover:border-[#2F80FF]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(47,128,255,0.15)]">
                                <div className="w-12 h-12 rounded-xl bg-[#0B0F14] border border-[#1F2933] flex items-center justify-center text-[#2F80FF] mb-6 group-hover:scale-110 group-hover:bg-[#2F80FF] group-hover:text-white transition-all duration-300">
                                    {ind.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{ind.title}</h3>
                                <p className="text-[#A0A8B3] leading-relaxed">{ind.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default function FMSPage() {
    return (
        <div className="bg-[#0B0F14] text-white selection:bg-[#2F80FF]/30 selection:text-white min-h-screen flex flex-col font-sans">
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
        
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #0B0F14; }
        ::-webkit-scrollbar-thumb { background: #1F2933; border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: #2F80FF; }
      `}} />


            <main className="flex-1">
                <Hero />
                {/* <Introduction /> */}

                <div className="relative">
                    <FeatureGridSection
                        id="tracking"
                        tag="Location Intelligence"
                        title="Real-Time GPS Vehicle Tracking"
                        features={feature1}
                    />
                    <FeatureSection
                        id="routing"
                        tag="Smart Routing"
                        title="AI-Powered Route Optimization"
                        features={feature2}
                        visual={<RoutingVisual />}
                        reverse={true}
                    />
                    <FeatureSection
                        id="telematics"
                        tag="Deep Diagnostics"
                        title="Vehicle Telematics & Driver Analytics"
                        features={feature3}
                        visual={<TelematicsVisual />}
                        reverse={false}
                    />
                    <FeatureSection
                        id="alerts"
                        tag="Proactive Security"
                        title="Intelligent Alerts & Compliance"
                        features={feature4}
                        visual={<AlertsVisual />}
                        reverse={true}
                    />
                </div>

                <MobileAppsSection />
                <Industries />
                {/* <CTA /> */}
            </main>

        </div>
    );
}