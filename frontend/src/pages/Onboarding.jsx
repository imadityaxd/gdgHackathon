import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import { User, Sparkles, ShieldCheck } from 'lucide-react';

export default function Onboarding({ onProfileSelected }) {
  const [profiles, setProfiles] = useState([]);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    api.get('/artisan/').then(res => setProfiles(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-md mx-auto py-12 px-4 space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-black text-[#1C2442] tracking-tight">CreditWeave Onboarding Hub</h2>
        <p className="text-xs text-gray-400">Parsing non-traditional artisan records into priority underwriting profiles.</p>
      </div>

      <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-gray-50 pb-2 font-bold text-xs text-[#1C2442] uppercase tracking-wider"><User size={14} className="text-[#FF9933]" /> Select Sandbox Identity</div>
        <div className="space-y-2">
          {profiles.map(p => (
            <button key={p.id} disabled={!consent} onClick={() => onProfileSelected(p)} className={`w-full text-left p-3 border rounded-xl flex items-center justify-between transition group border-gray-100 hover:border-[#FF9933]/40 ${!consent ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50/40'}`}>
              <div>
                <p className="text-xs font-bold text-[#1C2442]">{p.name}</p>
                <p className="text-[10px] text-gray-400 font-medium mt-0.5">{p.craft} • {p.location}</p>
              </div>
              <Sparkles size={14} className="text-gray-200 group-hover:text-[#FF9933] transition" />
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-100 p-4 rounded-2xl flex items-start gap-3 shadow-xs">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 rounded text-[#FF9933] border-gray-300 focus:ring-[#FF9933]" />
        <p className="text-[10px] text-gray-500 leading-normal flex-1">
          <strong>DPDP Act Data Consent Authorization:</strong> I permit processing alternative text history artifacts and image receipts solely for institutional underwriting calculations. Non-public profile items will be purged immediately upon transaction freeze.
        </p>
      </div>
    </div>
  );
}