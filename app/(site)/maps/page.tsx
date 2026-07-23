// "use client"
// import React, { useState, useEffect } from 'react';
// import FeatureSuites from '@/components/FeatureSuites';
// import { Map, Layers, Code, Zap, Globe, Route, Navigation, Search, Database, FileJson, Check, Copy, ShieldCheck, Cpu, Settings, Activity, Server } from 'lucide-react';
// import { Reveal } from '@/components/Reveal';
// import { useRouter } from 'next/navigation';

// // --- SEO Optimized Typewriter Hook ---
// const useTypewriter = (words: string[], speed = 100) => {
//     const [index, setIndex] = useState(0);
//     const [subIndex, setSubIndex] = useState(0);
//     const [reverse, setReverse] = useState(false);

//     useEffect(() => {
//         if (subIndex === words[index].length + 1 && !reverse) {
//             setTimeout(() => setReverse(true), 1500);
//             return;
//         }
//         if (subIndex === 0 && reverse) {
//             setReverse(false);
//             setIndex((prev) => (prev + 1) % words.length);
//             return;
//         }
//         const timeout = setTimeout(() => {
//             setSubIndex((prev) => prev + (reverse ? -1 : 1));
//         }, reverse ? 50 : speed);

//         return () => clearTimeout(timeout);
//     }, [subIndex, index, reverse, words, speed]);

//     return words[index].substring(0, subIndex);
// };

// const apiDocs = [
//     {
//         id: 'maps',
//         title: 'Maps API',
//         icon: Map,
//         method: 'GET',
//         endpoint: '/api/v1/proxy/maps',
//         desc: 'Fetch standardized map stylesheets, GeoJSON data and static configurations.',
//         command: `curl -X GET "https://client.mapifyit.com/api/v1/proxy/maps?style=basic" \\
//   -H "Authorization: Bearer YOUR_API_KEY"`
//     },
//     {
//         id: 'routing',
//         title: 'Routing API',
//         icon: Navigation,
//         method: 'GET',
//         endpoint: '/api/v1/proxy/routing',
//         desc: 'Provides turn-by-turn directions based on locations, costing models, and traversal preferences.',
//         command: `curl -X GET "https://client.mapifyit.com/api/v1/proxy/routing?json={\\"locations\\":[{\\"lon\\":67.0207055,\\"lat\\":24.8546842},{\\"lon\\":73.0651511,\\"lat\\":33.6938118}],\\"costing\\":\\"auto\\",\\"directions_options\\":{\\"units\\":\\"kilometers\\"},\\"costing_options\\":{\\"auto\\":{\\"use_highways\\":0.3}}}" \\
//   -H "Authorization: Bearer YOUR_API_KEY"`
//     },
//     {
//         id: 'tiles',
//         title: 'Tiles API',
//         icon: Layers,
//         method: 'GET',
//         endpoint: '/api/v1/proxy/tiles/{theme}',
//         desc: "Access our vector and raster map tiles fast and reliably. Replace {theme} with 'dark' or 'bright'.",
//         command: `curl -X GET "https://client.mapifyit.com/api/v1/proxy/tiles/dark" \\
//   -H "Authorization: Bearer YOUR_API_KEY"`
//     },
//     {
//         id: 'geocoding',
//         title: 'Geocoding API',
//         icon: Search,
//         method: 'GET',
//         endpoint: '/api/v1/proxy/geocoding',
//         desc: 'Powerful Search API. Convert textual addresses, places, or POIs into geographic coordinate points.',
//         command: `curl -X GET "https://client.mapifyit.com/api/v1/proxy/geocoding?q=blue+area&lat=33.70&lon=73.05&boundary_country=PK" \\
//   -H "Authorization: Bearer YOUR_API_KEY"`
//     },
//     {
//         id: 'reverse_geocoding',
//         title: 'Reverse Geocoding',
//         icon: Database,
//         method: 'GET',
//         endpoint: '/api/v1/proxy/reverse_geocoding',
//         desc: 'Powerful Search API. Convert geographic coordinates back into human-readable addresses or locations.',
//         command: `curl -X GET "https://client.mapifyit.com/api/v1/proxy/reverse_geocoding?lat=33.7297&lon=73.0372&size=1" \\
//   -H "Authorization: Bearer YOUR_API_KEY"`
//     }
// ];

// export default function MapsPage() {
//     const router = useRouter();
//     const [activeApi, setActiveApi] = useState(apiDocs[0].id);
//     const [copied, setCopied] = useState(false);

//     const dynamicText = useTypewriter(['GIS Developers.', 'Fleet Logistics.', 'PostGIS Integration.', 'Sovereign Map Data.']);

//     const handleCopy = (text: string) => {
//         navigator.clipboard.writeText(text);
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000);
//     };

//     const currentDoc = apiDocs.find(d => d.id === activeApi) || apiDocs[0];

//     return (
//         <div className="min-h-screen bg-[#03060D] text-white pt-25 pb-15 px-6 font-sans">
//             <div className="max-w-7xl mx-auto">
//                 {/* Back button */}
//                 <div className="mb-12">
//                     <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold group cursor-pointer">
//                         <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Mapifyit Console
//                     </button>
//                 </div>

//                 <div className="mb-12">
//                     <div className="max-w-5xl mb-12 relative">
//                         <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

//                         <Reveal>
//                             <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/5 backdrop-blur-md border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] mb-8">
//                                 <span className="relative flex h-2 w-2">
//                                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                                     <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//                                 </span>
//                                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400/90">
//                                     Sovereign Geospatial Infrastructure
//                                 </span>
//                             </div>

//                             <h1 className="text-3xl md:text-[45px] font-bold text-white mb-5 leading-[0.95] tracking-[-0.04em]">
//                                 Geospatial APIs <br />
//                             </h1>
//                             <h3 className="text-xl md:text-xl text-gray-400">
//                                 Deploy high-performance vector map tiles, advanced routing, and a self-hosted geocoding engine powered by our proprietary geospatial platform. Built for scalability, reliability, and complete data sovereignty.                            </h3>
//                         </Reveal>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-8">
//                         <Reveal delay={100}>
//                             <div className="group p-8 rounded-3xl bg-[#070B14] border border-white/5 hover:border-blue-500/30 transition-all hover:bg-white/[0.02] h-full shadow-lg">
//                                 <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:rotate-6 transition-transform">
//                                     <Layers className="w-6 h-6" />
//                                 </div>
//                                 <h4 className="text-xl font-bold text-white mb-3 tracking-tight">Vector Tile Server</h4>
//                                 <p className="text-slate-400 text-sm leading-relaxed mb-6">Fully compatible with <span className="text-white">MapLibre GL</span> and Leaflet. Serve high-density PBF tiles from your own PostGIS infrastructure.</p>
//                                 <ul className="space-y-2">
//                                     {['Custom Mapbox GL Styling', '3D Building Extrusions', 'Sub-second Tile Loads'].map((item, i) => (
//                                         <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
//                                             <div className="w-1 h-1 rounded-full bg-blue-500" /> {item}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </Reveal>

//                         <Reveal delay={200}>
//                             <div className="group p-8 rounded-3xl bg-[#070B14] border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/[0.02] h-full shadow-lg">
//                                 <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:rotate-6 transition-transform">
//                                     <ShieldCheck className="w-6 h-6" />
//                                 </div>
//                                 <h4 className="text-xl font-bold text-white mb-3 tracking-tight">Sovereign Hosting</h4>
//                                 <p className="text-slate-400 text-sm leading-relaxed mb-6">Built for <span className="text-white">On-Premise GIS</span> requirements. No tracking, no external pings—just your data on your dedicated servers.</p>
//                                 <ul className="space-y-2">
//                                     {['Air-Gapped Ready', 'TLS Encrypted Streams', 'OpenStreetMap Standards'].map((item, i) => (
//                                         <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
//                                             <div className="w-1 h-1 rounded-full bg-emerald-500" /> {item}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </Reveal>

//                         <Reveal delay={300}>
//                             <div className="group p-8 rounded-3xl bg-[#070B14] border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-white/[0.02] h-full shadow-lg">
//                                 <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:rotate-6 transition-transform">
//                                     <Route className="w-6 h-6" />
//                                 </div>
//                                 <h4 className="text-xl font-bold text-white mb-3 tracking-tight">OSRM Routing Logic</h4>
//                                 <p className="text-slate-400 text-sm leading-relaxed mb-6">Mission-critical <span className="text-white">Fleet Pathfinding</span>. Calculate multi-stop matrix routes and traffic-aware ETA using OSRM algorithms.</p>
//                                 <ul className="space-y-2">
//                                     {['Truck-Legal Pathing', 'Isochrone Generation', 'Polyline Optimization'].map((item, i) => (
//                                         <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
//                                             <div className="w-1 h-1 rounded-full bg-indigo-500" /> {item}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </Reveal>
//                     </div>
//                 </div>

//                 {/* --- TECHNICAL EXCELLENCE SECTION --- */}
//                 <div className="mb-12">
//                     <Reveal>
//                         <div className="relative p-10 md:p-16 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0A101F] to-[#03060D] overflow-hidden group shadow-2xl">
//                             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-blue-600/20 transition-all duration-700" />

//                             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
//                                 <div>
//                                     <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-6">
//                                         <Settings className="w-3.5 h-3.5" /> PostGIS & OSM Powered
//                                     </div>
//                                     <h3 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight">The Professional <span className="text-blue-500">GIS Stack</span> for Logistics.</h3>
//                                     <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light italic">
//                                         Our Maps API is built to replace costly cloud providers. Whether you're using Swift, Kotlin, or React, our RESTful endpoints provide total control over your <span className="text-white">OpenStreetMap</span> pipeline.
//                                     </p>
//                                     <div className="grid grid-cols-2 gap-6">
//                                         <div className="space-y-4">
//                                             <h5 className="text-white font-bold flex items-center gap-2">
//                                                 <Code className="w-4 h-4 text-blue-500" /> Native Map SDKs
//                                             </h5>
//                                             <p className="text-slate-500 text-xs">Full support for mobile and cross-platform Flutter/React Native.</p>
//                                         </div>
//                                         <div className="space-y-4">
//                                             <h5 className="text-white font-bold flex items-center gap-2">
//                                                 <Globe className="w-4 h-4 text-emerald-500" /> WMS/TMS Standards
//                                             </h5>
//                                             <p className="text-slate-500 text-xs">Compatible with QGIS, ArcGIS, and standard web libraries.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="bg-black/40 border border-white/10 rounded-2xl p-6 shadow-2xl">
//                                     <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
//                                         <span className="text-xs text-slate-400 font-mono italic">osm_pipeline.log</span>
//                                         <div className="flex gap-1.5">
//                                             <div className="w-2 h-2 rounded-full bg-red-500/50" />
//                                             <div className="w-2 h-2 rounded-full bg-amber-500/50" />
//                                             <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
//                                         </div>
//                                     </div>
//                                     <div className="space-y-2 font-mono text-[10px] sm:text-xs">
//                                         <p className="text-emerald-400">[sys] PostGIS Connection Established</p>
//                                         <p className="text-slate-500">[osm] Importing latest planet-extract (v2.4.0)</p>
//                                         <p className="text-blue-400">[tile] Serving Vector PBF: zoom level 14</p>
//                                         <p className="text-indigo-400">[route] OSRM multi-stop logic active</p>
//                                         <p className="text-emerald-400">[success] Visual buffer sync: 12ms latency</p>
//                                         <p className="text-slate-400 animate-pulse">_</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Reveal>
//                 </div>

//                 {/* --- API HUB (UNCHANGED) --- */}
//                 <div className="mb-12">
//                     <div className="bg-[#0A101F] rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl">
//                         <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-white/10 bg-black/20 p-4 space-y-2">
//                             {apiDocs.map((doc) => {
//                                 const Icon = doc.icon;
//                                 const isActive = activeApi === doc.id;
//                                 return (
//                                     <button
//                                         key={doc.id}
//                                         onClick={() => setActiveApi(doc.id)}
//                                         className={`w-full text-left px-4 py-4 rounded-xl flex items-center gap-3 transition-all ${isActive ? 'bg-blue-600 border border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'bg-transparent border border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}
//                                     >
//                                         <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
//                                         <span className="font-semibold text-sm">{doc.title}</span>
//                                     </button>
//                                 );
//                             })}
//                         </div>

//                         <div className="flex-1 p-6 md:p-10 flex flex-col justify-between">
//                             <div>
//                                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
//                                     <h4 className="text-2xl font-bold text-white flex items-center gap-3">
//                                         <currentDoc.icon className="w-6 h-6 text-blue-500" />
//                                         {currentDoc.title}
//                                     </h4>
//                                     <div className="flex items-center gap-3 px-3 py-2 bg-black/40 rounded-lg border border-white/10 w-fit">
//                                         <span className="text-[10px] sm:text-xs font-bold text-emerald-400">{currentDoc.method}</span>
//                                         <span className="text-xs sm:text-sm font-mono text-slate-300">{currentDoc.endpoint}</span>
//                                     </div>
//                                 </div>

//                                 <p className="text-slate-400 mb-8 leading-relaxed">
//                                     {currentDoc.desc}
//                                 </p>
//                             </div>

//                             <div className="relative group/code">
//                                 <div className="absolute top-0 right-0 p-3 z-10">
//                                     <button
//                                         onClick={() => handleCopy(currentDoc.command)}
//                                         className="p-2 rounded-lg bg-white/10 border border-white/20 text-slate-300 hover:bg-white/20 hover:text-white transition-all backdrop-blur-md"
//                                         title="Copy to clipboard"
//                                     >
//                                         {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
//                                     </button>
//                                 </div>
//                                 <div className="bg-[#03060D] rounded-2xl border border-white/10 p-6 overflow-x-auto shadow-inner">
//                                     <pre className="text-sm font-mono text-slate-300 whitespace-pre-wrap break-all md:break-normal">
//                                         <code className="block text-emerald-400 mb-1"># Example Request</code>
//                                         {currentDoc.command}
//                                     </pre>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="fixed top-0 right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] -z-10 rounded-full" />
//             <div className="fixed bottom-0 left-[-10%] w-[500px] h-[500px] bg-cyan-600/5 blur-[150px] -z-10 rounded-full" />
//         </div>
//     );
// }

"use client"
import React, { useState } from 'react';
import { Map, Layers, Route, Navigation, Search, Database, Check, Copy, ShieldCheck, Settings, ArrowLeft } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useRouter } from 'next/navigation';

import FAQSection from '@/components/FAQSection';

const apiDocs = [
    {
        id: 'maps',
        title: 'Maps API',
        icon: Map,
        method: 'GET',
        endpoint: '/api/v1/proxy/maps',
        desc: 'Retrieve map styles, GeoJSON datasets, and configuration resources for building modern web and mobile mapping applications.',
        command: `curl -X GET "https://client.mapifyit.com/api/v1/proxy/maps?style=basic" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    },
    {
        id: 'routing',
        title: 'Routing API',
        icon: Navigation,
        method: 'GET',
        endpoint: '/api/v1/proxy/routing',
        desc: 'Compute optimized routes, multi-stop navigation, distance matrices, and SDK-ready turn-by-turn guidance for web and mobile applications.',
        command: `curl -X GET "https://client.mapifyit.com/api/v1/proxy/routing?json={\\"locations\\":[{\\"lon\\":67.0207055,\\"lat\\":24.8546842},{\\"lon\\":73.0651511,\\"lat\\":33.6938118}],\\"costing\\":\\"auto\\"}" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    },
    {
        id: 'tiles',
        title: 'Tiles API',
        icon: Layers,
        method: 'GET',
        endpoint: '/api/v1/proxy/tiles/{theme}',
        desc: "Access high-performance vector and raster map tiles optimized for scalable mapping applications.",
        command: `curl -X GET "https://client.mapifyit.com/api/v1/proxy/tiles/dark" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    },
    {
        id: 'geocoding',
        title: 'Auto-Complete Search Geocoding API',
        icon: Search,
        method: 'GET',
        endpoint: '/api/v1/proxy/geocoding',
        desc: 'Convert addresses, places, and points of interest into precise geographic coordinates.',
        command: `curl -X GET "https://client.mapifyit.com/api/v1/proxy/geocoding?q=blue+area&lat=33.70&lon=73.05" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    },
    {
        id: 'reverse_geocoding',
        title: 'Search Reverse Geocoding API',
        icon: Database,
        method: 'GET',
        endpoint: '/api/v1/proxy/reverse_geocoding',
        desc: 'Transform geographic coordinates into human-readable addresses and location metadata.',
        command: `curl -X GET "https://client.mapifyit.com/api/v1/proxy/reverse_geocoding?lat=33.7297&lon=73.0372&size=1" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    }
];

export default function MapsPage() {

    const router = useRouter();
    const [activeApi, setActiveApi] = useState(apiDocs[0].id);
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const currentDoc = apiDocs.find(d => d.id === activeApi) || apiDocs[0];

    return (
        <div className="min-h-screen bg-[#03060D] text-white pt-20 pb-20 font-sans">
            <div className="max-w-7xl mx-auto px-6 pt-0 md:pt-4">

                <div className="mb-10">
                    <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold group cursor-pointer">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Go Back
                    </button>
                </div>

                {/* HERO */}

                <div className="mb-12">
                    <Reveal>

                        <h1 className="text-3xl md:text-[45px] font-bold text-white mb-5">
                            Interactive Map API Platform for Developers USA
                        </h1>

                        <h3 className="text-xl text-gray-400 max-w-4xl">
                            Build modern mapping applications using our high-performance Maps API platform.
                            Deliver vector tiles, geocoding, routing, and spatial search powered entirely by
                            our proprietary geospatial infrastructure, with advanced turn-by-turn navigation
                            and neural voice guidance available through the built-in SDK.
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
                                Serve high-performance vector map tiles from your own geospatial infrastructure.
                                Compatible with modern mapping libraries and mobile SDKs.
                            </p>

                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>Custom Map Styling</li>
                                <li>3D Building Extrusions</li>
                                <li>Sub-second Tile Rendering</li>
                            </ul>

                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="p-8 rounded-3xl bg-[#070B14] border hover:border-emerald-500/30 border-white/5">

                            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-4" />

                            <h4 className="text-xl font-bold text-white mb-3">
                                Sovereign Hosting
                            </h4>

                            <p className="text-slate-400 text-sm mb-6">
                                Deploy the entire mapping infrastructure on your own servers with full control
                                over geospatial data and API performance.
                            </p>

                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>Air-Gapped Deployments</li>
                                <li>Encrypted Data Streams</li>
                                <li>Enterprise GIS Standards</li>
                            </ul>

                        </div>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="p-8 rounded-3xl bg-[#070B14] border hover:border-indigo-500/30 border-white/5">

                            <Route className="w-6 h-6 text-indigo-400 mb-4" />

                            <h4 className="text-xl font-bold text-white mb-3">
                                Advanced Routing Engine
                            </h4>

                            <p className="text-slate-400 text-sm mb-6">
                                Compute optimized routes, distance matrices, and navigation paths using our
                                proprietary routing engine built for large-scale mapping applications. Add
                                SDK-ready turn-by-turn navigation with natural neural voice guidance for mobile
                                and in-vehicle experiences.
                            </p>

                            <ul className="space-y-2 text-sm text-slate-500">
                                <li>Multi-Stop Route Optimization</li>
                                <li>Neural Voice Turn-by-Turn SDK</li>
                                <li>Isochrone Generation</li>
                                <li>Navigation Geometry Encoding</li>
                            </ul>

                        </div>
                    </Reveal>

                </div>

                {/* TECH SECTION */}

                <Reveal>

                    <div className="p-12 rounded-[2.5rem] border border-white/10 bg-[#0A101F]">

                        <div className="inline-flex items-center gap-2 text-blue-400 text-sm mb-6">
                            <Settings className="w-5 h-5" />
                            Enterprise Geospatial Infrastructure
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-4">
                            Professional GIS Stack for Developers
                        </h3>

                        <p className="text-slate-400 max-w-3xl mb-10">
                            Our Maps API platform replaces expensive third-party mapping providers.
                            Integrate vector tiles, geocoding, routing, and spatial search using
                            simple REST APIs while maintaining complete control over your mapping infrastructure.
                            For navigation products, the SDK supports turn-by-turn route guidance with neural
                            voice prompts and mobile-ready maneuver instructions.
                        </p>

                        <div className="bg-black/40 rounded-xl p-6 text-xs font-mono">

                            <p className="text-emerald-400">[sys] Geospatial database connection established</p>
                            <p className="text-blue-400">[tiles] Vector tile generation initialized</p>
                            <p className="text-indigo-400">[route] Routing engine computation active</p>
                            <p className="text-cyan-400">[geo] Geocoding index synchronized</p>
                            <p className="text-emerald-400">[success] Tile render latency: 12ms</p>

                        </div>

                    </div>

                </Reveal>

                <div className="py-12">
                    <div className="bg-[#0A101F] rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl">
                        <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-white/10 bg-black/20 p-4 space-y-2">
                            {apiDocs.map((doc) => {
                                const Icon = doc.icon;
                                const isActive = activeApi === doc.id;
                                return (
                                    <button
                                        key={doc.id}
                                        onClick={() => setActiveApi(doc.id)}
                                        className={`w-full text-left px-4 py-4 rounded-xl flex items-center gap-3 transition-all ${isActive ? 'bg-blue-600 border border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'bg-transparent border border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}
                                    >
                                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                                        <span className="font-semibold text-sm">{doc.title}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="flex-1 p-6 md:p-10 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                                        <currentDoc.icon className="w-6 h-6 text-blue-500" />
                                        {currentDoc.title}
                                    </h4>
                                    <div className="flex items-center gap-3 px-3 py-2 bg-black/40 rounded-lg border border-white/10 w-fit">
                                        <span className="text-[10px] sm:text-xs font-bold text-emerald-400">{currentDoc.method}</span>
                                        <span className="text-xs sm:text-sm font-mono text-slate-300">{currentDoc.endpoint}</span>
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    {currentDoc.desc}
                                </p>
                            </div>

                            <div className="relative group/code">
                                <div className="absolute top-0 right-0 p-3 z-10">
                                    <button
                                        onClick={() => handleCopy(currentDoc.command)}
                                        className="p-2 rounded-lg bg-white/10 border border-white/20 text-slate-300 hover:bg-white/20 hover:text-white transition-all backdrop-blur-md"
                                        title="Copy to clipboard"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                                <div className="bg-[#03060D] rounded-2xl border border-white/10 p-6 overflow-x-auto shadow-inner">
                                    <pre className="text-sm font-mono text-slate-300 whitespace-pre-wrap break-all md:break-normal">
                                        <code className="block text-emerald-400 mb-1"># Example Request</code>
                                        {currentDoc.command}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FAQSection type="maps" showHeader={false} />
        </div>
    );
}
