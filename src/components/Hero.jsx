import React from 'react';
import { Download, ShieldCheck, Smartphone } from 'lucide-react';

export default function Hero() {
  const trustedReporters = [
    { name: "Alice M.", avatar: "https://ui-avatars.com/api/?name=Alice+M&background=0D8ABC&color=fff" },
    { name: "Brian K.", avatar: "https://ui-avatars.com/api/?name=Brian+K&background=F39C12&color=fff" },
    { name: "Catherine L.", avatar: "https://ui-avatars.com/api/?name=Catherine+L&background=27AE60&color=fff" },
    { name: "David S.", avatar: "https://ui-avatars.com/api/?name=David+S&background=8E44AD&color=fff" },
  ];

  return (
    <section className="pt-32 pb-20 px-6 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Live Now in your Area
          </div>
          
          <h1 className="text-5xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            The Pulse of Your <br/>
            <span className="text-blue-500 text-glow">Community.</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Real-time, crowd-sourced notifications for fuel scarcity, atm updates, traffic gridlocks, and local hazards and more... Verify updates, earn reputation, and help your neighbors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 group">
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              <span>Get the App</span>
            </button>
            <button className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all border border-slate-700">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span>Trusted by 10k+</span>
            </button>
          </div>

          <div className="pt-8 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {trustedReporters.map((reporter, i) => (
                <img
                  key={i}
                  src={reporter.avatar}
                  alt={reporter.name}
                  className="w-8 h-8 rounded-full border-2 border-slate-950 object-cover"
                />
              ))}
            </div>
            <p>Join the network of trusted reporters today.</p>
          </div>
        </div>

        {/* Right: Phone Mockup (CSS Only) */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Glowing blob behind phone */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full transform translate-x-10 translate-y-10"></div>

          <div className="relative w-[300px] h-[600px] bg-slate-900 border-[8px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden animate-float">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>

            {/* Simulated App UI */}
            <div className="w-full h-full bg-slate-950 flex flex-col pt-12">
               {/* App Header */}
               <div className="px-6 pb-4 flex justify-between items-center border-b border-slate-800">
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="text-xs font-bold text-slate-400">LIVE FEED</span>
                  </div>
                  <Smartphone className="w-4 h-4 text-slate-600" />
               </div>

               {/* Map Preview Area */}
               <div className="h-48 bg-slate-900 relative overflow-hidden group">
                  {/* Radar Circles */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-blue-500/40 rounded-full"></div>
                  {/* Scanner */}
                  <div className="absolute top-1/2 left-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-500/50 to-transparent origin-left animate-[spin_4s_linear_infinite]"></div>
                  
                  {/* Alert Dot */}
                  <div className="absolute top-10 left-16 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></div>
                  <div className="absolute bottom-12 right-12 w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)] animate-pulse delay-700"></div>
               </div>

               {/* Feed Items */}
               <div className="p-4 space-y-3">
                  {[
                    { title: "Fuel Available • Total Barnawa", time: "2m ago", color: "bg-yellow-500", icon: "F" },
                    { title: "Traffic Gridlock • Junction", time: "12m ago", color: "bg-red-500", icon: "T" },
                    { title: "ATM Cash • GTBank", time: "45m ago", color: "bg-green-500", icon: "$", opacity: "opacity-50" }
                  ].map((item, i) => (
                    <div key={i} className={`p-3 rounded-xl bg-slate-900 border border-slate-800 flex gap-3 items-center ${item.opacity || ''}`}>
                       <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center font-bold text-slate-900 text-xs`}>{item.icon}</div>
                       <div>
                          <div className="text-xs font-bold text-slate-200">{item.title}</div>
                          <div className="text-[10px] text-slate-500">{item.time} • Verified</div>
                       </div>
                    </div>
                  ))}
               </div>
               
               {/* FAB */}
               <div className="absolute bottom-6 right-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/40">
                  <div className="w-6 h-6 border-2 border-white rounded-full"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}