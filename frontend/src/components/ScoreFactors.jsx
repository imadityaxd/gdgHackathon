import React from 'react';

function FactorBar({ label, val }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs font-semibold">
        <span className="text-gray-500">{label}</span>
        <span className="text-[#1C2442]">{val} <span className="text-[10px] text-gray-300">/ 180</span></span>
      </div>
      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
        <div className="bg-[#1C2442] h-full rounded-full transition-all duration-1000" style={{ width: `${(val/180)*100}%` }} />
      </div>
    </div>
  );
}

export default function ScoreFactors({ subScores }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Underwriting Dimensions</span>
      <div className="space-y-3">
        <FactorBar label="Seasonality Continuity Index" val={subScores.consistency} />
        <FactorBar label="UPI Cashflow Velocity" val={subScores.cashflow} />
        <FactorBar label="Order Execution Match" val={subScores.fulfillment} />
        <FactorBar label="Tax Regulatory Track" val={subScores.compliance} />
        <FactorBar label="Cluster Social Trust" val={subScores.cluster} />
      </div>
    </div>
  );
}