import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
    Globe,
    Server,
    Zap,
    Shield,
    Map as MapIcon,
    Layers,
    Activity,
    Navigation,
    Clock,
    ArrowRight,
    CheckCircle2,
    Lock,
    Cpu,
    Minus,
    ArrowLeft,
    Target,
    BarChart3,
    Truck,
    Car,
    Users,
    Building2,
    Sprout,
    DollarSign,
    Search,
    Code2
} from 'lucide-react';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { blogPosts, BlogPost } from '../data/posts';
import { SectionHeader, FeatureCard, ComparisonRow } from '../components/BlogComponents';
import { FAQItem } from '../components/BlogFAQ';

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | MapifyIt Blog`,
        description: post.metaDescription,
        openGraph: {
            title: post.ogTitle || post.title,
            description: post.metaDescription,
            type: 'article',
            publishedTime: post.date,
        }
    };
}

export default async function BlogPostDetail({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    const renderContent = () => {
        switch (slug) {
            case "why-mapify-is-the-best-maps-alternative-to-google-maps-and-mapbox":
                return (
                    <div className="space-y-8 pb-20">
                        {/* 1. Intro Section */}
                        <Reveal delay={100}>
                            <section className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-[40px] p-8 md:p-16 backdrop-blur-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -mr-48 -mt-48" />
                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Location is no longer just a feature—it’s infrastructure.</h2>
                                    <p className="text-slate-400 text-xl leading-relaxed mb-10">
                                        From logistics and ride-hailing to delivery, fintech, and smart cities, modern applications depend heavily on mapping APIs, routing engines, and geospatial analytics. But as businesses scale, most teams run into the same problems:
                                    </p>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                        {[
                                            { t: "Spiral Costs", d: "API costs spiral out of control", icon: DollarSign, color: "red" },
                                            { t: "Inconsistent", d: "Performance becomes inconsistent under load", icon: Activity, color: "orange" },
                                            { t: "Limited", d: "Customization is limited", icon: Lock, color: "amber" },
                                            { t: "Locked-In", d: "You’re locked into someone else’s infrastructure", icon: Shield, color: "rose" }
                                        ].map((item, i) => (
                                            <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all">
                                                <item.icon className={`w-6 h-6 text-${item.color}-500 mb-4`} />
                                                <p className="text-white font-semibold text-sm leading-snug">{item.d}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-10 rounded-3xl bg-blue-600/10 border border-blue-500/20 text-center">
                                        <p className="text-blue-100 italic text-xl">
                                            "Platforms like Google Maps and Mapbox work well at the start—but they’re not built for full control at scale. That’s exactly where MapifyIt comes in."
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </Reveal>

                        {/* 2. What is MapifyIt? */}
                        <Reveal delay={200}>
                            <section>
                                <SectionHeader
                                    title="What is MapifyIt?"
                                    subtitle={
                                        <span>
                                            <a
                                                href="https://mapifyit.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:underline"
                                            >
                                                MapifyIt
                                            </a>
                                            &nbsp; is a full-stack mapping and GIS platform designed for businesses that want to build, scale, and control their own geospatial infrastructure.
                                        </span>
                                    }
                                />
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <p className="text-slate-400 text-lg leading-relaxed">
                                            Instead of relying on third-party APIs for every request, MapifyIt allows you to:
                                        </p>
                                        <ul className="space-y-4">
                                            {[
                                                "Run your own mapping stack (cloud or on-premise)",
                                                "Handle millions of API calls without unpredictable pricing",
                                                "Fully customize routing, search, and map rendering",
                                                "Build enterprise-grade location intelligence systems"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-4 text-slate-300">
                                                    <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                                    </div>
                                                    <span className="text-lg font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-10 rounded-[40px] bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 backdrop-blur-3xl">
                                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Cpu className="text-blue-400" /> Infrastructure Sovereignty</h3>
                                        <p className="text-slate-400 leading-relaxed mb-6">
                                            MapifyIt gives you the raw power to process spatial data without the overhead of public API limitations. You own the code, you own the data, and you own the performance.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {["Full Stack", "Self-Hosted", "Zero Latency", "Cost Efficient"].map((tag, i) => (
                                                <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Reveal>

                        {/* 3. Three Critical Layers */}
                        <Reveal delay={300}>
                            <section>
                                <SectionHeader centered title="The Three Critical Layers" subtitle="At its core, MapifyIt combines three critical layers into one seamless platform." />
                                <div className="grid lg:grid-cols-3 gap-8">
                                    <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                            <MapIcon className="w-8 h-8 text-blue-400" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-6 text-white">1. Mapping APIs</h4>
                                        <ul className="space-y-4 text-slate-400">
                                            <li className="flex items-center gap-3 text-sm">● Vector tiles and map rendering</li>
                                            <li className="flex items-center gap-3 text-sm">● Geocoding and reverse geocoding</li>
                                            <li className="flex items-center gap-3 text-sm">● Routing and navigation</li>
                                        </ul>
                                    </div>
                                    <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all group">
                                        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-8 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                                            <Layers className="w-8 h-8 text-indigo-400" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-6 text-white">2. GIS Intelligence</h4>
                                        <ul className="space-y-4 text-slate-400">
                                            <li className="flex items-center gap-3 text-sm">● Data analysis and visualization</li>
                                            <li className="flex items-center gap-3 text-sm">● Heatmaps and clustering</li>
                                            <li className="flex items-center gap-3 text-sm">● Terrain and raster processing</li>
                                        </ul>
                                    </div>
                                    <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group">
                                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                                            <Activity className="w-8 h-8 text-emerald-400" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-6 text-white">3. Real-Time Systems</h4>
                                        <ul className="space-y-4 text-slate-400">
                                            <li className="flex items-center gap-3 text-sm">● Fleet tracking</li>
                                            <li className="flex items-center gap-3 text-sm">● Geofencing</li>
                                            <li className="flex items-center gap-3 text-sm">● Movement analytics</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </Reveal>

                        {/* 4. Why Traditional Platforms Break */}
                        <Reveal delay={400}>
                            <section>
                                <SectionHeader title="Why Traditional Mapping Platforms Start Breaking at Scale" subtitle="Most companies don’t think about mapping infrastructure early on. They just plug in an API and move fast" />
                                <div className="grid md:grid-cols-2 gap-8">
                                    {[
                                        { t: "1. Unpredictable API Costs", d: "Every map load, route request, or geocoding call adds to your bill. At scale, this becomes one of your biggest expenses." },
                                        { t: "2. Lack of Control", d: "You can’t control how routing works, how data is processed, or how maps are optimized for your use case." },
                                        { t: "3. Vendor Lock-In", d: "Switching away becomes extremely difficult once your system is deeply integrated." },
                                        { t: "4. Limited Customization", d: "Most APIs are built for general use—not for your specific operational needs." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 p-10 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group">
                                            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 group-hover:bg-red-500/20 transition-all">
                                                <Minus className="w-6 h-6 text-red-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-3 text-white">{item.t}</h4>
                                                <p className="text-slate-400 leading-relaxed text-sm">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </Reveal>

                        {/* 5. How MapifyIt Solves These Problems */}
                        <Reveal delay={500}>
                            <section className="p-10 md:p-20 rounded-[60px] bg-blue-600/10 border border-blue-500/20 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
                                <SectionHeader centered title="How MapifyIt Solves These Problems" subtitle="Designed from the ground up to remove industry-standard limitations." />
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {[
                                        { t: "Full Infrastructure Control", d: "You can deploy MapifyIt on your own servers, private cloud, or hybrid setup. This gives you complete ownership of your mapping stack" },
                                        { t: "Predictable Costs", d: "Instead of paying per API call endlessly, you can scale based on infrastructure—making costs more predictable at high volume" },
                                        { t: "Deep Customization", d: "Routing logic, search behavior, map styles, and analytics can all be tailored to your business." },
                                        { t: "Independence", d: "No reliance on Google or Mapbox means better control over performance, data, and compliance." }
                                    ].map((item, i) => (
                                        <div key={i} className="text-center">
                                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle2 className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <h5 className="text-white font-bold mb-3 text-lg">{item.t}</h5>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </Reveal>

                        {/* 6. Core Features */}
                        <Reveal delay={600}>
                            <section>
                                <SectionHeader title="Core Features of MapifyIt Maps" />
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 flex flex-col justify-center">
                                        <h4 className="text-2xl font-bold mb-6 text-white flex items-center gap-3"><Zap className="text-blue-400" /> High-Performance Rendering</h4>
                                        <p className="text-slate-400 leading-relaxed text-lg mb-8">
                                            MapifyIt uses optimized vector tiles to deliver fast, smooth maps across mobile and web applications, even with massive datasets.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-slate-300">
                                                <ArrowRight className="w-4 h-4 text-blue-500" /> Multi-stop route optimization
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-300">
                                                <ArrowRight className="w-4 h-4 text-blue-500" /> Distance matrix calculations
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-300">
                                                <ArrowRight className="w-4 h-4 text-blue-500" /> Real-time routing capabilities
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
                                            <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Target className="text-emerald-400 w-5 h-5" /> Geocoding & Reverse</h5>
                                            <p className="text-slate-400 text-sm leading-relaxed">Convert addresses into coordinates and vice versa with strong global coverage and flexible search capabilities.</p>
                                        </div>
                                        <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
                                            <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Search className="text-blue-400 w-5 h-5" /> Autocomplete & Fuzzy Search</h5>
                                            <p className="text-slate-400 text-sm leading-relaxed">Supports intelligent search with typo tolerance, partial matches, and structured address building.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Reveal>

                        {/* 7. Advanced GIS Capabilities */}
                        <Reveal delay={700}>
                            <section>
                                <SectionHeader centered title="Advanced GIS Capabilities" subtitle="This is where MapifyIt goes beyond most mapping platforms." />
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        { t: "Spatial Analytics", d: "Heatmaps, clustering, and density analysis for large datasets.", icon: BarChart3 },
                                        { t: "Terrain & Raster", d: "Elevation models, satellite imagery, and complex geographic data.", icon: Layers },
                                        { t: "Real-Time Tracking", d: "Track vehicles, assets, and teams with live updates and geographic boundaries.", icon: Navigation },
                                        { t: "Location Intelligence", d: "Turn raw location data into actionable insights for operations, planning, and optimization.", icon: Target }
                                    ].map((item, i) => (
                                        <div key={i} className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all text-center group">
                                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                                <item.icon className="w-7 h-7 text-blue-400" />
                                            </div>
                                            <h5 className="text-white font-bold mb-3">{item.t}</h5>
                                            <p className="text-slate-400 text-xs leading-relaxed">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </Reveal>

                        {/* 8. Comparison Table */}
                        <Reveal delay={800}>
                            <section>
                                <SectionHeader title="MapifyIt vs Google Maps vs Mapbox vs Esri" subtitle="This is where things become clear." />
                                <div className="overflow-x-auto rounded-[40px] border border-white/10 bg-white/[0.02]">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="py-8 px-8 text-left text-sm font-bold uppercase tracking-widest text-slate-500">Feature</th>
                                                <th className="py-8 px-8 text-left text-sm font-bold uppercase tracking-widest text-blue-400">MapifyIt</th>
                                                <th className="py-8 px-8 text-left text-sm font-bold uppercase tracking-widest text-slate-500">Google/Mapbox</th>
                                                {/* <th className="py-8 px-8 text-left text-sm font-bold uppercase tracking-widest text-slate-500">Esri</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <ComparisonRow label="Cost Structure" mapifyit="MapifyIt → Predictable, scalable pricing with infrastructure control" competitors="Usage-based pricing (can become expensive fast)" />
                                            <ComparisonRow label="Deployment" mapifyit="Cloud + On-Premise + Hybrid" competitors="Cloud-only" />
                                            <ComparisonRow label="Customization" mapifyit="Full Engine Control" competitors="Limited parameters" />
                                            <ComparisonRow label="GIS Capabilities" mapifyit="Advanced + Integrated" competitors="Basic / Minimal" />
                                            <ComparisonRow label="Data Ownership" mapifyit="100% Full Ownership" competitors="External dependency" />
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </Reveal>

                        {/* 9. Real-World Use Cases */}
                        <Reveal delay={900}>
                            <section>
                                <SectionHeader centered title="Real-World Use Cases" subtitle="Powering critical infrastructure across diverse industries." />
                                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                                    {[
                                        { t: "Logistics", d: "Route optimization, fleet tracking & Cost reduction", icon: Truck },
                                        { t: "Ride-Hailing & Mobility Apps", d: "Driver tracking, Navigation Systems & ETA calculations", icon: Car },
                                        { t: "Field Workforce Management", d: "Task assignment based on location & Live monitoring of teams", icon: Users },
                                        { t: "Smart Cities & Urban Planning", d: "Infrastructure visualization & Population & trffic analysis", icon: Building2 },
                                        { t: "Agriculture & Environmental Monitoring", d: "Land usage insights & Satellite data analysis", icon: Sprout }
                                    ].map((item, i) => (
                                        <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all">
                                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                                                <item.icon className="w-5 h-5 text-blue-400" />
                                            </div>
                                            <h5 className="text-white font-bold mb-2 text-sm">{item.t}</h5>
                                            <p className="text-slate-400 text-[10px] leading-relaxed">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </Reveal>

                        {/* 10. Cost Advantage */}
                        <Reveal delay={1000}>
                            <section className="grid lg:grid-cols-2 gap-12 items-center p-10 md:p-20 rounded-[60px] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Cost Advantage at Scale</h2>
                                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                        One of the biggest reasons companies switch is cost.
                                    </p>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                                                <Minus className="text-red-500 w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Traditional Providers:</h4>
                                                <p className="text-slate-500 text-sm italic">Costs increase linearly with usage. High-volume systems become extremely expensive.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                <CheckCircle2 className="text-emerald-400 w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">With MapifyIt</h4>
                                                <p className="text-slate-500 text-sm italic">Infrastructure-based scaling reduces marginal cost. High usage becomes significantly more efficient.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10 rounded-[40px] bg-blue-600/20 border border-blue-500/30 text-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-blue-500/10 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                                    <div className="relative z-10">
                                        <DollarSign className="w-20 h-20 text-blue-400 mx-auto mb-8 animate-pulse" />
                                        <h3 className="text-4xl font-bold text-white mb-4">60%+</h3>
                                        <p className="text-blue-200 font-medium">Average cost reduction for high-scale enterprise platforms.</p>
                                    </div>
                                </div>
                            </section>
                        </Reveal>

                        {/* 11. Security & Privacy */}
                        <Reveal delay={1100}>
                            <section>
                                <SectionHeader title="Security, Privacy, and Deployment Flexibility" subtitle="Built for the most demanding enterprise environments." />
                                <div className="grid md:grid-cols-3 gap-8">
                                    {[
                                        { t: "On-Premise", icon: Server },
                                        { t: "Air-Gapped Systems", icon: Lock },
                                        { t: "Private Infrastructure", icon: Shield }
                                    ].map((item, i) => (
                                        <div key={i} className="p-10 rounded-[32px] bg-white/5 border border-white/10 flex flex-col items-center text-center">
                                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 text-blue-400">
                                                <item.icon className="w-7 h-7" />
                                            </div>
                                            <h4 className="text-xl font-bold text-white">{item.t}</h4>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-12 p-8 rounded-3xl bg-indigo-600/10 border border-indigo-500/20 text-center">
                                    <p className="text-indigo-200">Critical for Government Organizations, Financial Institutions, and Compliance-driven Enterprises.</p>
                                </div>
                            </section>
                        </Reveal>

                        {/* 12. More than just a Maps API */}
                        <Reveal delay={1200}>
                            <section className="max-w-7xl mx-auto">
                                <SectionHeader centered title="Why MapifyIt is More Than Just a Maps API" />
                                <p className="text-slate-400 text-xl leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                                    Most tools stop at visualization. MapifyIt goes further by combining Mapping, APIs, GIS, and Real-time systems into one complete location intelligence platform.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {["Mapping", "APIs", "GIS", "Real-Time"].map((word, i) => (
                                        <div key={i} className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold tracking-widest text-center">{word}</div>
                                    ))}
                                </div>
                            </section>
                        </Reveal>

                        {/* 13. Final Thoughts */}
                        <Reveal delay={1300}>
                            <section className="p-5 md:p-10 rounded-[60px] bg-gradient-to-br from-blue-600 to-indigo-600 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Final Thoughts</h2>
                                    <p className="text-white/80 text-xl leading-relaxed max-w-3xl mx-auto mb-12">
                                        As applications become more location-driven, relying entirely on third-party APIs becomes a long-term limitation. MapifyIt gives you a way to take control, reduce costs, and build the future of geospatial technology.
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-slate-900 font-black hover:scale-105 transition-transform">
                                        Get Enterprise Access <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </section>
                        </Reveal>

                        {/* 14. FAQs */}
                        <Reveal delay={1350}>
                            <section>
                                <SectionHeader centered title="Frequently Asked Questions" />
                                <div className="max-w-7xl">
                                    {[
                                        { q: "Is MapifyIt a Google Maps alternative?", a: "Yes. MapifyIt provides mapping APIs, routing, and geospatial capabilities with more flexibility and control." },
                                        { q: "What is the best Mapbox alternative?", a: "MapifyIt is a strong alternative for businesses that need scalability, customization, and cost control." },
                                        { q: "Can MapifyIt be deployed on-premise?", a: "Yes, it supports on-premise and private deployments." },
                                        { q: "Does MapifyIt support global geocoding?", a: "Yes, including address search and reverse geocoding." },
                                        { q: "Is MapifyIt cheaper than Google Maps?", a: "For high-scale applications, it can significantly reduce costs." },
                                        { q: "What industries use MapifyIt?", a: "Logistics, transportation, agriculture, urban planning, and enterprise analytics." }
                                    ].map((faq, i) => (
                                        <FAQItem key={i} question={faq.q} answer={faq.a} />
                                    ))}
                                </div>
                            </section>
                        </Reveal>
                    </div>
                );

            case "global-routing-benchmark-mapifyit-vs-google-maps-2026":
                return (
                    <div className="space-y-8 pb-20">
                        {/* 1. Executive Summary */}
                        <Reveal delay={100}>
                            <section className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-[40px] p-8 md:p-16 backdrop-blur-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -mr-48 -mt-48" />
                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Executive Summary</h2>
                                    <p className="text-slate-400 text-xl leading-relaxed mb-10">
                                        Mapifyit car routing delivers premium-grade accuracy across all five tested regions, with 17 of 19 routes within ±10% of Google Maps on distance — achieving an overall average distance delta of just +0.8% across all tested corridors. Saudi Arabia and the USA match Google Maps at sub-±2% average distance accuracy.
                                    </p>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all text-center">
                                            <h3 className="text-4xl font-bold text-blue-400 mb-2">17/19</h3>
                                            <p className="text-white font-semibold text-sm leading-snug">Routes within ±10% distance</p>
                                        </div>
                                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all text-center">
                                            <h3 className="text-4xl font-bold text-emerald-400 mb-2">0.0%</h3>
                                            <p className="text-white font-semibold text-sm leading-snug">Riyadh → Jeddah perfect match</p>
                                        </div>
                                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all text-center">
                                            <h3 className="text-4xl font-bold text-indigo-400 mb-2">+0.8%</h3>
                                            <p className="text-white font-semibold text-sm leading-snug">Avg distance delta across 19 routes</p>
                                        </div>
                                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all text-center">
                                            <h3 className="text-4xl font-bold text-rose-400 mb-2">15/19</h3>
                                            <p className="text-white font-semibold text-sm leading-snug">Routes where Mapifyit is faster</p>
                                        </div>
                                    </div>
                                    <div className="p-10 rounded-3xl bg-blue-600/10 border border-blue-500/20 text-center">
                                        <p className="text-blue-100 italic text-lg">
                                            "On 15 of 19 routes, Mapifyit calculates a faster time than Google Maps. Mapifyit independently computes optimal routes from a global road network."
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </Reveal>

                        {/* 2. Test Methodology */}
                        <Reveal delay={200}>
                            <section>
                                <SectionHeader title="Test Methodology" subtitle="How we conducted the benchmark" />
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { t: "API Endpoint", d: "POST https://client.mapifyit.com/api/v1/proxy/routing", icon: Server },
                                        { t: "Authentication", d: "Bearer token via Authorization header", icon: Lock },
                                        { t: "Costing Mode", d: "auto (car) — no custom options, pure defaults", icon: Car },
                                        { t: "Alternatives", d: "2 requested per call; fastest selected", icon: Activity },
                                        { t: "Google Reference", d: "Standard Google Maps route (± 5% tolerance)", icon: MapIcon }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-6 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all">
                                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                                <item.icon className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold mb-1 text-white">{item.t}</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </Reveal>

                        {/* 3. Results by Region */}
                        <Reveal delay={300}>
                            <section>
                                <SectionHeader title="Results by Region" subtitle="Detailed breakdown of 19 city-pair routes across 5 regions" />
                                
                                {[
                                    {
                                        region: "Pakistan",
                                        routes: [
                                            { name: "Lahore → Islamabad", gKm: 375, gMin: 240, mKm: 294.0, mMin: 197, dDelta: "-21.6%", tDelta: "-17.9%" },
                                            { name: "Karachi → Hyderabad", gKm: 163, gMin: 120, mKm: 161.8, mMin: 94, dDelta: "-0.7%", tDelta: "-21.7%" },
                                            { name: "Islamabad → Peshawar", gKm: 175, gMin: 150, mKm: 183.3, mMin: 102, dDelta: "+4.7%", tDelta: "-32.0%" }
                                        ],
                                        notes: "Lahore → Islamabad: Mapifyit routes via M2 Motorway (genuinely the shortest road). Google Maps displays the longer GT Road."
                                    },
                                    {
                                        region: "Saudi Arabia",
                                        routes: [
                                            { name: "Riyadh → Jeddah", gKm: 949, gMin: 540, mKm: 949.2, mMin: 540, dDelta: "+0.0%", tDelta: "+0.0%" },
                                            { name: "Dammam → Riyadh", gKm: 400, gMin: 240, mKm: 399.3, mMin: 197, dDelta: "-0.2%", tDelta: "-17.9%" },
                                            { name: "Makkah → Madinah", gKm: 412, gMin: 270, mKm: 450.2, mMin: 252, dDelta: "+9.3%", tDelta: "-6.7%" },
                                            { name: "Riyadh → Dammam", gKm: 400, gMin: 240, mKm: 407.9, mMin: 197, dDelta: "+2.0%", tDelta: "-17.9%" }
                                        ],
                                        notes: "Riyadh → Jeddah: Perfect 0.0% match on both distance and time. Mapifyit is identical to Google Maps on Saudi Arabia's flagship highway corridor."
                                    },
                                    {
                                        region: "UAE",
                                        routes: [
                                            { name: "Dubai → Abu Dhabi", gKm: 140, gMin: 90, mKm: 141.0, mMin: 72, dDelta: "+0.7%", tDelta: "-20.0%" },
                                            { name: "Sharjah → Dubai", gKm: 25, gMin: 30, mKm: 27.5, mMin: 22, dDelta: "+10.0%", tDelta: "-26.7%" },
                                            { name: "Dubai → Fujairah", gKm: 130, gMin: 90, mKm: 119.6, mMin: 71, dDelta: "-8.0%", tDelta: "-21.1%" },
                                            { name: "Abu Dhabi → Al Ain", gKm: 160, gMin: 100, mKm: 170.6, mMin: 85, dDelta: "+6.6%", tDelta: "-15.0%" }
                                        ],
                                        notes: "Dubai → Fujairah: Mapifyit finds a shorter route via E44 — actually better than Google on this corridor."
                                    },
                                    {
                                        region: "USA",
                                        routes: [
                                            { name: "NYC → Philadelphia", gKm: 151, gMin: 95, mKm: 152.8, mMin: 102, dDelta: "+1.2%", tDelta: "+7.4%" },
                                            { name: "LA → San Diego", gKm: 193, gMin: 120, mKm: 194.9, mMin: 115, dDelta: "+1.0%", tDelta: "-4.2%" },
                                            { name: "Chicago → Milwaukee", gKm: 148, gMin: 90, mKm: 148.9, mMin: 92, dDelta: "+0.6%", tDelta: "+2.2%" },
                                            { name: "Houston → Dallas", gKm: 386, gMin: 225, mKm: 385.3, mMin: 203, dDelta: "-0.2%", tDelta: "-9.8%" }
                                        ],
                                        notes: "Houston → Dallas: Within 0.7 km. Best large-distance accuracy in the dataset."
                                    },
                                    {
                                        region: "Europe",
                                        routes: [
                                            { name: "London → Heathrow", gKm: 25, gMin: 45, mKm: 27.6, mMin: 30, dDelta: "+10.4%", tDelta: "-33.3%" },
                                            { name: "Paris → Lyon", gKm: 465, gMin: 270, mKm: 466.0, mMin: 239, dDelta: "+0.2%", tDelta: "-11.5%" },
                                            { name: "Berlin → Hamburg", gKm: 289, gMin: 165, mKm: 290.7, mMin: 175, dDelta: "+0.6%", tDelta: "+6.1%" },
                                            { name: "Amsterdam → Brussels", gKm: 210, gMin: 135, mKm: 208.4, mMin: 129, dDelta: "-0.8%", tDelta: "-4.4%" }
                                        ],
                                        notes: "Paris → Lyon: Within 1 km and 11 minutes. Exceptional A6/A7 motorway accuracy."
                                    }
                                ].map((regionData, idx) => (
                                    <div key={idx} className="mb-12 last:mb-0">
                                        <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                            <Globe className="text-blue-400" /> {regionData.region}
                                        </h3>
                                        <div className="overflow-x-auto rounded-[24px] border border-white/10 bg-white/[0.02] mb-4">
                                            <table className="w-full border-collapse min-w-[600px]">
                                                <thead>
                                                    <tr className="border-b border-white/10">
                                                        <th className="py-4 px-6 text-left text-xs font-bold uppercase tracking-widest text-slate-500">Route</th>
                                                        <th className="py-4 px-6 text-right text-xs font-bold uppercase tracking-widest text-slate-500">Google km/min</th>
                                                        <th className="py-4 px-6 text-right text-xs font-bold uppercase tracking-widest text-blue-400">MapifyIt km/min</th>
                                                        <th className="py-4 px-6 text-right text-xs font-bold uppercase tracking-widest text-emerald-400">Dist Δ</th>
                                                        <th className="py-4 px-6 text-right text-xs font-bold uppercase tracking-widest text-emerald-400">Time Δ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {regionData.routes.map((route, rIdx) => (
                                                        <tr key={rIdx} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                                                            <td className="py-4 px-6 text-sm text-white font-medium">{route.name}</td>
                                                            <td className="py-4 px-6 text-sm text-slate-400 text-right">{route.gKm} / {route.gMin}</td>
                                                            <td className="py-4 px-6 text-sm text-blue-300 text-right font-medium">{route.mKm} / {route.mMin}</td>
                                                            <td className="py-4 px-6 text-sm text-emerald-400 text-right">{route.dDelta}</td>
                                                            <td className="py-4 px-6 text-sm text-emerald-400 text-right">{route.tDelta}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="text-sm text-slate-400 italic px-4 border-l-2 border-blue-500/30">
                                            {regionData.notes}
                                        </p>
                                    </div>
                                ))}
                            </section>
                        </Reveal>

                        {/* 4. Aggregate Statistics */}
                        <Reveal delay={400}>
                            <section>
                                <SectionHeader centered title="Aggregate Statistics" subtitle="High-level accuracy metrics" />
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                    {[
                                        { l: "Distance ±5%", v: "13 / 19 (68%)" },
                                        { l: "Distance ±10%", v: "17 / 19 (89%)" },
                                        { l: "Time ±10%", v: "8 / 19 (42%)" },
                                        { l: "Time ±20%", v: "14 / 19 (74%)" }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/[0.08] transition-all">
                                            <h4 className="text-2xl font-bold text-white mb-2">{stat.v}</h4>
                                            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">{stat.l}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </Reveal>

                        {/* 5. Where Mapifyit Leads */}
                        <Reveal delay={500}>
                            <section className="p-10 md:p-16 rounded-[40px] bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-blue-500/20">
                                <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3"><Code2 className="text-blue-400" /> Where MapifyIt Leads Google Maps</h2>
                                <p className="text-slate-300 mb-8 leading-relaxed">Mapifyit is not a Google Maps clone — it is an independent routing engine that in several cases outperforms Google Maps by finding shorter or equally valid road paths:</p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                                        <h4 className="text-lg font-bold text-white mb-2">Dubai → Fujairah (UAE)</h4>
                                        <p className="text-sm text-blue-300 mb-3">Mapifyit: 119.6 km vs Google Maps: 130 km</p>
                                        <p className="text-slate-400 text-sm">Mapifyit routes via E44, shaving 10 km off the journey — a genuinely shorter corridor that Google Maps does not prioritise.</p>
                                    </div>
                                    <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                                        <h4 className="text-lg font-bold text-white mb-2">Riyadh → Jeddah (Saudi Arabia)</h4>
                                        <p className="text-sm text-blue-300 mb-3">Mapifyit: 949.2 km vs Google Maps: 949 km</p>
                                        <p className="text-slate-400 text-sm">0.0% difference on both distance and time. Mapifyit matches exactly on one of the longest highways in the Middle East.</p>
                                    </div>
                                    <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                                        <h4 className="text-lg font-bold text-white mb-2">Houston → Dallas (USA)</h4>
                                        <p className="text-sm text-blue-300 mb-3">Mapifyit: 385.3 km vs Google Maps: 386 km</p>
                                        <p className="text-slate-400 text-sm">Effectively identical — within 700 m over a 386 km corridor.</p>
                                    </div>
                                    <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                                        <h4 className="text-lg font-bold text-white mb-2">Paris → Lyon (Europe)</h4>
                                        <p className="text-sm text-blue-300 mb-3">Mapifyit: 466 km vs Google Maps: 465 km</p>
                                        <p className="text-slate-400 text-sm">Within 1 km on a 465 km French motorway route. Near-perfect.</p>
                                    </div>
                                </div>
                            </section>
                        </Reveal>

                        {/* 6. Feature Comparison */}
                        <Reveal delay={600}>
                            <section>
                                <SectionHeader title="MapifyIt vs Google Maps — Feature Comparison" />
                                <div className="overflow-x-auto rounded-[32px] border border-white/10 bg-white/[0.02]">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="py-6 px-8 text-left text-sm font-bold text-slate-500 uppercase tracking-widest">Aspect</th>
                                                <th className="py-6 px-8 text-left text-sm font-bold text-slate-400 uppercase tracking-widest">Google Maps</th>
                                                <th className="py-6 px-8 text-left text-sm font-bold text-blue-400 uppercase tracking-widest">MapifyIt</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { a: "Distance accuracy", g: "Baseline", m: "±0.8% avg — production-ready" },
                                                { a: "Real-time traffic", g: "Yes — live + historical", m: "Free-flow (best-case planning times)" },
                                                { a: "API format", g: "Proprietary, expensive", m: "Clean REST POST — open JSON schema" },
                                                { a: "Costing control", g: "None exposed to developer", m: "Full: tolls, ferry, highways, speed cap" },
                                                { a: "Pricing", g: "Per-request, volume billing", m: "Service-level API key, predictable cost" }
                                            ].map((row, i) => (
                                                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                                                    <td className="py-6 px-8 text-sm font-medium text-white">{row.a}</td>
                                                    <td className="py-6 px-8 text-sm text-slate-400">{row.g}</td>
                                                    <td className="py-6 px-8 text-sm text-blue-300 font-medium">{row.m}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </Reveal>

                        {/* 7. Conclusion */}
                        <Reveal delay={700}>
                            <section className="p-8 md:p-12 rounded-[40px] bg-gradient-to-br from-blue-600 to-indigo-600 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Conclusion</h2>
                                    <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
                                        Mapifyit car routing is production-ready and competitive with Google Maps across all tested regions. With an overall average distance delta of just +0.8% across 19 routes, the engine demonstrates that it independently calculates optimal routes from a global road network — not approximations. For B2B use cases, embedded navigation, and logistics platforms, Mapifyit is the technically superior choice.
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-slate-900 font-black hover:scale-105 transition-transform">
                                        Start Building with MapifyIt <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </section>
                        </Reveal>
                    </div>
                );

            default:
                return <div className="text-center p-20 text-slate-500">Content coming soon...</div>;
        }
    };

    return (
        <main className="min-h-screen bg-[#030712] text-white overflow-hidden relative pb-20">
            {/* Header / Hero */}
            <header className="relative pt-32 pb-10 border-b border-white/5">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Reveal>
                        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group">
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Blog Listing
                        </Link>
                    </Reveal>

                    <Reveal delay={100}>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest text-blue-400">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                                <Clock className="w-3.5 h-3.5" /> {post.readTime}
                            </div>
                            <span className="text-slate-600 text-xs uppercase tracking-widest">{post.date}</span>
                        </div>
                        <h1 className="text-2xl md:text-5xl font-bold mb-4 tracking-tight leading-[1.1] text-white">
                            {post.title}
                        </h1>
                        <p className="text-xl text-slate-400 max-w-4xl font-light leading-relaxed">
                            {post.excerpt}
                        </p>
                    </Reveal>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 pt-10">
                {renderContent()}
            </div>
        </main>
    );
}
