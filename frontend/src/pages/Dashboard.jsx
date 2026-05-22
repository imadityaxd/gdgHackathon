import React from 'react';
import CreditGauge from '../components/CreditGauge';
import ScoreFactors from '../components/ScoreFactors';
import { Sparkles, BarChart2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function Dashboard({ scoreData, profile }) {
  if (!scoreData) return null;

  const chartData = profile.monthly_orders.map((amt, idx) => ({ name: `M${idx+1}`, Inflow: amt }));

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
      <div className="border-b border-gray-100 pb-3 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black text-[#1C2442]">Alternative Verification Abstract</h2>
          <p className="text-xs text-gray-400">Risk rating derived from multi-modal cluster data extractions.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CreditGauge score={scoreData.composite_score} />
        <div className="md:col-span-2"><ScoreFactors subScores={scoreData.sub_scores} /></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-3">
          <span className="text-xs font-bold text-[#1C2442] border-b border-gray-50 pb-2 flex items-center gap-1.5"><Sparkles size={14} className="text-[#FF9933]" /> AI Risk Narrative Extract</span>
          <p className="text-xs text-gray-600 leading-relaxed font-medium italic pl-2 border-l-2 border-gray-200">{scoreData.risk_analysis_summary}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block flex items-center gap-1"><BarChart2 size={12} /> Seasonal Cashflow Graph Profile</span>
          <div className="w-full h-36 text-[9px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ left: -30 }}><XAxis dataKey="name" stroke="#9CA3AF" /><YAxis stroke="#9CA3AF" /><Bar dataKey="Inflow" fill="#1C2442" radius={[2,2,0,0]} /></BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}