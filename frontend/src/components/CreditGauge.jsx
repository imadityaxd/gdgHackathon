import React from 'react';

export default function CreditGauge({ score }) {
  const min = 300, max = 900;
  const percentage = Math.max(0, Math.min(100, ((score - min) / (max - min)) * 100));
  const radius = 52, circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const strokeColor = score >= 750 ? '#10B981' : score >= 600 ? '#FF9933' : '#F43F5E';

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 shadow-xs text-center">
      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">Alternative Credit Metric</span>
      <div className="relative w-36 h-36 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="72" cy="72" r={radius} stroke="#F3F4F6" strokeWidth="10" fill="transparent" />
          <circle cx="72" cy="72" r={radius} stroke={strokeColor} strokeWidth="10" fill="transparent"
                  strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
        </svg>
        <div className="absolute">
          <span className="text-3xl font-black text-[#1C2442] tracking-tight">{score}</span>
          <span className="text-[9px] font-bold text-gray-400 block border-t border-gray-100 pt-0.5 mt-0.5">Proxy Score</span>
        </div>
      </div>
    </div>
  );
}