import React from 'react';
import { CheckCircle2, Loader2, Circle } from 'lucide-react';

export default function StatusTimeline({ activeStep, logs }) {
  const pipeline = [
    { id: 1, name: "Alternative Credit Identity Compiled" },
    { id: 2, name: "Udyam Assist Portal Verification Passed" },
    { id: 3, name: "Jan Samarth API Form Handshake Executed" },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs space-y-4">
      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Live Application Lifecycle</span>
      <div className="relative border-l-2 border-gray-100 pl-6 ml-3 space-y-5">
        {pipeline.map((step) => (
          <div key={step.id} className="relative">
            <div className="absolute -left-[35px] top-0 bg-white p-0.5 rounded-full">
              {activeStep > step.id ? <CheckCircle2 className="text-emerald-500" size={16} /> : activeStep === step.id ? <Loader2 className="text-[#FF9933] animate-spin" size={16} /> : <Circle className="text-gray-300 fill-white" size={16} />}
            </div>
            <h4 className={`text-xs font-bold ${activeStep === step.id ? 'text-[#1C2442]' : activeStep > step.id ? 'text-gray-400' : 'text-gray-200'}`}>{step.name}</h4>
          </div>
        ))}
      </div>

      {logs.length > 0 && (
        <div className="border-t border-gray-50 pt-3 bg-gray-50 p-3 rounded-xl font-mono text-[9px] text-gray-500 space-y-1 max-h-24 overflow-y-auto">
          {logs.map((l, i) => <p key={i}><span className="text-[#FF9933]">›</span> {l}</p>)}
        </div>
      )}
    </div>
  );
}