import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { Layers, ShieldCheck, Route, ArrowLeft } from 'lucide-react';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
    title: 'Top GIS and APIs Maps & Mapbox Alternative in Australia | MapifyIt',
    description: 'Looking for Google Maps & Mapbox alternative in the Australia? MapifyIt offers GIS mapping, unlimited APIs, & enterprise-grade solutions tailored for businesses.',
    keywords: [
        'Google map alternative Australia',
        'Mapbox alternative Australia',
        'MapifyIt GIS platform',
        'GIS platform Australia',
        'Enterprise mapping solutions Australia',
        'Geospatial platform alternative Google Maps'
    ],
    openGraph: {
        title: 'Top GIS and APIs Maps & Mapbox Alternative in Australia | MapifyIt',
        description: 'Looking for Google Maps & Mapbox alternative in the Australia? MapifyIt offers GIS mapping, unlimited APIs, & enterprise-grade solutions tailored for businesses.',
        url: 'https://mapifyit.com/alternative/google/maps/mapbox/australia',
    },
    alternates: {
        canonical: 'https://mapifyit.com/alternative/google/maps/mapbox/australia',
    },
};

export default function AlternativeAustraliaPage() {
    return (
        <div className="min-h-screen bg-[#03060D] text-white pt-20 pb-20 font-sans">
            <div className="max-w-7xl mx-auto px-6 pt-0 md:pt-4">
                <div className="mb-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold group cursor-pointer">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Go Back Home
                    </Link>
                </div>

                {/* HERO */}
                <div className="mb-12">
                    <Reveal>
                        <h1 className="text-3xl md:text-[45px] font-bold text-white mb-5">
                            Best Google Maps & Mapbox Alternative in the Australia – MapifyIt
                        </h1>
                        <h3 className="text-xl text-gray-400 max-w-4xl">
                            Looking for a reliable mapping solution? MapifyIt offers robust GIS mapping, unlimited APIs, & enterprise-grade solutions tailored for businesses in Australia. Build modern mapping applications using our high-performance Maps API platform.
                        </h3>
                    </Reveal>
                </div>

                {/* FEATURES */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <Reveal delay={100}>
                        <div className="p-8 rounded-3xl bg-[#070B14] border hover:border-blue-500/30 border-white/5">
                            <Layers className="w-6 h-6 text-blue-400 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">
                                Vector Tile Server
                            </h4>
                            <p className="text-slate-400 text-sm mb-6">
                                Serve high-performance vector map tiles from your own geospatial infrastructure. Compatible with modern mapping libraries and mobile SDKs.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="p-8 rounded-3xl bg-[#070B14] border hover:border-emerald-500/30 border-white/5">
                            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">
                                Sovereign Hosting
                            </h4>
                            <p className="text-slate-400 text-sm mb-6">
                                Deploy the entire mapping infrastructure on your own servers with full control over geospatial data and API performance.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="p-8 rounded-3xl bg-[#070B14] border hover:border-indigo-500/30 border-white/5">
                            <Route className="w-6 h-6 text-indigo-400 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">
                                Advanced Routing Engine
                            </h4>
                            <p className="text-slate-400 text-sm mb-6">
                                Compute optimized routes, distance matrices, and navigation paths using our proprietary routing engine built for large-scale mapping applications.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
            <FAQSection type="maps" showHeader={false} />
        </div>
    );
}
