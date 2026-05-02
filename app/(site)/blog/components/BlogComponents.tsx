import React from 'react';
import {
    CheckCircle2
} from 'lucide-react';

export const SectionHeader = ({ title, subtitle, centered = false }: { title: string; subtitle?: React.ReactNode; centered?: boolean }) => (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h2>
        {subtitle && (
            <div className={`text-slate-400 text-lg max-w-3xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
                {subtitle}
            </div>
        )}
    </div>
);

export const FeatureCard = ({ icon: Icon, title, description, color = "blue" }: any) => {
    const colorMap: any = {
        blue: "bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:border-blue-500/50",
        emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:border-emerald-500/50",
        purple: "bg-purple-500/10 text-purple-400 border-purple-500/20 group-hover:border-purple-500/50",
        cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 group-hover:border-cyan-500/50",
        orange: "bg-orange-500/10 text-orange-400 border-orange-500/20 group-hover:border-orange-500/50"
    };

    return (
        <div className="group p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08]">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${colorMap[color]}`}>
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
        </div>
    );
};

export const ComparisonRow = ({ label, mapifyit, competitors, highlight = false }: any) => (
    <tr className={`border-b border-white/5 transition-colors ${highlight ? 'bg-blue-500/5' : 'hover:bg-white/[0.02]'}`}>
        <td className="py-6 px-4 text-slate-300 font-medium">{label}</td>
        <td className="py-6 px-4">
            <div className="flex items-center gap-2 text-blue-400 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {mapifyit}
            </div>
        </td>
        <td className="py-6 px-4 text-slate-500">{competitors}</td>
    </tr>
);
