"use client"
import React from 'react';
import { Check, ArrowLeft, ArrowRight, DollarSign, Shield, Database, Box, PieChart, Info, X, Zap, Target, Star, Crown, Server, Map, Lock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

import { Reveal } from '@/components/Reveal';

const PricingCard = ({ title, price, highlightedText, description, features, highlighted = false, icon: Icon }: any) => (
    <article className={`p-8 rounded-[32px] border transition-all duration-500 h-full flex flex-col relative overflow-hidden group hover:-translate-y-2 ${highlighted ? 'bg-gradient-to-b from-blue-600/10 to-[#0B0F17] border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.15)] md:-translate-y-4 hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]' : 'bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 hover:shadow-2xl'}`}>
        {/* Glow effect on hover */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full group-hover:bg-white/10 transition-colors duration-700 -mr-16 -mt-16 pointer-events-none" />

        {highlighted && (
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400" />
        )}

        <header className="mb-6 flex items-start justify-between relative z-10">
            <div>
                <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-slate-400 text-sm italic">{description}</p>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${highlighted ? 'bg-blue-500/20 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'bg-white/5 text-slate-400 border border-white/10'}`}>
                <Icon className="w-5 h-5" />
            </div>
        </header>

        <div className="mb-8 relative z-10">
            <div className="flex items-baseline gap-1 mb-3 mt-4">
                <span className="text-5xl font-black text-white tracking-tight drop-shadow-sm">{price}</span>
                {price !== 'Custom' && <span className="text-slate-500 font-medium">/mo</span>}
            </div>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest ${highlighted ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-white/5 text-emerald-400 border border-white/10'}`}>
                {highlightedText}
            </div>
        </div>

        <ul className="space-y-4 mb-10 flex-grow relative z-10" aria-label={`Features included in ${title} plan`}>
            {features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300 group/item">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${highlighted ? 'text-blue-500' : 'text-slate-500 group-hover/item:text-emerald-400'}`} />
                    <span className="group-hover/item:text-white transition-colors">{feature}</span>
                </li>
            ))}
        </ul>

        <footer className="mt-auto relative z-10">
            <Link
                href="https://dev.mapifyit.com/"
                target='_blank'
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group/btn ${highlighted ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                aria-label={`Get started with the ${title} plan`}
            >
                {price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
        </footer>
    </article>
);

export default function PricingPage() {
    const router = useRouter();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Mapifyit Enterprise Mapping API",
        "description": "Predictable flat-rate pricing for enterprise mapping APIs. Transparent location intelligence infrastructure with no vendor lock-in.",
        "offers": [
            { "@type": "Offer", "name": "Free Tier", "price": "0", "priceCurrency": "USD", "eligibilityToPurchase": "Up to 10k calls/month" },
            { "@type": "Offer", "name": "Starter", "price": "189", "priceCurrency": "USD", "eligibilityToPurchase": "Up to 75k calls/month" },
            { "@type": "Offer", "name": "Business", "price": "749", "priceCurrency": "USD", "eligibilityToPurchase": "Up to 250k calls/month" },
            { "@type": "Offer", "name": "Enterprise", "price": "1499", "priceCurrency": "USD", "eligibilityToPurchase": "Up to 750k calls/month" }
        ]
    };

    return (
        <main className="min-h-screen bg-[#03060D] text-white pt-20 pb-20 overflow-x-hidden relative">
            <Script
                id="pricing-jsonld"
                type="application/ld+json"
                src="/schema/pricing.json"
                strategy="afterInteractive"
            />


            <div className="max-w-7xl mx-auto px-4">
                <header className="mb-12">
                    <Reveal>
                        <div className="pt-0 md:pt-4 mb-10">
                            <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold group cursor-pointer">
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                Go Back
                            </button>
                        </div>

                        {/* <div className="text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">
                                <Zap className="w-3.5 h-3.5" /> Stop the Legacy Tax
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
                                Predictable Pricing. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 drop-shadow-sm">
                                    Infinite Scale.
                                </span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                                Avoid the "API Tax". Transparent, flat-rate subscriptions for enterprise location intelligence. No hidden overages, no vendor lock-in.
                            </p>
                        </div> */}
                    </Reveal>
                </header>

                {/* Primary Pricing Tiers */}
                {/* <section className="mb-20" aria-labelledby="pricing-plans-heading">
                    <h2 id="pricing-plans-heading" className="sr-only">Our Pricing Plans</h2>
                    <Reveal delay={50}>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            <PricingCard
                                title="Free Tier"
                                price="$0"
                                highlightedText="10,000 monthly calls"
                                description="Perfect for testing and side-projects."
                                icon={Zap}
                                features={["Email Support", "Vector Tiles", "Standard Support", "Basic REST APIs", "Basic Analytics Dashboard", "Community Forum Access"]}
                            />
                            <PricingCard
                                title="Starter"
                                price="$189"
                                highlightedText="75,000 monthly calls"
                                description="For growing apps needing reliability."
                                icon={Target}
                                features={["Email Support", "Vector Tiles", "Standard Suppport", "Basic REST APIs", "Basic Analytics Dashboard", "Community Forum Access"]}
                            />
                            <PricingCard
                                title="Business"
                                price="$749"
                                highlightedText="250,000 monthly calls"
                                description="For apps serving thousands of users."
                                icon={Star}
                                highlighted={true}
                                features={["Email Support", "Vector Tiles", "Standard Suppport", "Basic REST APIs", "Basic Analytics Dashboard", "Community Forum Access"]}
                            />
                            <PricingCard
                                title="Enterprise"
                                price="$1499"
                                highlightedText="750,000+ monthly calls"
                                description="Bespoke infrastructure for global scale."
                                icon={Crown}
                                features={["Email Support", "Vector Tiles", "Standard Suppport", "Basic REST APIs", "Basic Analytics Dashboard", "Community Forum Access"]}
                            />
                        </div>
                    </Reveal>
                </section> */}

                {/* Glassmorphic Comparison Table */}
                {/* <section className="mb-20" aria-labelledby="comparison-heading">
                    <Reveal delay={100}>
                        <div className="text-center mb-12">
                            <h2 id="comparison-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">The Mapifyit Advantage</h2>
                            <p className="text-slate-400 max-w-xl mx-auto text-lg">See exactly how we stack up against the legacy constraints of Google Maps and Mapbox.</p>
                        </div> */}

                        {/* <div className="overflow-x-auto rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"> */}
                            {/* Decorative Grid inside table container */}
                            {/* <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03] pointer-events-none" />

                            <table className="w-full text-sm text-left whitespace-nowrap relative z-10">
                                <caption className="sr-only">Comparison of mapping API plans between Mapifyit, Google Maps, and Mapbox</caption>
                                <thead className="bg-[#0B0F17]/80 text-white uppercase font-bold text-xs tracking-widest border-b border-white/10">
                                    <tr>
                                        <th scope="col" className="px-8 py-6">Plan / Usage Level</th>
                                        <th scope="col" className="px-8 py-6 bg-blue-500/10 text-blue-400 border-x border-blue-500/20 shadow-[inset_0_2px_10px_rgba(59,130,246,0.1)] flex items-center gap-2">
                                            <Map className="w-4 h-4" /> Mapifyit
                                        </th>
                                        <th scope="col" className="px-8 py-6 text-slate-400">Google Maps</th>
                                        <th scope="col" className="px-8 py-6 text-slate-400">Mapbox</th>
                                    </tr>
                                </thead> */}
                                {/* <tbody className="divide-y divide-white/10 text-slate-300">
                                    <tr className="hover:bg-white/[0.03] transition-colors">
                                        <td className="px-8 py-5 font-semibold text-white">Free Tier <span className="text-xs text-slate-500 font-normal ml-2">(10k calls)</span></td>
                                        <td className="px-8 py-5 bg-blue-500/[0.02] border-x border-blue-500/10 text-white font-bold text-base">$0</td>
                                        <td className="px-8 py-5">$0</td>
                                        <td className="px-8 py-5">$0</td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.03] transition-colors">
                                        <td className="px-8 py-5 font-semibold text-white">Starter <span className="text-xs text-slate-500 font-normal ml-2">(75k calls)</span></td>
                                        <td className="px-8 py-5 bg-blue-500/[0.02] border-x border-blue-500/10 text-white font-bold text-base">$189</td>
                                        <td className="px-8 py-5">$225 <span className="text-xs text-slate-500 block mt-1">(Starter + Overage)</span></td>
                                        <td className="px-8 py-5">$195 <span className="text-xs text-slate-500 block mt-1">(Loads + Temp Search)</span></td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.03] transition-colors">
                                        <td className="px-8 py-5 font-semibold text-white">Business <span className="text-xs text-slate-500 font-normal ml-2">(250k calls)</span></td>
                                        <td className="px-8 py-5 bg-blue-500/[0.04] border-x border-blue-500/20 text-blue-400 font-bold text-base flex items-center gap-3">
                                            $749 <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[10px] uppercase font-black tracking-widest leading-none hidden md:block">Best Value</span>
                                        </td>
                                        <td className="px-8 py-5">$1,200 <span className="text-xs text-slate-500 block mt-1">(Pro Plan)</span></td>
                                        <td className="px-8 py-5">$1,000+</td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.03] transition-colors">
                                        <td className="px-8 py-5 font-semibold text-white">Enterprise <span className="text-xs text-slate-500 font-normal ml-2">(750k calls)</span></td>
                                        <td className="px-8 py-5 bg-blue-500/[0.02] border-x border-blue-500/10 text-white font-bold text-base">$1499</td>
                                        <td className="px-8 py-5">$3,200+ <span className="text-xs text-slate-500 block mt-1">(Pro + Overage)</span></td>
                                        <td className="px-8 py-5">$2,800+</td>
                                    </tr> */}

                                    {/* Features Comparison */}
                                    {/* <tr className="bg-[#0B0F17]/50 border-y-2 border-white/10">
                                        <td colSpan={4} className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Platform Philosophy & Architecture</td>
                                    </tr>

                                    <tr className="hover:bg-white/[0.03] transition-colors">
                                        <td className="px-8 py-5 font-medium text-white">Pricing Model</td>
                                        <td className="px-8 py-5 bg-blue-500/[0.02] border-x border-blue-500/10 text-emerald-400 font-medium flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div> Flat Monthly</td>
                                        <td className="px-8 py-5 text-amber-400/80">Unpredictable PAYG</td>
                                        <td className="px-8 py-5 text-amber-400/80">Complex "MAU" Tiers</td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.03] transition-colors">
                                        <td className="px-8 py-5 font-medium text-white">Data Retention</td>
                                        <td className="px-8 py-5 bg-blue-500/[0.02] border-x border-blue-500/10 text-emerald-400 font-medium flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div> Permanent (Yours)</td>
                                        <td className="px-8 py-5 text-red-400/80 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0"><X className="w-3 h-3" /></div> Delete after 30 days</td>
                                        <td className="px-8 py-5 text-amber-400/80">Delete after 30 days (T&Cs)</td>
                                        <td className="px-8 py-5 text-amber-400/80">Extra "Storage Fee"</td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.03] transition-colors">
                                        <td className="px-8 py-5 font-medium text-white">Vendor Lock-in</td>
                                        <td className="px-8 py-5 bg-blue-500/[0.02] border-x border-blue-500/10 text-emerald-400 font-medium flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div> Open Standards</td>
                                        <td className="px-8 py-5 text-red-400/80 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0"><X className="w-3 h-3" /></div> Proprietary SDKs</td>
                                        <td className="px-8 py-5 text-red-400/80 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0"><X className="w-3 h-3" /></div> High migration costs</td>
                                        <td className="px-8 py-5 text-amber-400/80">Proprietary SDKs</td>
                                        <td className="px-8 py-5 text-amber-400/80">Hight Migration Costs</td>

                                    </tr>
                                    <tr className="hover:bg-white/[0.03] transition-colors">
                                        <td className="px-8 py-5 font-medium text-white">Privacy Strategy</td>
                                        <td className="px-8 py-5 bg-blue-500/[0.02] border-x border-blue-500/10 text-emerald-400 font-medium flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><Check className="w-3 h-3" /></div> True Sovereignty</td>
                                        <td className="px-8 py-5 text-red-400/80 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0"><X className="w-3 h-3" /></div> Harvested for Ads</td>
                                        <td className="px-8 py-5 text-red-400/80 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0"><X className="w-3 h-3" /></div> Used for Traffic Sets</td>
                                        <td className="px-8 py-5 text-amber-400/80">Harvested for Ads</td>
                                        <td className="px-8 py-5 text-amber-400/80">Used for Traffic Sets</td>
                                    </tr>
                                </tbody>
                            </table> */}
                        {/* </div>
                    </Reveal>
                </section> */}

                {/* Bento Grid Differentiators */}
                {/* <section aria-labelledby="differentiators-heading" className="mb-20">
                    <h2 id="differentiators-heading" className="sr-only">Why choose Mapifyit</h2>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise Architecture by Design</h2>
                        <p className="text-slate-400 max-w-xl mx-auto text-lg">We don't just sell maps. We provide the bleeding-edge infrastructure your business needs to scale globally without the limitations of traditional APIs.</p>
                    </div> */}

                    {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> */}

                        {/* Box 1 (Spans 2 columns) */}
                        {/* <Reveal className="lg:col-span-2 h-full" delay={50}>
                            <article className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none" />
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                                    <DollarSign className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Predictable Flat-Rate Pricing</h3>
                                <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
                                    Stop worrying about "API Tax" and unpredictable monthly invoices. Make mapping accessible again, not a financial gamble. Manage your budget on the 1st of every month.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="px-4 py-2 rounded-full border border-white/10 bg-black/20 text-sm text-slate-300 flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 60% Cost Savings</span>
                                    <span className="px-4 py-2 rounded-full border border-white/10 bg-black/20 text-sm text-slate-300 flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> No Hidden Traps</span>
                                </div>
                            </article>
                        </Reveal> */}

                        {/* Box 2 */}
                        {/* <Reveal className="lg:col-span-1 h-full" delay={100}>
                            <article className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 hover:bg-white/[0.07] hover:border-emerald-500/30 transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-all duration-700 pointer-events-none" />
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                                    <Shield className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Data Sovereignty</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-sm text-slate-300"><div className="mt-0.5"><Check className="w-4 h-4 text-emerald-400" /></div> Zero Data Harvesting</li>
                                    <li className="flex items-start gap-3 text-sm text-slate-300"><div className="mt-0.5"><Check className="w-4 h-4 text-emerald-400" /></div> Anonymized Requests</li>
                                    <li className="flex items-start gap-3 text-sm text-slate-300"><div className="mt-0.5"><Check className="w-4 h-4 text-emerald-400" /></div> GDPR / Compliance Ready</li>
                                </ul>
                            </article>
                        </Reveal> */}

                        {/* Box 3 */}
                        {/* <Reveal className="lg:col-span-1 h-full" delay={150}>
                            <article className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 hover:bg-white/[0.07] hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full group-hover:bg-purple-500/20 transition-all duration-700 pointer-events-none" />
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                                    <Database className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Permanent Rights</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    Most providers legally force you to delete geocoded data after 30 days. We give you full ownership for life.
                                </p>
                                <span className="text-xs font-bold uppercase tracking-widest text-purple-400">PostgreSQL Native</span>
                            </article>
                        </Reveal> */}

                        {/* Box 4 (Spans 2 columns) */}
                        {/* <Reveal className="lg:col-span-2 h-full" delay={200}>
                            <article className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 hover:bg-white/[0.07] hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-700 pointer-events-none" />
                                <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                                    <div>
                                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                                            <Server className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">No Vendor Lock-in</h3>
                                        <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
                                            Don't get trapped by sticky, proprietary SDKs. We believe in open standards and Docker-ready flexibility. You own your architecture.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="p-4 rounded-2xl bg-black/30 border border-white/5 flex items-center gap-3">
                                            <Box className="w-5 h-5 text-cyan-400" />
                                            <div>
                                                <div className="text-white font-medium text-sm">Docker & K8s Ready</div>
                                                <div className="text-slate-500 text-xs mt-0.5">Plug into any CI/CD pipeline</div>
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-black/30 border border-white/5 flex items-center gap-3">
                                            <Lock className="w-5 h-5 text-cyan-400" />
                                            <div>
                                                <div className="text-white font-medium text-sm">Standard GeoJSON</div>
                                                <div className="text-slate-500 text-xs mt-0.5">Seamless migration workflows</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Reveal> */}
{/* 
                    </div>
                </section> */}

                <Reveal delay={300}>
                    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] p-1 relative overflow-hidden group shadow-2xl">
                        {/* Animated gradient inner border effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur" />

                        <div className="bg-[#03060D] rounded-[36px] p-10 md:p-16 relative overflow-hidden z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

                            <div className="relative z-10 max-w-xl">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Stop paying the API tax. Maximize your margins.</h2>
                                <p className="text-lg text-slate-400 mb-0">Experience enterprise-grade mapping on your terms. We communicate heavily, operate honestly, and scale gracefully with you.</p>
                            </div>

                            <div className="relative z-10 shrink-0">
                                <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-black font-extrabold rounded-2xl hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                    Contact Sales <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </section>
                </Reveal>

            </div>

            {/* Global Ambient Radiance */}
            <div className="fixed top-0 right-0 w-[1000px] h-[1000px] bg-blue-600/[0.03] blur-[150px] -z-10 pointer-events-none rounded-full" />
            <div className="fixed bottom-0 left-0 w-[1000px] h-[1000px] bg-indigo-600/[0.03] blur-[150px] -z-10 pointer-events-none rounded-full" />
        </main>
    );
}
