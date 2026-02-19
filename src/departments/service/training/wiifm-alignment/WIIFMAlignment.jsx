import React from 'react';
import {
  Wrench,
  UserCheck,
  Building,
  Target,
  Trophy,
  CheckCircle2,
} from 'lucide-react';

export default function WIIFMAlignment() {
  const wiifmData = [
    {
      role: 'Technician',
      icon: Wrench,
      theme: {
        text: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/50',
        solidBg: 'bg-blue-500',
        shadow: 'hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]',
      },
      action: 'Performs a 100% accurate, photo-backed MPI.',
      incentive: 'Gets paid for the time and builds their own future high-hour repair orders.',
      benefits: ['Guaranteed diagnostic time', 'Pipeline of future work', 'Reduced customer pushback'],
    },
    {
      role: 'Advisor',
      icon: UserCheck,
      theme: {
        text: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/50',
        solidBg: 'bg-emerald-500',
        shadow: 'hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]',
      },
      action: "Presents 'Evidence-Based' needs to the customer.",
      incentive: "Higher closing ratio. Photos make it easier for customers to say 'Yes.'",
      benefits: ['Shift from selling to educating', 'Faster approval times', 'Higher customer trust'],
    },
    {
      role: 'Dealership',
      icon: Building,
      theme: {
        text: 'text-amber-400',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/50',
        solidBg: 'bg-amber-500',
        shadow: 'hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]',
      },
      action: 'Manages the process and pays the MPI labor.',
      incentive: 'Higher ARO (Average Repair Order) and massive increases in customer retention.',
      benefits: ['Increased parts & labor sales', 'Loyal customer base', 'Stronger brand reputation'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 font-sans selection:bg-slate-700 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 md:mb-24 relative">
          <div className="absolute inset-x-0 -top-24 -z-10 flex justify-center opacity-20 blur-3xl pointer-events-none">
            <div className="w-96 h-64 bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-600 rounded-full" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">"WIIFM"</span> Alignment
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl">
            What's In It For Me? Discover how transparent, evidence-based processes perfectly align incentives across every level of the dealership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          <div className="hidden lg:block absolute top-[4.5rem] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/30 via-emerald-500/30 to-amber-500/30 z-0" />

          {wiifmData.map((item, idx) => {
            const RoleIcon = item.icon;

            return (
              <div
                key={idx}
                className={`group relative z-10 bg-slate-900 border border-slate-800 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-slate-600 ${item.theme.shadow} flex flex-col h-full`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${item.theme.solidBg} opacity-5 blur-[50px] rounded-full pointer-events-none transition-opacity group-hover:opacity-20`} />

                <div className="flex flex-col items-center text-center mb-10">
                  <div className={`p-5 rounded-2xl ${item.theme.bg} ${item.theme.text} ring-1 ${item.theme.border} mb-6 relative bg-slate-950`}>
                    <RoleIcon size={40} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl font-bold text-white tracking-wide">{item.role}</h2>
                </div>

                <div className="flex-grow space-y-8">
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-1.5 rounded-md bg-slate-800 text-slate-400">
                        <Target size={16} />
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">The Action</h3>
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed pl-2 border-l-2 border-slate-800">{item.action}</p>
                  </div>

                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`p-1.5 rounded-md ${item.theme.bg} ${item.theme.text}`}>
                        <Trophy size={16} />
                      </div>
                      <h3 className={`text-sm font-bold uppercase tracking-widest ${item.theme.text}`}>The Incentive</h3>
                    </div>
                    <p className="text-white font-medium text-xl leading-relaxed pl-2 border-l-2 border-slate-800 group-hover:border-current transition-colors duration-300">
                      {item.incentive}
                    </p>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-800/60">
                  <ul className="space-y-3">
                    {item.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-slate-400">
                        <CheckCircle2 size={18} className={`${item.theme.text} shrink-0 mt-0.5`} />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
