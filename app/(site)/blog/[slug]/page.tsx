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
                    <div className="space-y-32 pb-32">
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
                                <SectionHeader title="What is MapifyIt?" subtitle="MapifyIt is a full-stack mapping and GIS platform designed for businesses that want to build, scale, and control their own geospatial infrastructure." />
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
                                <SectionHeader title="Why Traditional Platforms Break at Scale" subtitle="Most companies plug in an API to move fast, but once usage grows, the cracks start to show." />
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
                                        { t: "Full Infrastructure Control", d: "Deploy on your own servers or private cloud for complete ownership." },
                                        { t: "Predictable Costs", d: "Scale based on infrastructure, making costs predictable at high volume." },
                                        { t: "Deep Customization", d: "Tailor routing logic, search behavior, and map styles to your business." },
                                        { t: "Independence", d: "Better control over performance, data, and compliance without 3rd party reliance." }
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
                                        { t: "Real-Time Tracking", d: "Track vehicles, assets, and teams with live updates.", icon: Navigation },
                                        { t: "Location Intelligence", d: "Turn raw location data into actionable insights.", icon: Target }
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
                                <SectionHeader title="MapifyIt vs Industry Leaders" subtitle="This is where things become clear. A direct comparison of cost, deployment, and ownership." />
                                <div className="overflow-x-auto rounded-[40px] border border-white/10 bg-white/[0.02]">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="py-8 px-8 text-left text-sm font-bold uppercase tracking-widest text-slate-500">Feature</th>
                                                <th className="py-8 px-8 text-left text-sm font-bold uppercase tracking-widest text-blue-400">MapifyIt</th>
                                                <th className="py-8 px-8 text-left text-sm font-bold uppercase tracking-widest text-slate-500">Google/Mapbox</th>
                                                <th className="py-8 px-8 text-left text-sm font-bold uppercase tracking-widest text-slate-500">Esri</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <ComparisonRow label="Cost Structure" mapifyit="Predictable Infrastructure Pricing" competitors="Usage-based (Expensive)" />
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
                                        { t: "Logistics", d: "Route optimization & fleet tracking.", icon: Truck },
                                        { t: "Mobility", d: "Driver tracking & ETA systems.", icon: Car },
                                        { t: "Workforce", d: "Task assignment & monitoring.", icon: Users },
                                        { t: "Smart Cities", d: "Infrastructure & traffic analysis.", icon: Building2 },
                                        { t: "Agriculture", d: "Land usage & satellite insights.", icon: Sprout }
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
                                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">The Cost Advantage at Scale</h2>
                                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                        One of the biggest reasons companies switch is cost. High-volume systems shouldn't be penalized for their success.
                                    </p>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                                                <Minus className="text-red-500 w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Traditional Providers</h4>
                                                <p className="text-slate-500 text-sm italic">Costs increase linearly with usage. High-volume systems become extremely expensive.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                <CheckCircle2 className="text-emerald-400 w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">MapifyIt Approach</h4>
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
                                <p className="text-slate-400 text-xl leading-relaxed mb-12">
                                    Most tools stop at visualization. MapifyIt goes further by combining Mapping, APIs, GIS, and Real-time systems into one complete location intelligence platform.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {["Mapping", "APIs", "GIS", "Real-Time"].map((word, i) => (
                                        <div key={i} className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold tracking-widest">{word}</div>
                                    ))}
                                </div>
                            </section>
                        </Reveal>

                        {/* 13. Final Thoughts */}
                        {/* <Reveal delay={1300}>
                            <section className="p-10 md:p-20 rounded-[60px] bg-gradient-to-br from-blue-600 to-indigo-600 text-center relative overflow-hidden">
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
                        </Reveal> */}

                        {/* 14. FAQs */}
                        <Reveal delay={1400}>
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

            default:
                return <div className="text-center p-20 text-slate-500">Content coming soon...</div>;
        }
    };

    return (
        <main className="min-h-screen bg-[#030712] text-white overflow-hidden relative pb-20">
            {/* Header / Hero */}
            <header className="relative pt-32 pb-20 border-b border-white/5">
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
                        <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1] text-white">
                            {post.title}
                        </h1>
                        <p className="text-xl text-slate-400 max-w-4xl font-light leading-relaxed">
                            {post.excerpt}
                        </p>
                    </Reveal>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 pt-20">
                {renderContent()}
            </div>
        </main>
    );
}
