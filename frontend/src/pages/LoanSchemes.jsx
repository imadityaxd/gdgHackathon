import React, { useState } from 'react';
import SchemeCard from '../components/SchemeCard';
import StatusTimeline from '../components/StatusTimeline';
import { Loader2, KeyRound } from 'lucide-react';

export default function LoanSchemes({ schemes }) {
  const [targetScheme, setTargetScheme] = useState(null);
  const [pipelineState, setPipelineState] = useState({ step: 1, logs: [] });
  const [otp, setOtp] = useState('');

  const initiateApplication = (scheme) => {
    setTargetScheme(scheme);
    setPipelineState({
      step: 3,
      logs: [
        "Spawning background headless automation instances...",
        "Navigating to state landing portal: https://www.jansamarth.in/login...",
        "Injecting pre-compiled alternative credit identity payload...",
        "Aadhaar structural linkage detected. Pausing execution loop for 2FA validation token input..."
      ]
    });
  };

  const handleOtpResolution = () => {
    setTargetScheme(null);
    setPipelineState({
      step: 4,
      logs: [
        "User 2FA authentication block cleared successfully.",
        "Injecting final MSME / UAC certificate profile components...",
        "Application file packed, signed, and dispatched to institutional PSB queues.",
        "System session sandboxes purged cleanly under DPDP compliance rules."
      ]
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
      <div>
        <h2 className="text-lg font-black text-[#1C2442]">Priority Allocation Pathways</h2>
        <p className="text-xs text-gray-400">Live government credit platforms prioritized via system matching evaluations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {schemes.map((s, i) => <SchemeCard key={i} scheme={s} onApply={initiateApplication} />)}
      </div>

      <StatusTimeline activeStep={pipelineState.step} logs={pipelineState.logs} />

      {targetScheme && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl max-w-sm w-full p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-50 pb-2 text-xs font-bold text-[#1C2442]"><KeyRound size={16} className="text-[#FF9933]" /> Jan Samarth 2FA Auth Bridge</div>
            <div className="space-y-3">
              <p className="text-[10px] bg-amber-50 text-amber-900 p-2.5 rounded-xl border border-amber-100 leading-relaxed">
                <strong>Authentication Intercept:</strong> Automation engine requires dynamic verification token entry to submit application to bank queues.
              </p>
              <input type="text" maxLength={6} value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="######" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-center text-sm font-bold tracking-widest focus:outline-none" />
              <button onClick={handleOtpResolution} disabled={otp.length !== 6} className={`w-full py-2 rounded-xl text-xs font-bold text-white ${otp.length === 6 ? 'bg-[#1C2442] hover:bg-[#1A213B]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>Verify & Inject Form Data</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}