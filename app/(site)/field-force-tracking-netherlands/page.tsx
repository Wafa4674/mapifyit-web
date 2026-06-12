"use client";
import Script from "next/script";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Map,
    Crosshair,
    Zap,
    BarChart,
    MapPin,
    Users,
    CheckCircle,
    Briefcase,
    Truck,
    Wrench,
    Phone,
    ArrowRight,
    ShieldCheck,
    Globe,
    Clock,
    LayoutDashboard,
    Navigation,
    Shield,
    Server,
    Lock,
    Cloud,
    Database
} from 'lucide-react';

// --- JSON-LD Structured Data ---
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MapifyIt FFT - Field Force Tracking",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Android, iOS, Windows Server, Linux",
    "provider": {
        "@type": "Organization",
        "name": "MapifyIt"
    },
    "description": "Enterprise Field Force Tracking software with real-time GPS agent tracking, geofence attendance automation, intelligent task dispatching, and workforce productivity analytics. Available as SaaS, Private Cloud, or completely On-Premises."
};

// --- ReNetherlandsble Components ---

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-[#0F141A]/80 backdrop-blur-md border border-[#1F2933] rounded-2xl shadow-lg ${className}`}>
        {children}
    </div>
);

const PrimaryButton = ({ children, className = "", icon = false }: { children: React.ReactNode, className?: string, icon?: boolean }) => (
    <button className={`bg-[#2F80FF] hover:bg-[#4DA3FF] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_25px_rgba(77,163,255,0.5)] ${className}`}>
        {children}
        {icon && <ArrowRight size={18} />}
    </button>
);

const SecondaryButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <button className={`bg-transparent border border-[#1F2933] hover:border-[#4DA3FF] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ${className}`}>
        {children}
    </button>
);


const Hero = () => (
    <section className="pt-22 pb-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2F80FF] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F141A] border border-[#1F2933] text-[#4DA3FF] text-sm font-medium mb-6">
                    <Globe size={14} /> Global Enterprise Ready
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                    Field Force Tracking Software <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F80FF] to-[#4DA3FF]">with Real-Time GPS Netherlands</span>
                </h1>
                <p className="text-lg text-[#A0A8B3] mb-8 leading-relaxed max-w-xl">
                    Mobile Workforce Intelligence is an enterprise-grade Field Force Tracking (FFT) solution designed to give organizations complete real-time visibility of their mobile workforce. With advanced GPS tracking, geofence-based attendance automation, intelligent task dispatching, and productivity analytics, businesses can efficiently manage field teams and improve operational performance.
                </p>
                <p className="text-lg text-[#A0A8B3] mb-8 leading-relaxed max-w-xl">
                    Our platform enables companies to monitor field agents, delivery staff, service technicians, and sales representatives while optimizing routes, tracking visits, and ensuring accountability in the field. By combining location intelligence with workforce analytics, organizations can make better decisions and improve productivity. </p>
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/contact-us"
                        className="bg-[#2F80FF] hover:bg-[#4DA3FF] text-white font-medium py-3 px-6 transition-all duration-300 flex items-center justify-center rounded-full gap-2 shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_25px_rgba(77,163,255,0.5)]"
                    >
                        Contact Our Team <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="/contact-us"
                        className="bg-transparent border border-[#1F2933] hover:border-[#4DA3FF] text-white font-medium py-3 px-6 transition-all duration-300 flex items-center rounded-full justify-center"
                    >
                        Request a Demo
                    </Link>
                </div>
                <div className="mt-10 flex items-center gap-6 text-[#A0A8B3] text-sm">
                    <div className="flex items-center gap-2"><CheckCircle size={16} className="text-[#2F80FF]" /> No credit card required</div>
                    <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#2F80FF]" /> Enterprise Grade Security</div>
                </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
                <GlassCard className="p-2 h-[400px] flex flex-col relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-4 px-4 pt-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    {/* Simulated Map Grid */}
                    <div className="flex-1 relative bg-[#0B0F14] rounded-xl border border-[#1F2933] overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1F2933_1px,transparent_1px),linear-gradient(to_bottom,#1F2933_1px,transparent_1px)] bg-[size:3rem_3rem]" />

                        {/* Animated Agents */}
                        <motion.div
                            animate={{ x: [50, 150, 200, 100, 50], y: [50, 80, 200, 150, 50] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0"
                        >
                            <div className="relative">
                                <div className="absolute -inset-2 bg-[#2F80FF] rounded-full opacity-30 animate-ping" />
                                <div className="w-4 h-4 bg-[#2F80FF] rounded-full border-2 border-white relative z-10 shadow-[0_0_15px_#2F80FF]" />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ x: [300, 250, 100, 150, 300], y: [100, 200, 250, 100, 100] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0"
                        >
                            <div className="relative">
                                <div className="absolute -inset-2 bg-[#4DA3FF] rounded-full opacity-30 animate-ping" />
                                <div className="w-4 h-4 bg-[#4DA3FF] rounded-full border-2 border-white relative z-10 shadow-[0_0_15px_#4DA3FF]" />
                            </div>
                        </motion.div>

                        {/* UI Overlay */}
                        <div className="absolute bottom-4 right-4 bg-[#0F141A]/90 backdrop-blur border border-[#1F2933] p-3 rounded-lg flex flex-col gap-2">
                            <div className="flex items-center gap-3 text-xs text-white">
                                <div className="w-2 h-2 rounded-full bg-[#2F80FF]" /> Agent 01 - Active
                            </div>
                            <div className="flex items-center gap-3 text-xs text-[#A0A8B3]">
                                <div className="w-2 h-2 rounded-full bg-[#4DA3FF]" /> Agent 02 - En Route
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </FadeIn>
        </div>
    </section>
);


const CoreFeatures = () => {
    const features = [
        { icon: <Map className="text-[#2F80FF]" size={24} />, title: "Live Agent Tracking", desc: "Continuous position updates without battery drain for complete visibility." },
        { icon: <Crosshair className="text-[#2F80FF]" size={24} />, title: "Geofence Automation", desc: "Automatic attendance based on territory entry and exit protocols." },
        { icon: <Zap className="text-[#2F80FF]" size={24} />, title: "Intelligent Dispatch", desc: "Location-aware task assignment prioritizing nearest available agents." },
        { icon: <BarChart className="text-[#2F80FF]" size={24} />, title: "Productivity Data", desc: "Advanced analytics on workforce performance and territory coverage." }
    ];

    return (
        <section id="features" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Platform Capabilities</h2>
                    <p className="text-[#A0A8B3] max-w-2xl mx-auto">Powerful tools engineered for global enterprises to manage field operations at scale.</p>
                </FadeIn>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <GlassCard className="p-8 h-full hover:-translate-y-2 transition-transform duration-300 group">
                                <div className="w-14 h-14 bg-[#0B0F14] border border-[#1F2933] rounded-xl flex items-center justify-center mb-6 group-hover:border-[#2F80FF] transition-colors">
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                                <p className="text-[#A0A8B3] leading-relaxed">{f.desc}</p>
                            </GlassCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureDetailSection = ({ title, subtitle, content, list, visual, reverse, isDark }: {
    title: string,
    subtitle?: string,
    content: React.ReactNode,
    list?: string[],
    visual: React.ReactNode,
    reverse?: boolean,
    isDark?: boolean
}) => (
    <section className={`py-24 px-6 ${isDark ? 'bg-[#0F141A] border-y border-[#1F2933]' : ''}`}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className={`flex flex-col gap-6 ${reverse ? 'lg:order-2' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
                {subtitle && <h3 className="text-[#2F80FF] text-xl font-medium">{subtitle}</h3>}
                <div className="text-[#A0A8B3] text-lg leading-relaxed">{content}</div>
                {list && (
                    <ul className="space-y-4 mt-2">
                        {list.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white">
                                <CheckCircle className="text-[#2F80FF] shrink-0" size={20} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </FadeIn>
            <FadeIn delay={0.2} className={reverse ? 'lg:order-1' : ''}>
                {visual}
            </FadeIn>
        </div>
    </section>
);

const RealTimeTrackingVisual = () => (
    <GlassCard className="p-4 h-[400px] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1F2933_1px,transparent_1px),linear-gradient(to_bottom,#1F2933_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        {/* Central Hub */}
        <div className="w-12 h-12 bg-[#0B0F14] border-2 border-[#1F2933] rounded-xl z-10 flex items-center justify-center">
            <MapPin className="text-white" size={24} />
        </div>
        {/* Agents radiating outward */}
        {[0, 72, 144, 216, 288].map((deg, i) => (
            <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-4 h-4"
                animate={{
                    x: [0, Math.cos(deg * Math.PI / 180) * 120, Math.cos(deg * Math.PI / 180) * 150],
                    y: [0, Math.sin(deg * Math.PI / 180) * 120, Math.sin(deg * Math.PI / 180) * 150],
                    opacity: [0, 1, 0.5]
                }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
            >
                <div className="w-3 h-3 bg-[#2F80FF] rounded-full shadow-[0_0_10px_#2F80FF]" />
            </motion.div>
        ))}
        {/* Scanning UI */}
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#2F80FF]/20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
        />
    </GlassCard>
);

const GeofenceVisual = () => (
    <GlassCard className="p-4 h-[400px] relative overflow-hidden flex items-center justify-center bg-[#0B0F14]">
        {/* <Map className="absolute text-[#1F2933] opacity-20 w-[600px] h-[600px]" /> */}

        <div className="relative w-64 h-64 flex items-center justify-center z-10">
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#2F80FF] bg-[#2F80FF]/10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="bg-[#0F141A] border border-[#2F80FF] px-4 py-2 rounded-full flex items-center gap-2 relative z-20 shadow-lg">
                <MapPin className="text-[#2F80FF]" size={16} />
                <span className="text-white text-sm font-medium">Territory A</span>
            </div>

            {/* Agent crossing boundary */}
            <motion.div
                className="absolute w-8 h-8 bg-white rounded-full border-4 border-[#0F141A] flex items-center justify-center shadow-lg z-30"
                animate={{ x: [-150, 0, 150], y: [-50, 0, 50] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
                <Users className="text-[#0B0F14] w-4 h-4" />
            </motion.div>

            {/* Event trigger tooltip */}
            <motion.div
                className="absolute bg-green-500/20 border border-green-500 text-green-400 text-xs px-2 py-1 rounded"
                animate={{ opacity: [0, 1, 0], x: [-130, 20, 170], y: [-80, -30, 20] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
                Check-in logged
            </motion.div>
        </div>
    </GlassCard>
);

const DispatchVisual = () => (
    <GlassCard className="p-6 h-[400px] flex gap-4 bg-[#0B0F14]">
        <div className="w-1/3 flex flex-col gap-3">
            <div className="text-white font-medium mb-2">Pending Tasks</div>
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="bg-[#0F141A] border border-[#1F2933] p-3 rounded-lg"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: i === 1 ? [0.5, 1, 0.5] : 0.5, borderColor: i === 1 ? ['#1F2933', '#2F80FF', '#1F2933'] : '#1F2933' }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <div className="h-2 w-16 bg-[#1F2933] rounded mb-2" />
                    <div className="h-2 w-10 bg-[#1F2933] rounded" />
                </motion.div>
            ))}
        </div>
        <div className="flex-1 relative border border-[#1F2933] rounded-lg overflow-hidden flex items-center justify-center bg-[#0F141A]">
            <svg className="absolute inset-0 w-full h-full">
                <motion.path
                    d="M 50 150 Q 150 50 250 150 T 400 100"
                    fill="transparent"
                    stroke="#1F2933"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                />
                <motion.path
                    d="M 50 150 Q 150 50 250 150 T 400 100"
                    fill="transparent"
                    stroke="#4DA3FF"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
            <div className="absolute left-[34px] top-[134px] w-8 h-8 bg-[#2F80FF] rounded-full border-4 border-[#0F141A] flex items-center justify-center z-10">
                <Users className="text-white w-3 h-3" />
            </div>
            <div className="absolute right-[24px] top-[84px] w-8 h-8 bg-green-500 rounded-full border-4 border-[#0F141A] flex items-center justify-center z-10">
                <CheckCircle className="text-white w-4 h-4" />
            </div>
        </div>
    </GlassCard>
);

const AnalyticsVisual = () => (
    <GlassCard className="p-6 h-[400px] flex flex-col justify-between bg-[#0B0F14]">
        <div className="flex justify-between items-center mb-6">
            <div className="text-white font-medium">Workforce Performance</div>
            <div className="flex gap-2">
                <div className="w-4 h-4 bg-[#2F80FF] rounded-sm" />
                <div className="w-4 h-4 bg-[#1F2933] rounded-sm" />
            </div>
        </div>
        <div className="flex-1 flex items-end justify-between gap-2 px-4 border-b border-[#1F2933] pb-2">
            {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <motion.div
                        className="w-full bg-[#2F80FF] rounded-t-sm"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                    />
                </div>
            ))}
        </div>
        <div className="flex justify-between mt-4">
            <div className="bg-[#0F141A] border border-[#1F2933] p-4 rounded-xl w-[48%]">
                <div className="text-[#A0A8B3] text-xs mb-1">Total Visits</div>
                <div className="text-white text-2xl font-bold">1,248</div>
            </div>
            <div className="bg-[#0F141A] border border-[#1F2933] p-4 rounded-xl w-[48%]">
                <div className="text-[#A0A8B3] text-xs mb-1">Avg Duration</div>
                <div className="text-white text-2xl font-bold">42m</div>
            </div>
        </div>
    </GlassCard>
);

const SecuritySection = () => {
    const securityFeatures = [
        { icon: <Lock className="text-[#2F80FF]" size={28} />, title: "End-to-End Encryption", desc: "All transit and at-rest location data is secured using AES-256 encryption, ensuring workforce movements cannot be intercepted." },
        { icon: <Shield className="text-[#2F80FF]" size={28} />, title: "Data Privacy & Compliance", desc: "Built to comply with strict global privacy laws like GDPR and CCPA. Control exactly what data is collected and establish custom retention policies." },
        { icon: <Users className="text-[#2F80FF]" size={28} />, title: "Role-Based Access (RBAC)", desc: "Granular access controls ensure that managers and dispatchers only see the data and agents relevant to their specific territories." }
    ];

    return (
        <section id="security" className="py-24 px-6 bg-[#0F141A] border-y border-[#1F2933]">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F14] border border-[#1F2933] text-[#4DA3FF] text-sm font-medium mb-6">
                        <ShieldCheck size={14} /> Enterprise Trust
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Uncompromising Privacy & Security</h2>
                    <p className="text-[#A0A8B3] max-w-2xl mx-auto text-lg">Protecting your operational data and respecting employee privacy is our highest priority. MapifyIt FFT is built on a security-first architecture.</p>
                </FadeIn>
                <div className="grid md:grid-cols-3 gap-6">
                    {securityFeatures.map((f, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <GlassCard className="p-8 h-full bg-[#0B0F14]">
                                <div className="w-14 h-14 bg-[#0F141A] border border-[#1F2933] rounded-xl flex items-center justify-center mb-6">
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                                <p className="text-[#A0A8B3] leading-relaxed">{f.desc}</p>
                            </GlassCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

const DeploymentSection = () => {
    const architectures = [
        { icon: <Cloud size={32} />, title: "Secure SaaS", desc: "Instantly deploy our multi-tenant cloud solution with automatic updates, managed security, and 99.99% uptime SLAs.", highlighted: false },
        { icon: <Database size={32} />, title: "Private Cloud", desc: "Host MapifyIt FFT in a dedicated instance within your own AWS, Google Cloud, or Azure environment for strict data residency.", highlighted: false },
        { icon: <Server size={32} />, title: "On-Premises Deployment", desc: "For ultimate security, deploy the entire platform directly behind your corporate firewall. Complete control over your infrastructure and data.", highlighted: true }
    ];

    return (
        <section id="deployment" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Flexible Deployment Architectures</h2>
                    <p className="text-[#A0A8B3] max-w-2xl mx-auto text-lg">We understand that global enterprises have strict IT governance. Choose the deployment model that fits your infrastructure requirements.</p>
                </FadeIn>
                <div className="grid md:grid-cols-3 gap-6">
                    {architectures.map((arch, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <GlassCard className={`p-8 h-full relative overflow-hidden transition-all duration-300 ${arch.highlighted ? 'border-[#2F80FF]/50 shadow-[0_0_30px_rgba(47,128,255,0.1)]' : ''}`}>
                                {arch.highlighted && (
                                    <div className="absolute top-0 right-0 bg-[#2F80FF] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                        Enterprise Favorite
                                    </div>
                                )}
                                <div className={`text-[#2F80FF] mb-6 ${arch.highlighted ? 'opacity-100' : 'opacity-80'}`}>
                                    {arch.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{arch.title}</h3>
                                <p className="text-[#A0A8B3] leading-relaxed">{arch.desc}</p>
                            </GlassCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BenefitsSection = () => {
    const benefits = [
        "Real-time workforce visibility",
        "Automated attendance verification",
        "Smarter task assignment",
        "Improved productivity",
        "Data-driven management decisions",
        "Better customer service response times"
    ];

    return (
        <section id="benefits" className="py-24 px-6 bg-[#0B0F14]">
            <div className="max-w-4xl mx-auto">
                <FadeIn className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Benefits of Field Force Tracking</h2>
                    <p className="text-[#A0A8B3] text-lg">Transform your field operations with actionable intelligence and automated workflows.</p>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <GlassCard className="p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
                            {benefits.map((b, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#2F80FF]/10 flex items-center justify-center shrink-0 mt-1">
                                        <CheckCircle className="text-[#2F80FF]" size={18} />
                                    </div>
                                    <span className="text-white text-lg font-medium">{b}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </FadeIn>
            </div>
        </section>
    );
};

const IndustriesSection = () => {
    const industries = [
        { icon: <Wrench size={32} />, name: "Field Service Management" },
        { icon: <Briefcase size={32} />, name: "Sales and Distribution" },
        { icon: <Truck size={32} />, name: "Delivery and Logistics" },
        { icon: <Zap size={32} />, name: "Utilities and Maintenance" },
        { icon: <Phone size={32} />, name: "Telecommunications Field Ops" }
    ];

    return (
        <section id="industries" className="py-24 px-6 bg-[#0F141A] border-t border-[#1F2933]">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Every Industry</h2>
                    <p className="text-[#A0A8B3]">Flexible, scalable architecture adapts to your specific operational needs.</p>
                </FadeIn>
                <div className="flex flex-wrap justify-center gap-6">
                    {industries.map((ind, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="bg-[#0B0F14] border border-[#1F2933] hover:border-[#2F80FF] hover:bg-[#151b23] transition-all duration-300 rounded-2xl p-6 w-[280px] h-[180px] flex flex-col items-center justify-center text-center group cursor-pointer">
                                <div className="text-[#4DA3FF] mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {ind.icon}
                                </div>
                                <h3 className="text-white font-medium">{ind.name}</h3>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection = () => (
    <section className="py-24 px-6 relative overflow-hidden bg-[#0B0F14]">
        <div className="absolute inset-0">
            <motion.div
                className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2F80FF] opacity-[0.1] blur-[150px] rounded-full"
                animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
            <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Scale Your Field Workforce with MapifyIt</h2>
                <p className="text-xl text-[#A0A8B3] mb-10 max-w-2xl mx-auto">
                    Deploy a secure, intelligent Field Force Tracking platform designed for modern mobile workforce operations.
                </p>
                {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/contact-us"
                        className="text-lg py-4 px-8 bg-[#2F80FF] hover:bg-[#4DA3FF] text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(47,128,255,0.3)]"
                    >
                        Contact Our Team <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="/contact-us"
                        className="text-lg py-4 px-8 bg-[#0F141A] border border-[#1F2933] hover:border-[#4DA3FF] text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                        Request a Demo
                    </Link>
                </div> */}
            </FadeIn>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-[#0B0F14] py-12 px-6 border-t border-[#1F2933]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <MapPin className="text-[#2F80FF]" size={24} />
                <span className="text-white font-bold text-lg">MapifyIt <span className="text-[#2F80FF]">FFT</span></span>
            </div>
            <div className="text-[#A0A8B3] text-sm">
                &copy; {new Date().getFullYear()} MapifyIt. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-[#A0A8B3]">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
    </footer>
);

export default function Page() {
    return (
        <div className="min-h-screen bg-[#0B0F14] text-white font-sans selection:bg-[#2F80FF]/30">
            <Script
                id="fft-jsonld"
                type="application/ld+json"
                src="/schema/field-force-tracking.json"
                strategy="afterInteractive"
            />

            <main>
                <Hero />
                {/* <Introduction /> */}
                <CoreFeatures />

                <FeatureDetailSection
                    title="Real-Time Field Agent Tracking"
                    content={
                        <>
                            <p className="mb-4">Maintain complete situational awareness with continuous background GPS tracking. Our battery-efficient tracking engine ensures devices stay online throughout the entire shift.</p>
                            <p>The centralized dashboard provides improved workforce transparency, allowing dispatchers to see live positions and historical breadcrumb trails.</p>
                        </>
                    }
                    list={["Continuous background GPS tracking", "Centralized dashboard", "Battery efficient tracking engine", "Improved workforce transparency"]}
                    visual={<RealTimeTrackingVisual />}
                    isDark={true}
                />

                <FeatureDetailSection
                    title="Geofence Attendance Automation"
                    content={
                        <>
                            <p className="mb-4">Eliminate manual timesheets and buddy punching. MapifyIt FFT automatically logs attendance based on virtual perimeters drawn around client sites or territories.</p>
                            <p>Ensure location-verified field activity with precision geofencing that triggers events upon entry and exit.</p>
                        </>
                    }
                    list={["Automatic check-in and check-out", "Territory-based attendance", "Location verified field activity", "Reduced manual reporting"]}
                    visual={<GeofenceVisual />}
                    reverse={true}
                />

                <FeatureDetailSection
                    title="Intelligent Task Dispatch"
                    content={
                        <>
                            <p className="mb-4">Optimize your operations with location-aware dispatching. Our algorithm automatically identifies the nearest available agent to a new task, balancing workload and reducing travel time.</p>
                            <p>Achieve faster service response times and eliminate unnecessary mileage overhead.</p>
                        </>
                    }
                    list={["Proximity-based task assignment", "Workload balancing", "Faster service response", "Reduced travel time"]}
                    visual={<DispatchVisual />}
                    isDark={true}
                />

                <FeatureDetailSection
                    title="Productivity Analytics"
                    content={
                        <>
                            <p className="mb-4">Transform raw location data into actionable workforce intelligence. Monitor route adherence, track exact visit durations, and ensure complete customer coverage.</p>
                            <p>Leverage historical workforce analytics to identify top performers and optimize future territory planning.</p>
                        </>
                    }
                    list={["Route adherence monitoring", "Visit duration tracking", "Customer coverage insights", "Historical workforce analytics"]}
                    visual={<AnalyticsVisual />}
                    reverse={true}
                />

                <SecuritySection />
                <DeploymentSection />

                <BenefitsSection />
                <IndustriesSection />
                <CTASection />
            </main>

        </div>
    );
}