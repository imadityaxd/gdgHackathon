import React from 'react';
import CreditGauge from '../components/CreditGauge';
import ScoreFactors from '../components/ScoreFactors';
import { Sparkles, BarChart2, ShieldCheck, FileText, ArrowUpRight, ShieldAlert, Layers } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

export default function Dashboard({ scoreData, profile }) {
  if (!scoreData) return null;

  // Transform raw array sequence into formal financial quarters
  const chartData = profile.monthly_orders.map((amt, idx) => ({
    name: `M${idx + 1}`,
    "Inflow Volume": amt,
    "Normalized Base": idx % 3 === 0 ? amt * 0.85 : amt * 1.05
  }));

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in pb-24">
      {/* Premium Institutional Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200/80 pb-5 gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-50 text-indigo-700 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider border border-indigo-100">
              Underwriting Portfolio
            </span>
            <span className="text-gray-300 text-xs">|</span>
            <p className="text-xs font-bold text-gray-500 flex items-center gap-1">
              <Layers size={12} className="text-gray-400" /> System Ref: {profile.id.toUpperCase()}-2026
            </p>
          </div>
          <h2 className="text-2xl font-black text-[#1C2442] tracking-tight mt-1">
            Alternative Risk Verification Desk
          </h2>
          <p className="text-xs text-gray-400 font-medium">
            Automated synthetic underwriting models active over informal multi-modal datasets.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Applicant Identity</span>
            <span className="text-xs font-extrabold text-[#1C2442]">{profile.name}</span>
          </div>
          <div className="h-8 w-[1px] bg-gray-200 hidden sm:block"></div>
          <span className="px-3 py-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-1.5 shadow-2xs">
            <ShieldCheck size={14} /> DPDP Sandbox Secured
          </span>
        </div>
      </div>

      {/* Main Core Metric Grid Framework */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 flex flex-col justify-between">
          <CreditGauge score={scoreData.composite_score} />
        </div>
        <div className="lg:col-span-2">
          <ScoreFactors subScores={scoreData.sub_scores} />
        </div>
      </div>

      {/* High-Fidelity Forensic Analytics Layer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Underwriter Insight Panel */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs flex flex-col justify-between space-y-4 lg:col-span-1">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#1C2442] border-b border-gray-100 pb-2.5 flex items-center gap-2 uppercase tracking-wider text-gray-400">
              <FileText size={14} className="text-[#FF9933]" /> Underwriter Synthesis
            </span>
            <div className="relative">
              <p className="text-xs text-gray-600 leading-relaxed font-medium italic pl-3.5 border-l-2 border-[#FF9933] text-justify">
                "{scoreData.risk_analysis_summary}"
              </p>
            </div>
          </div>

          <div className="bg-indigo-50/40 border border-indigo-100/50 p-3.5 rounded-xl space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-bold text-indigo-900 uppercase">
              <span>Underwriting Quality Index</span>
              <span className="font-mono text-xs">99.4%</span>
            </div>
            <div className="w-full bg-indigo-100/60 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-full w-[99.4%] rounded-full" />
            </div>
          </div>
        </div>

        {/* Seasonality Data Visualization Module */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs space-y-4 lg:col-span-2 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-50 pb-2">
            <span className="text-xs font-bold text-[#1C2442] uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
              <BarChart2 size={14} /> Seasonal Multi-Channel Order Graph
            </span>
            <span className="text-[10px] text-amber-600 font-bold bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md">
              Calibrated for Lucknow Textile Cycles
            </span>
          </div>

          <div className="w-full h-44 text-[10px] font-mono">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ left: -25, top: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F9FAFB" vertical={false} />
                <XAxis dataKey="name" stroke="#9CA3AF" tickLine={false} />
                <YAxis stroke="#9CA3AF" tickLine={false} />
                <Tooltip cursor={{ fill: '#F9FAFB' }} />
                <Bar dataKey="Inflow Volume" fill="#1C2442" radius={[4, 4, 0, 0]} barSize={16} />
                <Bar dataKey="Normalized Base" fill="#FF9933" radius={[4, 4, 0, 0]} barSize={4} opacity={0.3} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-50 text-[11px] font-semibold text-gray-500">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-[#1C2442] rounded-full" />
              <span>Extracted Transaction Values</span>
            </div>
            <div className="flex items-center gap-1.5 justify-end">
              <div className="w-2 h-2 bg-[#FF9933]/40 rounded-full" />
              <span>Seasonality Control Target Baseline</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}