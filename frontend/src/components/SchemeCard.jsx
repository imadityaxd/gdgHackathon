import React from 'react';
import { Award, ArrowRight, ShieldAlert } from 'lucide-react';

export default function SchemeCard({ scheme, onApply }) {
  return (
    <div className={`bg-white p-5 rounded-2xl border shadow-xs flex flex-col justify-between space-y-4 ${scheme.eligible ? 'border-gray-100' : 'border-gray-100 opacity-60 bg-gray-50/50'}`}>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="p-2 bg-gray-50 border border-gray-100 rounded-xl text-[#1C2442]">
            <Award size={18} />
          </div>
          <span className={`px-2 py-0.5 text-[9px] font-bold border rounded-full ${scheme.eligible ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-rose-50 text-rose-700 border-rose-100'}`}>
            {scheme.eligible ? `${scheme.approval_probability}% Rating` : 'Ineligible'}
          </span>
        </div>
        <h4 className="text-xs font-bold text-[#1C2442] tracking-tight">{scheme.scheme_id.toUpperCase().replace('-', ' ')}</h4>
        <p className="text-[10px] text-gray-500 leading-relaxed font-medium">{scheme.compliance_reasoning}</p>
      </div>

      <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
        <div>
          <span className="text-[8px] uppercase tracking-wider font-bold text-gray-400 block">Sanction Range</span>
          <span className="text-xs font-extrabold text-[#1C2442]">Priority Framework</span>
        </div>
        {scheme.eligible ? (
          <button onClick={() => onApply(scheme)} className="flex items-center gap-1 bg-[#1C2442] text-white px-3 py-1.5 rounded-lg text-[10px] font-bold hover:bg-[#1A213B] transition">
            Apply Now <ArrowRight size={12} />
          </button>
        ) : (
          <div className="flex items-center gap-1 text-gray-400 text-[10px] font-medium"><ShieldAlert size={12} /> Exceeded Limits</div>
        )}
      </div>
    </div>
  );
}