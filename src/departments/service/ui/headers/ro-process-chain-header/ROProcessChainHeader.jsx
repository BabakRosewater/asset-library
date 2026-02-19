import React from 'react';
import {
  ClipboardEdit,
  Wrench,
  ListPlus,
  Presentation,
  RefreshCcw,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

export default function ROProcessChainHeader() {
  const processSteps = [
    {
      step: 1,
      id: 'write-up',
      title: 'Write-Up',
      icon: ClipboardEdit,
      theme: {
        color: 'bg-blue-500',
        activeGlow: 'shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] border-blue-500',
      },
    },
    {
      step: 2,
      id: 'mpi',
      title: 'MPI Process',
      icon: Wrench,
      theme: {
        color: 'bg-amber-500',
        activeGlow: 'shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)] border-amber-500',
      },
    },
    {
      step: 3,
      id: 'recommendations',
      title: 'Recommendations',
      icon: ListPlus,
      theme: {
        color: 'bg-purple-500',
        activeGlow: 'shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)] border-purple-500',
      },
    },
    {
      step: 4,
      id: 'presentation',
      title: 'Presentation',
      icon: Presentation,
      theme: {
        color: 'bg-emerald-500',
        activeGlow: 'shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] border-emerald-500',
      },
    },
    {
      step: 5,
      id: 'recovery',
      title: 'Recovery',
      icon: RefreshCcw,
      theme: {
        color: 'bg-rose-500',
        activeGlow: 'shadow-[0_0_30px_-5px_rgba(244,63,94,0.5)] border-rose-500',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-12 font-sans flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            RO Process Chain | <span className="text-slate-400 font-light">Opportunities Dashboard</span>
          </h1>
        </div>

        <div className="relative py-8">
          <div className="absolute top-1/2 left-[10%] right-[10%] h-1 bg-slate-800 -translate-y-1/2 z-0 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <div key={step.id} className="relative flex flex-col items-center">
                  <div
                    className={`
                      w-full flex lg:flex-col items-center gap-4 lg:gap-3 p-4 lg:p-6 rounded-2xl border bg-slate-900
                      ${step.theme.activeGlow}
                    `}
                  >
                    <div className={`shrink-0 p-3 lg:p-4 rounded-full text-white shadow-lg ${step.theme.color}`}>
                      <Icon size={28} strokeWidth={2.5} />
                    </div>

                    <div className="text-left lg:text-center w-full">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Step 0{step.step}</div>
                      <div className="font-bold text-white">{step.title}</div>
                    </div>

                    {idx < processSteps.length - 1 && (
                      <div className="lg:hidden ml-auto text-slate-600">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </div>

                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 text-slate-600 z-20 bg-slate-950 rounded-full p-1 items-center justify-center pointer-events-none">
                      <ChevronRight size={24} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
