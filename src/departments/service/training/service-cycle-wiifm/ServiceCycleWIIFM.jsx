import React, { useState } from 'react';
import {
  Wrench,
  ArrowRightLeft,
  UserCheck,
  Camera,
  Ruler,
  Activity,
  AlertTriangle,
  Package,
  CircleDot,
  TrendingUp,
  Building,
  Target,
  Trophy,
} from 'lucide-react';

export default function ServiceCycleWIIFM() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Evidence-Based MPI',
      subtitle: 'Beyond simply checking boxes',
      icon: Wrench,
      position: { top: '0%', left: '50%' },
      labelPosition: '-top-12 left-1/2 -translate-x-1/2',
      theme: {
        bg: 'bg-blue-500',
        text: 'text-blue-400',
        border: 'border-blue-500',
        lightBg: 'bg-blue-500/10',
        ring: 'ring-blue-500/50',
      },
      details: [
        {
          label: 'Visual Transparency',
          desc: 'Capture high-definition photos or videos of failed components. Seeing is believing.',
          icon: Camera,
        },
        {
          label: 'Precision Over Puttering',
          desc: "Abandon vague terms like 'brakes are low.' Utilize exact measurements (e.g., '3mm remaining') to establish a factual baseline.",
          icon: Ruler,
        },
        {
          label: 'The 100% Rule',
          desc: 'Every vehicle, every visit. Consistency builds a historical health record for the car.',
          icon: Activity,
        },
      ],
    },
    {
      id: 2,
      title: 'Professional Hand-Off',
      subtitle: 'The Baton Pass (Tech to Advisor)',
      icon: ArrowRightLeft,
      position: { top: '75%', left: '93.3%' },
      labelPosition:
        'top-full mt-4 left-1/2 -translate-x-1/2 md:left-full md:-translate-x-4 md:-top-2 md:mt-0',
      theme: {
        bg: 'bg-purple-500',
        text: 'text-purple-400',
        border: 'border-purple-500',
        lightBg: 'bg-purple-500/10',
        ring: 'ring-purple-500/50',
      },
      details: [
        {
          label: 'Urgency Categorization',
          desc: 'Clearly distinguish between Safety (immediate risk), Reliability (impending failure), and Maintenance (mileage-based longevity).',
          icon: AlertTriangle,
        },
        {
          label: 'Strategic Bundling',
          desc: "Identify 'while-in-there' opportunities, like recommending a water pump during a timing belt service to save the customer future labor costs.",
          icon: Package,
        },
      ],
    },
    {
      id: 3,
      title: 'Advisor as Consultant',
      subtitle: 'From Salesperson to Educator',
      icon: UserCheck,
      position: { top: '75%', left: '6.7%' },
      labelPosition:
        'top-full mt-4 left-1/2 -translate-x-1/2 md:right-full md:left-auto md:-translate-x-[-1rem] md:-top-2 md:mt-0',
      theme: {
        bg: 'bg-emerald-500',
        text: 'text-emerald-400',
        border: 'border-emerald-500',
        lightBg: 'bg-emerald-500/10',
        ring: 'ring-emerald-500/50',
      },
      details: [
        {
          label: 'The Traffic Light Protocol',
          desc: 'Use Green (Pass), Yellow (Monitor), and Red (Immediate Action). This empowers the customer to prioritize their budget.',
          icon: CircleDot,
        },
        {
          label: 'Cost-of-Neglect Counseling',
          desc: "Pivot the conversation to value: 'Investing $180 in a drive belt today prevents a $4,000 engine failure and a tow truck bill next month.'",
          icon: TrendingUp,
        },
      ],
    },
  ];

  const wiifmData = [
    {
      role: 'Technician',
      icon: Wrench,
      theme: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/50' },
      action: 'Performs a 100% accurate, photo-backed MPI.',
      incentive: 'Gets paid for the time and builds their own future high-hour repair orders.',
    },
    {
      role: 'Advisor',
      icon: UserCheck,
      theme: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/50' },
      action: "Presents 'Evidence-Based' needs to the customer.",
      incentive: "Higher closing ratio. Photos make it easier for customers to say 'Yes.'",
    },
    {
      role: 'Dealership',
      icon: Building,
      theme: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/50' },
      action: 'Manages the process and pays the MPI labor.',
      incentive: 'Higher ARO (Average Repair Order) and massive increases in customer retention.',
    },
  ];

  const activeData = steps.find((s) => s.id === activeStep);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 font-sans selection:bg-slate-700">
      <div className="max-w-6xl mx-auto space-y-24">
        <section>
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">The Service Cycle</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A modernized, transparent approach to automotive repair—from the bay to the front desk.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
            <div className="w-full lg:w-1/2 flex justify-center py-8">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 rounded-full border-2 border-slate-700/60 border-dashed animate-[spin_40s_linear_infinite]" />

                <div className="absolute inset-0 m-auto w-32 h-32 md:w-40 md:h-40 bg-slate-900 border border-slate-700 rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.3)] z-10">
                  <div className="text-center p-4">
                    <span className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Core Focus</span>
                    <span className="block font-semibold text-white text-sm md:text-base leading-tight">Trust & Value</span>
                  </div>
                </div>

                {steps.map((step) => {
                  const isActive = activeStep === step.id;
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.id}
                      className="absolute z-20"
                      style={{ top: step.position.top, left: step.position.left, transform: 'translate(-50%, -50%)' }}
                    >
                      <button
                        onClick={() => setActiveStep(step.id)}
                        className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out border-2 shadow-xl group hover:scale-110 ${
                          isActive
                            ? `${step.theme.bg} border-transparent text-white ring-8 ${step.theme.ring}`
                            : 'bg-slate-800 border-slate-600 text-slate-400 hover:border-slate-400'
                        }`}
                        aria-label={step.title}
                      >
                        <Icon
                          size={isActive ? 32 : 28}
                          className={`transition-all duration-300 ${isActive ? 'scale-110 drop-shadow-md' : 'group-hover:text-slate-200'}`}
                        />
                        <div
                          className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            isActive ? 'bg-white text-slate-900' : 'bg-slate-700 text-slate-300'
                          }`}
                        >
                          {step.id}
                        </div>
                      </button>

                      <div
                        className={`absolute w-36 md:w-48 text-center md:text-left transition-opacity duration-300 ${step.labelPosition} ${isActive ? 'opacity-100' : 'opacity-60 pointer-events-none'}`}
                      >
                        <p className={`font-semibold text-sm md:text-base ${isActive ? step.theme.text : 'text-slate-400'}`}>{step.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div
                key={activeData.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-right-8"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 ${activeData.theme.bg} opacity-5 blur-[100px] rounded-full pointer-events-none`} />

                <div className="relative z-10 mb-8 pb-6 border-b border-slate-800">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 ${activeData.theme.lightBg} ${activeData.theme.text}`}
                  >
                    Step 0{activeData.id}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">{activeData.title}</h2>
                  <p className="text-slate-400 text-lg">{activeData.subtitle}</p>
                </div>

                <div className="relative z-10 space-y-6 md:space-y-8">
                  {activeData.details.map((detail, idx) => {
                    const DetailIcon = detail.icon;
                    return (
                      <div key={idx} className="group flex gap-4 md:gap-5 items-start">
                        <div className={`shrink-0 p-3 rounded-2xl ${activeData.theme.lightBg} ${activeData.theme.text} transition-colors`}>
                          <DetailIcon
                            size={24}
                            className="opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform"
                          />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-1 tracking-wide">{detail.label}</h3>
                          <p className="text-slate-400 leading-relaxed text-sm md:text-base">{detail.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-16 border-t border-slate-800/60">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">The "WIIFM" Alignment</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              What's In It For Me? How transparent processes align incentives across the entire dealership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {wiifmData.map((item, idx) => {
              const RoleIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 ${item.theme.bg} border-t-2 ${item.theme.border}`} />

                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-2xl ${item.theme.bg} ${item.theme.text} ring-1 ${item.theme.border}`}>
                      <RoleIcon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Target size={18} className="text-slate-500" />
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">The Action</h4>
                      </div>
                      <p className="text-slate-300 text-lg leading-relaxed">{item.action}</p>
                    </div>

                    <div className="pt-6 border-t border-slate-800/60">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy size={18} className={item.theme.text} />
                        <h4 className={`text-sm font-bold uppercase tracking-wider ${item.theme.text}`}>The Incentive</h4>
                      </div>
                      <p className="text-white font-medium text-lg leading-relaxed">{item.incentive}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
