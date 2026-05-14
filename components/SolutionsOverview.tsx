import React from 'react';
import { Layers, Truck, ShieldCheck, Users, ChevronRight, Zap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const solutions = [
    {
        title: "Advanced GIS & Spatial Analytics Platform",
        subtitle: "Spatial Analytics",
        description: "Transform complex geospatial datasets into actionable intelligence with our GIS platform. Perform high-precision terrain modeling, real-time infrastructure mapping, and specialized demographic analysis. Build enterprise GIS solutions, mapping applications, and location intelligence systems with scalable geospatial analytics.",
        icon: Layers,
        href: "/gis",
        color: "cyan",
        infoPoints: [
            "Advanced GIS Heatmaps & Density Analysis",
            "Sovereign Geospatial Data Modeling",
            "Raster Image Processing & Terrain Mapping for GIS Applications"
        ]
    },
    {
        title: "FMS FleetSense – Fleet Management Platform",
        subtitle: "Fleet Management & Vehicle Tracking",
        description: "Take total control of your fleet with FMS FleetSense. Real-time GPS tracking, fuel monitoring, driver behavior analytics, and AI-driven predictive maintenance in one unified fleet management dashboard. Perfect for logistics, transportation, and enterprise mobility operations.",
        icon: Truck,
        href: "/fleet-management-system",
        color: "emerald",
        infoPoints: [
            "1-Second Live GPS Fleet Tracking",
            "Real-time Fuel Burn & Theft Alerts for Vehicles",
            "AI-Driven Predictive Maintenance Scheduling"
        ]
    },
    {
        title: "Next-Gen eKYC – Digital Identity Verification Platform",
        subtitle: "Secure eKYC & Identity Verification",
        description: "Next-Gen eKYC provides sovereign digital identity verification for secure onboarding and KYC compliance. Deploy AI-powered biometric face matching, document OCR, and liveness detection entirely on your own infrastructure. Perfect for banks, fintechs, and enterprise digital identity solutions.",
        icon: ShieldCheck,
        href: "/ngekyc",
        color: "blue",
        infoPoints: [
            "ISO-Standard Biometric Facial Parsing & Matching",
            "AI-Powered Liveness & Anti-Spoofing Verification",
            "Instant eKYC Verification in Under 3 Seconds"
        ]
    },
    {
        title: "Field Force Tracking – Mobile Workforce Management Platform",
        subtitle: "Real-Time Workforce Visibility & Field Operations",
        description: "Maximize productivity with our Field Force Tracking platform. Monitor live agent movements, verify attendance via geo-fencing, and optimize task distribution for mobile teams. Ideal for enterprise field workforce management, location tracking, and real-time operational insights.",
        icon: Users,
        href: "/field-force-tracking",
        color: "indigo",
        infoPoints: [
            "Real-Time GPS-Based Agent Movement Tracking",
            "Automated Geo-Fence Attendance Verification",
            "Mobile Team Task Dispatch & Optimized Routing for Field Operations"
        ]
    },
    {
        title: "Security & Compliance – US Standard GIS Infrastructure",
        subtitle: "Enterprise-Grade Security & Compliance",
        description: "Mapifyit meets the rigorous security standards required for sensitive utility, telecom, and government projects. We maintain compliance with SOC 2, ISO 27001, and NIST frameworks, ensuring your geospatial data is protected by the highest industry standards.",
        icon: ShieldCheck,
        href: "/compliance",
        color: "emerald",
        infoPoints: [
            "SOC 2 Type II & ISO 27001 Certified Infrastructure",
            "US-Based Data Residency with NERC CIP Compliance",
            "Full CCPA & GDPR Data Privacy Alignment"
        ]
    }
];

export default function SolutionsOverview() {
    return (
        <section className="py-6 md:py-12 relative overflow-hidden bg-[#030712]">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-indigo-600/5 rounded-full blur-[70px] md:blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24 px-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-6">
                        <Zap className="w-3 h-3" /> Enterprise GIS & Vertical Solutions
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 px-1">Industry Leaders</span> & Enterprise Teams
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Beyond standard mapping, we deliver specialized GIS platforms and enterprise vertical solutions. Solve complex spatial and security challenges with scalable Maps APIs and location intelligence.
                    </p>
                </div>

                <div className="space-y-6 md:space-y-12">
                    {solutions.map((item, i) => (
                        <div key={i} className={`relative p-6 sm:p-10 md:p-14 lg:p-16 rounded-[1.5rem] sm:rounded-[2.5rem] border bg-[#080E18] overflow-hidden transition-all hover:border-white/20 group shadow-2xl ${item.color === 'cyan' ? 'border-cyan-500/20' :
                            item.color === 'emerald' ? 'border-emerald-500/20' :
                                item.color === 'blue' ? 'border-blue-500/20' :
                                    'border-indigo-500/20'
                            }`}>
                            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start lg:items-center relative z-10">
                                {/* Left text section */}
                                <div className="lg:col-span-7">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-8">
                                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-110 ${item.color === 'cyan' ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' :
                                            item.color === 'emerald' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                                                item.color === 'blue' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                                                    'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                                            }`}>
                                            <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                                        </div>
                                        <div>
                                            <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] ${item.color === 'cyan' ? 'text-cyan-500' :
                                                item.color === 'emerald' ? 'text-emerald-500' :
                                                    item.color === 'blue' ? 'text-blue-500' :
                                                        'text-indigo-500'
                                                }`}>{item.subtitle}</span>
                                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 leading-tight tracking-tight">{item.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-0 font-light">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Right bullet points & CTA section */}
                                <div className="lg:col-span-5 flex flex-col justify-center">
                                    <ul className="space-y-4 mb-10">
                                        {item.infoPoints.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-slate-300 text-sm sm:text-base">
                                                <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${item.color === 'cyan' ? 'text-cyan-500' :
                                                    item.color === 'emerald' ? 'text-emerald-500' :
                                                        item.color === 'blue' ? 'text-blue-500' :
                                                            'text-indigo-500'
                                                    }`} />
                                                <span className="leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={item.href}
                                        className={`inline-flex items-center justify-center gap-3 font-bold px-10 py-4 rounded-xl border w-full sm:w-max transition-all shadow-lg hover:shadow-cyan-500/10 ${item.color === 'cyan' ? 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10' :
                                            item.color === 'emerald' ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10' :
                                                item.color === 'blue' ? 'text-blue-400 border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10' :
                                                    'text-indigo-400 border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10'
                                            }`}
                                    >
                                        Learn More <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Deep Ambient background glow */}
                            <div className={`absolute -right-20 -top-20 w-80 h-80 blur-[100px] rounded-full opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700 ${item.color === 'cyan' ? 'bg-cyan-500' :
                                item.color === 'emerald' ? 'bg-emerald-500' :
                                    item.color === 'blue' ? 'bg-blue-500' :
                                        'bg-indigo-500'
                                }`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
