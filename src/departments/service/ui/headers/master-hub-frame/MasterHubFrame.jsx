import React, { useState } from 'react';
import {
  LayoutGrid,
  X,
  Home,
  TrendingUp,
  Search,
  ShieldCheck,
  Zap,
  GraduationCap,
  Map,
  Wrench,
} from 'lucide-react';

export default function MasterHubFrame() {
  const [isHubOpen, setIsHubOpen] = useState(false);

  const toggleHub = () => setIsHubOpen(!isHubOpen);

  return (
    <div className="min-h-screen bg-slate-950 font-sans relative overflow-hidden flex flex-col">
      <style>{`
        #hubDrawer { transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .drawer-closed { transform: translateX(100%); }
        .drawer-open { transform: translateX(0); }

        .custom-scrollbar::-webkit-scrollbar { width: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 999px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      `}</style>

      <header className="p-6 flex items-center z-50">
        <button
          onClick={toggleHub}
          className="flex items-center gap-2 px-3 py-2 bg-slate-900 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider hover:bg-slate-800 transition-all border border-slate-800 shadow-xl"
          title="Open Hub"
        >
          <LayoutGrid className="w-4 h-4 text-blue-400" />
          Hub
        </button>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-6">{/* INJECT YOUR CONTENT HERE */}</main>

      <div
        id="hubOverlay"
        className={`fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[150] transition-opacity duration-300 ${isHubOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleHub}
      />

      <div
        id="hubDrawer"
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[160] shadow-2xl flex flex-col ${isHubOpen ? 'drawer-open' : 'drawer-closed'}`}
      >
        <div className="p-8 border-b flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-xl font-black text-slate-900 leading-none mb-1">Master Index</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cam Clark Sales • Service • Parts</p>
          </div>
          <button onClick={toggleHub} className="p-2 hover:bg-white rounded-xl text-slate-400" aria-label="Close Hub">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          <section>
            <a
              href="https://sales-service-parts-hub.pages.dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 bg-blue-50 rounded-3xl border border-blue-100 hover:bg-blue-100 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                <Home className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left">
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">Central Launchpad</span>
                <span className="text-sm font-bold text-blue-900 group-hover:underline">Main Hub Landing Page</span>
              </div>
            </a>
          </section>

          <section className="space-y-3">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2 text-left">Sales • Inventory • CRM</h4>
            <div className="grid gap-2">
              <HubLink
                icon={<TrendingUp className="text-indigo-500" />}
                label="Core Incentives Matrix"
                href="https://sales-battle-card.pages.dev/region_incentives/"
              />
              <HubLink icon={<Search className="text-blue-500" />} label="Inventory Finder" href="https://clark-inventory-finder.pages.dev" />
              <HubLink icon={<ShieldCheck className="text-emerald-500" />} label="Save-A-Deal Logic" href="https://save-a-deal-logic.pages.dev" />
              <HubLink
                icon={<Zap className="text-orange-500" />}
                label="Activation Framework"
                href="https://sales-battle-card.pages.dev/daily_training/save-a-deal_activation_framework/"
              />
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2 text-left">Training • Coaching</h4>
            <div className="grid gap-2">
              <HubLink icon={<GraduationCap className="text-purple-500" />} label="Sales Journey Training" href="https://signature-sales-journey-app.pages.dev" />
              <HubLink icon={<Map className="text-rose-500" />} label="CRM Notes Coach" href="https://signature-sales-journey-app.pages.dev/data_capture_map/" />
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2 text-left">Service Excellence</h4>
            <div className="grid gap-2">
              <HubLink icon={<Wrench className="text-amber-500" />} label="Service Battle Cards" href="https://service-battle-card.pages.dev/" />
            </div>
          </section>
        </div>

        <div className="p-6 bg-slate-50 border-t mt-auto">
          <div className="p-4 bg-white rounded-2xl border border-slate-200">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-center">App Status</p>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-600 uppercase">Operational</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HubLink({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl border border-transparent hover:border-slate-100 transition-all text-left"
    >
      <div className="w-5 h-5 flex items-center justify-center">{icon}</div>
      <span className="text-sm font-bold text-slate-700">{label}</span>
    </a>
  );
}
