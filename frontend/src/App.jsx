import React, { useState } from 'react';
import api from './utils/api';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import LoanSchemes from './pages/LoanSchemes';
import { Cpu, User, LayoutDashboard, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState('onboarding'); // onboarding, dashboard, loans
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [scoreData, setScoreData] = useState(null);
  const [schemes, setSchemes] = useState([]);

  const handleProfileSelection = async (profile) => {
    setSelectedProfile(profile);
    setCurrentTab('dashboard');
    
    try {
      // 1. Run Credit Core Underwriter Agent
      const creditRes = await api.post('/credit/score', profile);
      setScoreData(creditRes.data);

      // 2. Run Policy Matching Compliance Agent
      const loanRes = await api.post('/loans/match', {
        profile: profile,
        score_data_json: JSON.stringify(creditRes.data)
      });
      setSchemes(loanRes.data);
    } catch (err) {
      console.error("Critical failure during systemic multi-agent run sequence", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col md:flex-row">
      {/* Dynamic Side Navigation Column Panel */}
      {selectedProfile && (
        <div className="bg-[#1C2442] text-gray-400 w-full md:w-64 flex md:flex-col justify-around md:justify-start py-3 md:py-6 md:px-4 border-b md:border-b-0 border-white/5 md:space-y-1.5 shrink-0">
          <div className="hidden md:flex items-center gap-2 text-white font-black text-sm mb-6 border-b border-white/10 pb-4"><Cpu size={18} className="text-[#FF9933]"/> CreditWeave</div>
          <button onClick={() => setCurrentTab('onboarding')} className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold ${currentTab === 'onboarding' ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'}`}><User size={16}/> Identity Switch</button>
          <button onClick={() => setCurrentTab('dashboard')} className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold ${currentTab === 'dashboard' ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'}`}><LayoutDashboard size={16}/> Underwriting View</button>
          <button onClick={() => setCurrentTab('loans')} className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold ${currentTab === 'loans' ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'}`}><ShieldCheck size={16}/> Match Hub</button>
        </div>
      )}

      {/* Main UI Presentation Screen Frame Module */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-xs md:shadow-none">
          <div className="flex items-center gap-2.5 md:hidden"><Cpu size={18} className="text-[#FF9933]"/><h1 className="text-sm font-black text-[#1C2442]">CreditWeave Engine</h1></div>
          <div className="hidden md:block"><p className="text-xs font-bold text-[#1C2442]">APL priority lending compliance module active</p></div>
        </header>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {currentTab === 'onboarding' && <Onboarding onProfileSelected={handleProfileSelection} />}
          {currentTab === 'dashboard' && <Dashboard scoreData={scoreData} profile={selectedProfile} />}
          {currentTab === 'loans' && <LoanSchemes schemes={schemes} />}
        </main>
      </div>
    </div>
  );
}