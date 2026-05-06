import React from 'react';
import Image from 'next/image';

export default function GlobalRadarMap() {
    return (
        <div className="mt-12 md:mt-20 relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl border border-white/10 bg-[#070B14]/60 md:backdrop-blur-xl backdrop-blur-sm overflow-hidden shadow-2xl group [perspective:2000px]">

            {/* Custom Animations injected directly for easy plug-and-play */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes radar-sweep {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
                .animate-radar {
                    animation: radar-sweep 5s linear infinite;
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    100% { transform: scale(2.5); opacity: 0; }
                }
                .animate-pulse-ring {
                    animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
                }
            `}} />

            {/* Background Base & Grid */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] to-[#03060D] z-0" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] z-0 opacity-50" />

            {/* Visual Map Engine Simulation */}
            <div className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden">
                <div className="w-[100%] h-[100%] relative transition-transform duration-1000 group-hover:scale-105">

                    {/* World Map Background - Next.js Optimized */}
                    <div className="absolute inset-0 z-0 opacity-60">
                        <Image
                            src="/HDbackground.png"
                            alt="Background Map"
                            fill
                            sizes="(max-width: 768px) 100vw, 1200px"
                            className="object-cover pointer-events-none"
                            priority={true}
                            style={{ filter: 'drop-shadow(0px 0px 15px rgba(59,130,246,0.3))' }}
                        />
                    </div>

                    {/* Radar Scanner Beam */}
                    <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500/10 to-blue-400/40 border-r-2 border-blue-400 blur-[1px] animate-radar z-20 shadow-[10px_0_50px_rgba(59,130,246,0.5)]" />

                    {/* Connecting API Lines (SVG) */}
                    <svg
                        // viewBox="0 0 100 100" preserveAspectRatio="none" 
                        className="absolute inset-0 w-full h-full z-20 overflow-visible" style={{ filter: 'drop-shadow(0 0 6px rgba(59,130,246,0.6))' }}>
                        {/* New York to London */}
                        <path d="M 15 10 Q 26 5 38 20" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="4 4" className="animate-[pulse_3s_infinite]"
                        // vectorEffect="non-scaling-stroke" 
                        />
                        {/* London to Tokyo */}
                        <path d="M 38 20 Q 60 10 88 42" stroke="#10b981" strokeWidth="1.5" fill="none" opacity="0.6"
                        // vectorEffect="non-scaling-stroke" 
                        />
                        {/* Tokyo to Sydney */}
                        <path d="M 88 42 Q 95 60 75 75" stroke="#8b5cf6" strokeWidth="2" fill="none" strokeDasharray="6 4" opacity="0.8"
                        // vectorEffect="non-scaling-stroke"
                        />
                    </svg>

                    {/* API Node 1: New York */}
                    <div className="absolute top-[10%] left-[15%] w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_#3b82f6] -translate-x-1/2 -translate-y-1/2 z-30">
                        <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-pulse-ring" />
                    </div>

                    {/* API Node 2: London */}
                    <div className="absolute top-[20%] left-[38%] w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_20px_#10b981] -translate-x-1/2 -translate-y-1/2 z-30">
                        <div className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
                    </div>

                    {/* API Node 3: Tokyo */}
                    <div className="absolute top-[42%] left-[88%] w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_#3b82f6] -translate-x-1/2 -translate-y-1/2 z-30">
                        <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-pulse-ring" style={{ animationDelay: '1s' }} />
                    </div>

                    {/* API Node 4: Sydney */}
                    <div className="absolute top-[75%] left-[75%] w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_15px_#8b5cf6] -translate-x-1/2 -translate-y-1/2 z-30">
                        <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-pulse-ring" style={{ animationDelay: '1.5s' }} />
                    </div>
                </div>
            </div>

            {/* Telemetry Overlays (Bottom corners) */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex justify-between items-end z-40 pointer-events-none">
                <div className="bg-[#03060D]/80 border border-blue-500/20 p-2 md:p-4 rounded-lg md:rounded-xl backdrop-blur-md animate-[float_4s_ease-in-out_infinite]">
                    <div className="text-[8px] md:text-xs text-slate-400 font-mono mb-1 text-center md:text-left">GLOBAL_API_ROUTING</div>
                    <div className="text-[10px] md:text-sm text-blue-400 font-mono tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> 12ms Latency
                    </div>
                </div>
                <div className="bg-[#03060D]/80 border border-emerald-500/20 p-2 md:p-4 rounded-lg md:rounded-xl backdrop-blur-md flex flex-col items-end animate-[float_5s_ease-in-out_infinite_0.5s]">
                    <div className="flex items-center gap-2 md:gap-3 mb-1">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                        <span className="text-white tracking-widest uppercase text-[8px] md:text-[10px] font-bold">Spatial Engine Live</span>
                    </div>
                    <div className="text-[8px] md:text-[10px] text-emerald-400/70 font-mono">NODE_SYNC: 99.99%</div>
                </div>
            </div>
        </div>
    );
}