import React, { useState } from 'react';
import {
  ClipboardEdit,
  Wrench,
  ListPlus,
  Presentation,
  RefreshCcw,
  ArrowRight,
  Lightbulb,
  Database,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';

export default function ROProcessChainAnalysis() {
  const [activeStepId, setActiveStepId] = useState('write-up');

  const processSteps = [
    {
      step: 1,
      id: 'write-up',
      title: 'Write-Up',
      icon: ClipboardEdit,
      theme: {
        color: 'bg-blue-500',
        text: 'text-blue-400',
        border: 'border-blue-500',
        bgLight: 'bg-blue-500/10',
        glow: 'hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]',
        activeGlow: 'shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] border-blue-500',
      },
      dataPoints: [
        { name: 'Customer Details', desc: 'Contact info, preferences, and primary concerns.' },
        { name: 'Vehicle Details', desc: 'VIN, mileage, history, and initial walkaround data.' },
      ],
      gap: 'Incomplete initial concerns, inaccurate mileage, or missing contact info leads to immediate misdiagnosis and delayed approvals down the line.',
      opportunity:
        'Perform a physical walk-around with the customer. Establish exact expectations and verify their preferred communication channel up front.',
    },
    {
      step: 2,
      id: 'mpi',
      title: 'MPI Process',
      icon: Wrench,
      theme: {
        color: 'bg-amber-500',
        text: 'text-amber-400',
        border: 'border-amber-500',
        bgLight: 'bg-amber-500/10',
        glow: 'hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)]',
        activeGlow: 'shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)] border-amber-500',
      },
      dataPoints: [
        {
          name: 'Accountability Details',
          desc: 'Technician ID, time-stamps, and inspection completeness scores.',
        },
      ],
      gap: "'Pencil whipping' the inspection. Failing to attach photos, videos, or exact measurements makes the MPI easily dismissible by the customer.",
      opportunity:
        'Enforce the 100% Rule. Technicians must capture high-definition media for every red/yellow item to build undeniable, objective proof.',
    },
    {
      step: 3,
      id: 'recommendations',
      title: 'Recommendations',
      icon: ListPlus,
      theme: {
        color: 'bg-purple-500',
        text: 'text-purple-400',
        border: 'border-purple-500',
        bgLight: 'bg-purple-500/10',
        glow: 'hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]',
        activeGlow: 'shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)] border-purple-500',
      },
      dataPoints: [
        {
          name: 'ASR Details',
          desc: 'Advisor Service Recommendations, labor times, parts pricing, and urgency levels.',
        },
      ],
      gap: 'Estimates are disorganized, lack context, or fail to separate immediate safety issues from future mileage-based maintenance.',
      opportunity:
        'Categorize by urgency (Traffic Light Protocol). Use strategic bundling to offer logical, labor-saving options to the customer.',
    },
    {
      step: 4,
      id: 'presentation',
      title: 'Presentation',
      icon: Presentation,
      theme: {
        color: 'bg-emerald-500',
        text: 'text-emerald-400',
        border: 'border-emerald-500',
        bgLight: 'bg-emerald-500/10',
        glow: 'hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]',
        activeGlow: 'shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] border-emerald-500',
      },
      dataPoints: [
        {
          name: 'Communication Channel',
          desc: 'SMS, Email, or Voice (matching customer preference).',
        },
        { name: 'Call Details', desc: 'Talk time, connection success, and presentation notes.' },
      ],
      gap: "Playing phone tag, sending generic texts without context, or presenting prices before establishing the educational 'Why' causes sticker shock.",
      opportunity:
        "Utilize the correct Communication Channel. Use the MPI photos to pivot the conversation from 'Selling a repair' to 'Educating on value'.",
    },
    {
      step: 5,
      id: 'recovery',
      title: 'Recovery',
      icon: RefreshCcw,
      theme: {
        color: 'bg-rose-500',
        text: 'text-rose-400',
        border: 'border-rose-500',
        bgLight: 'bg-rose-500/10',
        glow: 'hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.4)]',
        activeGlow: 'shadow-[0_0_30px_-5px_rgba(244,63,94,0.5)] border-rose-500',
      },
      dataPoints: [
        { name: 'Accountability Details', desc: 'Manager follow-up tasks, advisor re-engagement logs.' },
      ],
      gap: 'Declined services disappear into the void. Without an automated recovery system, un-sold ASRs represent massive lost future revenue.',
      opportunity:
        'Log exact reasons for decline. Schedule automated reminders (30/60/90 days) based on the severity of the declined ASR Details.',
    },
  ];

  const activeStep = processSteps.find((s) => s.id === activeStepId);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 font-sans selection:bg-slate-700 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center relative pt-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">RO Process Chain Analysis</h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Identify breakdowns and structural gaps from the service drive to the customer delivery.
            Select a stage to view connected data dependencies.
          </p>
        </div>

        <div className="relative pt-8 pb-4">
          <div className="absolute top-1/2 left-[10%] right-[10%] h-1 bg-slate-800 -translate-y-1/2 z-0 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStepId === step.id;

              return (
                <div key={step.id} className="relative flex flex-col items-center">
                  <button
                    onClick={() => setActiveStepId(step.id)}
                    className={`
                      w-full flex lg:flex-col items-center gap-4 lg:gap-3 p-4 lg:p-6 rounded-2xl border transition-all duration-300 bg-slate-900 group
                      ${isActive ? step.theme.activeGlow : `border-slate-800 ${step.theme.glow} hover:border-slate-600`}
                    `}
                  >
                    <div
                      className={`
                      shrink-0 p-3 lg:p-4 rounded-full transition-colors duration-300
                      ${isActive ? `${step.theme.color} text-white shadow-lg` : `bg-slate-800 text-slate-400 group-hover:${step.theme.text}`}
                    `}
                    >
                      <Icon size={28} strokeWidth={isActive ? 2.5 : 2} />
                    </div>

                    <div className="text-left lg:text-center w-full">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Step 0{step.step}</div>
                      <div className={`font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        {step.title}
                      </div>
                    </div>

                    {idx < processSteps.length - 1 && (
                      <div className="lg:hidden ml-auto text-slate-600">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </button>

                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-slate-600 z-20 bg-slate-950 rounded-full p-1">
                      <ChevronRight size={24} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 relative">
          <div
            className={`absolute inset-0 ${activeStep.theme.color} opacity-5 blur-2xl rounded-3xl pointer-events-none transition-colors duration-500`}
          />

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-800">
              <div className={`p-4 rounded-2xl ${activeStep.theme.bgLight} ${activeStep.theme.text}`}>
                <activeStep.icon size={36} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Stage {activeStep.step}: {activeStep.title}
                </h2>
                <p className="text-slate-400 text-lg">Process execution and data dependencies</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-8">
                <div className="bg-slate-950/50 rounded-2xl p-6 border border-rose-500/20 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-rose-500 rounded-l-2xl" />
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldAlert className="text-rose-500" size={24} />
                    <h3 className="text-lg font-bold text-rose-100">The Breakdown (Gap)</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{activeStep.gap}</p>
                </div>

                <div className="bg-slate-950/50 rounded-2xl p-6 border border-emerald-500/20 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 rounded-l-2xl" />
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="text-emerald-500" size={24} />
                    <h3 className="text-lg font-bold text-emerald-100">The Opportunity</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{activeStep.opportunity}</p>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-2xl p-6 lg:p-8 border border-slate-800 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <Database className={activeStep.theme.text} size={24} />
                  <h3 className="text-xl font-bold text-white">Critical Data Dependencies</h3>
                </div>

                <p className="text-slate-400 mb-6">Information required at this stage to prevent process leakage:</p>

                <div className="space-y-4 flex-grow">
                  {activeStep.dataPoints.map((dp, i) => (
                    <div key={i} className="bg-slate-900 rounded-xl p-4 border border-slate-700/50 flex items-start gap-4">
                      <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${activeStep.theme.color} shadow-[0_0_10px_currentColor]`} />
                      <div>
                        <h4 className="font-bold text-white mb-1">{dp.name}</h4>
                        <p className="text-sm text-slate-400">{dp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
